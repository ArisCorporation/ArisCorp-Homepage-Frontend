import Layout from './layout'
import Image from 'next/image'
import { GET_VERSEEXKURS_ALIENRASSEN } from 'graphql/queries'
import client from 'apollo/clients'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

export async function getServerSideProps () {
  const { data } = await client.query({
    query: GET_VERSEEXKURS_ALIENRASSEN,
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: await data.alienrassen,
    },
  }
}

export default function Alienrassen ({ data }) {
  const router = useRouter()
  const siteTitle = "Alienrassen - Astro Research and Industrial Service Corporation"

  return (
    <div className="items-center pt-10 mx-auto print:pt-5">
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
      <h1 className="mb-4 text-lg text-center md:mb-6 lg:mb-12 text-primary md:text-xl lg:text-3xl">
        Clicken sie auf die Alienrasse die sie sehen wollen.
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <Link legacyBehavior href="/VerseExkurs/banu">
          <a className=" hover:cursor-pointer">
            <div className="relative aspect-[750/1100]">
              <Image
                src={
                  'https://cms.ariscorp.de/assets/' +
                  '5c801a7b-89b5-481d-bce9-623b869c83ae'
                }
                alt="Banu Potrait"
                className=""
                blurDataURL={''}
                fill
                placeholder={''}
              />
            </div>
            <h2 className="text-center text-secondary">Banu</h2>
          </a>
        </Link>
        <Link legacyBehavior href="/VerseExkurs/tevarin">
          <a className="hover:cursor-pointer">
            <div className="relative aspect-[750/1100]">
              <Image
                src={
                  'https://cms.ariscorp.de/assets/' +
                  '90e34d34-7b8a-4f74-90aa-62f6e220ed65'
                }
                alt="Tevarin Potrait"
                blurDataURL={''}
                fill
                placeholder={''}
              />
            </div>
            <h2 className="text-center text-secondary">Tevarin</h2>
          </a>
        </Link>
        <Link legacyBehavior href="/VerseExkurs/vanduul">
          <a className="hover:cursor-pointer">
            <div className="relative aspect-[750/1100]">
              <Image
                src={
                  'https://cms.ariscorp.de/assets/' +
                  '137383b7-5c18-4247-8b10-a575bce24cd5'
                }
                alt="Vanduul Potrait"
                blurDataURL={''}
                fill
                placeholder={''}
              />
            </div>
            <h2 className="text-center text-secondary">Vanduul</h2>
          </a>
        </Link>
        <Link legacyBehavior href="/VerseExkurs/xian">
          <a className="hover:cursor-pointer">
            <div className="relative aspect-[750/1100]">
              <Image
                src={
                  'https://cms.ariscorp.de/assets/' +
                  '58708a2f-ac13-438c-8df0-dc84dc628ce9'
                }
                alt="Xi'An Potrait"
                blurDataURL={''}
                fill
                placeholder={''}
              />
            </div>
            <h2 className="text-center text-secondary">Xi{"'"}An</h2>
          </a>
        </Link>
        <Link legacyBehavior href="/VerseExkurs/biestarium">
          <a className="sm:col-span-2 md:col-span-4 hover:cursor-pointer">
            <div className="relative aspect-[3160/1100]">
              <Image
                src={
                  'https://cms.ariscorp.de/assets/' +
                  'a1f0653a-65a2-45c6-964f-9c5b9cb3d4f0'
                }
                alt="Biestarium Potrait"
                blurDataURL={''}
                fill
                objectFit="cover"
                placeholder={''}
              />
            </div>
            <h2 className="text-center text-secondary">Biestarium</h2>
          </a>
        </Link>
        <Link legacyBehavior href="/VerseExkurs/pflanzen">
          <a className="sm:col-span-2 md:col-span-4 hover:cursor-pointer">
            <div className="relative aspect-[3160/1100]">
              <Image
                src={
                  'https://cms.ariscorp.de/assets/' +
                  '15c5cc03-b23d-4b73-ad27-d4e0b2eb9837'
                }
                alt="Pflanzen Potrait"
                blurDataURL={''}
                fill
                objectFit="cover"
                placeholder={''}
              />
            </div>
            <h2 className="text-center text-secondary">Pflanzen</h2>
          </a>
        </Link>
      </div>
    </div>
  )
}

Alienrassen.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
