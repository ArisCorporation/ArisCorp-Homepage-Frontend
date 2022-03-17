import Layout from './layout'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import client from 'apollo/clients'
import { GET_VERSEEXKURS_FIRMEN_ORGANISATIONS } from 'graphql/queries'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import FirmenCard from 'components/VerseExkursFirmenGrid'
import Link from 'next/link'

export async function getServerSideProps() {
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

export default function Organisationen({ data }) {
  return (
    <div className="items-center max-w-6xl pt-10 mx-auto">
      <div className="flex flex-wrap">
        <div className="mx-auto text-primary">
          <h1 className="text-base uppercase text-primary sm:text-lg md:text-xl lg:text-3xl text-inherit">
            Organisationen
          </h1>
        </div>
        <hr />
        <div className="flex px-4 space-x-4">
          <Link href={'/VerseExkurs/hersteller'}>
            <a>
              <p>Hersteller,</p>
            </a>
          </Link>
          <Link href={'/VerseExkurs/dienstleister'}>
            <a>
              <p>Dienstleister,</p>
            </a>
          </Link>
          <Link href={'/VerseExkurs/geschafte'}>
            <a>
              <p>Geschäfte,</p>
            </a>
          </Link>
          <Link href={'/VerseExkurs/verschiedene'}>
            <a>
              <p>Verschiedene</p>
            </a>
          </Link>
        </div>
      </div>
      <div className="grid justify-between grid-cols-4 gap-x-10 gap-y-8">
        {data.map((data) => (
          <>
            <FirmenCard data={data} />
          </>
        ))}
      </div>
    </div>
  )
}

Organisationen.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
