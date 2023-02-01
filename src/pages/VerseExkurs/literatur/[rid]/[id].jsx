import Layout from 'pages/VerseExkurs/layout'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_VERSEEXKURS_LITERATUR_ARTICLE } from 'graphql/queries'
import Head from 'next/head'
import client from 'apollo/clients'

export async function getServerSideProps (context) {
  const { params } = context
  const { rid: rid, id: id } = params
  const Id = parseFloat(id)
  const rId = rid

  let { data } = await client.query({
    query: GET_VERSEEXKURS_LITERATUR_ARTICLE,
    variables: { rId },
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  data = data.literatur.filter((data) => data.literatur_reihe.id == rid && data.literatur_kapitel == id)[0]
  const siteTitle = data.literatur_reihe.reihen_titel + " - Kapitel: " + data.literatur_kapitel + " - Astro Research and Industrial Service Corporation"

  return {
    props: {
      data,
      siteTitle
    },
  }
}

export default function LiteraturArticlePage ({ data, siteTitle }) {
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
      <div key={data.id}>
        <div className="items-center text-center">
          <h1 className="uppercase">
            Literatur:{' '}
            <span className="text-primary">
              {data.literatur_reihe.reihen_titel} - Kapitel:{' '}
              {data.literatur_kapitel}
            </span>
          </h1>
          <hr />
          <div className="w-full">
            <Image
              src={
                'https://cms.ariscorp.de/assets/' +
                data.literatur_reihe.reihen_cover.id
              }
              alt={'Banner'}
              width={data.literatur_reihe.reihen_cover.width}
              height={data.literatur_reihe.reihen_cover.height}
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                data.literatur_reihe.reihen_cover.id +
                '?width=16&quality=1'
              }
            />
          </div>
        </div>
        <div
          className={
            'max-w-[' + data.literatur_reihe.reihen_cover.width + 'px] mx-auto'
          }
        >
          <h2 className="mt-3">
            VerseExkurs - Literatur: {data.literatur_reihe.reihen_titel} -
            Kapitel: {data.literatur_kapitel}
          </h2>
          <hr className="max-w-[80px]" />
        </div>
        <div className="font-nasa article-font">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            className="mx-auto prose prose-td:align-middle prose-invert xl:max-w-[90%]"
          >
            {data.text}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

LiteraturArticlePage.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
