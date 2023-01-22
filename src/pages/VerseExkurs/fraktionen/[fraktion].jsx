import Layout from 'pages/VerseExkurs/layout'
import { useRouter } from 'next/router'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const { gql, useQuery } = require('@apollo/client')
import { GET_VERSEEXKURS_FRAKTION } from 'graphql/queries'
import Head from 'next/head'
import client from 'apollo/clients'

export async function getServerSideProps(context) {
  const { params } = context
  const { fraktion } = params

  let { data } = await client.query({
    query: GET_VERSEEXKURS_FRAKTION,
    variables: { fraktion },
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  data = data.fraktionengruppierungen[0]
  const siteTitle = data.name + " - Astro Research and Industrial Service Corporation"

  return {
    props: {
      data,
      siteTitle
    },
  }
}

export default function SystemDetailPage ({data, siteTitle}) {
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
            Fraktion: <span className="text-primary">{data.name}</span>
          </h1>
          <hr />
          <div className="w-full">
            <Image
              src={'https://cms.ariscorp.de/assets/' + data.banner.id}
              alt={'Banner'}
              width={data.banner.width}
              height={data.banner.height}
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                data.banner.id +
                '?width=16&quality=1'
              }
            />
          </div>
        </div>
        <div className={'max-w-[' + data.banner.width + 'px] mx-auto'}>
          <h2 className="mt-3">VerseExkurs - Fraktion: {data.name}</h2>
          <hr className="max-w-[80px]" />
        </div>
        <div className="font-nasa article-font">
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
