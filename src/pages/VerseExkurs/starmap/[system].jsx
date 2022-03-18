import Layout from 'pages/VerseExkurs/layout'
import { useRouter } from 'next/router'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const { gql, useQuery } = require('@apollo/client')
import {GET_VERSEEXKURS_SYSTEM} from 'graphql/queries'

export default function SystemDetailPage() {
  const router = useRouter()
  const { system } = router.query

  const System = system?.charAt(0).toUpperCase() + system?.slice(1);

  const { loading, error, data } = useQuery(GET_VERSEEXKURS_SYSTEM, {
    variables: { System },
  })

  if (loading)
    return (
      <div className="flex justify-center pt-32">
        <SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} />
      </div>
    )

  if (error) return <p>Error :(</p>

  data = data.systeme[0]

  console.log(data)

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto print:pt-5">
      <div>
        <div className="items-center text-center">
          <h1 className="uppercase">
            Sternensystem:{' '}
            <span className="text-primary">{data.system_name}</span>
          </h1>
          <hr />
          <div className="w-full">
            <Image
              src={
                'https://cms.ariscorp.de/assets/' + data.system_banner.id
              }
              alt={'Banner'}
              width={data.system_banner.width}
              height={data.system_banner.height}
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                data.system_banner.id +
                '?width=16&quality=1'
              }
            />
          </div>
        </div>
        <div
          className={'max-w-[' + data.system_banner.width + 'px] mx-auto'}
        >
          <h2 className="mt-3">
            VerseExkurs - Sternensystem: {data.system_name}
          </h2>
          <hr className="max-w-[80px]" />
        </div>
        <div className="font-nasa article-font">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            className="mx-auto prose prose-td:align-middle prose-invert xl:max-w-full"
          >
            {data.system_text}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

SystemDetailPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
