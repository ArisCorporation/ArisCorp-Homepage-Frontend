import Layout from 'pages/layout'
import { useRouter } from 'next/router'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { useQuery } from '@apollo/client'
import { GET_COMM_LINK } from 'graphql/queries'

export default function CommLinkDetailPage() {
  const router = useRouter()
  const { id } = router.query

  const Id = parseFloat(id)
  const { loading, error, data } = useQuery(GET_COMM_LINK, {
    variables: { Id },
  })

  if (loading)
    return (
      <div className="flex justify-center pt-32">
        <SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} />
      </div>
    )
  if (error) return <p>Error :(</p>
  const Data = data.comm_links[0]
  return (
    <div className="items-center max-w-6xl pt-32 mx-auto print:pt-5">
      <div>
        <div className="items-center text-center">
          <h1 className="uppercase">
            Comm-Link:{' '}
            <span className="text-primary">{Data.comm_link_titel}</span>
          </h1>
          <hr />
          <div className="w-full">
            <Image
              src={'https://cms.ariscorp.de/assets/' + Data.comm_link_banner.id}
              alt={'Banner'}
              width={Data.comm_link_banner.width}
              height={Data.comm_link_banner.height}
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                Data.comm_link_banner.id +
                '?width=16&quality=1'
              }
            />
          </div>
        </div>
        <div
          className={'max-w-[' + Data.comm_link_banner.width + 'px] mx-auto'}
        >
          <h2 className="mt-3">
            ArisCorp - Comm-Links: {Data.comm_link_titel}
          </h2>
          <hr className="max-w-[80px]" />
        </div>
        <div className="font-nasa article-font">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            className="justify-center mx-auto prose prose-td:align-middle prose-invert xl:max-w-[90%]"
          >
            {Data.comm_link}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

CommLinkDetailPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
