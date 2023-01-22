import Layout from './layout'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import {
  ARKIcon,
  GalactapediaIcon,
  RSICommLinksIcon,
  RSIRoadmapIcon,
} from 'components/icons'
import { GET_VEXKURS_INDEX } from 'graphql/queries'
import client from 'apollo/clients'
import router from 'next/router'
import Head from 'next/head'

export async function getServerSideProps () {
  const { data } = await client.query({ query: GET_VEXKURS_INDEX })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: await data.exkurs_index,
    },
  }
}

export default function VerseExkursIndex (data) {

  const siteTitle = "VerseExkurs - Astro Research and Industrial Service Corporation"
  return (
    <>
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
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        className="mx-auto prose prose-td:align-middle prose-invert xl:max-w-[90%]"
      >
        {data.data.text}
      </ReactMarkdown>
      <div className="flex flex-wrap items-center justify-center text-center lg:justify-between scale-70 xl:scale-100">
        <a
          href="https://robertsspaceindustries.com/starmap"
          target="_blank"
          rel="noreferrer"
          className="flex mt-8 group"
        >
          <ARKIcon classes="fill-white" width="200" height="200" />
        </a>
        <a
          href="https://robertsspaceindustries.com/galactapedia"
          target="_blank"
          rel="noreferrer"
          className="flex mt-8 group"
        >
          <GalactapediaIcon classes="fill-white" width="200" height="200" />
        </a>
        <a
          href="https://robertsspaceindustries.com/comm-link"
          target="_blank"
          rel="noreferrer"
          className="flex mt-8 group"
        >
          <RSICommLinksIcon classes="fill-white" width="200" height="200" />
        </a>
        <a
          href="https://robertsspaceindustries.com/roadmap"
          target="_blank"
          rel="noreferrer"
          className="flex mt-8 group"
        >
          <RSIRoadmapIcon classes="fill-white" width="200" height="200" />
        </a>
      </div>
      <hr />
    </>
  )
}

VerseExkursIndex.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
