import Layout from '../layout'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import client from 'apollo/clients'
import { GET_VERSEEXKURS_FIRMEN } from 'graphql/queries'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import FirmenCard from 'components/VerseExkursFirmenGrid'
import Link from 'next/link'

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

export default function Hersteller({ data }) {
  return (
    <div className="items-center max-w-6xl pt-10 mx-auto">
      <Tab.Group>
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
            <Link href={"/VerseExkurs/dienstleister"}>
              <a><p>Dienstleister,</p></a>
            </Link>
            <Link href={"/VerseExkurs/geschafte"}>
              <a><p>Geschäfte,</p></a>
            </Link>
            <Link href={"/VerseExkurs/organisationen"}>
              <a><p>Organisationen,</p></a>
            </Link>
            <Link href={"/VerseExkurs/Verschiedenes"}>
              <a><p>Verschiedenes</p></a>
            </Link>
          </div>
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
                    data.firmenherstellerkategorie === 'komponentenhersteller'
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
    </div>
  )
}

Hersteller.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
