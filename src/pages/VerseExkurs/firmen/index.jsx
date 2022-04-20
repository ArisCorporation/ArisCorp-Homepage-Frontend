import Layout from 'pages/VerseExkurs/layout'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import client from 'apollo/clients'
import { GET_VERSEEXKURS_FIRMEN } from 'graphql/queries'
import { Tab } from '@headlessui/react'
import FirmenCard from 'components/VerseExkursFirmenGrid'

export async function getServerSideProps() {
  const { data } = await client.query({ query: GET_VERSEEXKURS_FIRMEN })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: await data.firmen,
    },
  }
}

export default function Firmen({ data }) {
  const { replace, query } = useRouter()
  const [activeTab, setActiveTab] = useState(0)
  const [activeSecondaryTab, setActiveSecondaryTab] = useState(0)
  const urlquery = query.tab
  const urlqueryhersteller = query.hersteller
  console.log(data.filter((data) => data.firmenkategorie === 'hersteller'))
  const imglink = 'https://cms.ariscorp.de/assets/'

  useEffect(() => {
    if (urlquery != null && urlquery != '') {
      setActiveTab(urlquery)
    } else {
      setActiveTab(0)
    }

    if (urlqueryhersteller != null && urlqueryhersteller != '') {
      setActiveSecondaryTab(urlqueryhersteller)
    } else {
      setActiveSecondaryTab(0)
    }
  }, [urlquery, urlqueryhersteller])

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto">
      <Tab.Group
        selectedIndex={activeTab}
        onChange={(event) =>
          urlqueryhersteller != null && urlqueryhersteller != ''
            ? replace(
                { query: { tab: event, hersteller: urlqueryhersteller } },
                undefined,
                { shallow: true }
              )
            : replace({ query: { tab: event } }, undefined, { shallow: true }) +
              setActiveTab(event)
        }
      >
        <Tab.List className="flex flex-wrap justify-between">
          <h1>FIRMEN</h1>
          <hr />
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' p-3 m-1 transition-all duration-300 ease-in-out'
            }
          >
            <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl text-inherit">
              HERSTELLER
            </h1>
          </Tab>
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' p-3 m-1 transition-all duration-300 ease-in-out'
            }
          >
            <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl text-inherit">
              DIENSTLEISTER
            </h1>
          </Tab>
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' p-3 m-1 transition-all duration-300 ease-in-out'
            }
          >
            <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl text-inherit">
              SHOPS
            </h1>
          </Tab>
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' p-3 m-1 transition-all duration-300 ease-in-out'
            }
          >
            <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl text-inherit">
              ORGANISATIONS
            </h1>
          </Tab>
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' p-3 m-1 transition-all duration-300 ease-in-out'
            }
          >
            <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl text-inherit">
              OTHER
            </h1>
          </Tab>
          <hr />
        </Tab.List>
        <Tab.Panels className={'px-4'}>
          <Tab.Panel>
            <Tab.Group
              selectedIndex={activeSecondaryTab}
              onChange={(event) =>
                (urlquery != null && urlquery != ''
                  ? replace(
                      { query: { tab: urlquery, hersteller: event } },
                      undefined,
                      { shallow: true }
                    )
                  : replace({ query: { hersteller: event } }, undefined, {
                      shallow: true,
                    })) + setActiveSecondaryTab(event)
              }
            >
              <Tab.List className="flex flex-wrap justify-between">
                <Tab
                  className={({ selected }) =>
                    (selected ? 'text-secondary' : 'opacity-50') +
                    ' p-3 m-1 transition-all duration-300 ease-in-out flex w-full'
                  }
                >
                  <h1 className="text-base uppercase md:text-lg lg:text-xl text-inherit">
                    RAUMSCHIFFE / FAHRZEUGE
                  </h1>
                </Tab>
                <Tab
                  className={({ selected }) =>
                    (selected ? 'text-secondary' : 'opacity-50') +
                    ' p-3 m-1 transition-all duration-300 ease-in-out'
                  }
                >
                  <h1 className="text-base uppercase md:text-lg lg:text-xl text-inherit">
                    Komponenten
                  </h1>
                </Tab>
                <Tab
                  className={({ selected }) =>
                    (selected ? 'text-secondary' : 'opacity-50') +
                    ' p-3 m-1 transition-all duration-300 ease-in-out'
                  }
                >
                  <h1 className="text-base uppercase md:text-lg lg:text-xl text-inherit">
                    Waffen
                  </h1>
                </Tab>
                <Tab
                  className={({ selected }) =>
                    (selected ? 'text-secondary' : 'opacity-50') +
                    ' p-3 m-1 transition-all duration-300 ease-in-out'
                  }
                >
                  <h1 className="text-base uppercase md:text-lg lg:text-xl text-inherit">
                    Personenausrüstung
                  </h1>
                </Tab>
              </Tab.List>
              <Tab.Panels className={'px-4 pt-16'}>
                <Tab.Panel>
                  <div className="grid justify-between grid-cols-4 gap-x-10 gap-y-8">
                    {data
                      .filter(
                        (data) =>
                          data.firmenkategorie === 'hersteller' &&
                          data.firmenherstellerkategorie === 'schiffshersteller'
                      )
                      .map((data) => (
                        <>
                          <FirmenCard data={data} />
                        </>
                      ))}
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid justify-between grid-cols-4 gap-x-10 gap-y-8">
                    {data
                      .filter(
                        (data) =>
                          data.firmenkategorie === 'hersteller' &&
                          data.firmenherstellerkategorie ===
                            'komponentenhersteller'
                      )
                      .map((data) => (
                        <>
                          <FirmenCard data={data} />
                        </>
                      ))}
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid justify-between grid-cols-4 gap-x-10 gap-y-8">
                    {data
                      .filter(
                        (data) =>
                          data.firmenkategorie === 'hersteller' &&
                          data.firmenherstellerkategorie === 'waffenhersteller'
                      )
                      .map((data) => (
                        <>
                          <FirmenCard data={data} />
                        </>
                      ))}
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid justify-between grid-cols-4 gap-x-10 gap-y-8">
                    {data
                      .filter(
                        (data) =>
                          data.firmenkategorie === 'hersteller' &&
                          data.firmenherstellerkategorie ===
                            'Personenausruestungshersteller'
                      )
                      .map((data) => (
                        <>
                          <FirmenCard data={data} />
                        </>
                      ))}
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
            {/* <div className="grid justify-between grid-cols-4 gap-x-10 gap-y-8">
              {data
                .filter((data) => data.firmenkategorie === 'hersteller')
                .map((data) => (
                  <>
                    <FirmenCard data={data} />
                  </>
                ))} 
            </div>*/}
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <div className="grid justify-between grid-cols-4 gap-x-10 gap-y-8">
                {data
                  .filter((data) => data.firmenkategorie === 'dienstleister')
                  .map((data) => (
                    <>
                      <FirmenCard data={data} />
                    </>
                  ))}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <div className="grid justify-between grid-cols-4 gap-x-10 gap-y-8">
                {data
                  .filter((data) => data.firmenkategorie === 'geschäfte')
                  .map((data) => (
                    <>
                      <FirmenCard data={data} />
                    </>
                  ))}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <div className="grid justify-between grid-cols-4 gap-x-10 gap-y-8">
                {data
                  .filter((data) => data.firmenkategorie === 'organisation')
                  .map((data) => (
                    <>
                      <FirmenCard data={data} />
                    </>
                  ))}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <div className="grid justify-between grid-cols-4 gap-x-10 gap-y-8">
                {data
                  .filter((data) => data.firmenkategorie === 'verschiedenes')
                  .map((data) => (
                    <>
                      <FirmenCard data={data} />
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

Firmen.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
