import Layout from 'pages/VerseExkurs/layout'
import { useEffect, useState } from 'react'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_VERSEEXKURS_WEAPON } from 'graphql/queries'
import { BasicPanel } from 'components/panels'
import { Tab } from '@headlessui/react'

export default function SpectrumArticlePage() {
  const router = useRouter()
  const { weapon: Weapon } = router.query
  const [activeTab, setActiveTab] = useState()
  const { replace, query } = useRouter()
  const urlquery = query.tab

  useEffect(() => {
    if (urlquery != null && urlquery != '') {
      setActiveTab(urlquery)
    } else {
      setActiveTab(0)
    }
  }, [urlquery])

  console.log(Weapon)

  const { loading, error, data } = useQuery(GET_VERSEEXKURS_WEAPON, {
    variables: { Weapon: Weapon },
  })

  if (loading)
    return (
      <div className="flex justify-center pt-32">
        <SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} />
      </div>
    )

  if (error) return <p>Error :(</p>

  const data1 = Object.assign({}, data.technologien[0])
  const data2 = JSON.parse(
    JSON.stringify(
      data.technologien_waffen_feuermodi_1.filter(
        (data) => data.technologien_id != null
      )
    )
  )
  const data2arr = []
  data2.map((data) => data2arr.push(data.waffen_feuermodi_id.feuermodus))
  data2arr = data2arr.join(' / ')
  // console.log(data2arr);

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto print:pt-5">
      <div>
        <div className="flex items-center justify-center align-center">
          <h1 className="text-4xl italic md:text-5xl lg:text-6xl">
            {' '}
            <span>{data1.waffen_name}</span>{' '}
            <span className="text-secondary">
              {data1.waffen_klasse.waffenklasse}
            </span>{' '}
          </h1>
          <div className="relative ml-auto -my-10 xs:h-32 h-28 xmlnsXlink xxs:h-24 sm:h-40 md:h-48 aspect-square">
            <Image
              src={
                'https://cms.ariscorp.de/assets/' +
                data1.waffenhersteller.firmen_trans_logo.id
              }
              alt={'Logo von ' + data1.waffenhersteller.firmen_name}
              layout="fill"
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                data1.waffenhersteller.firmen_trans_logo.id +
                '?width=16&quality=1'
              }
            />
          </div>
        </div>
        <hr />
      </div>
      <div className="w-full space-y-2 xl:space-x-2 lg:flex lg:flex-wrap xl:flex-nowrap">
        <BasicPanel className="w-full xl:w-3/5" bottom>
          <div className="relative rounded-3xl overflow-hidden w-full aspect-[21/9] xl:aspect-[760/430]">
            <Image
              src={'https://cms.ariscorp.de/assets/' + data1.waffen_bild.id}
              alt={'Bild von ' + data1.waffen_name}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                data1.waffen_bild.id +
                '?width=16&quality=1'
              }
            />
          </div>
        </BasicPanel>
        <BasicPanel className="w-full xl:w-2/5">
          <div className="w-full h-full pb-2 text-xs italic uppercase xs:text-sm">
            <table className="w-full ml-5 table-auto">
              <div>
                <p className="pt-2 m-0 -ml-2 text-sm xs:text-base text-secondary">
                  Spezifikationen
                </p>
              </div>
              <tr>
                <th className="pr-2 text-left">Klassifizierung:</th>
                <td className="text-left text-primary">
                  {data1.waffen_klasse.waffenklasse != null
                    ? data1.waffen_klasse.waffenklasse +
                      ' (S' +
                      data1.waffen_klasse.waffenklassensize.waffensize +
                      ')'
                    : 'N/A'}
                </td>
              </tr>
              <tr>
                <th className="pr-2 text-left">Hersteller:</th>
                <td className="text-left text-primary">
                  {data1.waffenhersteller.firmen_name != null
                    ? data1.waffenhersteller.firmen_name
                    : 'N/A'}
                </td>
              </tr>
              <tr>
                <th className="pr-2 text-left">Gewicht:</th>
                <td className="text-left text-primary">
                  {data1.waffengewicht != null
                    ? data1.waffengewicht + ' KG'
                    : 'N/A'}
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <hr className="relative w-[85%] mt-3 sm:mt-5 sm:mb-4 mb-2 -ml-1 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                </td>
              </tr>
              <tr>
                <th className="pr-2 text-left">Schadenstyp:</th>
                <td className="text-left text-primary">
                  {data1.wafffen_schadenstyp.schadenstyp != null
                    ? data1.wafffen_schadenstyp.schadenstyp
                    : 'N/A'}
                </td>
              </tr>
              <tr>
                <th className="pr-2 text-left">Feuermodi:</th>
                <td className="text-left break-words text-primary">
                  {data2[0] != null ? data2arr : 'N/A'}
                </td>
              </tr>
              <tr>
                <th className="pr-2 text-left">Feuerrate:</th>
                <td className="text-left text-primary">
                  {data1.waffen_feuerrate_einzel ||
                  data1.waffen_feuerrate_salve ||
                  data1.waffen_feuerrate_vollauto ||
                  data1.waffen_feuerrate_aufgeladen != null
                    ? (data1.waffen_feuerrate_einzel != null
                        ? data1.waffen_feuerrate_einzel + '/Einzel  '
                        : '') +
                      (data1.waffen_feuerrate_salve != null
                        ? data1.waffen_feuerrate_salve + '/Salve  '
                        : '') +
                      (data1.waffen_feuerrate_vollauto != null
                        ? data1.waffen_feuerrate_vollauto + '/Gebündelt  '
                        : '') +
                      (data1.waffen_feuerrate_aufgeladen != null
                        ? data1.waffen_feuerrate_aufgeladen + '/Aufgeladen  '
                        : '')
                    : 'N/A'}
                </td>
              </tr>
              <tr>
                <th className="pr-2 text-left">Mündungs Geschwindigkeit:</th>
                <td className="text-left text-primary">
                  {data1.waffen_muendungs_geschwindigkeit != null
                    ? data1.waffen_muendungs_geschwindigkeit
                    : 'N/A'}
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <hr className="relative w-[85%] mt-3 -ml-1 mb-0 sm:mt-5 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                </td>
              </tr>
              <div>
                <p className="pt-0 m-0 -ml-2 text-sm xs:text-base text-secondary">
                  Attachments
                </p>
              </div>
              <tr>
                <th className="pr-2 text-left">Magazine:</th>
                <td className="text-left break-words text-primary">
                  {data1.waffen_magazin != null ? data1.waffen_magazin : 'N/A'}
                </td>
              </tr>
              <tr>
                <th className="pr-2 text-left">Visierung:</th>
                <td className="text-left text-primary">
                  {data1.waffen_visier != null
                    ? data1.waffen_visier.visiername
                    : 'Leer' +
                      ' (S' +
                      data1.waffen_klasse.waffenklassensize.waffensize +
                      ')'}
                </td>
              </tr>
              <tr>
                <th className="pr-2 text-left">Lauf:</th>
                <td className="text-left text-primary">
                  {data1.waffen_lauf != null
                    ? data1.waffengewicht + ' KG'
                    : 'Leer' +
                      ' (S' +
                      data1.waffen_klasse.waffenklassensize.waffensize +
                      ')'}
                </td>
              </tr>
              <tr>
                <th className="pr-2 text-left">Unterlauf:</th>
                <td className="text-left text-primary">
                  {data1.waffen_unterlauf != null
                    ? data1.waffengewicht + ' KG'
                    : 'Leer' +
                      ' (S' +
                      data1.waffen_klasse.waffenklassensize.waffensize +
                      ')'}
                </td>
              </tr>
            </table>
          </div>
        </BasicPanel>
      </div>
      <hr />
      <div>
        <Tab.Group
          selectedIndex={activeTab}
          onChange={(event) =>
            replace(
              {
                pathname: `${Weapon}`,
                query: { tab: event },
              },
              undefined,
              { shallow: true }
            ) + setActiveTab(event)
          }
        >
          <Tab.List className="flex flex-wrap justify-between">
            <Tab
              className={({ selected }) =>
                (selected ? 'text-primary' : 'opacity-50') +
                ' p-3 m-1 transition-all duration-300 ease-in-out'
              }
            >
              <h1 className="text-base font-normal uppercase font-base md:text-lg lg:text-xl xl:text-2xl text-inherit">
                Statistiken
              </h1>
            </Tab>
            <Tab
              className={({ selected }) =>
                (selected ? 'text-primary' : 'opacity-50') +
                ' p-3 m-1 transition-all duration-300 ease-in-out'
              }
            >
              <h1 className="text-base font-normal uppercase font-base md:text-lg lg:text-xl xl:text-2xl text-inherit">
                kaufen
              </h1>
            </Tab>
          </Tab.List>
          <Tab.Panels className={'px-4 xl:px-0 pt-5'}>
            <BasicPanel>
              <Tab.Panel>
                <div className="flex flex-wrap text-xs xl:flex-nowrap sm:text-sm md:text-base">
                  <div className="pb-5 ml-5 italic uppercase lg:w-5/12">
                    <p className="text-secondary">Statistiken</p>
                    <table>
                      <tr>
                        <th className="text-left">Maximale Reichweite:</th>
                        <td className="text-left text-primary">
                          {data1.waffen_maximale_reichweite != null
                            ? data1.waffen_maximale_reichweite
                            : 'N/A'}
                        </td>
                      </tr>
                      <tr>
                        <th className="pr-5 text-left">
                          Effektive Reichweite:
                        </th>
                        <td className="text-left text-primary">
                          {data1.waffen_effektive_reichweite != null
                            ? data1.waffen_effektive_reichweite
                            : 'N/A'}
                        </td>
                      </tr>
                    </table>
                    <hr className="w-[98%] relative mt-1 mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                    <table className="table-auto">
                      <tr>
                        <th className="py-2 pr-6 text-left">Entfernung</th>
                        <th className="px-2">0M</th>
                        <th className="px-2">25M</th>
                        <th className="px-2">50M</th>
                        <th className="px-2">100M</th>
                      </tr>
                      <tr>
                        <th className="py-2 pr-6 text-left">Alpha Schaden</th>
                        <td className="px-2 text-center text-primary">1</td>
                        <td className="px-2 text-center text-primary">1</td>
                        <td className="px-2 text-center text-primary">1</td>
                        <td className="px-2 text-center text-primary">1</td>
                      </tr>
                      <tr>
                        <th className="py-2 pr-6 text-left">DPS Einzel</th>
                        <td className="px-2 text-center text-primary">2</td>
                        <td className="px-2 text-center text-primary">2</td>
                        <td className="px-2 text-center text-primary">2</td>
                        <td className="px-2 text-center text-primary">2</td>
                      </tr>
                      <tr>
                        <th className="py-2 pr-6 text-left">DPS Salve</th>
                        <td className="px-2 text-center text-primary">3</td>
                        <td className="px-2 text-center text-primary">3</td>
                        <td className="px-2 text-center text-primary">3</td>
                        <td className="px-2 text-center text-primary">3</td>
                      </tr>
                      <tr>
                        <th className="py-2 pr-6 text-left">DPS Gebündelt*</th>
                        <td className="px-2 text-center text-primary">4</td>
                        <td className="px-2 text-center text-primary">4</td>
                        <td className="px-2 text-center text-primary">4</td>
                        <td className="px-2 text-center text-primary">4</td>
                      </tr>
                    </table>
                    <hr className="w-[98%] relative mt-1 mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                  </div>
                  <div className="pb-5 pl-8 pr-8 lg:pr-4 xl:pr-0 lg:w-7/12">
                    <p className="italic uppercase text-secondary">
                      Beschreibung
                    </p>
                    <ReactMarkdown
                      rehypePlugins={[rehypeRaw]}
                      className="prose prose-td:align-middle prose-invert xl:max-w-[90%] md:text-lg"
                    >
                      {data1.waffen_beschreibung}
                    </ReactMarkdown>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  className="mx-auto prose prose-td:align-middle prose-invert xl:max-w-[90%] md:text-"
                >
                  c
                </ReactMarkdown>
              </Tab.Panel>
            </BasicPanel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}

SpectrumArticlePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
