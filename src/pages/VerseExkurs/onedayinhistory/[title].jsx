import Layout from 'pages/VerseExkurs/layout'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_VERSEEXKURS_ONEDAYINHISTORY_ARTICLE } from 'graphql/queries'

export default function SpectrumArticlePage() {
  const router = useRouter()
  const { title } = router.query

  const { loading, error, data } = useQuery(
    GET_VERSEEXKURS_ONEDAYINHISTORY_ARTICLE,
    {
      variables: { title },
    }
  )

  if (loading)
    return (
      <div className="flex justify-center pt-32">
        <SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} />
      </div>
    )

  if (error) return <p>Error :(</p>

  data = data.geschichte[0]

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto print:pt-5">
      <div>
        <div className="items-center text-center">
          <h1 className="uppercase">
            Ein Tag in der Geschichte:{' '}
            <span className="text-primary">{data.geschichte_titel}</span>
          </h1>
          <hr />
          <div className="w-full">
            <Image
              src={
                'https://cms.ariscorp.de/assets/' +
                data.geschichte_auswahlbild.id
              }
              alt={'Banner'}
              width={data.geschichte_auswahlbild.width}
              height={data.geschichte_auswahlbild.height}
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                data.geschichte_auswahlbild.id +
                '?width=16&quality=1'
              }
            />
          </div>
        </div>
        <div
          className={
            'max-w-[' + data.geschichte_auswahlbild.width + 'px] mx-auto'
          }
        >
          <h2 className="mt-3">
            VerseExkurs - Ein Tag in der Geschichte: {data.geschichte_titel}
          </h2>
          <hr className="max-w-[80px]" />
        </div>
        <div className="font-nasa article-font">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            className="mx-auto prose prose-td:align-middle prose-invert xl:max-w-full"
          >
            {data.text}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

SpectrumArticlePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
