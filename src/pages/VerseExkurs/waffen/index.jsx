import Layout from 'pages/VerseExkurs/layout'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import client from 'apollo/clients'
import { GET_VERSEEXKURS_WEAPONS } from 'graphql/queries'
import { Tab } from '@headlessui/react'
import CardDisplay from 'components/VerseExkursCardDisplay'
import { SquareLoader } from 'react-spinners'
import { useQuery } from '@apollo/client'
import Image from 'next/image'

export default function Weapons() {
  const { replace, query, isReady } = useRouter()
  const isMounted = useRef(false)
  const [search, setSearch] = useState()
  const [weaponClass, setWeaponClass] = useState(' ')
  const squery = query.q
  const { loading, error, data } = useQuery(GET_VERSEEXKURS_WEAPONS, {
    variables: { squery, weaponClass },
  })

  useEffect(() => {
    if (isMounted.current) {
      let timer = setTimeout(() => {
        if (weaponClass == null || weaponClass == '') {
          replace({ query: { q: search, class: ' ' } }, undefined, {
            scroll: false,
          })
        } else {
          replace({ query: { q: search, class: weaponClass } }, undefined, {
            scroll: false,
          })
        }
      }, 500)

      return () => clearTimeout(timer)
    } else {
      isMounted.current = true
      setSearch(squery)
    }
  }, [search])

  useEffect(() => {
    if (isReady) setSearch(squery)
  }, [isReady])

  if (loading)
    return (
      <div className="flex justify-center pt-32">
        <SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} />
      </div>
    )

  if (error) return <p>Error :(</p>

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto">
      <div className="w-full">
        <Image
          src={
            'https://cms.ariscorp.de/assets/' +
            'fbd2c23c-74bc-4142-a145-f2f43dbfdc77'
          }
          alt="WeaponExkurs Banner"
          width={1118}
          height={351}
          placeholder="blur"
          blurDataURL={
            'https://cms.ariscorp.de/assets/fbd2c23c-74bc-4142-a145-f2f43dbfdc77?width=16&quality=1'
          }
        />
      </div>
      <h1 className='text-center uppercase text-primary'>VerseExkurs - Waffen Index</h1>
      <hr />
      <div>
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Suche..."
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-bg-secondary/30 bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none "
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="flex flex-wrap w-28">
              <div className="relative w-24 mx-auto aspect-square">
                <Image
                  src={
                    'https://cms.ariscorp.de/assets/' +
                    '1638095c-c0f3-49bf-b8c9-6e1a52a44333'
                  }
                  alt="Alle-Icon"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={
                    'https://cms.ariscorp.de/assets/1638095c-c0f3-49bf-b8c9-6e1a52a44333?width=16&quality=1'
                  }
                />
              </div>
              <p className="p-0 mx-auto -m-6 text-xs text-center">Alle Anzeigen</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-wrap w-24">
              <div className="relative w-24 mx-auto aspect-square">
                <Image
                  src={
                    'https://cms.ariscorp.de/assets/' +
                    '47d884d9-e7ce-4a2e-ab52-9670668a0349'
                  }
                  alt="Alle-Icon"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={
                    'https://cms.ariscorp.de/assets/47d884d9-e7ce-4a2e-ab52-9670668a0349?width=16&quality=1'
                  }
                />
              </div>
              <p className="p-0 mx-auto -m-6 text-xs text-center">Energie</p>
            </div>
            <div className="flex flex-wrap w-24">
              <div className="relative w-24 mx-auto aspect-square">
                <Image
                  src={
                    'https://cms.ariscorp.de/assets/' +
                    '7cc59886-ff69-412a-8e72-e5e73a6511f6'
                  }
                  alt="Alle-Icon"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={
                    'https://cms.ariscorp.de/assets/7cc59886-ff69-412a-8e72-e5e73a6511f6?width=16&quality=1'
                  }
                />
              </div>
              <p className="p-0 mx-auto -m-6 text-xs text-center">Ballistisch</p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-wrap w-24">
              <div className="relative w-24 mx-auto aspect-square">
                <Image
                  src={
                    'https://cms.ariscorp.de/assets/' +
                    'dece2f20-e9c5-4932-89ca-664d3c5487e1'
                  }
                  alt="Alle-Icon"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={
                    'https://cms.ariscorp.de/assets/dece2f20-e9c5-4932-89ca-664d3c5487e1?width=16&quality=1'
                  }
                />
              </div>
              <p className="p-0 mx-auto -m-6 text-xs text-center">Pistolen</p>
            </div>
            <div className="flex flex-wrap w-28">
              <div className="relative w-24 mx-auto aspect-square">
                <Image
                  src={
                    'https://cms.ariscorp.de/assets/' +
                    '7dd32e63-2919-45ec-bc22-d54fdaba861a'
                  }
                  alt="Alle-Icon"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={
                    'https://cms.ariscorp.de/assets/7dd32e63-2919-45ec-bc22-d54fdaba861a?width=16&quality=1'
                  }
                />
              </div>
              <p className="p-0 mx-auto -m-6 text-xs text-center">Maschinen Pistolen</p>
            </div>
            <div className="flex flex-wrap w-28">
              <div className="relative w-24 mx-auto aspect-square">
                <Image
                  src={
                    'https://cms.ariscorp.de/assets/' +
                    '22a23dba-8eea-42c4-9a29-fccb6c035b26'
                  }
                  alt="Alle-Icon"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={
                    'https://cms.ariscorp.de/assets/22a23dba-8eea-42c4-9a29-fccb6c035b26?width=16&quality=1'
                  }
                />
              </div>
              <p className="p-0 mx-auto -m-6 text-xs text-center">Sturmgewehre</p>
            </div>
            <div className="flex flex-wrap w-28">
              {' '}
              <div className="relative w-24 mx-auto aspect-square">
                <Image
                  src={
                    'https://cms.ariscorp.de/assets/' +
                    'c8e91660-072a-446c-9832-a35c0d107287'
                  }
                  alt="Alle-Icon"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={
                    'https://cms.ariscorp.de/assets/c8e91660-072a-446c-9832-a35c0d107287?width=16&quality=1'
                  }
                />
              </div>
              <p className="p-0 mx-auto -m-6 text-xs text-center">Schrotgewehre</p>
            </div>
            <div className="flex flex-wrap w-28">
              <div className="relative w-24 mx-auto aspect-square">
                <Image
                  src={
                    'https://cms.ariscorp.de/assets/' +
                    'b78454ac-fbfe-4b4b-bf91-cab69f1f2a6a'
                  }
                  alt="Alle-Icon"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={
                    'https://cms.ariscorp.de/assets/b78454ac-fbfe-4b4b-bf91-cab69f1f2a6a?width=16&quality=1'
                  }
                />
              </div>
              <p className="p-0 mx-auto -m-6 text-xs text-center">Leichtmaschinen Gewehre</p>
            </div>
            <div className="flex flex-wrap w-28">
              <div className="relative w-24 mx-auto aspect-square">
                <Image
                  src={
                    'https://cms.ariscorp.de/assets/' +
                    '56c1a446-85c7-4400-84b4-9a02a54d395a'
                  }
                  alt="Alle-Icon"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={
                    'https://cms.ariscorp.de/assets/56c1a446-85c7-4400-84b4-9a02a54d395a?width=16&quality=1'
                  }
                />
              </div>
              <p className="p-0 mx-auto -m-6 text-xs text-center">Scharfschützen Gewehre</p>
            </div>
            <div className="flex flex-wrap w-28">
              <div className="relative w-24 mx-auto aspect-square">
                <Image
                  src={
                    'https://cms.ariscorp.de/assets/' +
                    'f32ea524-6423-4a0b-a3d0-92e78acfd516'
                  }
                  alt="Alle-Icon"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={
                    'https://cms.ariscorp.de/assets/f32ea524-6423-4a0b-a3d0-92e78acfd516?width=16&quality=1'
                  }
                />
              </div>
              <p className="p-0 mx-auto -m-6 text-xs text-center">Schwere Waffen</p>
            </div>
          </div>

          <div className="flex flex-wrap w-28">
            <div className="relative w-24 mx-auto aspect-square">
              <Image
                src={
                  'https://cms.ariscorp.de/assets/' +
                  '314cc998-245d-4487-97cd-fb86342eaf8d'
                }
                alt="Alle-Icon"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={
                  'https://cms.ariscorp.de/assets/314cc998-245d-4487-97cd-fb86342eaf8d?width=16&quality=1'
                }
              />
            </div>
            <p className="p-0 mx-auto -m-6 text-xs text-center"></p>
          </div>
        </div>
      </div>

      {/* <Tab.Group
        selectedIndex={activeTab}
        onChange={(event) =>
          replace({ query: { tab: event } }, undefined, { shallow: true }) +
          setActiveTab(event)
        }
      >
        <Tab.List className="flex flex-wrap justify-between">
          <h1>FRAKTIONEN</h1>
          <hr />
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' p-3 m-1 transition-all duration-300 ease-in-out'
            }
          >
            <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl text-inherit">
              FREUNDLICH
            </h1>
          </Tab>
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' p-3 m-1 transition-all duration-300 ease-in-out'
            }
          >
            <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl text-inherit">
              NEUTRAL
            </h1>
          </Tab>
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' p-3 m-1 transition-all duration-300 ease-in-out'
            }
          >
            <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl text-inherit">
              FEINDLICH
            </h1>
          </Tab>
          <hr />
        </Tab.List>
        <Tab.Panels className={'px-4'}>
          <Tab.Panel>
            <div>
              <div className="grid justify-between grid-cols-4 gap-x-10 gap-y-8">
                {data
                  .filter((data) => data.category === 'friendly')
                  .map((data) => (
                    <>
                      <CardDisplay
                        image={data.trans_logo.id}
                        alt={data.name}
                        link={'/VerseExkurs/fraktionen/' + data.name}
                      />
                    </>
                  ))}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <div className="grid justify-between grid-cols-4 gap-x-10 gap-y-8">
                {data
                  .filter((data) => data.category === 'neutral')
                  .map((data) => (
                    <>
                      <CardDisplay
                        image={data.trans_logo.id}
                        alt={data.name}
                        link={'/VerseExkurs/fraktionen/' + data.name}
                      />
                    </>
                  ))}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <div className="grid justify-between grid-cols-4 gap-x-10 gap-y-8">
                {data
                  .filter((data) => data.category == 'hostile')
                  .map((data) => (
                    <>
                      <CardDisplay
                        image={data.trans_logo.id}
                        alt={data.name}
                        link={'/VerseExkurs/fraktionen/' + data.name}
                      />
                    </>
                  ))}
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group> */}
    </div>
  )
}

Weapons.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
