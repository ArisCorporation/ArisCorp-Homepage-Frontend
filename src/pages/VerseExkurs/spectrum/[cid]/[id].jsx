import Layout from 'pages/VerseExkurs/layout'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_VERSEEXKURS_SPECTRUM_CATEGORY } from 'graphql/queries'
import Head from 'next/head'

export default function SpectrumArticlePage () {
  const router = useRouter()
  const { cid: cid, id: id } = router.query

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
    <div className="items-center max-w-6xl pt-10 mx-auto print:pt-5">
      <Head>
        <title>
          {category.spectrum_titel} / {(Data.filter((data) => data.id == id)[0]).spectrum_titel} - Astro Research and Industrial Service Corporation
        </title>
      </Head>
      {Data.filter((data) => data.id == id).map((data) => (
        <div key={data.id}>
          <div className="items-center text-center">
            <h1 className="uppercase">
              {category.spectrum_titel}:{' '}
              <span className="text-primary">{data.spectrum_titel}</span>
            </h1>
            <hr />
            <div className="w-full">
              <Image
                src={'https://cms.ariscorp.de/assets/' + category.image.id}
                alt={'Banner'}
                width={category.image.width}
                height={category.image.height}
                placeholder="blur"
                blurDataURL={
                  'https://cms.ariscorp.de/assets/' +
                  category.image.id +
                  '?width=16&quality=1'
                }
              />
            </div>
          </div>
          <div className={'max-w-[' + category.image.width + 'px] mx-auto'}>
            <h2 className="mt-3">
              VerseExkurs - Spectrum: {data.spectrum_titel}
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
      ))}
    </div>
  )
}

SpectrumArticlePage.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
