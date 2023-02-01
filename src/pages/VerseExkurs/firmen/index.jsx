import Layout from 'pages/VerseExkurs/layout'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import client from 'apollo/clients'
import { GET_VERSEEXKURS_FIRMEN } from 'graphql/queries'
import { Tab } from '@headlessui/react'
import CardDisplay from 'components/VerseExkursCardDisplay'
import { data } from 'autoprefixer'
import Head from 'next/head'

export async function getServerSideProps () {
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

export default function Firmen ({ data }) {
  const { replace, query } = useRouter()
  const [activeTab, setActiveTab] = useState(0)
  const [activeSecondaryTab, setActiveSecondaryTab] = useState(0)
  const [activeOtherTab, setActiveOtherTab] = useState(0)
  const urlquery = query.tab
  const urlqueryhersteller = query.hersteller
  const urlqueryother = query.other
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

    if (urlqueryother != null && urlqueryother != '') {
      setActiveOtherTab(urlqueryother)
    } else {
      setActiveOtherTab(0)
    }
  }, [urlquery, urlqueryhersteller, urlqueryother])

  const siteTitle = "Firmen - Astro Research and Industrial Service Corporation"
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
      <Tab.Group
        selectedIndex={activeTab}
        onChange={(event) =>
          urlqueryhersteller != null && urlqueryhersteller != ''
            ? replace(
              {
                query: {
                  tab: event,
                  hersteller: urlqueryhersteller,
                  other: urlqueryother,
                },
              },
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
              ANDERE
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
                    {
                      query: {
                        tab: urlquery,
                        hersteller: event,
                        other: urlqueryother,
                      },
                    },
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
                <hr />
              </Tab.List>
              <Tab.Panels className={'px-4 pt-16'}>
                <Tab.Panel>
                  <div className="grid justify-between grid-cols-2 xs:grid-cols-4 gap-x-10 gap-y-8">
                    {data
                      .filter(
                        (data) =>
                          data.firmenkategorie === 'hersteller' &&
                          data.firmenherstellerkategorie === 'schiffshersteller'
                      )
                      .map((data) => (
                        <>
                          <CardDisplay
                            image={data.firmen_trans_logo.id}
                            link={'/VerseExkurs/firmen/' + data.firmen_name}
                            alt={data.firmen_name}
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
                          data.firmenkategorie === 'hersteller' &&
                          data.firmenherstellerkategorie ===
                          'komponentenhersteller'
                      )
                      .map((data) => (
                        <>
                          <CardDisplay
                            image={data.firmen_trans_logo.id}
                            link={'/VerseExkurs/firmen/' + data.firmen_name}
                            alt={data.firmen_name}
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
                          data.firmenkategorie === 'hersteller' &&
                          data.firmenherstellerkategorie === 'waffenhersteller'
                      )
                      .map((data) => (
                        <>
                          <CardDisplay
                            image={data.firmen_trans_logo.id}
                            link={'/VerseExkurs/firmen/' + data.firmen_name}
                            alt={data.firmen_name}
                          />
                        </>
                      ))}
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid justify-between grid-cols-2 xs:grid-cols-4 gap-x-10 gap-y-8">
                    <div
                      className={
                        'col-span-2 xs:col-span-4' +
                        (data.filter(
                          (data) =>
                            data.firmenkategorie === 'hersteller' &&
                            data.firmenherstellerkategorie ===
                            'Personenausruestungshersteller' &&
                            data.firmenpersonenasrustungsherstellerkategorie ===
                            'armor'
                        )[0] == null
                          ? ' hidden'
                          : '')
                      }
                    >
                      <h2 className="pb-0 mb-0 text-primary">Rüstungen:</h2>
                      <hr />
                    </div>
                    {data
                      .filter(
                        (data) =>
                          data.firmenkategorie === 'hersteller' &&
                          data.firmenherstellerkategorie ===
                          'Personenausruestungshersteller' &&
                          data.firmenpersonenasrustungsherstellerkategorie ===
                          'armor'
                      )
                      .map((data) => (
                        <>
                          <CardDisplay
                            image={data.firmen_trans_logo.id}
                            link={'/VerseExkurs/firmen/' + data.firmen_name}
                            alt={data.firmen_name}
                          />
                        </>
                      ))}
                    <div
                      className={
                        'col-span-2 xs:col-span-4' +
                        (data.filter(
                          (data) =>
                            data.firmenkategorie === 'hersteller' &&
                            data.firmenherstellerkategorie ===
                            'Personenausruestungshersteller' &&
                            data.firmenpersonenasrustungsherstellerkategorie ===
                            'clothing'
                        )[0] == null
                          ? ' hidden'
                          : '')
                      }
                    >
                      <h2 className="pb-0 mb-0 text-primary">Kleidung:</h2>
                      <hr />
                    </div>
                    {data
                      .filter(
                        (data) =>
                          data.firmenkategorie === 'hersteller' &&
                          data.firmenherstellerkategorie ===
                          'Personenausruestungshersteller' &&
                          data.firmenpersonenasrustungsherstellerkategorie ===
                          'clothing'
                      )
                      .map((data) => (
                        <>
                          <CardDisplay
                            image={data.firmen_trans_logo.id}
                            link={'/VerseExkurs/firmen/' + data.firmen_name}
                            alt={data.firmen_name}
                          />
                        </>
                      ))}
                    <div
                      className={
                        'col-span-2 xs:col-span-4' +
                        (data.filter(
                          (data) =>
                            data.firmenkategorie === 'hersteller' &&
                            data.firmenherstellerkategorie ===
                            'Personenausruestungshersteller' &&
                            data.firmenpersonenasrustungsherstellerkategorie ===
                            'weapon_mods'
                        )[0] == null
                          ? ' hidden'
                          : '')
                      }
                    >
                      <h2 className="pb-0 mb-0 text-primary">Waffen Mods:</h2>
                      <hr />
                    </div>
                    {data
                      .filter(
                        (data) =>
                          data.firmenkategorie === 'hersteller' &&
                          data.firmenherstellerkategorie ===
                          'Personenausruestungshersteller' &&
                          data.firmenpersonenasrustungsherstellerkategorie ===
                          'weapon_mods'
                      )
                      .map((data) => (
                        <>
                          <CardDisplay
                            image={data.firmen_trans_logo.id}
                            link={'/VerseExkurs/firmen/' + data.firmen_name}
                            alt={data.firmen_name}
                          />
                        </>
                      ))}
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <div className="grid justify-between grid-cols-2 xs:grid-cols-4 gap-x-10 gap-y-8">
                {data
                  .filter((data) => data.firmenkategorie === 'dienstleister')
                  .map((data) => (
                    <>
                      <CardDisplay
                        image={data.firmen_trans_logo.id}
                        link={'/VerseExkurs/firmen/' + data.firmen_name}
                        alt={data.firmen_name}
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
                  .filter((data) => data.firmenkategorie === 'geschäfte')
                  .map((data) => (
                    <>
                      <CardDisplay
                        image={data.firmen_trans_logo.id}
                        link={'/VerseExkurs/firmen/' + data.firmen_name}
                        alt={data.firmen_name}
                      />
                    </>
                  ))}
              </div>
            </div>
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
                        hersteller: urlqueryhersteller,
                        other: event,
                      },
                    },
                    undefined,
                    { shallow: true }
                  )
                  : replace({ query: { other: event } }, undefined, {
                    shallow: true,
                  })) + setActiveOtherTab(event)
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
                    Lebensmittel
                  </h1>
                </Tab>
                <Tab
                  className={({ selected }) =>
                    (selected ? 'text-secondary' : 'opacity-50') +
                    ' p-3 m-1 transition-all duration-300 ease-in-out'
                  }
                >
                  <h1 className="text-base uppercase md:text-lg lg:text-xl text-inherit">
                    Medizin & Forschung
                  </h1>
                </Tab>
                <Tab
                  className={({ selected }) =>
                    (selected ? 'text-secondary' : 'opacity-50') +
                    ' p-3 m-1 transition-all duration-300 ease-in-out'
                  }
                >
                  <h1 className="text-base uppercase md:text-lg lg:text-xl text-inherit">
                    Versicherungen
                  </h1>
                </Tab>
                <Tab
                  className={({ selected }) =>
                    (selected ? 'text-secondary' : 'opacity-50') +
                    ' p-3 m-1 transition-all duration-300 ease-in-out'
                  }
                >
                  <h1 className="text-base uppercase md:text-lg lg:text-xl text-inherit">
                    Software Entwickler
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
                          data.firmenkategorie === 'verschiedenes' &&
                          data.othercategory === 'food'
                      )
                      .map((data) => (
                        <>
                          <CardDisplay
                            image={data.firmen_trans_logo.id}
                            link={'/VerseExkurs/firmen/' + data.firmen_name}
                            alt={data.firmen_name}
                          />
                        </>
                      ))}
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid justify-between grid-cols-2 xs:grid-cols-4 gap-x-10 gap-y-8">
                    <div
                      className={
                        'col-span-2 xs:col-span-4' +
                        (data.filter(
                          (data) =>
                            data.firmenkategorie === 'verschiedenes' &&
                            data.othercategory === 'medicine' &&
                            data.medicinecategory === 'hospitals'
                        )[0] == null
                          ? ' hidden'
                          : '')
                      }
                    >
                      <h2 className="pb-0 mb-0 text-primary">Krankenhäuser:</h2>
                      <hr />
                    </div>
                    {data
                      .filter(
                        (data) =>
                          data.firmenkategorie === 'verschiedenes' &&
                          data.othercategory === 'medicine' &&
                          data.medicinecategory === 'hospitals'
                      )
                      .map((data) => (
                        <>
                          <CardDisplay
                            image={data.firmen_trans_logo.id}
                            link={'/VerseExkurs/firmen/' + data.firmen_name}
                            alt={data.firmen_name}
                          />
                        </>
                      ))}
                    <div
                      className={
                        'col-span-2 xs:col-span-4' +
                        (data.filter(
                          (data) =>
                            data.firmenkategorie === 'verschiedenes' &&
                            data.othercategory === 'medicine' &&
                            data.medicinecategory === 'medicine_technologie'
                        )[0] == null
                          ? ' hidden'
                          : '')
                      }
                    >
                      <h2 className="pb-0 mb-0 text-primary">
                        Medizinische Technologien:
                      </h2>
                      <hr />
                    </div>
                    {data
                      .filter(
                        (data) =>
                          data.firmenkategorie === 'verschiedenes' &&
                          data.othercategory === 'medicine' &&
                          data.medicinecategory === 'medicine_technologie'
                      )
                      .map((data) => (
                        <>
                          <CardDisplay
                            image={data.firmen_trans_logo.id}
                            link={'/VerseExkurs/firmen/' + data.firmen_name}
                            alt={data.firmen_name}
                          />
                        </>
                      ))}
                    <div
                      className={
                        'col-span-2 xs:col-span-4' +
                        (data.filter(
                          (data) =>
                            data.firmenkategorie === 'verschiedenes' &&
                            data.othercategory === 'medicine' &&
                            data.medicinecategory === 'farmer'
                        )[0] == null
                          ? ' hidden'
                          : '')
                      }
                    >
                      <h2 className="pb-0 mb-0 text-primary">Farmer:</h2>
                      <hr />
                    </div>
                    {data
                      .filter(
                        (data) =>
                          data.firmenkategorie === 'verschiedenes' &&
                          data.othercategory === 'medicine' &&
                          data.medicinecategory === 'farmer'
                      )
                      .map((data) => (
                        <>
                          <CardDisplay
                            image={data.firmen_trans_logo.id}
                            link={'/VerseExkurs/firmen/' + data.firmen_name}
                            alt={data.firmen_name}
                          />
                        </>
                      ))}
                    <div
                      className={
                        'col-span-2 xs:col-span-4' +
                        (data.filter(
                          (data) =>
                            data.firmenkategorie === 'verschiedenes' &&
                            data.othercategory === 'medicine' &&
                            data.medicinecategory === 'scientific_research'
                        )[0] == null
                          ? ' hidden'
                          : '')
                      }
                    >
                      <h2 className="pb-0 mb-0 text-primary">
                        Wissenschaftliche Forschung:
                      </h2>
                      <hr />
                    </div>
                    {data
                      .filter(
                        (data) =>
                          data.firmenkategorie === 'verschiedenes' &&
                          data.othercategory === 'medicine' &&
                          data.medicinecategory === 'scientific_research'
                      )
                      .map((data) => (
                        <>
                          <CardDisplay
                            image={data.firmen_trans_logo.id}
                            link={'/VerseExkurs/firmen/' + data.firmen_name}
                            alt={data.firmen_name}
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
                          data.firmenkategorie === 'verschiedenes' &&
                          data.othercategory === 'insurances'
                      )
                      .map((data) => (
                        <>
                          <CardDisplay
                            image={data.firmen_trans_logo.id}
                            link={'/VerseExkurs/firmen/' + data.firmen_name}
                            alt={data.firmen_name}
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
                          data.firmenkategorie === 'verschiedenes' &&
                          data.othercategory === 'software_developer'
                      )
                      .map((data) => (
                        <>
                          <CardDisplay
                            image={data.firmen_trans_logo.id}
                            link={'/VerseExkurs/firmen/' + data.firmen_name}
                            alt={data.firmen_name}
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

Firmen.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
