import Layout from 'pages/VerseExkurs/layout'
import { useRouter } from 'next/router'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { Tab } from '@headlessui/react'
import Head from 'next/head'
import client from 'apollo/clients'

const { gql, useQuery } = require('@apollo/client')

const ALIENRASSEN = gql`
  query Alienrassen {
    alienrassen(filter: { alienrassen_name: { _eq: "Biestarium" } }) {
      id
      alienrassen_name
      alienrassen_banner {
        id
        width
        height
      }
      text
      sections
    }
  }
`

export async function getServerSideProps (context) {
  const { params } = context
  const { tier } = params
  
  let { data } = await client.query({
    query: ALIENRASSEN,
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  data = data.alienrassen[0].sections.filter((tiere) => tiere.title == tier)[0]
  const siteTitle = data.title + " - Astro Research and Industrial Service Corporation"

  return {
    props: {
      data,
      siteTitle
    },
  }
}

export default function AlienrassenDetailPage ({ data, siteTitle }) {
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
        <div key={data.title}>
          <div className="items-center text-center">
            <h1 className="uppercase">
              Alienrasse: <span className="text-primary">{data.title}</span>
            </h1>
            <hr />
            <div className="w-full">
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                className="mx-auto prose prose-td:align-middle prose-invert xl:max-w-[90%]"
              >
                {data.image}
              </ReactMarkdown>
            </div>
          </div>
          <div className={'px-5 mx-auto'}>
            <h2 className="mt-3">VerseExkurs - Biestarium: {data.title}</h2>
            <hr className="max-w-[80px]" />
          </div>
          <div className="font-nasa article-font">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              className="child-delete-image mx-auto prose prose-td:align-middle prose-invert xl:max-w-[90%]"
            >
              {data.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  )
}

AlienrassenDetailPage.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
