import Layout from 'pages/VerseExkurs/layout'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Link from 'next/link'
import client from 'apollo/clients'
import { GET_VERSEEXKURS_SPECTRUM_ARTICLES } from 'graphql/queries'
import ArticleCards from 'components/VerseExkursArticleCards'

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_VERSEEXKURS_SPECTRUM_ARTICLES,
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: await data.spectrum,
    },
  }
}

export default function SpectrumPage(data) {
  const Data = data.data

  return (
    <div className="pt-3 print:pt-0">
      <div className="flex flex-wrap w-full aspect-[40/21] scale-90">
        <div className="relative w-full">
          <Image
            src="https://cms.ariscorp.de/assets/6e633dd2-1512-405d-92e0-fb3907de86a1"
            layout="fill"
            alt="Spectrum Banner"
            placeholder="blur"
            blurDataURL="https://cms.ariscorp.de/assets/6e633dd2-1512-405d-92e0-fb3907de86a1"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="-mt-5 scale-95">
        <hr />
      </div>
      <div>
      <ArticleCards
              title={"data.spectrum_beitrag_kateogrie"}
              desc={"data.spectrum_text"}
              image={"data.image?.id"}
              link={"(data.id != 19 ? 'spectrum/' + data.id : 'spectrum/19/125')"}
            />
          
      </div>
    </div>
  )
}

SpectrumPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
