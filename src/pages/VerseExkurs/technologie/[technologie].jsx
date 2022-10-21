import Layout from 'pages/VerseExkurs/layout'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import client from 'apollo/clients'
import rehypeSlug from 'rehype-slug'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { useEffect } from 'react'
import { GET_VERSEEXKURS_TECHNOLOGIE } from 'graphql/queries'

export async function getServerSideProps(context) {
  const { params } = context
  const { technologie } = params

  const Technologie = technologie?.charAt(0).toUpperCase() + technologie?.slice(1)

  const { data } = await client.query({
    query: GET_VERSEEXKURS_TECHNOLOGIE,
    variables: { Technologie },
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: await data.technologien[0],
    },
  }
}

export default function SpectrumArticlePage({ data }) {
  const router = useRouter()

  useEffect(() => {
    router.asPath ==
    '/VerseExkurs/technologie/Komponenten#gravitationsgeneratoren'
      ? document
          .getElementById('treibstoff-tanks')
          .scrollIntoView({ behavior: 'smooth', block: 'start' })
      : (router.asPath ==
        '/VerseExkurs/technologie/Komponenten#energiegeneratoren'
      ? document
          .getElementById('schildgeneratoren')
          .scrollIntoView({ behavior: 'smooth', block: 'start' })
      : null)
  }, [])

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto print:pt-5">
      <div>
        <div className="items-center text-center">
          <h1 className="uppercase">
            Technologie:{' '}
            <span className="text-primary">{data.technologie_name}</span>
          </h1>
          <hr />
          <div className="w-full">
            <Image
              src={
                'https://cms.ariscorp.de/assets/' + data.technologie_banner?.id
              }
              alt={'Banner'}
              width={data.technologie_banner?.width}
              height={data.technologie_banner?.height}
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                data.technologie_banner?.id +
                '?width=16&quality=1'
              }
            />
          </div>
        </div>
        <div
          className={'max-w-[' + data.technologie_banner?.width + 'px] mx-auto'}
        >
          <h2 className="mt-3">
            VerseExkurs - Technologie: {data.technologie_name}
          </h2>
          <hr className="max-w-[80px]" />
        </div>
        <div className="font-nasa article-font">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw, rehypeSlug]}
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
