import Layout from 'pages/VerseExkurs/layout'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import client from 'apollo/clients'
import { GET_VERSEEXKURS_FRAKTIONEN } from 'graphql/queries'
import { Tab } from '@headlessui/react'
import CardDisplay from 'components/VerseExkursCardDisplay'
import Head from 'next/head'

export async function getServerSideProps() {
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

export default function Firmen({ data }) {
  const { replace, query } = useRouter()
  const [activeTab, setActiveTab] = useState(0)
  const [activePoliticalTab, setActivePoliticalTab] = useState(0)
  const [activeHostileTab, setActiveHostileTab] = useState(0)
  const [activeOtherTab, setActiveOtherTab] = useState(0)
  const urlquery = query.tab
  const urlquerypolitical = query.political
  const urlqueryhostile = query.hostile
  const urlqueryother = query.other

  useEffect(() => {
    if (urlquery != null && urlquery != '') {
      setActiveTab(urlquery)
    } else {
      setActiveTab(0)
    }
  }, [urlquery])

  const siteTitle =
    'Fraktionen - Astro Research and Industrial Service Corporation'

  return (
    <div className="items-center pt-10 mx-auto">
      <Head>
        <title>{siteTitle}</title>

        <meta property="twitter:title" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
        <meta name="title" content={siteTitle} />
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
              ' focus-visible:outline-none p-3 m-1 transition-all duration-300 ease-in-out'
            }
          >
            <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl text-inherit">
              POLITISCH
            </h1>
          </Tab>
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' focus-visible:outline-none p-3 m-1 transition-all duration-300 ease-in-out'
            }
          >
            <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl text-inherit">
              FEINDLICH
            </h1>
          </Tab>
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' focus-visible:outline-none p-3 m-1 transition-all duration-300 ease-in-out'
            }
          >
            <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl text-inherit">
              ANDERE
            </h1>
          </Tab>
          <hr />
        </Tab.List>
        <Tab.Panels className={'px-4'}>
          <Tab.Panel>
            <Tab.Group
              selectedIndex={activePoliticalTab}
              onChange={(event) =>
                (urlquery != null && urlquery != ''
                  ? replace(
                      {
                        query: {
                          tab: urlquery,
                          political: event,
                          hostile: urlqueryhostile,
                          other: urlqueryother,
                        },
                      },
                      undefined,
                      { shallow: true }
                    )
                  : replace({ query: { political: event } }, undefined, {
                      shallow: true,
                    })) + setActivePoliticalTab(event)
              }
            >
              <Tab.List className="flex flex-wrap justify-between">
                <div className='flex justify-between w-full md:w-1/2'>
                  <Tab
                    className={({ selected }) =>
                      (selected ? 'text-secondary' : 'opacity-50') +
                      ' p-3 m-1 transition-all duration-300 ease-in-out flex'
                    }
                  >
                    <h1 className="text-base uppercase md:text-lg lg:text-xl text-inherit">
                      HISTORISCH
                    </h1>
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      (selected ? 'text-secondary' : 'opacity-50') +
                      ' focus-visible:outline-none p-3 m-1 transition-all duration-300 ease-in-out'
                    }
                  >
                    <h1 className="text-base uppercase md:text-lg lg:text-xl text-inherit">
                      PARTEIEN
                    </h1>
                  </Tab>
                </div>
                <div className="w-full" />
                <Tab
                  className={({ selected }) =>
                    (selected ? 'text-secondary' : 'opacity-50') +
                    ' focus-visible:outline-none p-3 m-1 transition-all duration-300 ease-in-out'
                  }
                >
                  <h1 className="text-base uppercase md:text-lg lg:text-xl text-inherit">
                    STAATLICHE ORGANISATION
                  </h1>
                </Tab>
                <Tab
                  className={({ selected }) =>
                    (selected ? 'text-secondary' : 'opacity-50') +
                    ' focus-visible:outline-none p-3 m-1 transition-all duration-300 ease-in-out'
                  }
                >
                  <h1 className="text-base uppercase md:text-lg lg:text-xl text-inherit">
                    UNABHÄNGIGE ORGANISATION
                  </h1>
                </Tab>
                <hr />
              </Tab.List>
              <Tab.Panels className={'px-4 pt-16'}>
                <Tab.Panel>
                  <div className="grid justify-between grid-cols-2 xs:grid-cols-4 gap-x-10 gap-y-8">
                    {data
                      .filter(
                        (data) =>
                          data.category == 'political' &&
                          data.politicalCategory == 'historical'
                      )
                      .map((data) => (
                        <>
                          <CardDisplay
                            image={data.trans_logo.id}
                            link={'/VerseExkurs/fraktionen/' + data.name}
                            alt={data.name}
                          />
                        </>
                      ))}
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid justify-between grid-cols-2 xs:grid-cols-4 gap-x-10 gap-y-8">
                    {data
                      .filter(
                        (data) =>
                          data.category == 'political' &&
                          data.politicalCategory == 'party'
                      )
                      .map((data) => (
                        <>
                          <CardDisplay
                            image={data.trans_logo.id}
                            link={'/VerseExkurs/fraktionen/' + data.name}
                            alt={data.name}
                          />
                        </>
                      ))}
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid justify-between grid-cols-2 xs:grid-cols-4 gap-x-10 gap-y-8">
                    {data
                      .filter(
                        (data) =>
                          data.category == 'political' &&
                          data.politicalCategory == 'state'
                      )
                      .map((data) => (
                        <>
                          <CardDisplay
                            image={data.trans_logo.id}
                            link={'/VerseExkurs/fraktionen/' + data.name}
                            alt={data.name}
                          />
                        </>
                      ))}
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid justify-between grid-cols-2 xs:grid-cols-4 gap-x-10 gap-y-8">
                    {data
                      .filter(
                        (data) =>
                          data.category == 'political' &&
                          data.politicalCategory == 'independent'
                      )
                      .map((data) => (
                        <>
                          <CardDisplay
                            image={data.trans_logo.id}
                            link={'/VerseExkurs/fraktionen/' + data.name}
                            alt={data.name}
                          />
                        </>
                      ))}
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </Tab.Panel>
          <Tab.Panel>
            <Tab.Group
              selectedIndex={activeHostileTab}
              onChange={(event) =>
                (urlquery != null && urlquery != ''
                  ? replace(
                      {
                        query: {
                          tab: urlquery,
                          political: urlquerypolitical,
                          hostile: event,
                          other: urlqueryother,
                        },
                      },
                      undefined,
                      { shallow: true }
                    )
                  : replace({ query: { political: event } }, undefined, {
                      shallow: true,
                    })) + setActiveHostileTab(event)
              }
            >
              <Tab.List className="flex flex-wrap justify-between">
                <Tab
                  className={({ selected }) =>
                    (selected ? 'text-secondary' : 'opacity-50') +
                    ' p-3 m-1 transition-all duration-300 ease-in-out flex'
                  }
                >
                  <h1 className="text-base uppercase md:text-lg lg:text-xl text-inherit">
                    PIRATEN
                  </h1>
                </Tab>
                <Tab
                  className={({ selected }) =>
                    (selected ? 'text-secondary' : 'opacity-50') +
                    ' focus-visible:outline-none p-3 m-1 transition-all duration-300 ease-in-out'
                  }
                >
                  <h1 className="text-base uppercase md:text-lg lg:text-xl text-inherit">
                    SEKTEN
                  </h1>
                </Tab>
                <Tab
                  className={({ selected }) =>
                    (selected ? 'text-secondary' : 'opacity-50') +
                    ' focus-visible:outline-none p-3 m-1 transition-all duration-300 ease-in-out'
                  }
                >
                  <h1 className="text-base uppercase md:text-lg lg:text-xl text-inherit">
                    TERROR ORGANISATIONEN
                  </h1>
                </Tab>
                <hr />
              </Tab.List>
              <Tab.Panels className={'px-4 pt-16'}>
                <Tab.Panel>
                  <div className="grid justify-between grid-cols-2 xs:grid-cols-4 gap-x-10 gap-y-8">
                    {data
                      .filter(
                        (data) =>
                          data.category == 'hostile' &&
                          data.hostileCategory == 'pirates'
                      )
                      .map((data) => (
                        <>
                          <CardDisplay
                            image={data.trans_logo.id}
                            link={'/VerseExkurs/fraktionen/' + data.name}
                            alt={data.name}
                          />
                        </>
                      ))}
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid justify-between grid-cols-2 xs:grid-cols-4 gap-x-10 gap-y-8">
                    {data
                      .filter(
                        (data) =>
                          data.category == 'hostile' &&
                          data.hostileCategory == 'sect'
                      )
                      .map((data) => (
                        <>
                          <CardDisplay
                            image={data.trans_logo.id}
                            link={'/VerseExkurs/fraktionen/' + data.name}
                            alt={data.name}
                          />
                        </>
                      ))}
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid justify-between grid-cols-2 xs:grid-cols-4 gap-x-10 gap-y-8">
                    {data
                      .filter(
                        (data) =>
                          data.category == 'hostile' &&
                          data.hostileCategory == 'terrorist'
                      )
                      .map((data) => (
                        <>
                          <CardDisplay
                            image={data.trans_logo.id}
                            link={'/VerseExkurs/fraktionen/' + data.name}
                            alt={data.name}
                          />
                        </>
                      ))}
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </Tab.Panel>
          <Tab.Panel>
            <Tab.Group
              selectedIndex={activeOtherTab}
              onChange={(event) =>
                (urlquery != null && urlquery != ''
                  ? replace(
                      {
                        query: {
                          tab: urlquery,
                          political: urlquerypolitical,
                          hostile: urlqueryhostile,
                          other: event,
                        },
                      },
                      undefined,
                      { shallow: true }
                    )
                  : replace({ query: { political: event } }, undefined, {
                      shallow: true,
                    })) + setActiveOtherTab(event)
              }
            >
              <Tab.List className="flex flex-wrap justify-between">
                <Tab
                  className={({ selected }) =>
                    (selected ? 'text-secondary' : 'opacity-50') +
                    ' p-3 m-1 transition-all duration-300 ease-in-out flex'
                  }
                >
                  <h1 className="text-base uppercase md:text-lg lg:text-xl text-inherit">
                    GILDEN
                  </h1>
                </Tab>
                <Tab
                  className={({ selected }) =>
                    (selected ? 'text-secondary' : 'opacity-50') +
                    ' focus-visible:outline-none p-3 m-1 transition-all duration-300 ease-in-out'
                  }
                >
                  <h1 className="text-base uppercase md:text-lg lg:text-xl text-inherit">
                    GEWERKSCHAFTEN
                  </h1>
                </Tab>
                <hr />
              </Tab.List>
              <Tab.Panels className={'px-4 pt-16'}>
                <Tab.Panel>
                  <div className="grid justify-between grid-cols-2 xs:grid-cols-4 gap-x-10 gap-y-8">
                    {data
                      .filter(
                        (data) =>
                          data.category == 'other' &&
                          data.otherCategory == 'guild'
                      )
                      .map((data) => (
                        <>
                          <CardDisplay
                            image={data.trans_logo.id}
                            link={'/VerseExkurs/fraktionen/' + data.name}
                            alt={data.name}
                          />
                        </>
                      ))}
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid justify-between grid-cols-2 xs:grid-cols-4 gap-x-10 gap-y-8">
                    {data
                      .filter(
                        (data) =>
                          data.category == 'other' &&
                          data.otherCategory == 'union'
                      )
                      .map((data) => (
                        <>
                          <CardDisplay
                            image={data.trans_logo.id}
                            link={'/VerseExkurs/fraktionen/' + data.name}
                            alt={data.name}
                          />
                        </>
                      ))}
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

Firmen.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
