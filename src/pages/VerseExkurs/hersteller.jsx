import Layout from './layout'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import client from 'apollo/clients'
import { GET_VERSEEXKURS_FIRMEN_HERSTELLER } from 'graphql/queries'
import { Tab } from '@headlessui/react'
import CardDisplay from 'components/VerseExkursCardDisplay'
import Link from 'next/link'
import Head from 'next/head'

export async function getServerSideProps () {
  const { data } = await client.query({
    query: GET_VERSEEXKURS_FIRMEN_HERSTELLER,
  })

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

export default function Hersteller ({ data }) {
  const { replace, query } = useRouter()
  const [activeTab, setActiveTab] = useState()
  const urlquery = query.tab

  useEffect(() => {
    if (urlquery != null && urlquery != '') {
      setActiveTab(urlquery)
    } else {
      setActiveTab(0)
    }
  }, [urlquery])

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto">
      <Head>
        <title>
          Hersteller - Astro Research and Industrial Service Corporation
        </title>
      </Head>
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
              ' p-3 m-1 transition-all duration-300 ease-in-out w-full flex'
            }
          >
            <h1 className="text-base uppercase sm:text-lg md:text-xl lg:text-3xl text-inherit">
              RAUMSCHIFFE / FAHRZEUGE
            </h1>
          </Tab>
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' p-3 m-1 transition-all duration-300 ease-in-out'
            }
          >
            <h1 className="text-base uppercase sm:text-lg md:text-xl lg:text-3xl text-inherit">
              Komponenten
            </h1>
          </Tab>
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' p-3 m-1 transition-all duration-300 ease-in-out'
            }
          >
            <h1 className="text-base uppercase sm:text-lg md:text-xl lg:text-3xl text-inherit">
              Waffen
            </h1>
          </Tab>
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' p-3 m-1 transition-all duration-300 ease-in-out'
            }
          >
            <h1 className="text-base uppercase sm:text-lg md:text-xl lg:text-3xl text-inherit">
              Personenausrüstung
            </h1>
          </Tab>
          <hr />
          <div className="flex px-4 space-x-4">
            <Link legacyBehavior href={'/VerseExkurs/dienstleister'}>
              <a>
                <p>Dienstleister,</p>
              </a>
            </Link>
            <Link legacyBehavior href={'/VerseExkurs/geschafte'}>
              <a>
                <p>Geschäfte,</p>
              </a>
            </Link>
            <Link legacyBehavior href={'/VerseExkurs/organisationen'}>
              <a>
                <p>Organisationen,</p>
              </a>
            </Link>
            <Link legacyBehavior href={'/VerseExkurs/verschiedene'}>
              <a>
                <p>Verschiedene</p>
              </a>
            </Link>
          </div>
        </Tab.List>
        <Tab.Panels className={'px-4'}>
          <Tab.Panel>
            <div className="grid justify-between grid-cols-4 gap-x-10 gap-y-8">
              {data
                .filter(
                  (data) =>
                    data.firmenherstellerkategorie === 'schiffshersteller'
                )
                .map((data) => (
                  <>
                    <CardDisplay image={data.firmen_trans_logo.id} link={'/VerseExkurs/firmen/' + data.firmen_name} alt={data.firmen_name} />
                  </>
                ))}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid justify-between grid-cols-4 gap-x-10 gap-y-8">
              {data
                .filter(
                  (data) =>
                    data.firmenherstellerkategorie === 'komponentenhersteller'
                )
                .map((data) => (
                  <>
                    <CardDisplay image={data.firmen_trans_logo.id} link={'/VerseExkurs/firmen/' + data.firmen_name} alt={data.firmen_name} />
                  </>
                ))}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid justify-between grid-cols-4 gap-x-10 gap-y-8">
              {data
                .filter(
                  (data) =>
                    data.firmenherstellerkategorie === 'waffenhersteller'
                )
                .map((data) => (
                  <>
                    <CardDisplay image={data.firmen_trans_logo.id} link={'/VerseExkurs/firmen/' + data.firmen_name} alt={data.firmen_name} />
                  </>
                ))}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid justify-between grid-cols-4 gap-x-10 gap-y-8">
              {data
                .filter(
                  (data) =>
                    data.firmenherstellerkategorie ===
                    'Personenausruestungshersteller'
                )
                .map((data) => (
                  <>
                    <CardDisplay image={data.firmen_trans_logo.id} link={'/VerseExkurs/firmen/' + data.firmen_name} alt={data.firmen_name} />
                  </>
                ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

Hersteller.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
