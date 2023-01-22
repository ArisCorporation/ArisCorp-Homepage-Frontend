import Layout from 'pages/VerseExkurs/layout'
import { useRouter } from 'next/router'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const { gql, useQuery } = require('@apollo/client')
import { GET_VERSEEXKURS_FIRMA } from 'graphql/queries'
import { BasicPanel } from 'components/panels'
import Head from 'next/head'
import client from 'apollo/clients'

export async function getServerSideProps (context) {
  const { params } = context
  const { firma } = params

  let { data } = await client.query({
    query: GET_VERSEEXKURS_FIRMA,
    variables: { firma },
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  data = data.firmen[0]

  const siteTitle = data.firmen_name + " - Astro Research and Service Industrial Corporation"

  return {
    props: {
      data,
      siteTitle
    },
  }
}

export default function SystemDetailPage ({ data, siteTitle }) {
  return (
    <div className="items-center max-w-6xl pt-10 mx-auto print:pt-5">
      <Head>
        <title>
          {siteTitle}
        </title>

        <meta
          property="twitter:title"
          content={siteTitle}
        />
        <meta
          property="og:title"
          content={siteTitle}
        />
        <meta
          name="title"
          content={siteTitle}
        />
      </Head>
      <div>
        <div className="items-center text-center">
          <h1 className="uppercase">
            Firma: <span className="text-primary">{data.firmen_name}</span>
          </h1>
          <hr />
          <div className="w-full">
            <Image
              src={'https://cms.ariscorp.de/assets/' + data.firmen_banner.id}
              alt={'Banner'}
              width={data.firmen_banner.width}
              height={data.firmen_banner.height}
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                data.firmen_banner.id +
                '?width=16&quality=1'
              }
            />
          </div>
        </div>
        <div className={'max-w-[' + data.firmen_banner.width + 'px] mx-auto'}>
          <h2 className="mt-3">VerseExkurs - Firma: {data.firmen_name}</h2>
          <hr className="max-w-[80px]" />
        </div>
        <div className="font-nasa article-font">
          <BasicPanel className="w-full mb-2 mr-12 lg:ml-8 lg:float-right lg:w-2/5">
            <div className="w-full h-full pb-2 text-xs italic uppercase xs:text-sm">
              <h3 className="pt-2 pl-3 m-0 text-secondary">Firmen Infobox</h3>
              <table className="w-full ml-5">
                <tr className={'border-b-0 border-transparent' + (data.headquarter == null && data.headquarter_system == null ? ' hidden' : null)}>
                  <th className="pr-2 text-left">Hauptsitz:</th>
                  <td className="text-left text-primary">
                    {data.headquarter && data.headquarter_system != null
                      ? data.headquarter + '(' + data.headquarter_system + ')'
                      : (data.headquarter != null ? data.headquarter : (data.headquarter_system != null ? data.headquarter_system : 'N/A'))}
                  </td>
                </tr>
                <tr className={'border-b-0 border-transparent' + (data.current_ceo == null ? ' hidden' : null)}>
                  <th className="pr-2 text-left">Aktueller C.E.O.:</th>
                  <td className="text-left text-primary">
                    {data.current_ceo != null ? data.current_ceo : 'N/A'}
                  </td>
                </tr>
                <tr className={'border-b-0 border-transparent' + (data.founding == null ? ' hidden' : null)}>
                  <th className="pr-2 text-left">Gründungsdatum:</th>
                  <td className="text-left text-primary">
                    {data.founding != null ? data.founding : 'N/A'}
                  </td>
                </tr>
                <tr className={'border-b-0 border-transparent' + (data.founder == null ? ' hidden' : null)}>
                  <th className="pr-2 text-left">Gründer:</th>
                  <td className="text-left break-words text-primary">
                    {data.founder != null ? data.founder : 'N/A'}
                  </td>
                </tr>
                <tr className={'border-b-0 border-transparent' + (data.firmenkategorie == null ? ' hidden' : null)}>
                  <th className="pr-2 text-left">Kategorie:</th>
                  <td className="text-left break-words text-primary">
                    {data.firmenkategorie != null
                      ? data.firmenkategorie == 'hersteller'
                        ? (data.firmenherstellerkategorie == 'Personenausruestungshersteller' ? 'Personenausrüstungs- Hersteller' : data.firmenherstellerkategorie)
                        : data.firmenkategorie
                      : 'N/A'}
                  </td>
                </tr>
                <tr>
                  <th className="pr-2 text-left">Bekannteste Waren:</th>
                  <td className="text-left text-primary">
                    {data.famous_goods != null ? data.famous_goods : 'N/A'}
                  </td>
                </tr>
              </table>
            </div>
          </BasicPanel>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            className="mx-auto prose prose-td:align-middle prose-invert xl:max-w-full"
          >
            {data.text}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

SystemDetailPage.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
