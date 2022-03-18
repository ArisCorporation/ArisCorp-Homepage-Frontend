import Layout from 'pages/VerseExkurs/layout'
import Image from 'next/image'
import client from 'apollo/clients'
import { GET_VERSEEXKURS_ONEDAYINHISTORY_KATEGORIES } from 'graphql/queries'
import ArticleCard from 'components/VerseExkursArticleCard'

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_VERSEEXKURS_ONEDAYINHISTORY_KATEGORIES,
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: await data.geschichte,
    },
  }
}

export default function SpectrumPage({ data }) {
  console.log(data)

  return (
    <div className="pt-3 print:pt-0">
      <div className="flex flex-wrap w-full aspect-[40/21] scale-90">
        <div className="relative w-full">
          <Image
            src="https://cms.ariscorp.de/assets/c0a200fa-83d3-48f1-b6e4-905960cab504"
            layout="fill"
            alt="Spectrum Banner"
            placeholder="blur"
            blurDataURL="https://cms.ariscorp.de/assets/c0a200fa-83d3-48f1-b6e4-905960cab504?width=16&quality=1"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="-mt-5 scale-95">
        <hr />
      </div>
      <div>
        {data.map((data) => (
          <ArticleCard
            key={data.id}
            link={
              'onedayinhistory/' +
              encodeURIComponent(data.geschichte_titel)
            }
            title={data.geschichte_titel}
            desc={data.geschichte_beschreibung}
            image={data.geschichte_auswahlbild.id}
            seperator={true}
          />
        ))}
      </div>
    </div>
  )
}

SpectrumPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}