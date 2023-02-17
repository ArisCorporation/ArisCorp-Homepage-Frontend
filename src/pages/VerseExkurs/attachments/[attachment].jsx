import Layout from 'pages/VerseExkurs/layout'
import { useEffect, useState } from 'react'
import { SquareLoader } from 'react-spinners'
import Image from 'next/future/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Router, { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_VERSEEXKURS_ATTACHMENT } from 'graphql/queries'
import { Tab } from '@headlessui/react'
import Head from 'next/head'
import client from 'apollo/clients'
import { BasicPanel, BasicPanelButton } from 'components/panels'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ShareSquare } from 'components/icons'
import Link from 'next/link'

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
  const [currentGalleryImage, setCurrentGalleryImage] = useState(attachment.gallery[0] ? attachment.gallery[0].directus_files_id.id : attachment.storeImage.id)
  const { replace, query } = useRouter()
  const urlquery = query.tab
  const shareUrl = "https://ariscorp.de/VerseExkurs/attachments/" + attachment.name

  const handleShare = () => {
    navigator.clipboard.writeText(shareUrl)
    toast.info('URL in Zwischenablage kopiert!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  useEffect(() => {
    if (urlquery != null && urlquery != '') {
      setActiveTab(urlquery)
    } else {
      setActiveTab(0)
    }
  }, [urlquery])

  return (
    <div className="items-center mx-auto print:pt-5">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
      <div className="relative flex items-center align-center">
        <div className="absolute bottom-0">
          <h1 className="text-2xl italic xs:text-3xl sm:text-4xl lg:text-5xl 1.5xl:text-6xl"><span className="text-secondary">
            {attachment.manufacturer.firmen_name}
          </span>{' '}
            <span>{attachment.name}</span>
          </h1>
        </div>
        <Link href={'/VerseExkurs/firmen/' + attachment.manufacturer.firmen_name}>
          <a
            style={{ backgroundImage: `url(https://cms.ariscorp.de/assets/${attachment.manufacturer.firmen_trans_logo.id})` }}
            className='relative mt-0 ml-auto xs:h-32 h-28 hover:cursor-pointer xxs:h-24 sm:h-40 1.5xl:h-48 aspect-square bg-center bg-no-repeat bg-cover'
          />
        </Link>
      </div>
      <hr className="mt-2" />
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-3 gap-8 1.5xl:col-span-2'>
          <div className="overflow-hidden shadow-md shadow-black rounded-3xl">
            <BasicPanel>
              <div className='min-h-[600px] w-full relative flex'>
                <div style={{ backgroundImage: `url(https://cms.ariscorp.de/assets/${currentGalleryImage})` }} className='w-full h-auto max-h-full overflow-hidden transition-all duration-500 bg-black bg-center bg-no-repeat bg-cover rounded-2xl ease' />
              </div>
            </BasicPanel>
          </div>
        </div>
        <div className='col-span-3 space-y-4 1.5xl:col-span-1'>
          <BasicPanel>
            <div className="grid grid-cols-1 px-4 py-3 uppercase 1.5xl:grid-cols-4">
              <div className='col-span-4'>
                <div className='text-lg text-secondary'>
                  Spezifikationen
                </div>
              </div>
              <div className='hidden col-span-1 1.5xl:block' />
              <div className='col-span-1 1.5xl:col-span-3'>
                <div className="col-span-1">
                  <p className='pb-0 text-sm'>Hersteller:</p>
                  <p className='p-0 text-primary'>
                    {attachment.manufacturer.firmen_name ? attachment.manufacturer.firmen_name : 'N/A'}
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <div className="col-span-1">
                    <p className='pb-0 text-sm'>Klassifizierung:</p>
                    <p className='p-0 text-primary'>
                      {classification}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className='pb-0 text-sm'>Typ:</p>
                    <p className='p-0 text-primary'>
                      {attachment.classification ? attachment.classification : 'N/A'}
                    </p>
                  </div>
                </div>
                <div className="col-span-1">
                  <p className='pb-0 text-sm'>Gewicht:</p>
                  <p className='p-0 text-primary'>
                    {attachment.classification ? attachment.classification : 'N/A'}
                  </p>
                </div>
                <hr className='relative mt-3 mb-2 -ml-1 col-span-full sm:mt-3 sm:mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary' />
                <div className="col-span-1">
                  <p className='pb-0 text-sm'>Basispreis:</p>
                  <p className='p-0 text-primary'>
                    {attachment.price ? attachment.price + ' aUEC' : 'N/A'}
                  </p>
                </div>
              </div>
            </div>
          </BasicPanel>
          <BasicPanel>
            <div className="grid grid-cols-1 px-4 py-3 uppercase 1.5xl:grid-cols-4">
              <div className='col-span-4'>
                <div className='text-lg text-secondary'>
                  Statistiken
                </div>
              </div>
              <div className="hidden col-span-1 1.5xl:block" />
              {classification === 'Optik' ? (
                <div className='col-span-1 1.5xl:col-span-3'>
                  <div className='grid grid-cols-3 uppercase'>
                    <div className="col-span-3">
                      <p className='pb-0 text-sm'>Zoomstufe:</p>
                      <p className='p-0 text-primary'>
                        {attachment.zoomLevel ? attachment.zoomLevel + "x fach" : 'N/A'}
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className='pb-0 text-sm'>Integrierte Nullung:</p>
                      <p className='p-0 normal-case text text-primary'>
                        {attachment.autoZeroing ? "Ja" : 'Nein'}
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className='pb-0 text-sm'>Integrierter Entfernungsmesser:</p>
                      <p className='p-0 normal-case text text-primary'>
                        {attachment.rangefinder ? "Ja" : 'Nein'}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className='col-span-1 1.5xl:col-span-3'>
                  <div className='grid grid-cols-3 uppercase'>
                    {attachment.stats.find((e) => e.category === "noiseLevel") ? (
                      <div className="col-span-3">
                        <p className='pb-0 text-sm'>Lärmpegel:</p>
                        <p className={'p-0' + (attachment.stats.find((e) => e.category === "noiseLevel")?.level > 0 ? "text-green-500" : (attachment.stats.find((e) => e.category === "noiseLevel")?.level < 0 ? "text-red-600" : ""))}>
                          {attachment.stats.find((e) => e.category === "noiseLevel").level}
                        </p>
                      </div>
                    ) : null}
                    {attachment.stats.find((e) => e.category === "recoil") ? (
                      <div className="col-span-3">
                        <p className='pb-0 text-sm'>Rückstoß:</p>
                        <p className={'p-0' + (attachment.stats.find((e) => e.category === "recoil")?.level > 0 ? "text-green-500" : (attachment.stats.find((e) => e.category === "recoil")?.level < 0 ? "text-red-600" : ""))}>
                          {attachment.stats.find((e) => e.category === "recoil").level}
                        </p>
                      </div>
                    ) : null}
                    {attachment.stats.find((e) => e.category === "damage") ? (
                      <div className="col-span-3">
                        <p className='pb-0 text-sm'>Schaden:</p>
                        <p className={'p-0' + (attachment.stats.find((e) => e.category === "damage")?.level > 0 ? "text-green-500" : (attachment.stats.find((e) => e.category === "damage")?.level < 0 ? "text-red-600" : ""))}>
                          {attachment.stats.find((e) => e.category === "damage").level}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              )}
            </div>
          </BasicPanel>
          <BasicPanel>
            <div className='overflow-hidden rounded-2xl'>
              <div className="flex flex-wrap w-full h-full px-5 pb-2 text-xs italic uppercase xs:text-sm">
                <p className="pt-2 m-0 -ml-2 text-sm xs:text-base text-secondary">
                  Gallerie
                </p>
                <div className='flex justify-between w-full xl:grid xl:grid-cols-3 xl:gap-4'>
                  {attachment.gallery[0] ? (
                    attachment.gallery.map((obj) => (
                      <div onClick={() => setCurrentGalleryImage(obj.directus_files_id.id)} key={obj.directus_files_id.id} className={"relative w-28 h-28" + (currentGalleryImage == obj.directus_files_id.id ? " border border-primary" : null)}>
                        <Image
                          src={'https://cms.ariscorp.de/assets/' + obj.directus_files_id.id}
                          alt={'Bild von ' + attachment.name}
                          fill
                          className="object-cover"
                          placeholder="blur"
                          blurDataURL={
                            'https://cms.ariscorp.de/assets/' +
                            obj.directus_files_id.id +
                            '?width=16&quality=1'
                          }
                        />
                      </div>
                    ))
                  ) : (
                    <div onClick={() => setCurrentGalleryImage(attachment.storeImage.id)} key={attachment.storeImage.id} className={"relative w-28 h-28" + (currentGalleryImage == attachment.storeImage.id ? " border border-primary" : null)}>
                      <Image
                        src={'https://cms.ariscorp.de/assets/' + attachment.storeImage.id}
                        alt={'Bild von ' + attachment.name}
                        fill
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL={
                          'https://cms.ariscorp.de/assets/' +
                          attachment.storeImage.id +
                          '?width=16&quality=1'
                        }
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </BasicPanel>
          <div className='flex space-x-4'>
            <div onClick={() => handleShare()} className="flex-grow">
              <div className={"relative w-full h-[44px] text-inherit decoration-transparent aspect-square inline-block p-[2px] bg-transparent group border-2 border-primary rounded-[10px] cursor-pointer transition-all hover:duration-200 duration-500 ease-out box-border before:absolute before:-top-[2px] before:right-[14px] before:left-[14px] before:h-[2px] before:bg-[#444] before:box-border after:absolute after:-bottom-[2px] after:right-[14px] after:left-[14px] after:h-[2px] after:bg-[#444] after:box-border "}>
                <div className="group-hover:bg-white/5 group-hover:text-primary p-[10px] box-border overflow-hidden whitespace-nowrap text-center text-ellipsis rounded-[6px] transition-all hover:duration-200 duration-500 ease-out">
                  <ShareSquare className="w-4 h-4 mx-auto fill-white" />
                </div>
              </div>
            </div>
          </div>
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
