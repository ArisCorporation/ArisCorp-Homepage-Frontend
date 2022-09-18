import Layout from 'pages/VerseExkurs/layout'
import { useRouter } from 'next/router'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { BasicPanel } from 'components/panels'
import { useEffect } from 'react'

const { gql, useQuery } = require('@apollo/client')
import { GET_VERSEEXKURS_SYSTEM } from 'graphql/queries'

export default function SystemDetailPage() {
  const router = useRouter()
  const { system } = router.query

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
          <div className="float-right pb-2 ml-6">
            <BasicPanel>
              <div className="italic uppercase">
                <div className="">
                  <h3 className="pt-2 pl-3 m-0 text-secondary">
                    System Infobox
                  </h3>
                </div>
                <div className="p-5 px-7">
                  <table className="w-full">
                    <tr className="">
                      <th className="text-left">Sternen Typ:</th>
                      <td className="text-left text-primary">
                        {data.star_type}
                      </td>
                    </tr>
                    <tr className="">
                      <th className="pr-5 text-left">Sternen Klasse:</th>
                      <td className="text-left text-primary">
                        {data.star_class}
                      </td>
                    </tr>
                  </table>
                  <hr />
                  <table>
                    <tr className="">
                      <th className="pr-5 text-left">Zugehörigkeit:</th>
                      <td className="text-left text-primary">
                        <div className="relative w-6 h-6">
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
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <th className="pr-5 text-left">System Größe:</th>
                      <td className="text-left text-primary">
                        {data.system_size} AE
                      </td>
                    </tr>
                    <tr className="">
                      <th className="pr-5 text-left">Planeten:</th>
                      <td className="text-left text-primary">{data.planets}</td>
                    </tr>
                    <tr className="">
                      <th className="pr-5 text-left">Monde:</th>
                      <td className="text-left text-primary">{data.moons}</td>
                    </tr>
                    <tr className="">
                      <th className="pr-5 text-left">Sprungpunkte:</th>
                      <td className="text-left text-primary">
                        {data.jumppoints}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </BasicPanel>
          </div>
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
