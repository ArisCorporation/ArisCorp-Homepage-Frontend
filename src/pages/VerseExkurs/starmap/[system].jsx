import Layout from 'pages/VerseExkurs/layout'
import { useRouter } from 'next/router'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { BasicPanel } from 'components/panels'
import { useEffect, useState } from 'react'

const { gql, useQuery } = require('@apollo/client')
import { GET_VERSEEXKURS_SYSTEM } from 'graphql/queries'

export default function SystemDetailPage() {
  const router = useRouter()
  const { system } = router.query
  const [systemSizeAE, setSystemSizeAE] = useState(true)

  const System = system?.charAt(0).toUpperCase() + system?.slice(1)

  const { loading, error, data } = useQuery(GET_VERSEEXKURS_SYSTEM, {
    variables: { System },
  })

  if (loading)
    return (
      <div className="flex justify-center pt-32">
        <SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} />
      </div>
    )

  if (error) return <p>Error :(</p>

  data = data.systeme[0]
  console.log(systemSizeAE);

  const ueeIcon =
    'https://cms.ariscorp.de/assets/ab6330a8-40b6-40fd-ab8f-fac1d11741a3'
  const unclIcon =
    'https://cms.ariscorp.de/assets/a3523e87-8346-4d3a-942d-46fbac42038a'
  const devIcon =
    'https://cms.ariscorp.de/assets/8676440b-64b6-4d71-bcc0-e1ce3c88b88d'
  const banuIcon =
    'https://cms.ariscorp.de/assets/38589a86-d9de-4f33-87c5-1305165ea851'
  const vnclIcon =
    'https://cms.ariscorp.de/assets/bd011c4c-f292-4117-ba90-e8f9183380d3'
  const xianIcon =
    'https://cms.ariscorp.de/assets/654272b0-6bfa-4e4c-87e7-cb690476dec5'

  const currentIcon =
    data.system_affiliation == 'uee'
      ? ueeIcon
      : data.system_affiliation == 'indevelopment'
      ? devIcon
      : data.system_affiliation == 'unclaimed'
      ? unclIcon
      : data.system_affiliation == 'banu'
      ? banuIcon
      : data.system_affiliation == 'xian'
      ? xianIcon
      : data.system_affiliation == 'vanduul'
      ? vnclIcon
      : null

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto print:pt-5">
      <div>
        <div className="items-center text-center">
          <h1 className="uppercase">
            Sternensystem:{' '}
            <span className="text-primary">{data.system_name}</span>
          </h1>
          <hr />
          <div className="w-full">
            <Image
              src={'https://cms.ariscorp.de/assets/' + data.system_banner.id}
              alt={'Banner'}
              width={data.system_banner.width}
              height={data.system_banner.height}
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                data.system_banner.id +
                '?width=16&quality=1'
              }
            />
          </div>
        </div>
        <div className={'max-w-[' + data.system_banner.width + 'px] mx-auto'}>
          <h2 className="mt-3">
            VerseExkurs - Sternensystem: {data.system_name}
          </h2>
          <hr className="max-w-[80px]" />
        </div>
        <div className="font-nasa article-font">
          <BasicPanel className="w-full mb-2 mr-12 lg:ml-8 lg:float-right lg:w-2/5">
            <div className="w-full h-full pb-2 text-xs italic uppercase xs:text-sm">
              <h3 className="pt-2 pl-3 m-0 text-secondary">System Infobox</h3>
              <table className="w-full ml-5 table-auto">
                <div>
                  <p className="pt-2 m-0 -ml-2 text-sm xs:text-base text-secondary">
                    Astronomisch
                  </p>
                </div>
                <tr>
                  <th className="pr-2 text-left">Sternen Typ:</th>
                  <td className="text-left text-primary">
                    {data.star_type != null ? data.star_type : 'N/A'}
                  </td>
                </tr>
                <tr>
                  <th className="pr-2 text-left">Sternenklasse:</th>
                  <td className="text-left text-primary">
                    {data.star_class != null ? data.star_class : 'N/A'}
                  </td>
                </tr>
                <tr className='hover:cursor-pointer' onClick={() => setSystemSizeAE(!systemSizeAE)}>
                  <th className="pr-2 text-left">Systemgröße:</th>
                  <td className="text-left text-primary">
                    {data.size != null ? (
                      systemSizeAE ? (data.size + ' AE') : ((data.size*'149597870.7').toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + ' KM')
                    ) : 'N/A'}
                  </td>
                </tr>
                <tr>
                  <th className="pr-2 text-left">Planeten:</th>
                  <td className="text-left text-primary">
                    {data.planets != null ? data.planets : 'N/A'}
                  </td>
                </tr>
                <tr>
                  <th className="pr-2 text-left">Monde:</th>
                  <td className="text-left break-words text-primary">
                    {data.moons != null ? data.moons : 'N/A'}
                  </td>
                </tr>
                <tr>
                  <th className="pr-2 text-left">Asteroidengürtel:</th>
                  <td className="text-left text-primary">
                    {data.asteroid_belt != null ? data.asteroid_belt : 'N/A'}
                  </td>
                </tr>
                <tr>
                  <th className="pr-2 text-left">Jumppoints:</th>
                  <td className="text-left text-primary">
                    {data.jumppoints != null ? data.jumppoints : 'N/A'}
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <hr className="relative w-[85%] my-3 -ml-1 sm:mt-5 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                  </td>
                </tr>
                <div>
                  <p className="pt-0 m-0 -ml-2 text-sm xs:text-base text-secondary">
                    Politik & Wirtschaft
                  </p>
                </div>
                <tr>
                  <th className="pr-0 text-left">Zugehörigkeit:</th>
                  <td className="flex text-left text-primary">
                    <div className="relative w-6 h-6">
                      {data.system_affiliation != null ? (
                        <Image
                          src={
                            data.system_affiliation == 'uee'
                              ? ueeIcon
                              : data.system_affiliation == 'indevelopment'
                              ? devIcon
                              : data.system_affiliation == 'unclaimed'
                              ? unclIcon
                              : data.system_affiliation == 'banu'
                              ? banuIcon
                              : data.system_affiliation == 'xian'
                              ? xianIcon
                              : data.system_affiliation == 'vanduul'
                              ? vnclIcon
                              : null
                          }
                          layout="fill"
                          placeholder="blur"
                          blurDataURL={unclIcon + '?width=16&quality=1'}
                          draggable="false"
                          alt="Affiliation"
                        />
                      ) : (
                        'N/A'
                      )}
                    </div>
                    <div className="ml-2">
                      {data.system_affiliation == 'uee'
                        ? 'UEE'
                        : data.system_affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.system_affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.system_affiliation == 'banu'
                        ? 'Banu'
                        : data.system_affiliation == 'xian'
                        ? "Xi'An"
                        : data.system_affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="pr-2 text-left">Entdeckungsdatum:</th>
                  <td className="text-left text-primary">
                    {data.discovery_year != null ? data.discovery_year : 'N/A'}
                  </td>
                </tr>
                <tr>
                  <th className="pr-2 text-left">Hauptplanet:</th>
                  <td className="text-left text-primary">
                    {data.main_planet != null ? data.main_planet : 'N/A'}
                  </td>
                </tr>
                <tr>
                  <th className="pr-2 text-left">Bevölkerung:</th>
                  <td className="text-left text-primary">
                    {data.population != null ? data.population : 'N/A'}
                  </td>
                </tr>
                <tr>
                  <th className="pr-2 text-left">Wirtschaft:</th>
                  <td className="text-left text-primary">
                    {data.economy != null ? data.economy : 'N/A'}
                  </td>
                </tr>
                <tr>
                  <th className="pr-2 text-left">Gefahrenstufe:</th>
                  <td className="text-left text-primary">
                    {data.danger_level != null ? data.danger_level : 'N/A'}
                  </td>
                </tr>
              </table>
            </div>
          </BasicPanel>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            className="mx-auto prose prose-td:align-middle prose-invert xl:max-w-full"
          >
            {data.system_text}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

SystemDetailPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
