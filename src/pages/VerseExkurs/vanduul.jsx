import Layout from './layout'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { Tab } from '@headlessui/react'
import { GET_VERSEEXKURS_ALIENRASSE } from 'graphql/queries'
import client from 'apollo/clients'
import Head from 'next/head'

export async function getServerSideProps () {
  const { data } = await client.query({
    query: GET_VERSEEXKURS_ALIENRASSE,
    variables: { alienrasse: 'Vanduul' },
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: await data.alienrassen,
    },
  }
}

export default function Banu ({ data }) {
  const { replace, query } = useRouter()
  const [activeTab, setActiveTab] = useState()
  const urlquery = query.tab

  data = data[0]

  useEffect(() => {
    if (urlquery != null && urlquery != '') {
      setActiveTab(urlquery)
    } else {
      setActiveTab(0)
    }
  }, [urlquery])


  const siteTitle = "Vanduul - Astro Research and Industrial Service Corporation"

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
            Alienrasse:{' '}
            <span className="text-primary">{data.alienrassen_name}</span>
          </h1>
          <hr />
          <div className="w-full">
            <Image
              src={
                'https://cms.ariscorp.de/assets/' + data.alienrassen_banner.id
              }
              alt={'Banner'}
              width={data.alienrassen_banner.width}
              height={data.alienrassen_banner.height}
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                data.alienrassen_banner.id +
                '?width=16&quality=1'
              }
            />
          </div>
        </div>
        <div
          className={'max-w-[' + data.alienrassen_banner.width + 'px] mx-auto'}
        >
          <h2 className="mt-3">
            VerseExkurs - Alienrassen: {data.alienrassen_name}
          </h2>
          <hr className="max-w-[80px]" />
        </div>
        <div className="font-nasa article-font">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            className="mx-auto prose prose-td:align-middle prose-invert xl:max-w-full"
          >
            {data.text}
          </ReactMarkdown>
          <Tab.Group
            selectedIndex={activeTab}
            onChange={(event) =>
              replace({ query: { tab: event } }, undefined, { shallow: true }) +
              setActiveTab(event)
            }
          >
            <Tab.List className="flex flex-wrap justify-between">
              <hr />
              {data.sections.map((data) => (
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
              {data.sections.map((data) => (
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

Banu.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
