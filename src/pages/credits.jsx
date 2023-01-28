import ReactMarkdown from 'react-markdown'
import { SquareLoader } from 'react-spinners'
import rehypeRaw from 'rehype-raw'
import Layout from './layout'
import { GET_CREDITS } from 'graphql/queries'
import client from 'apollo/clients'
import Head from 'next/head'

export async function getServerSideProps () {
  const { data } = await client.query({ query: GET_CREDITS })

  if (!data) {
    return {
      notFound: true,
    }
  }

  const siteTitle = "Credits - Astro Research and Industrial Service Corporation"

  return {
    props: {
      data: await data.credits.text,
      siteTitle
    },
  }
}

export default function CreditsPage ({ data, siteTitle }) {
  return (
    <div className="pt-32">
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
      <ReactMarkdown rehypePlugins={[rehypeRaw]} className="justify-center">
        {data}
      </ReactMarkdown>
    </div>
  )
}

CreditsPage.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
