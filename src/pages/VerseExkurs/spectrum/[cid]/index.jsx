import Layout from 'pages/VerseExkurs/layout'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_VERSEEXKURS_SPECTRUM_CATEGORY } from 'graphql/queries'
import ArticleCard from 'components/VerseExkursArticleCard'
import Head from 'next/head'

export default function SpectrumCategoryPage () {
  const router = useRouter()
  const { cid } = router.query

  const { loading, error, data } = useQuery(GET_VERSEEXKURS_SPECTRUM_CATEGORY)

  if (loading)
    return (
      <div className="flex justify-center pt-32">
        <SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} />
      </div>
    )

  if (error) return <p>Error :(</p>

  const Data = data.spectrum

  const category = Data.filter(
    (data) => data.spectrum_kategorie_beschreibung == true && data.id == cid
  )[0]

  return (
    <div className="pt-3 print:pt-0">
      <Head>
        <title>
          {category.spectrum_titel} - Astro Research and Industrial Service Corporation
        </title>
      </Head>
      <div className={"px-12 flex flex-wrap w-full aspect-[" + category.image?.width + "/" + category.image?.height + "]"}>
        <div className="relative w-full">
          <Image
            src={'https://cms.ariscorp.de/assets/' + category.image?.id}
            layout="fill"
            alt={
              'Banner von der Kategorie: ' + category.spectrum_beitrag_kateogrie
            }
            placeholder="blur"
            blurDataURL={
              'https://cms.ariscorp.de/assets/' +
              category.image?.id +
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
        {Data.filter(
          (data) =>
            data.spectrum_kategorie_beschreibung == false &&
            data.spectrum_beitrag_kateogrie ===
            category.spectrum_beitrag_kateogrie
        ).map((data) => (
          <ArticleCard
            key={data.id}
            link={'spectrum/' + category.id + '/' + data.id}
            title={data.spectrum_titel}
            image={category.image?.id}
            seperator={true}
          />
        ))}
      </div>
    </div>
  )
}

SpectrumCategoryPage.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
