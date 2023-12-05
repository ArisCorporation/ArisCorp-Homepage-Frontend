import Layout from 'pages/layout'
import { useRouter } from 'next/router'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { useQuery } from '@apollo/client'
import { GET_MEMBER } from 'graphql/queries'
import Head from 'next/head'
import client from 'apollo/clients'
import { BasicPanel, BasicPanelButton } from 'components/panels'
import Link from 'next/link'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ShareSquare } from 'components/icons'
import ShipCard from 'components/ShipExkurs/ShipCard'
import WeaponCard from 'components/WeaponCard'
import { Disclosure, Transition } from '@headlessui/react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import HangarShipDetailCard from 'components/internal/HangarShipCard'
import moment from 'moment'
import 'moment/locale/de'

export async function getServerSideProps(context) {
  const { name: slug } = context.query

  let { data } = await client.query({
    query: GET_MEMBER,
    variables: { slug },
  })

  if (!data.member[0]) {
    return {
      notFound: true,
    }
  }

  const weapons = []
  data.member_technologien
    .sort((a, b) =>
      a.technologien_id.waffen_name.localeCompare(b.technologien_id.waffen_name)
    )
    .forEach((obj) => {
      weapons.push(obj.technologien_id)
    })

  const ships = []
  data.member_ships
    .sort((a, b) => a.ships_id.name.localeCompare(b.ships_id.name))
    .forEach((obj) => {
      const item = {
        id: obj.id,
        ship: obj.ships_id,
        member: obj.member_id,
        custom_data: {
          name: obj.name,
          serial: obj.serial,
          group: obj.group,
          visibility: obj.visibility,
          department: obj.department,
        },
      }
      ships.push(item)
    })

  data = data.member[0]
  const name = `${data.firstname ? data.firstname : ''} ${
    data.lastname ? data.lastname : ''
  }`
  const fullName = `${data.title ? data.title + ' ' : ''} ${
    data.firstname ? data.firstname : ''
  } ${data.lastname ? data.lastname : ''}`
  const siteTitle =
    fullName + ' - Astro Research and Industrial Service Corporation'

  return {
    props: {
      data,
      name,
      fullName,
      weapons,
      ships,
      siteTitle,
    },
  }
}

