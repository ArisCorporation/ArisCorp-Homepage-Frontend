import Layout from 'pages/VerseExkurs/layout'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { Tab } from '@headlessui/react'
import Link from 'next/link'
import client from 'apollo/clients'
import { GET_VERSEEXKURS_PFLANZEN } from 'graphql/queries'
import Head from 'next/head'

export async function getServerSideProps () {
  const { data } = await client.query({ query: GET_VERSEEXKURS_PFLANZEN })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: await data.alienrassen[0],
    },
  }
}

export default function PflanzenPage (data) {
  const { replace, query } = useRouter()
  const [activeTab, setActiveTab] = useState()
  const urlquery = query.tab

  const Data = data.data

  useEffect(() => {
    if (urlquery != null && urlquery != '') {
      setActiveTab(urlquery)
    } else {
      setActiveTab(0)
    }
  }, [urlquery])


  const siteTitle = "Pflanzen - Astro Research and Industrial Service Corporation"

  return (
    <div className="items-center pt-10 mx-auto">
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
          <Tab.Group
            selectedIndex={activeTab}
            onChange={(event) =>
              replace({ query: { tab: event } }, undefined, { shallow: true }) +
              setActiveTab(event)
            }
          >
            <Tab.List className="flex flex-wrap justify-between">
              <Tab
                className={({ selected }) =>
                  (selected ? 'text-primary' : 'opacity-50') +
                  ' focus-visible:outline-none p-3 m-1 transition-all duration-300 ease-in-out'
                }
              >
                <h1 className="text-base font-normal text-inherit font-base md:text-lg lg:text-xl xl:text-2xl">
                  Pflanzen
                </h1>
              </Tab>
              <Tab
                className={({ selected }) =>
                  (selected ? 'text-primary' : 'opacity-50') +
                  ' focus-visible:outline-none p-3 m-1 transition-all duration-300 ease-in-out'
                }
              >
                <h1 className="text-base font-normal text-inherit font-base md:text-lg lg:text-xl xl:text-2xl">
                  Erntbare Objekte
                </h1>
              </Tab>
              <hr />
            </Tab.List>
            <Tab.Panels className={'px-4'}>
              <Tab.Panel className="flex flex-wrap items-center justify-between text-center">
                {Data.sections.map((data) => (
                  <Link legacyBehavior
                    href={
                      '/VerseExkurs/pflanzen/' + encodeURIComponent(data.title)
                    }
                    key={data.title}
                  >
                    <a
                      className={
                        'children-square mt-10 text-white children-square hover:text-secondary decoration-transparent ' +
                        (data.pflanze == false ? 'hidden' : '')
                      }
                    >
                      <div className="text-center">
                        <div>
                          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                            {data.image}
                          </ReactMarkdown>
                          <div>{data.title}</div>
                        </div>
                      </div>
                    </a>
                  </Link>
                ))}
              </Tab.Panel>
              <Tab.Panel className="flex flex-wrap items-center justify-between text-center">
                {Data.sections.map((data) => (
                  <Link legacyBehavior
                    href={
                      '/VerseExkurs/pflanzen/' + encodeURIComponent(data.title)
                    }
                    key={data.title}
                  >
                    <a
                      className={
                        'children-square mt-10 text-white children-square hover:text-secondary decoration-transparent ' +
                        (data.pflanze == true ? 'hidden' : '')
                      }
                    >
                      <div className="text-center">
                        <div>
                          <ReactMarkdown
                            rehypePlugins={[rehypeRaw]}
                            className="mx-auto prose prose-td:align-middle prose-invert xl:max-w-[90%]"
                          >
                            {data.image}
                          </ReactMarkdown>
                          <div>{data.title}</div>
                        </div>
                      </div>
                    </a>
                  </Link>
                ))}
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  )
}

PflanzenPage.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
