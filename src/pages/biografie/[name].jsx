import Layout from 'pages/layout'
import { useRouter } from 'next/router'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { useQuery } from '@apollo/client'
import { GET_MEMBER } from 'graphql/queries'

export default function Biografie() {
  const router = useRouter()
  const { name } = router.query

  const { loading, error, data } = useQuery(GET_MEMBER, {
    variables: { name },
  })

  if (loading)
    return (
      <div className="flex justify-center pt-10">
        <SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} />
      </div>
    )
  if (error) return <p>Error :(</p>
  const Data = data.member[0]
  return (
    <div className="items-center max-w-6xl pt-32 mx-auto print:pt-5">
      <div>
        <div className="items-center text-center">
          <h1 className="uppercase">
            Biografie: <span className="text-primary">{Data.member_name}</span>
          </h1>
          <hr />
        </div>
        <div className="max-w-[95%] mx-auto">
          <div className={'mx-auto'}>
            <h2 className="mt-3">Bio von {Data.member_titel}</h2>
            <div className="float-right">
              <Image
                src={'https://cms.ariscorp.de/assets/' + Data.member_potrait.id}
                alt={'Banner'}
                width={270}
                height={320}
                placeholder="blur"
                blurDataURL={
                  'https://cms.ariscorp.de/assets/' +
                  Data.member_potrait.id +
                  '?width=16&quality=1'
                }
              />
            </div>
            <hr className="max-w-[80px]" />
          </div>
          <div className="font-nasa article-font">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              className="justify-center prose steckbrief prose-td:align-middle prose-invert xl:max-w-full"
            >
              {Data.member_steckbrief}
            </ReactMarkdown>
          </div>
        </div>
        <h2 className="mt-12 mb-3">Biografie:</h2>
        <div className="mx-auto prose font-nasa article-font prose-td:align-middle prose-invert xl:max-w-[98%]">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            className="justify-center steckbrief"
          >
            {Data.member_biografie}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

Biografie.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
