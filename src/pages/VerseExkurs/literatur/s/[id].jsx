import Layout from 'pages/VerseExkurs/layout'
import { SquareLoader } from 'react-spinners'
import Image from 'next/legacy/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_VERSEEXKURS_LITERATUREN } from 'graphql/queries'
import Head from 'next/head'

export default function LiteraturArticlePage () {
  const router = useRouter()
  const { id } = router.query

  const { loading, error, data } = useQuery(GET_VERSEEXKURS_LITERATUREN)

  if (loading)
    return (
      <div className="flex justify-center pt-32">
        <SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} />
      </div>
    )

  if (error) return <p>Error :(</p>

  const Data = data.literatur_reihen.filter((data) => data.id == id)[0]

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto print:pt-5">
      <Head>
        <title>
          Astro Research and Industrial Service Corporation - VerseExurs: {Data.reihen_titel}
        </title>
      </Head>
      <div key={Data.id}>
        <div className="items-center text-center">
          <h1 className="uppercase">
            Literatur:{' '}
            <span className="text-primary">
              {Data.reihen_titel} - Kapitel: Einzelkapitel
            </span>
          </h1>
          <hr />
          <div className="w-full">
            <Image
              src={'https://cms.ariscorp.de/assets/' + Data.reihen_cover.id}
              alt={'Banner'}
              width={Data.reihen_cover.width}
              height={Data.reihen_cover.height}
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                Data.reihen_cover.id +
                '?width=16&quality=1'
              }
            />
          </div>
        </div>
        <div className={'max-w-[' + Data.reihen_cover.width + 'px] mx-auto'}>
          <h2 className="mt-3">
            VerseExkurs - Literatur: {Data.reihen_titel} - Kapitel:
            Einzelkapitel
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
