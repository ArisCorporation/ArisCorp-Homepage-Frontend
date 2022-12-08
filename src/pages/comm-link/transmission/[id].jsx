import Layout from 'pages/layout'
import { useRouter } from 'next/router'
import { SquareLoader } from 'react-spinners'
import Image from 'next/legacy/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { useQuery } from '@apollo/client'
import { GET_COMM_LINK } from 'graphql/queries'
import moment from 'moment'
import 'moment/locale/de'
import Head from 'next/head'

export default function CommLinkDetailPage () {
  const router = useRouter()
  const { id } = router.query

  const Id = id

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
      <Head>
        <title>
          Astro Research and Industrial Service Corporation - Comm-Links: {Data.comm_link_titel}
        </title>
      </Head>
      <div>
        <div className="items-center text-center">
          <h1 className="uppercase">
            Comm-Link:{' '}
            <span className="text-primary">{Data.comm_link_titel}</span>
          </h1>
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
          <div className="relative flex flex-wrap justify-between w-full h-6 xs:h-8 md:h-20 lg:h-32 xs:flex-nowrap">
            <div className="flex h-full w-full xs:w-6/12 after:content-[''] after:bg-secondary after:w-6/12 after:-bottom-3 after:absolute after:h-[2px] lg:after:h-[3px] xs:after:block after:hidden">
              <div className="absolute md:relative aspect-[270/320] h-full md:block hidden">
                <Image
                  src={
                    'https://cms.ariscorp.de/assets/' +
                    Data.comm_link_author.member_potrait?.id
                  }
                  alt={'Author Potrait'}
                  placeholder="blur"
                  layout="fill"
                  objectFit="cover"
                  blurDataURL={
                    'https://cms.ariscorp.de/assets/' +
                    Data.comm_link_author.member_potrait?.id +
                    '?width=16&quality=1'
                  }
                />
              </div>
              <div className="relative ml-0 uppercase md:ml-4 lg:ml-8">
                <p className="absolute bottom-0 m-0 text-xs italic leading-[0rem] lg:text-lg xl:text-xl text-bold text-inherit whitespace-nowrap">
                  <span className="text-secondary">Author:</span>
                  {' ' + Data.comm_link_author.member_titel}
                </p>
              </div>
            </div>
            <div className="relative flex float-none xs:float-right w-full xs:w-[28%] h-full after:content-[''] after:bg-secondary after:w-full after:-bottom-3 after:absolute after:h-[2px] lg:after:h-[3px]">
              <div className="absolute bottom-0 uppercase xs:right-0">
                <p className="bottom-0 m-0 text-xs italic lg:text-lg xl:text-xl text-bold text-inherit whitespace-nowrap leading-[0rem]">
                  <span className="bottom-0 m-0 text-secondary xl:text-xl text-bold whitespace-nowrap">
                    Gepostet:
                  </span>{' '}
                  {moment(Data.date_created).locale("de").format('Do MMMM YYYY')}
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
            {Data.comm_link}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

CommLinkDetailPage.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