export default function Biografie({
  data,
  name,
  fullName,
  weapons,
  ships,
  siteTitle,
}) {
  const shareUrl = 'https://ariscorp.de/biografie/' + data.slug
  const handleShare = () => {
    navigator.clipboard?.writeText(shareUrl)
    toast.info('URL in Zwischenablage kopiert!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })
  }

  const roles = []
  data.roles.forEach((obj) => {
    if (obj == 'recruitment') {
      roles.push('Rekrutierung')
    } else if (obj == 'marketing') {
      roles.push('Marketing & Presse')
    } else if (obj == 'content_writer') {
      roles.push('Inhaltsersteller')
    }
  })
  if (data.head_of_department) {
    roles.push('Abteilungsleiter')
  }

  return (
    <div className="items-center pt-32 mx-auto print:pt-5">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Head>
        <title>{siteTitle}</title>

        <meta property="twitter:title" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
        <meta name="title" content={siteTitle} />
      </Head>
      <div className="relative flex items-center align-center">
        <div className="absolute bottom-0">
          <h1 className="text-2xl italic xs:text-3xl sm:text-4xl lg:text-5xl 1.5xl:text-6xl">
            {fullName}
          </h1>
          {roles[0] && (
            <h3 className="mb-0 uppercase">
              <span className="text-white/25">Rollen: </span>
              <span>{roles[0] ? roles.sort().join(', ') : 'N/A'}</span>
            </h3>
          )}
        </div>
        <Link legacyBehavior href={'/VerseExkurs/firmen/ariscorp'}>
          <a
            style={{
              backgroundImage: `url(https://cms.ariscorp.de/assets/0cb3baf2-94a6-4557-895a-0ae5fe027a88)`,
            }}
            className="relative mt-0 ml-auto xs:h-32 h-28 hover:cursor-pointer xxs:h-24 sm:h-40 1.5xl:h-48 aspect-square bg-center bg-no-repeat bg-cover"
          />
        </Link>
      </div>
      <hr className="mt-2" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <div className="col-span-3 gap-8 1.5xl:col-span-1">
          <div className="overflow-hidden shadow-md shadow-black rounded-3xl">
            <BasicPanel>
              <div className="h-[300px] lg:h-[600px] 1.5xl:h-[700px] w-full relative flex">
                <div
                  style={{
                    backgroundImage: `url(https://cms.ariscorp.de/assets/${data.member_potrait?.id})`,
                  }}
                  className="w-full h-auto max-h-full overflow-hidden 1.5xl:transition-all duration-500 bg-black bg-[center_top_-6rem] 1.5xl:bg-center bg-no-repeat bg-cover rounded-2xl ease"
                />
              </div>
            </BasicPanel>
          </div>
          <div className="my-4 1.5xl:mb-4">
            <div className="flex space-x-4">
              <div onClick={() => handleShare()} className="flex-grow">
                <div
                  className={
                    'relative w-full h-[44px] text-inherit decoration-transparent aspect-square inline-block p-[2px] bg-transparent group border-2 border-primary rounded-[10px] cursor-pointer transition-all hover:duration-200 duration-500 ease-out box-border before:absolute before:-top-[2px] before:right-[14px] before:left-[14px] before:h-[2px] before:bg-[#444] before:box-border after:absolute after:-bottom-[2px] after:right-[14px] after:left-[14px] after:h-[2px] after:bg-[#444] after:box-border '
                  }
                >
                  <div className="group-hover:bg-white/5 group-hover:text-primary p-[10px] box-border overflow-hidden whitespace-nowrap text-center text-ellipsis rounded-[6px] transition-all hover:duration-200 duration-500 ease-out">
                    <ShareSquare className="w-4 h-4 mx-auto fill-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <BasicPanel>
            <div className="grid grid-cols-1 px-4 py-3 uppercase 1.5xl:grid-cols-4">
              <div className="col-span-1">
                <div className="text-lg text-secondary">ArisCorp</div>
              </div>
              <div className="col-span-1 1.5xl:col-span-3">
                {data.head_of_department ? (
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">
                      Abteilungsleiter in folgender Abteilung:
                    </p>
                    <p className="p-0 text-primary">
                      {data.head_department[0].gameplay_name
                        ? data.head_department[0].gameplay_name
                        : 'N/A'}
                    </p>
                  </div>
                ) : (
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">
                      Abteilungen innerhalb der ArisCorp:
                    </p>
                    <p className="p-0 text-primary">
                      {data.department?.gameplay_name
                        ? data.department?.gameplay_name
                        : 'N/A'}
                    </p>
                  </div>
                )}
                <div className="grid grid-cols-2 uppercase">
                  <div className="col-span-2">
                    <p className="pb-0 text-sm">Position:</p>
                    <p className="p-0 text-primary">
                      {data.position_level == 'candidate'
                        ? 'Anwärter'
                        : data.position_level == 'freelancer'
                        ? 'Freier Mitarbeiter'
                        : data.position_level == 'employee'
                        ? 'Mitarbeiter'
                        : data.position_level == 'administration'
                        ? 'Verwaltung'
                        : 'N/A'}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 uppercase">
                  <div className="col-span-2">
                    <p className="pb-0 text-sm">
                      Rollen innerhalb der ArisCorp:
                    </p>
                    <p className="p-0 text-primary">
                      {roles[0] ? roles.sort().join(', ') : 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </BasicPanel>
        </div>
        <div className="col-span-3 space-y-4 1.5xl:col-span-2">
          <BasicPanel>
            <div className="grid grid-cols-1 px-4 py-3 uppercase 1.5xl:grid-cols-4">
              <div className="col-span-1">
                <div className="text-lg text-secondary">Basis</div>
              </div>
              <div className="col-span-1 1.5xl:col-span-3">
                <div className="grid grid-cols-2 uppercase">
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Bürgerlicher Name:</p>
                    <p className="p-0 text-primary">
                      {data.title ? data.title + ' ' : ''}
                      {name}
                    </p>
                  </div>
                </div>
                <hr className="relative mt-3 mb-2 -ml-1 col-span-full sm:mt-3 sm:mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                <div className="grid grid-cols-2 uppercase">
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Geburtsdatum:</p>
                    <p className="p-0 text-primary">
                      {data.birthdate ? data.birthdate : 'N/A'}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Alter:</p>
                    <p className="p-0 text-primary">
                      {moment(data.birthdate).from(
                        moment().add(930, 'years'),
                        true
                      )}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Geburtsort:</p>
                    <p className="p-0 text-primary">
                      {data.birthPlace ? data.birthPlace : 'N/A'}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Geburtssystem:</p>
                    <p className="p-0 text-primary">
                      {data.birthSystem ? (
                        <Link
                          legacyBehavior
                          href={'/VerseExkurs/starmap/' + data.birthSystem.name}
                        >
                          <a>{data.birthSystem.name}</a>
                        </Link>
                      ) : (
                        'N/A'
                      )}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Aktueller Wohnort:</p>
                    <p className="p-0 text-primary">
                      {data.currentResidence ? data.currentResidence : 'N/A'}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Aktueller Wohnort - System:</p>
                    <p className="p-0 text-primary">
                      {data.currentResidenceSystem ? (
                        <Link
                          legacyBehavior
                          href={
                            '/VerseExkurs/starmap/' +
                            data.currentResidenceSystem.name
                          }
                        >
                          <a>{data.currentResidenceSystem.name}</a>
                        </Link>
                      ) : (
                        'N/A'
                      )}
                    </p>
                  </div>
                </div>
                <hr className="relative mt-3 mb-2 -ml-1 col-span-full sm:mt-3 sm:mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                <div className="grid grid-cols-2 uppercase">
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Körpergröße:</p>
                    <p className="p-0 text-primary">
                      {data.height ? data.height + ' cm' : 'N/A'}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Körpergewicht:</p>
                    <p className="p-0 text-primary">
                      {data.weight ? data.weight + ' kg' : 'N/A'}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Haarfarbe:</p>
                    <p className="p-0 text-primary">
                      {data.hairColor ? data.hairColor : 'N/A'}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Augenfarbe:</p>
                    <p className="p-0 text-primary">
                      {data.eyeColor ? data.eyeColor : 'N/A'}
                    </p>
                  </div>
                </div>
                <hr className="relative mt-3 mb-2 -ml-1 col-span-full sm:mt-3 sm:mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                <div className="grid grid-cols-2 uppercase">
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Bürgerstatus:</p>
                    <p className="p-0 text-primary">
                      {data.ueeState ? data.ueeState : 'N/A'}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Bürgerschaftsverdienst:</p>
                    <p className="p-0 text-primary">
                      {data.ueeState === 'citizen'
                        ? data.citizenReason == 'military'
                          ? 'Militärdienst'
                          : data.citizenReason == 'education'
                          ? 'Studium'
                          : data.citizenReason == 'social'
                          ? 'Soziales Angagemon'
                          : null
                        : 'N/A'}
                    </p>
                  </div>
                  {data.citizenReason === 'military' ? (
                    <>
                      <div className="col-span-1">
                        <p className="pb-0 text-sm">Dienstzeit:</p>
                        <p className="p-0 text-primary">
                          {data.dutyPeriod ? data.dutyPeriod : 'N/A'}
                        </p>
                      </div>
                      <div className="col-span-1">
                        <p className="pb-0 text-sm">Dienstzeit - Ende:</p>
                        <p className="p-0 text-primary">
                          {data.dutyReason && data.dutyReason
                            ? data.dutyReason
                            : 'N/A'}
                        </p>
                      </div>
                    </>
                  ) : null}
                </div>
                {data.educations ? (
                  <>
                    <hr className="relative mt-3 mb-2 -ml-1 col-span-full sm:mt-3 sm:mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                    {data.educations.map((i) => (
                      <div
                        key={i.name}
                        className="grid grid-cols-2 uppercase sm:grid-cols-3"
                      >
                        <div className="col-span-1">
                          <p className="pb-0 text-sm">Studiengang:</p>
                          <p className="p-0 text-primary">
                            {i.Name ? i.Name : 'N/A'}
                          </p>
                        </div>
                        <div className="col-span-1">
                          <p className="pb-0 text-sm">Studiendauer:</p>
                          <p className="p-0 text-primary">
                            {i.Dauer ? i.Dauer : 'N/A'}
                          </p>
                        </div>
                        <div className="col-span-1">
                          <p className="pb-0 text-sm">Fakultät:</p>
                          <p className="p-0 text-primary">
                            {i.Wo ? i.Wo : 'N/A'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </>
                ) : null}
              </div>
            </div>
          </BasicPanel>
          <BasicPanel>
            <div className="grid grid-cols-1 px-4 py-3 uppercase 1.5xl:grid-cols-4">
              <div className="col-span-1">
                <div className="text-lg text-secondary">Spezifisch</div>
              </div>
              <div className="col-span-1 1.5xl:col-span-3">
                <div className="grid grid-cols-2 uppercase">
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Hobbys:</p>
                    <div className="p-0 text-primary marker:text-secondary">
                      {data.hobbys ? (
                        <ul>
                          {data.hobbys.split(', ').map((i) => (
                            <li key={i}>{i}</li>
                          ))}
                        </ul>
                      ) : (
                        'N/A'
                      )}
                    </div>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Angewohnheiten:</p>
                    <div className="p-0 text-primary marker:text-secondary">
                      {data.habits ? (
                        <ul>
                          {data.habits.split(', ').map((i) => (
                            <li key={i}>{i}</li>
                          ))}
                        </ul>
                      ) : (
                        'N/A'
                      )}
                    </div>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Talente:</p>
                    <div className="p-0 text-primary marker:text-secondary">
                      {data.talents ? (
                        <ul>
                          {data.talents.split(', ').map((i) => (
                            <li key={i}>{i}</li>
                          ))}
                        </ul>
                      ) : (
                        'N/A'
                      )}
                    </div>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Tics & Marotten:</p>
                    <div className="p-0 text-primary marker:text-secondary">
                      {data.tics ? (
                        <ul>
                          {data.tics.split(', ').map((i) => (
                            <li key={i}>{i}</li>
                          ))}
                        </ul>
                      ) : (
                        'N/A'
                      )}
                    </div>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Freizeitgestaltung:</p>
                    <div className="p-0 text-primary marker:text-secondary">
                      {data.activities ? (
                        <ul>
                          {data.activities.split(', ').map((i) => (
                            <li key={i}>{i}</li>
                          ))}
                        </ul>
                      ) : (
                        'N/A'
                      )}
                    </div>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Rätselhafte Züge:</p>
                    <div className="p-0 text-primary marker:text-secondary">
                      {data.mysteriousThings ? (
                        <ul>
                          {data.mysteriousThings.split(', ').map((i) => (
                            <li key={i}>{i}</li>
                          ))}
                        </ul>
                      ) : (
                        'N/A'
                      )}
                    </div>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">
                      Hervorstechender Charakterzug:
                    </p>
                    <div className="p-0 text-primary marker:text-secondary">
                      {data.characterTrait ? (
                        <ul>
                          {data.characterTrait.split(', ').map((i) => (
                            <li key={i}>{i}</li>
                          ))}
                        </ul>
                      ) : (
                        'N/A'
                      )}
                    </div>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Ängste:</p>
                    <div className="p-0 text-primary marker:text-secondary">
                      {data.fears ? (
                        <ul>
                          {data.fears.split(', ').map((i) => (
                            <li key={i}>{i}</li>
                          ))}
                        </ul>
                      ) : (
                        'N/A'
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BasicPanel>
          <BasicPanel>
            <div className="grid grid-cols-1 px-4 py-3 uppercase 1.5xl:grid-cols-4">
              <div className="col-span-1">
                <div className="text-lg text-secondary">Geschmäcker</div>
              </div>
              <div className="col-span-1 1.5xl:col-span-3">
                <div className="grid grid-cols-2 uppercase sm:grid-cols-3">
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Bücher:</p>
                    <div className="p-0 text-primary marker:text-secondary">
                      {data.books ? (
                        <ul>
                          {data.books.split(', ').map((i) => (
                            <li key={i}>{i}</li>
                          ))}
                        </ul>
                      ) : (
                        'N/A'
                      )}
                    </div>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Musik:</p>
                    <div className="p-0 text-primary marker:text-secondary">
                      {data.music ? (
                        <ul>
                          {data.music.split(', ').map((i) => (
                            <li key={i}>{i}</li>
                          ))}
                        </ul>
                      ) : (
                        'N/A'
                      )}
                    </div>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Filme:</p>
                    <div className="p-0 text-primary marker:text-secondary">
                      {data.movies ? (
                        <ul>
                          {data.movies.split(', ').map((i) => (
                            <li key={i}>{i}</li>
                          ))}
                        </ul>
                      ) : (
                        'N/A'
                      )}
                    </div>
                  </div>
                </div>
                <hr className="relative mt-3 mb-2 -ml-1 col-span-full sm:mt-3 sm:mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                <div className="grid grid-cols-2 uppercase">
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Typische Kleidung:</p>
                    <div className="p-0 text-primary marker:text-secondary">
                      {data.clothing ? (
                        <ul>
                          {data.clothing.split(', ').map((i) => (
                            <li key={i}>{i}</li>
                          ))}
                        </ul>
                      ) : (
                        'N/A'
                      )}
                    </div>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Lieblingsfarben:</p>
                    <div className="p-0 text-primary marker:text-secondary">
                      {data.colors ? (
                        <ul>
                          {data.colors.split(', ').map((i) => (
                            <li key={i}>{i}</li>
                          ))}
                        </ul>
                      ) : (
                        'N/A'
                      )}
                    </div>
                  </div>
                </div>
                <hr className="relative mt-3 mb-2 -ml-1 col-span-full sm:mt-3 sm:mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                <div className="grid grid-cols-2 uppercase sm:grid-cols-3">
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Lieblings Gericht:</p>
                    <div className="p-0 text-primary marker:text-secondary">
                      {data.food ? (
                        <ul>
                          {data.food.split(', ').map((i) => (
                            <li key={i}>{i}</li>
                          ))}
                        </ul>
                      ) : (
                        'N/A'
                      )}
                    </div>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Lieblings Getränk:</p>
                    <div className="p-0 text-primary marker:text-secondary">
                      {data.drink ? (
                        <ul>
                          {data.drink.split(', ').map((i) => (
                            <li key={i}>{i}</li>
                          ))}
                        </ul>
                      ) : (
                        'N/A'
                      )}
                    </div>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Lieblings Alkohol:</p>
                    <div className="p-0 text-primary marker:text-secondary">
                      {data.alcohol ? (
                        <ul>
                          {data.alcohol.split(', ').map((i) => (
                            <li key={i}>{i}</li>
                          ))}
                        </ul>
                      ) : (
                        'N/A'
                      )}
                    </div>
                  </div>
                </div>
                <hr className="relative mt-3 mb-2 -ml-1 col-span-full sm:mt-3 sm:mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                <div className="grid grid-cols-2 uppercase">
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">
                      {data.sex === 'male' ? 'Er' : 'Sie'} liebt...:
                    </p>
                    <div className="p-0 text-primary marker:text-secondary">
                      {data.loves ? (
                        <ul>
                          {data.loves.split(', ').map((i) => (
                            <li key={i}>{i}</li>
                          ))}
                        </ul>
                      ) : (
                        'N/A'
                      )}
                    </div>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">
                      {data.sex === 'male' ? 'Er' : 'Sie'} hasst...:
                    </p>
                    <div className="p-0 text-primary marker:text-secondary">
                      {data.hates ? (
                        <ul>
                          {data.hates.split(', ').map((i) => (
                            <li key={i}>{i}</li>
                          ))}
                        </ul>
                      ) : (
                        'N/A'
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BasicPanel>
        </div>
      </div>
      <hr />
      <div>
        <BasicPanel>
          <div>
            <h1 className="pt-2 pb-4 pl-4 text-primary">Biografie:</h1>
            {data.biography ? (
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                className="mx-auto py-2 prose prose-td:align-middle xl:text-base text-xs prose-invert max-w-[95%]"
              >
                {data.biography}
              </ReactMarkdown>
            ) : (
              <div className="flex justify-center mb-6">
                <h1
                  className="text-base xxs:text-xl xs:text-4xl redacted"
                  data-text="[ REDACTED ]"
                >
                  [ REDACTED ]
                </h1>
              </div>
            )}
          </div>
        </BasicPanel>
      </div>
      <hr />
      <div>
        <div>
          {ships[0] ? (
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="block py-2">
                    <h1>
                      Schiffe von{' '}
                      <span className="text-primary">{fullName}</span>{' '}
                      <MdKeyboardArrowRight
                        className={
                          'inline-block ease transition-all duration-300' +
                          (open ? ' rotate-90' : '')
                        }
                      />
                    </h1>
                  </Disclosure.Button>
                  <Transition
                    enter="transition ease duration-500 transform"
                    enterFrom="opacity-0 -translate-y-2"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease duration-300 transform"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-2"
                  >
                    <Disclosure.Panel>
                      <div className="grid grid-cols-1 px-2 lg:grid-cols-2 2xl:grid-cols-3 gap-x-6 gap-y-4">
                        {ships.map((object, index) => (
                          <HangarShipDetailCard key={object.id} data={object} />
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ) : null}
          {weapons[0] ? (
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="block py-2">
                    <h1 className="">
                      Lieblingswaffen von{' '}
                      <span className="text-primary">{fullName}</span>{' '}
                      <MdKeyboardArrowRight
                        className={
                          'inline-block ease transition-all duration-300' +
                          (open ? ' rotate-90' : '')
                        }
                      />
                    </h1>
                  </Disclosure.Button>
                  <Transition
                    enter="transition ease duration-500 transform"
                    enterFrom="opacity-0 -translate-y-2"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease duration-300 transform"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-2"
                  >
                    <Disclosure.Panel>
                      <div className="grid grid-cols-1 px-2 lg:grid-cols-2 2xl:grid-cols-3 gap-x-6 gap-y-4">
                        {weapons.map((obj) => (
                          <WeaponCard key={obj.id} data={obj} />
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ) : null}
        </div>
      </div>
    </div>
  )
}

Biografie.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
