import Layout from 'pages/VerseExkurs/layout'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_VERSEEXKURS_SPECTRUM_CATEGORY } from 'graphql/queries'
import ArticleCard from 'components/VerseExkursArticleCard'
import Head from 'next/head'
import client from 'apollo/clients'

export async function getServerSideProps (context) {
  const { params } = context
  const { cid } = params

  let { data } = await client.query({
    query: GET_VERSEEXKURS_SPECTRUM_CATEGORY,
    variables: { cid },
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  data = data.spectrum
  const category = data.filter((data) => data.spectrum_kategorie_beschreibung == true && data.id == cid)[0]
  data = data.filter((data) => data.spectrum_kategorie_beschreibung == false && data.spectrum_beitrag_kateogrie === category.spectrum_beitrag_kateogrie)
  const siteTitle = data[0].spectrum_titel + " - Astro Research and Industrial Service Corporation"

  return {
    props: {
      data,
      category,
      siteTitle
    },
  }
}

export default function SpectrumCategoryPage ({ data, category, siteTitle }) {
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
      <div className={"px-12 flex flex-wrap w-full aspect-[" + category.image?.width + "/" + category.image?.height + "]"}>
        <div className="relative w-full">
          <Image
            src={'https://cms.ariscorp.de/assets/' + category.image?.id}
            fill
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
        {data.map((data) => (
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
