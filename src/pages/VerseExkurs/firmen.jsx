import Layout from './layout'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import client from 'apollo/clients'
import { GET_VERSEEXKURS_FIRMEN } from 'graphql/queries'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
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
  console.log(data.filter((data) => data.firmenkategorie === 'hersteller'))
  const imglink = 'https://cms.ariscorp.de/assets/'

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto">
      <Tab.Group>
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
            <Tab.Group>
              <Tab.List className="flex flex-wrap justify-between">
                <Tab
                  className={({ selected }) =>
                    (selected ? 'text-primary' : 'opacity-50') +
                    ' p-3 m-1 transition-all duration-300 ease-in-out'
                  }
                >
                  <h1 className="text-base uppercase md:text-lg lg:text-xl text-inherit">
                    RAUMSCHIFFE / FAHRZEUGE
                  </h1>
                </Tab>
                <Tab
                  className={({ selected }) =>
                    (selected ? 'text-primary' : 'opacity-50') +
                    ' p-3 m-1 transition-all duration-300 ease-in-out'
                  }
                >
                  <h1 className="text-base uppercase md:text-lg lg:text-xl text-inherit">
                    Komponenten
                  </h1>
                </Tab>
                <Tab
                  className={({ selected }) =>
                    (selected ? 'text-primary' : 'opacity-50') +
                    ' p-3 m-1 transition-all duration-300 ease-in-out'
                  }
                >
                  <h1 className="text-base uppercase md:text-lg lg:text-xl text-inherit">
                    Waffen
                  </h1>
                </Tab>
                <Tab
                  className={({ selected }) =>
                    (selected ? 'text-primary' : 'opacity-50') +
                    ' p-3 m-1 transition-all duration-300 ease-in-out'
                  }
                >
                  <h1 className="text-base uppercase md:text-lg lg:text-xl text-inherit">
                    Personenausrüstung
                  </h1>
                </Tab>
                <hr />
              </Tab.List>
              <Tab.Panels className={'px-4'}>
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
                  .filter(
                    (data) =>
                      data.firmenkategorie === 'dienstleister'
                  )
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
                  .filter(
                    (data) =>
                      data.firmenkategorie === 'geschäfte'
                  )
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
                  .filter(
                    (data) =>
                      data.firmenkategorie === 'organisation'
                  )
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
                  .filter(
                    (data) =>
                      data.firmenkategorie === 'verschiedenes'
                  )
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
