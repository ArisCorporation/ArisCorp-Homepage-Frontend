import Layout from './layout'
import Image from 'next/image'
import { GET_VERSEEXKURS_ALIENRASSEN } from 'graphql/queries'
import client from 'apollo/clients'
import { useRouter } from 'next/router'
import Link from 'next/link'

export async function getServerSideProps() {
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

export default function Alienrassen({ data }) {
  const router = useRouter()

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto print:pt-5">
      <h1 className='mb-4 text-lg text-center md:mb-6 lg:mb-12 text-primary md:text-xl lg:text-3xl'>Clicken sie auf die Alienrasse die sie sehen wollen.</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <Link href="/VerseExkurs/banu">
          <a className="relative aspect-[750/1100] hover:cursor-pointer">
            <Image
              src={
                'https://cms.ariscorp.de/assets/' +
                '5c801a7b-89b5-481d-bce9-623b869c83ae'
              }
              alt="Banu Potrait"
              className=""
              blurDataURL={''}
              layout="fill"
              placeholder={''}
            />
          </a>
        </Link>
        <Link href="/VerseExkurs/tevarin">
          <a className="relative aspect-[750/1100] hover:cursor-pointer">
            <Image
              src={
                'https://cms.ariscorp.de/assets/' +
                '90e34d34-7b8a-4f74-90aa-62f6e220ed65'
              }
              alt="Banu Potrait"
              blurDataURL={''}
              layout="fill"
              placeholder={''}
            />
          </a>
        </Link>
        <Link href="/VerseExkurs/vanduul">
          <a className="relative aspect-[750/1100] hover:cursor-pointer">
            <Image
              src={
                'https://cms.ariscorp.de/assets/' +
                '137383b7-5c18-4247-8b10-a575bce24cd5'
              }
              alt="Banu Potrait"
              blurDataURL={''}
              layout="fill"
              placeholder={''}
            />
          </a>
        </Link>
        <Link href="/VerseExkurs/xian">
          <a className="relative aspect-[750/1100] hover:cursor-pointer">
            <Image
              src={
                'https://cms.ariscorp.de/assets/' +
                '58708a2f-ac13-438c-8df0-dc84dc628ce9'
              }
              alt="Banu Potrait"
              blurDataURL={''}
              layout="fill"
              placeholder={''}
            />
          </a>
        </Link>
        <Link href="/VerseExkurs/biestarium">
          <a className="relative sm:col-span-2 md:col-span-4 aspect-[3160/1100] hover:cursor-pointer">
            <Image
              src={
                'https://cms.ariscorp.de/assets/' +
                'a1f0653a-65a2-45c6-964f-9c5b9cb3d4f0'
              }
              alt="Banu Potrait"
              blurDataURL={''}
              layout="fill"
              objectFit="cover"
              placeholder={''}
            />
          </a>
        </Link>
        <Link href="/VerseExkurs/pflanzen">
          <a className="relative sm:col-span-2 md:col-span-4 aspect-[3160/1100] hover:cursor-pointer">
            <Image
              src={
                'https://cms.ariscorp.de/assets/' +
                '15c5cc03-b23d-4b73-ad27-d4e0b2eb9837'
              }
              alt="Banu Potrait"
              blurDataURL={''}
              layout="fill"
              objectFit="cover"
              placeholder={''}
            />
          </a>
        </Link>
      </div>
    </div>
  )
}

Alienrassen.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
