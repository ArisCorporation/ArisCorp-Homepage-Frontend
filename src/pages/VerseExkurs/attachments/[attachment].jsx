import Layout from 'pages/VerseExkurs/layout'
import { useEffect, useState } from 'react'
import { SquareLoader } from 'react-spinners'
import Image from 'next/future/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Router, { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_VERSEEXKURS_ATTACHMENT } from 'graphql/queries'
import { BasicPanel } from 'components/panels'
import { Tab } from '@headlessui/react'
import Head from 'next/head'
import client from 'apollo/clients'

export async function getServerSideProps (context) {
  const { params } = context
  const { attachment: Attachment } = params

  let { data } = await client.query({
    query: GET_VERSEEXKURS_ATTACHMENT,
    variables: { name: Attachment },
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  const attachment = (
    data.optics[0] ? data.optics[0] :
      data.barrel[0] ? data.barrel[0] :
        data.underbarrel[0] ? data.underbarrel[0] : null
  )
  const classification = (
    data.optics[0] ? "Optik" :
      data.barrel[0] ? "Lauf Aufsatz" :
        data.underbarrel[0] ? "Unterlauf Aufsatz" : null
  )

  const siteTitle = attachment.name + " - Astro Research and Industrial Service Corporation"

  return {
    props: {
      attachment,
      classification,
      siteTitle
    },
  }
}

export default function SpectrumArticlePage ({ attachment, classification, siteTitle }) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState()
  const { replace, query } = useRouter()
  const urlquery = query.tab
  console.log(attachment);

  useEffect(() => {
    if (urlquery != null && urlquery != '') {
      setActiveTab(urlquery)
    } else {
      setActiveTab(0)
    }
  }, [urlquery])

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto print:pt-5">
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
        <div className="flex items-center justify-center align-center">
          <h1 className="text-2xl italic xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-secondary">
              {attachment.manufacturer.firmen_name}
            </span>{' '}
            <span>{attachment.name}</span>
          </h1>
          <div
            className="relative ml-auto -my-10 hover:cursor-pointer xs:h-32 h-28 xmlnsXlink xxs:h-24 sm:h-40 md:h-48 aspect-square"
            onClick={() =>
              router.push(
                '/VerseExkurs/firmen/' + attachment.manufacturer.firmen_name
              )
            }
          >
            <Image
              src={
                'https://cms.ariscorp.de/assets/' +
                attachment.manufacturer.firmen_trans_logo.id
              }
              alt={'Logo von ' + attachment.manufacturer.firmen_name}
              fill
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                attachment.manufacturer.firmen_trans_logo.id +
                '?width=16&quality=1'
              }
            />
          </div>
        </div>
        <hr />
      </div>
      <div className="w-full space-y-2 xl:space-y-0 xl:space-x-2 lg:flex lg:flex-wrap xl:flex-nowrap">
        <div className="w-full aspect-[21/9] xl:aspect-auto xl:w-3/5">
          <BasicPanel
            className={'h-full'}
            childClassName={'h-full overflow-hidden'}
          >
            <Image
              src={'https://cms.ariscorp.de/assets/' + attachment.storeImage?.id}
              alt={'Bild von ' + attachment.name}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                attachment.storeImage?.id +
                '?width=16&quality=1'
              }
            />
          </BasicPanel>
        </div>
        <div className="w-full xl:w-2/5">
          <BasicPanel>
            <div className='overflow-hidden rounded-2xl'>
              <div className="w-full h-full px-5 pb-2 text-xs italic uppercase xs:text-sm">
                <table className="w-full space-y-10 table-auto">
                  <div>
                    <p className="pt-2 m-0 -ml-2 text-sm xs:text-base text-secondary">
                      Spezifikationen
                    </p>
                  </div>
                  <tr>
                    <th className="pr-2 text-left">Hersteller:</th>
                    <td className="text-left text-primary">
                      {attachment.manufacturer.firmen_name ? attachment.manufacturer.firmen_name : 'N/A'}
                    </td>
                  </tr>
                  <tr>
                    <th className="pr-2 text-left">Klassifizierung:</th>
                    <td className="text-left text-primary">
                      {classification}
                    </td>
                  </tr>
                  <tr>
                    <th className="pr-2 text-left">Typ:</th>
                    <td className="text-left text-primary">
                      {attachment.classification ? attachment.classification : 'N/A'}
                    </td>
                  </tr>
                  <tr>
                    <th className="pr-2 text-left">Gewicht:</th>
                    <td className="text-left text-primary">
                      {attachment.weight ? attachment.weight + ' KG' : 'N/A'}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <hr className="relative w-[85%] mt-3 sm:mt-5 sm:mb-4 mb-2 -ml-1 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                    </td>
                  </tr>
                  <tr>
                    <th className="pr-2 text-left">Basispreis:</th>
                    <td className="text-left text-primary">
                      {attachment.price ? attachment.price + ' aUEC' : 'N/A'}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <hr className="relative w-[85%] mt-3 sm:mt-5 sm:mb-4 mb-2 -ml-1 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                    </td>
                  </tr>
                </table>
                <table className="w-full space-y-10 table-auto">
                  <div>
                    <p className="pt-2 m-0 -ml-2 text-sm xs:text-base text-secondary">
                      Statistiken
                    </p>
                  </div>
                  <tr>
                    <th className="pr-2 text-left">Zoomstufe:</th>
                    <td className="text-left text-primary">
                      {attachment.zoomLevel ? attachment.zoomLevel + "x fach" : 'N/A'}
                    </td>
                  </tr>
                  <tr>
                    <th className="pr-2 text-left">Integrierte Nullung:</th>
                    <td className="text-left text-primary">
                      {attachment.autoZeroing ? "Ja" : 'Nein'}
                    </td>
                  </tr>
                  <tr>
                    <th className="pr-2 text-left"><p className='p-0'>Integrierter-</p><p className='p-0'>Entfernungsmesser:</p></th>
                    <td className="text-left text-primary">
                      {attachment.rangefinder ? "Ja" : 'Nein'}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </BasicPanel>
          <BasicPanel>
            <div className='overflow-hidden rounded-2xl'>
              <div className="w-full h-full px-5 pb-2 text-xs italic uppercase xs:text-sm">
                <p>gallery</p>
              </div>
            </div>
          </BasicPanel>
        </div>
      </div>
      <hr />
      <div>
        <BasicPanel>
          <div className="grid grid-cols-12 gap-4 px-4 text-xs xl:space-x-2 xl:flex-nowrap sm:text-sm md:text-base">
            <div className="col-span-4">
              <p className="italic uppercase text-secondary">
                Kauf Informationen
              </p>
            </div>
            <div className="w-full col-span-8 px-2 pb-5 pr-4 sm:px-8 lg:px-4 xl:pr-0 xl:pl-4">
              <p className="italic uppercase text-secondary">
                Beschreibung
              </p>
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                className="w-full prose prose-td:align-middle prose-invert"
              >
                {attachment.description}
              </ReactMarkdown>
            </div>
          </div>
        </BasicPanel>
      </div>
    </div>
  )
}

SpectrumArticlePage.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
