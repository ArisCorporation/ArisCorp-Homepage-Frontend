import Layout from 'pages/layout'
import { useRouter } from 'next/router'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { useQuery } from '@apollo/client'
import { GET_COMM_LINK } from 'graphql/queries'
import moment from 'moment'
import 'moment/locale/de'
import Head from 'next/head'
import client from 'apollo/clients'

export async function getServerSideProps (context) {
  const { id } = context.query

  let { data } = await client.query({
    query: GET_COMM_LINK,
    variables: { Id: id },
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  data = data.comm_links[0]

  const siteTitle = data.comm_link_titel + " - Astro Research and Industrial Service Corporation"

  return {
    props: {
      data,
      siteTitle
    }
  }
}

export default function CommLinkDetailPage ({data, siteTitle}) {
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
            Comm-Link:{' '}
            <span className="text-primary">{data.comm_link_titel}</span>
          </h1>
          <div className="w-full">
            <Image
              src={'https://cms.ariscorp.de/assets/' + data.comm_link_banner.id}
              alt={'Banner'}
              width={data.comm_link_banner.width}
              height={data.comm_link_banner.height}
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                data.comm_link_banner.id +
                '?width=16&quality=1'
              }
            />
          </div>
        </div>
        <div
          className={'max-w-[' + data.comm_link_banner.width + 'px] mx-auto'}
        >
          <h2 className="mt-3">
            Astro Research and Industrial Service Corporation - Comm-Links: {data.comm_link_titel}
          </h2>
          <hr className="max-w-[80px]" />
          <div className="relative flex flex-wrap justify-between w-full h-6 xs:h-8 md:h-20 lg:h-32 xs:flex-nowrap">
            <div className="flex h-full w-full xs:w-6/12 after:content-[''] after:bg-secondary after:w-6/12 after:-bottom-3 after:absolute after:h-[2px] lg:after:h-[3px] xs:after:block after:hidden">
              <div className="absolute md:relative aspect-[270/320] h-full md:block hidden">
                <Image
                  src={
                    'https://cms.ariscorp.de/assets/' +
                    data.comm_link_author.member_potrait?.id
                  }
                  alt={'Author Potrait'}
                  placeholder="blur"
                  fill
                  cover
                  blurDataURL={
                    'https://cms.ariscorp.de/assets/' +
                    data.comm_link_author.member_potrait?.id +
                    '?width=16&quality=1'
                  }
                />
              </div>
              <div className="relative ml-0 uppercase md:ml-4 lg:ml-8">
                <p className="absolute bottom-0 m-0 text-xs italic leading-[0rem] lg:text-lg xl:text-xl text-bold text-inherit whitespace-nowrap">
                  <span className="text-secondary">Author:</span>
                  {' ' + data.comm_link_author.member_titel}
                </p>
              </div>
            </div>
            <div className="relative flex float-none xs:float-right w-full xs:w-[28%] h-full after:content-[''] after:bg-secondary after:w-full after:-bottom-3 after:absolute after:h-[2px] lg:after:h-[3px]">
              <div className="absolute bottom-0 uppercase xs:right-0">
                <p className="bottom-0 m-0 text-xs italic lg:text-lg xl:text-xl text-bold text-inherit whitespace-nowrap leading-[0rem]">
                  <span className="bottom-0 m-0 text-secondary xl:text-xl text-bold whitespace-nowrap">
                    Gepostet:
                  </span>{' '}
                  {moment(data.date_created).locale("de").format('Do MMMM YYYY')}
                </p>
              </div>
            </div>
          </div>
          <hr className="scale-0"></hr>
        </div>
        <div className="font-nasa article-font">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            className="justify-center mx-auto prose prose-td:align-middle prose-invert xl:max-w-[90%]"
          >
            {data.comm_link}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

CommLinkDetailPage.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
