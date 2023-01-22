import Layout from 'pages/VerseExkurs/layout'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import client from 'apollo/clients'
import { GET_VERSEEXKURS_FRAKTIONEN } from 'graphql/queries'
import { Tab } from '@headlessui/react'
import CardDisplay from 'components/VerseExkursCardDisplay'
import Head from 'next/head'

export async function getServerSideProps () {
  const { data } = await client.query({ query: GET_VERSEEXKURS_FRAKTIONEN })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: await data.fraktionengruppierungen,
    },
  }
}

export default function Firmen ({ data }) {
  const { replace, query } = useRouter()
  const [activeTab, setActiveTab] = useState(0)
  const [activeSecondaryTab, setActiveSecondaryTab] = useState(0)
  const urlquery = query.tab

  useEffect(() => {
    if (urlquery != null && urlquery != '') {
      setActiveTab(urlquery)
    } else {
      setActiveTab(0)
    }
  }, [urlquery])

  const siteTitle = "Fraktionen - Astro Research and Industrial Service Corporation"

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto">
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
      <Tab.Group
        selectedIndex={activeTab}
        onChange={(event) =>
          replace({ query: { tab: event } }, undefined, { shallow: true }) +
          setActiveTab(event)
        }
      >
        <Tab.List className="flex flex-wrap justify-between">
          <h1>FRAKTIONEN</h1>
          <hr />
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' p-3 m-1 transition-all duration-300 ease-in-out'
            }
          >
            <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl text-inherit">
              FREUNDLICH
            </h1>
          </Tab>
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' p-3 m-1 transition-all duration-300 ease-in-out'
            }
          >
            <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl text-inherit">
              NEUTRAL
            </h1>
          </Tab>
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' p-3 m-1 transition-all duration-300 ease-in-out'
            }
          >
            <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl text-inherit">
              FEINDLICH
            </h1>
          </Tab>
          <hr />
        </Tab.List>
        <Tab.Panels className={'px-4'}>
          <Tab.Panel>
            <div>
              <div className="grid justify-between grid-cols-2 xs:grid-cols-4 gap-x-10 gap-y-8">
                {data
                  .filter((data) => data.category === 'friendly')
                  .map((data) => (
                    <>
                      <CardDisplay
                        image={data.trans_logo.id}
                        alt={data.name}
                        link={'/VerseExkurs/fraktionen/' + data.name}
                      />
                    </>
                  ))}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <div className="grid justify-between grid-cols-2 xs:grid-cols-4 gap-x-10 gap-y-8">
                {data
                  .filter((data) => data.category === 'neutral')
                  .map((data) => (
                    <>
                      <CardDisplay
                        image={data.trans_logo.id}
                        alt={data.name}
                        link={'/VerseExkurs/fraktionen/' + data.name}
                      />
                    </>
                  ))}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <div className="grid justify-between grid-cols-2 xs:grid-cols-4 gap-x-10 gap-y-8">
                {data
                  .filter((data) => data.category == 'hostile')
                  .map((data) => (
                    <>
                      <CardDisplay
                        image={data.trans_logo.id}
                        alt={data.name}
                        link={'/VerseExkurs/fraktionen/' + data.name}
                      />
                    </>
                  ))}
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

Firmen.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
