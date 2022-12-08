import Layout from './layout'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import client from 'apollo/clients'
import { GET_VERSEEXKURS_FIRMEN_ORGANISATIONS } from 'graphql/queries'
import { Tab } from '@headlessui/react'
import Image from 'next/legacy/image'
import CardDisplay from 'components/VerseExkursCardDisplay'
import Link from 'next/link'
import Head from 'next/head'

export async function getServerSideProps () {
  const { data } = await client.query({
    query: GET_VERSEEXKURS_FIRMEN_ORGANISATIONS,
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

export default function Organisationen ({ data }) {
  return (
    <div className="items-center max-w-6xl pt-10 mx-auto">
      <Head>
        <title>
          Astro Research and Industrial Service Corporation - VerseExurs: Organisationen
        </title>
      </Head>
      <div className="flex flex-wrap">
        <div className="mx-auto text-primary">
          <h1 className="text-base uppercase text-primary sm:text-lg md:text-xl lg:text-3xl text-inherit">
            Organisationen
          </h1>
        </div>
        <hr />
        <div className="flex px-4 space-x-4">
          <Link legacyBehavior href={'/VerseExkurs/hersteller'}>
            <a>
              <p>Hersteller,</p>
            </a>
          </Link>
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
          <Link legacyBehavior href={'/VerseExkurs/verschiedene'}>
            <a>
              <p>Verschiedene</p>
            </a>
          </Link>
        </div>
      </div>
      <div className="grid justify-between grid-cols-4 gap-x-10 gap-y-8">
        {data.map((data) => (
          <>
            <CardDisplay image={data.firmen_trans_logo.id} link={'/VerseExkurs/firmen/' + data.firmen_name} alt={data.firmen_name} />
          </>
        ))}
      </div>
    </div>
  )
}

Organisationen.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
