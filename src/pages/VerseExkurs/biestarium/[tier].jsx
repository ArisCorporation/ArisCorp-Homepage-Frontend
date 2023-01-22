import Layout from 'pages/VerseExkurs/layout'
import { useRouter } from 'next/router'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { Tab } from '@headlessui/react'
import Head from 'next/head'

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

export default function AlienrassenDetailPage () {
  const router = useRouter()
  const { tier } = router.query

  const { loading, error, data } = useQuery(ALIENRASSEN, {
    variables: { tier },
  })

  if (loading)
    return (
      <div className="flex justify-center pt-32">
        <SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} />
      </div>
    )

  if (error) return <p>Error :(</p>

  const Data = data.alienrassen[0].sections

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto print:pt-5">
      <Head>
        <title>
          {data.title} - Astro Research and Industrial Service Corporation
        </title>
      </Head>
      <div>
        {Data.filter((tiere) => tiere.title === tier).map((data) => (
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
        ))}
      </div>
    </div>
  )
}

AlienrassenDetailPage.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
