import Layout from 'pages/VerseExkurs/layout'
import Image from 'next/image'
import Link from 'next/link'
import { client } from 'pages/_app'
import { GET_VERSEEXKURS_LITERATUREN } from 'graphql/queries'

export async function getServerSideProps() {
  const { data } = await client.query({ query: GET_VERSEEXKURS_LITERATUREN })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: await data.literatur_reihen,
    },
  }
}

export default function LiteraturReihenPage(data) {
  const Data = data.data

  return (
    <div className="pt-3 print:pt-0">
      <div className="flex flex-wrap w-full aspect-[40/21] scale-90">
        <div className="relative w-full">
          <Image
            src="https://cms.ariscorp.de/assets/93f3722e-943d-491e-85d5-2b15ef82107d"
            layout="fill"
            alt="Literatur Banner"
            placeholder="blur"
            blurDataURL="https://cms.ariscorp.de/assets/93f3722e-943d-491e-85d5-2b15ef82107d"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="-mt-5 scale-95">
        <hr />
      </div>
      <div>
        {Data.map((data) => (
          <div
            key={data.id}
            className="w-full h-48 transition-all duration-300 ease-in-out my-14 hover:shadow-2xl hover:shadow-secondary"
          >
            <Link href={'/VerseExkurs/literatur/' + data.id}>
              <a className="pr-0 text-white decoration-transparent">
                <div className="flex items-center w-full h-full px-8">
                  <div className={'relative h-3/4 w-1/3'}>
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        data.reihen_cover?.id
                      }
                      layout="fill"
                      alt={
                        'Banner von der Literatur Reihe ' + data.reihen_titel
                      }
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/' +
                        data.reihen_cover?.id +
                        '?width=16&quality=1'
                      }
                      objectFit="cover"
                    />
                  </div>
                  <div className="w-2/3 px-10 text-xs sm:text-base">
                    <h1 className="text-primary">{data.reihen_titel}</h1>
                  </div>
                </div>
              </a>
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}

LiteraturReihenPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
