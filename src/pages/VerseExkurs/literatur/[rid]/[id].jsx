import Layout from 'pages/VerseExkurs/layout'
import { SquareLoader } from 'react-spinners'
import Image from 'next/legacy/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_VERSEEXKURS_LITERATUR_ARTICLE } from 'graphql/queries'
import Head from 'next/head'

export default function LiteraturArticlePage () {
  const router = useRouter()
  const { rid: rid, id: id } = router.query

  const Id = parseFloat(id)
  const rId = rid

  console.log(Id);
  const { loading, error, data } = useQuery(GET_VERSEEXKURS_LITERATUR_ARTICLE, {
    variables: { rId },
  })

  if (loading)
    return (
      <div className="flex justify-center pt-32">
        <SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} />
      </div>
    )

  if (error) return <p>Error :(</p>

  const Data = data.literatur.filter(
    (data) => data.literatur_reihe.id == rid && data.literatur_kapitel == id
  )[0]

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto print:pt-5">
      <Head>
        <title>
          Astro Research and Industrial Service Corporation - VerseExurs: {Data.literatur_reihe.reihen_titel} - Kapitel: {Data.literatur_kapitel}
        </title>
      </Head>
      <div key={Data.id}>
        <div className="items-center text-center">
          <h1 className="uppercase">
            Literatur:{' '}
            <span className="text-primary">
              {Data.literatur_reihe.reihen_titel} - Kapitel:{' '}
              {Data.literatur_kapitel}
            </span>
          </h1>
          <hr />
          <div className="w-full">
            <Image
              src={
                'https://cms.ariscorp.de/assets/' +
                Data.literatur_reihe.reihen_cover.id
              }
              alt={'Banner'}
              width={Data.literatur_reihe.reihen_cover.width}
              height={Data.literatur_reihe.reihen_cover.height}
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                Data.literatur_reihe.reihen_cover.id +
                '?width=16&quality=1'
              }
            />
          </div>
        </div>
        <div
          className={
            'max-w-[' + Data.literatur_reihe.reihen_cover.width + 'px] mx-auto'
          }
        >
          <h2 className="mt-3">
            VerseExkurs - Literatur: {Data.literatur_reihe.reihen_titel} -
            Kapitel: {Data.literatur_kapitel}
          </h2>
          <hr className="max-w-[80px]" />
        </div>
        <div className="font-nasa article-font">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            className="mx-auto prose prose-td:align-middle prose-invert xl:max-w-[90%]"
          >
            {Data.text}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

LiteraturArticlePage.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
