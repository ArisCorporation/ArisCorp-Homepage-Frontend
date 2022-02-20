import Layout from 'pages/VerseExkurs/layout'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { Tab } from '@headlessui/react'
import { client } from 'pages/_app'
import { GET_VERSEEXKURS_UEE } from 'graphql/queries'

export async function getServerSideProps() {
  const { data } = await client.query({ query: GET_VERSEEXKURS_UEE })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: await data.united_empire_of_earth,
    },
  }
}

export default function UEEPage(data) {
  const Data = data.data

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto print:pt-5">
      <div>
        <div className="items-center text-center">
          <h1 className="uppercase">
            ALLES ÜBER DAS <span className="text-primary">{Data.title}</span>
          </h1>
          <hr />
          <div className="w-full">
            <Image
              src={'https://cms.ariscorp.de/assets/' + Data.image.id}
              alt={'Banner'}
              width={Data.image.width}
              height={Data.image.width}
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                Data.image.id +
                '?width=16&quality=1'
              }
            />
          </div>
        </div>
        <div className={'max-w-[1600px] mx-auto'}>
          <h2 className="mt-3">VerseExkurs - UEE: Übersicht</h2>
          <hr className="max-w-[80px]" />
        </div>
        <div className="font-nasa article-font">
          <div>
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              className="mx-auto prose prose-td:align-middle prose-invert xl:max-w-full"
            >
              {Data.text}
            </ReactMarkdown>
          </div>
          <hr />
          <Tab.Group>
            <Tab.List className="">
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
            <Tab.Panels className={'px-4 xl:px-0'}>
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

UEEPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
