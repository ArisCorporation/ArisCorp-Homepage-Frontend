import Layout from 'pages/VerseExkurs/layout'
import Image from 'next/legacy/image'
import client from 'apollo/clients'
import { GET_VERSEEXKURS_LITERATUREN } from 'graphql/queries'
import ArticleCard from 'components/VerseExkursArticleCard'
import Head from 'next/head'

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
    <Head>
      <title>
        Astro Research and Industrial Service Corporation - VerseExurs: Literatur
      </title>
    </Head>
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
          <ArticleCard
            key={data.id}
            link={
              data.literatur_reihen_single_kapitel_bool == true
                ? 'literatur/s/' + data.id
                : 'literatur/' + data.id
            }
            title={data.reihen_titel}
            image={data.reihen_cover?.id}
            seperator={true}
          />
        ))}
      </div>
    </div>
  )
}

LiteraturReihenPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
