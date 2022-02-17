import Layout from 'pages/VerseExkurs/layout'
import { useRouter } from 'next/router'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { Tab } from '@headlessui/react'

const { gql, useQuery } = require('@apollo/client')

const ALIENRASSEN = gql`
  query Alienrassen($alienrasse: String!) {
    alienrassen(filter: { alienrassen_name: { _eq: $alienrasse } }) {
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

export default function AlienrassenDetailPage() {
  const router = useRouter()
  const { alienrasse } = router.query

  const { loading, error, data } = useQuery(ALIENRASSEN, {
    variables: { alienrasse },
  })

  if (loading)
    return (
      <div className="flex justify-center pt-32">
        <SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} />
      </div>
    )

  if (error) return <p>Error :(</p>

  const Data = data.alienrassen[0]

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto print:pt-5">
      <div>
        <div className="items-center text-center">
          <h1 className="uppercase">
            Alienrasse:{' '}
            <span className="text-primary">{Data.alienrassen_name}</span>
          </h1>
          <hr />
          <div className="w-full">
            <Image
              src={
                'https://cms.ariscorp.de/assets/' + Data.alienrassen_banner.id
              }
              alt={'Banner'}
              width={Data.alienrassen_banner.width}
              height={Data.alienrassen_banner.height}
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                Data.alienrassen_banner.id +
                '?width=16&quality=1'
              }
            />
          </div>
        </div>
        <div
          className={'max-w-[' + Data.alienrassen_banner.width + 'px] mx-auto'}
        >
          <h2 className="mt-3">
            VerseExkurs - Alienrassen: {Data.alienrassen_name}
          </h2>
          <hr className="max-w-[80px]" />
        </div>
        <div className="font-nasa article-font">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            className="mx-auto prose prose-td:align-middle prose-invert xl:max-w-full"
          >
            {Data.text}
          </ReactMarkdown>
          <Tab.Group>
            <Tab.List className="flex flex-wrap justify-between">
              <hr />
              {Data.sections.map((data) => (
                <Tab
                  key={data.title}
                  className={({ selected }) =>
                    (selected ? 'text-primary' : 'opacity-50') +
                    ' p-3 m-1 transition-all duration-300 ease-in-out'
                  }
                >
                  <h1 className="text-base font-normal font-base md:text-lg lg:text-xl xl:text-2xl text-inherit">
                    {data.title}
                  </h1>
                </Tab>
              ))}
              <hr />
            </Tab.List>
            <Tab.Panels className={'px-4 xl:px-0 pt-5'}>
              {Data.sections.map((data) => (
                <Tab.Panel key={data.title}>
                  <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    className="mx-auto prose prose-td:align-middle prose-invert xl:max-w-[90%]"
                  >
                    {data.content}
                  </ReactMarkdown>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  )
}

AlienrassenDetailPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
