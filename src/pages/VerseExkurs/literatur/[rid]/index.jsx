import Layout from 'pages/VerseExkurs/layout'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_VERSEEXKURS_LITERATUR_REIHE } from 'graphql/queries'
import ArticleCard from 'components/VerseExkursArticleCard'
import Head from 'next/head'

export default function LiteraturReihenPage () {
  const router = useRouter()
  const { rid } = router.query
  const rId = parseFloat(rid)
  const { loading, error, data } = useQuery(GET_VERSEEXKURS_LITERATUR_REIHE, {
    variables: { rId },
  })

  if (loading)
    return (
      <div className="flex justify-center pt-32">
        <SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} />
      </div>
    )

  if (error) return <p>Error :(</p>

  const Data = data.literatur

  const reihe = Data.filter((data) => data.literatur_reihe.id == rid)[0]
    .literatur_reihe

  return (
    <div className="pt-3 print:pt-0">
      <Head>
        <title>
          {reihe.reihen_titel} - Astro Research and Industrial Service Corporation
        </title>
      </Head>
      <div className={"px-12 flex flex-wrap w-full aspect-[" + reihe.reihen_cover?.width + "/" + reihe.reihen_cover?.height + "]"}>
        <div className="relative w-full">
          <Image
            src={'https://cms.ariscorp.de/assets/' + reihe.reihen_cover?.id}
            layout="fill"
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
        {Data.filter((data) => data.literatur_reihe.id == rid).map((data) => (
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
