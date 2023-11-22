import Layout from 'pages/layout'
import { useRouter } from 'next/router'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { useQuery } from '@apollo/client'
import { GET_MEMBER } from 'graphql/queries'
import Head from 'next/head'
import client from 'apollo/clients'

export async function getServerSideProps (context) {
  const { name } = context.query

  let { data } = await client.query({
    query: GET_MEMBER,
    variables: { name },
  })

  if (!data) {
    return {
      notFound: true,
    }

  }

  data = data.member[0]

  const siteTitle = data?.title + " " + data.firstname + " " + data?.lastname + " - Astro Research and Industrial Service Corporation"

  return {
    props: {
      data,
      siteTitle
    }
  }
}

export default function Biografie ({ data, siteTitle }) {
  return (
    <div className="items-center pt-32 mx-auto print:pt-5">
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
      <div>
        <div className="items-center text-center">
          <h1 className="uppercase">
            Biografie: <span className="text-primary">{data.firstname}</span>
          </h1>
          <hr />
        </div>
        <div className="max-w-[95%] mx-auto">
          <div className={'mx-auto'}>
            <h2 className="mt-3">Bio von {data.title ? member.title + " " : ""} {data.firstname} {data.lastname}</h2>
            <div className="float-left w-full mt-8 mb-6 sm:mt-0 sm:mb-0 sm:w-auto sm:float-right">
              <Image
                src={'https://cms.ariscorp.de/assets/' + data.member_potrait.id}
                alt={'Banner'}
                width={270}
                height={320}
                placeholder="blur"
                blurDataURL={
                  'https://cms.ariscorp.de/assets/' +
                  data.member_potrait.id +
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
              {data.member_steckbrief}
            </ReactMarkdown>
          </div>
        </div>
        <h2 className="mt-12 mb-3">Biografie:</h2>
        <div className="mx-auto prose font-nasa article-font prose-td:align-middle prose-invert xl:max-w-[98%]">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            className="justify-center steckbrief"
          >
            {data.member_biografie}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

Biografie.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
