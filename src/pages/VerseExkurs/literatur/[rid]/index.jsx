import Layout from 'pages/VerseExkurs/layout'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_VERSEEXKURS_LITERATUR_REIHE } from 'graphql/queries'
import ArticleCard from 'components/VerseExkursArticleCard'
import Head from 'next/head'
import client from 'apollo/clients'

export async function getServerSideProps (context) {
  const { params } = context
  const { rid } = params
  const rId = parseFloat(rid)

  let { data } = await client.query({
    query: GET_VERSEEXKURS_LITERATUR_REIHE,
    variables: { rId },
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  data = data.literatur
  const reihe = data.filter((data) => data.literatur_reihe.id == rid)[0].literatur_reihe
  const reihen = data.filter((data) => data.literatur_reihe.id == rid)

  const siteTitle = reihe.reihen_titel + " - Astro Research and Industrial Service Corporation"

  return {
    props: {
      data,
      reihe,
      reihen,
      siteTitle
    },
  }
}

export default function LiteraturReihenPage ({ data, reihe, reihen, siteTitle }) {
  return (
    <div className="pt-3 print:pt-0">
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
      <div className={"px-12 flex flex-wrap w-full aspect-[" + reihe.reihen_cover?.width + "/" + reihe.reihen_cover?.height + "]"}>
        <div className="relative w-full">
          <Image
            src={'https://cms.ariscorp.de/assets/' + reihe.reihen_cover?.id}
            fill
            alt={'Banner von der Kategorie: ' + reihe.reihen_titel}
            placeholder="blur"
            blurDataURL={
              'https://cms.ariscorp.de/assets/' +
              reihe.reihen_cover?.id +
              '?width=16&quality=1'
            }
            objectFit="cover"
          />
        </div>
      </div>
      <div className="scale-95">
        <hr />
      </div>
      <div>
        {reihen.map((data) => (
          <ArticleCard
            key={data.id}
            link={'literatur/' + reihe.id + '/' + data.literatur_kapitel}
            title={reihe.reihen_titel + ' - Kapitel: ' + data.literatur_kapitel}
            image={reihe.reihen_cover?.id}
            seperator={true}
          />
        ))}
      </div>
    </div>
  )
}

LiteraturReihenPage.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
