import Layout from 'pages/VerseExkurs/layout'
import { useRouter } from 'next/router'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const { gql, useQuery } = require('@apollo/client')
import { GET_VERSEEXKURS_FIRMA } from 'graphql/queries'

export default function SystemDetailPage() {
  const router = useRouter()
  const { firma } = router.query

  const { loading, error, data } = useQuery(GET_VERSEEXKURS_FIRMA, {
    variables: { firma },
  })

  if (loading)
    return (
      <div className="flex justify-center pt-32">
        <SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} />
      </div>
    )

  if (error) return <p>Error :(</p>

  data = data.firmen[0]

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto print:pt-5">
      <div>
        <div className="items-center text-center">
          <h1 className="uppercase">
            Firma:{' '}
            <span className="text-primary">{data.firmen_name}</span>
          </h1>
          <hr />
          <div className="w-full">
            <Image
              src={'https://cms.ariscorp.de/assets/' + data.firmen_banner.id}
              alt={'Banner'}
              width={data.firmen_banner.width}
              height={data.firmen_banner.height}
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                data.firmen_banner.id +
                '?width=16&quality=1'
              }
            />
          </div>
        </div>
        <div className={'max-w-[' + data.firmen_banner.width + 'px] mx-auto'}>
          <h2 className="mt-3">
            VerseExkurs - Firma: {data.firmen_name}
          </h2>
          <hr className="max-w-[80px]" />
        </div>
        <div className="font-nasa article-font">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            className="mx-auto prose prose-td:align-middle prose-invert xl:max-w-full"
          >
            {data.firmen_text}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

SystemDetailPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
