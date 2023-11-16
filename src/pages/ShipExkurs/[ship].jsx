import Layout from './layout'
import { useEffect, useState, Suspense } from 'react'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import {
  GET_SHIPEXKURS_SHIP,
  GET_SHIPEXKURS_SHIPLOANERS,
  GET_VERSEEXKURS_FIRMEN,
} from 'graphql/queries'
import { BasicPanel, BasicPanelButton } from 'components/panels'
import { Menu, Tab } from '@headlessui/react'
import client from 'apollo/clients'
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar'
import ImageGallery from 'react-image-gallery'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import './progressbar.css'
import 'react-image-gallery/styles/css/image-gallery.css'
import { FaShareSquare } from 'react-icons/fa'
import {
  TfiControlBackward,
  TfiControlForward,
  TfiControlPlay,
} from 'react-icons/ti'
import _ from 'lodash'
import ShipHardpoints from 'components/ShipExkurs/ShipHardpoints'

// Animation
import Head from 'next/head'
import Link from 'next/link'
import { Catalog, Presentation, ShareSquare, ThreeDots } from 'components/icons'
import ShipCard from 'components/ShipExkurs/ShipCard'
import ShipPaintCard from 'components/ShipExkurs/ShipPaintCard'
import VideoPlayer from 'components/VideoPlayer'

function slugify(str) {
  str = str.replace(/^\s+|\s+$/g, '') // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
  var to = 'aaaaeeeeiiiioooouuuunc------'
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes

  return str
}

function Separator(props) {
  return (
    <div
      style={{
        position: 'absolute',
        height: '100%',
        transform: `rotate(${props.turns}turn)`,
      }}
    >
      <div style={props.style} />
    </div>
  )
}

function RadialSeparators(props) {
  const turns = 1 / props.count
  return _.range(props.count).map((index) => (
    <Separator key={index} turns={index * turns} style={props.style} />
  ))
}

export async function getServerSideProps(context) {
  const { params } = context
  const { ship } = params

  let { data } = await client.query({
    query: GET_SHIPEXKURS_SHIP,
    variables: { slug: slugify(ship) },
  })

  let { data: shipList } = await client.query({
    query: GET_SHIPEXKURS_SHIPLOANERS,
  })

  let { data: companies } = await client.query({
    query: GET_VERSEEXKURS_FIRMEN,
  })

  if (!data.ships[0]) {
    return {
      notFound: true,
    }
  }

  const components = data.components

  data = data.ships[0]
  const loaners = []
  if (data.loaners[0]) {
    data.loaners.map((obj) => {
      const search = shipList.ships.find((e) => e.slug === obj.slug)
      if (search) {
        loaners.push(search)
      }
    })
  }

  const variants = []
  if (data?.variants[0]) {
    data.variants.forEach((obj) => {
      variants.push(
        shipList.ships.find((e) => e.id === obj?.id || e.slug === obj.slug)
      )
    })
  }

  const siteTitle =
    data.name + ' - Astro Research and Industrial Service Corporation'

  return {
    props: {
      data,
      loaners,
      variants,
      components,
      siteTitle,
      companies: companies.firmen,
    },
  }
}

export default function ShipPage({
  data,
  loaners,
  variants,
  components,
  siteTitle,
  companies,
}) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState()
  const { replace, query, push } = useRouter()
  const urlquery = query.tab
  const { ship: Ship } = router.query
  const shareUrl =
    'https://ariscorp.de/ShipExkurs/' +
    data.slug +
    (urlquery ? '?tab=' + urlquery : '')

  const handleShare = () => {
    navigator.clipboard.writeText(shareUrl)
    toast.info('URL in Zwischenablage kopiert!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })
  }

  useEffect(() => {
    if (urlquery != null && urlquery != '') {
      setActiveTab(urlquery)
    } else {
      setActiveTab(0)
    }
  }, [urlquery])

  function getScore(array) {
    let ratings = []
    let sum = 0

    array.forEach((item) => {
      if (item.kategorie != 'conclusion') {
        ratings.push(parseInt(item.grad))
      }
    })

    ratings.forEach((item) => {
      sum += item
    })

    return sum
  }
  const fightScore = parseInt(
    data.rating?.ratings?.filter((e) => e.kategorie == 'fight_potential')[0]
      .grad
  )
  const fightReason = data.rating?.ratings?.filter(
    (e) => e.kategorie == 'fight_potential'
  )[0].begrundung
  const ecoScore = parseInt(
    data.rating?.ratings?.filter((e) => e.kategorie == 'eco_potential')[0].grad
  )
  const ecoReason = data.rating?.ratings?.filter(
    (e) => e.kategorie == 'eco_potential'
  )[0].begrundung
  const useScore = parseInt(
    data.rating?.ratings?.filter((e) => e.kategorie == 'use_potential')[0].grad
  )
  const useReason = data.rating?.ratings?.filter(
    (e) => e.kategorie == 'use_potential'
  )[0].begrundung
  const ppScore = parseInt(
    data.rating?.ratings?.filter((e) => e.kategorie == 'p-p_ratio')[0].grad
  )
  const ppReason = data.rating?.ratings?.filter(
    (e) => e.kategorie == 'p-p_ratio'
  )[0].begrundung
  const conclusionScore = parseInt(
    data.rating?.ratings?.filter((e) => e.kategorie == 'conclusion')[0].grad
  )
  const conclusionReason = data.rating?.ratings?.filter(
    (e) => e.kategorie == 'conclusion'
  )[0].begrundung
  const overallScore = data.rating?.ratings
    ? getScore(data.rating?.ratings)
    : null

  const galleryImages = data.gallery.map((i) => {
    const original = 'https://cms.ariscorp.de/assets/' + i.directus_files_id.id
    const thumbnail =
      'https://cms.ariscorp.de/assets/' + i.directus_files_id.id + '?width=250'

    return {
      original,
      thumbnail,
    }
  })
  const columns =
    (variants[0] ? 1 : 0) +
    (loaners[0] ? 1 : 0) +
    (data.paints[0] ? 1 : 0) +
    (data.modules[0] ? 1 : 0)

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
        <title>{siteTitle}</title>

        <meta property="twitter:title" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
        <meta name="title" content={siteTitle} />
      </Head>
      <div className="relative flex items-center align-center">
        <div className="absolute bottom-0">
          <h1 className="text-2xl italic xs:text-3xl sm:text-4xl lg:text-5xl 1.5xl:text-6xl">
            <span className="text-secondary">{data.name}</span>{' '}
          </h1>
          <h3 className="mb-0 uppercase">
            <span className="text-white/25">Status: </span>
            <span>{data.productionStatus}</span>
          </h3>
        </div>

        <Link
          legacyBehavior
          href={'/VerseExkurs/firmen/' + data.manufacturer.firmen_name}
        >
          <a
            style={{
              backgroundImage: `url(https://cms.ariscorp.de/assets/${data.manufacturer.firmen_trans_logo.id})`,
            }}
            className="relative mt-0 ml-auto xs:h-32 h-28 hover:cursor-pointer xxs:h-24 sm:h-40 1.5xl:h-48 aspect-square bg-center bg-no-repeat bg-cover"
          />
        </Link>
      </div>
      <hr className="mt-2" />
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 gap-8 1.5xl:col-span-2">
          <div className="overflow-hidden shadow-md shadow-black rounded-3xl">
            <BasicPanel>
              <div className="h-[300px] lg:h-[600px] 1.5xl:h-[700px] w-full relative flex">
                <div
                  style={{
                    backgroundImage: `url(https://cms.ariscorp.de/assets/${data.storeImage?.id})`,
                  }}
                  className="w-full h-auto max-h-full overflow-hidden transition-all duration-500 bg-black bg-center bg-no-repeat bg-cover rounded-2xl ease"
                />
              </div>
            </BasicPanel>
          </div>
          <div className="mt-4 mb-0 1.5xl:mb-4">
            {data.description && (
              <BasicPanel>
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  className="mx-auto prose prose-td:align-middle xl:text-base text-xs prose-invert max-w-[95%]"
                >
                  {data.description}
                </ReactMarkdown>
              </BasicPanel>
            )}
          </div>
        </div>
        <div className="col-span-3 space-y-4 1.5xl:col-span-1">
          <BasicPanel>
            <div className="grid grid-cols-1 px-4 py-3 uppercase 1.5xl:grid-cols-4">
              <div className="col-span-1">
                <div className="text-lg text-secondary">Basis</div>
              </div>
              <div className="col-span-1 1.5xl:col-span-3">
                <div className="grid grid-cols-3 uppercase">
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Länge:</p>
                    <p className="p-0 text-primary">
                      {data.length ? data.length + ' M' : 'N/A'}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Breite:</p>
                    <p className="p-0 text-primary">
                      {data.beam ? data.beam + ' M' : 'N/A'}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Höhe:</p>
                    <p className="p-0 text-primary">
                      {data.height ? data.height + ' M' : 'N/A'}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 uppercase">
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Gewicht:</p>
                    <p className="p-0 text-primary">
                      {data.mass ? (data.mass / 1000).toFixed(2) + ' t' : 'N/A'}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Frachtkapazität:</p>
                    <p className="p-0 text-primary">
                      {data.cargo ? data.cargo + ' SCU' : 'N/A'}
                    </p>
                  </div>
                </div>
                <hr className="relative mt-3 mb-2 -ml-1 col-span-full sm:mt-3 sm:mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                <div className="grid grid-cols-2 uppercase">
                  <div className="col-span-1">
                    <p className="pb-0 text-sm truncate">Klassifizierung:</p>
                    <p className="p-0 text-primary">
                      {data.classification != null
                        ? data.classification
                        : 'N/A'}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Grösse:</p>
                    <p className="p-0 text-primary">
                      {data.size
                        ? data.size == 0
                          ? `Bodenfahrzeug - XS (${data.size})`
                          : data.size == 1
                          ? `Klein - S (${data.size})`
                          : data.size == 2
                          ? `Medium - M (${data.size})`
                          : data.size == 3
                          ? `Gross - L (${data.size})`
                          : data.size == 4
                          ? `X-Gross - XL (${data.size})`
                          : data.size == 5 && `Capital - C (${data.size})`
                        : 'N/A'}
                    </p>
                  </div>
                </div>
                <hr className="relative mt-3 mb-2 -ml-1 col-span-full sm:mt-3 sm:mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                <div className="grid grid-cols-2 uppercase">
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Min Crew:</p>
                    <p className="p-0 text-primary">
                      {data.minCrew != null
                        ? data.minCrew +
                          (data.minCrew > 1 ? ' Personen' : ' Person')
                        : 'N/A'}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Max Crew:</p>
                    <p className="p-0 text-primary">
                      {data.minCrew != null
                        ? data.maxCrew +
                          (data.maxCrew > 1 ? ' Personen' : ' Person')
                        : 'N/A'}
                    </p>
                  </div>
                </div>
                <hr className="relative mt-3 mb-2 -ml-1 col-span-full sm:mt-3 sm:mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                <div className="grid grid-cols-2 uppercase">
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Treibstoff:</p>
                    <p className="p-0 text-primary">
                      {data.hydrogenFuelTankSize != null
                        ? data.hydrogenFuelTankSize
                            .toString()
                            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.') + ' L'
                        : 'N/A'}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Quantum Treibstoff:</p>
                    <p className="p-0 text-primary">
                      {data.quantumFuelTankSize != null
                        ? data.quantumFuelTankSize
                            .toString()
                            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.') + ' L'
                        : 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </BasicPanel>
          <BasicPanel>
            <div className="grid grid-cols-1 px-4 py-3 uppercase 1.5xl:grid-cols-4">
              <div className="col-span-1">
                <div className="text-lg text-secondary">Kaufen</div>
              </div>
              <div className="col-span-1 1.5xl:col-span-3">
                <div className="grid grid-cols-2 uppercase">
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Pledgewert:</p>
                    <p className="p-0 text-primary">
                      {data.pledgePrice != null
                        ? '$' +
                          data.pledgePrice
                            .toString()
                            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
                        : 'N/A'}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Kaufpreis:</p>
                    <p className="p-0 normal-case text text-primary">
                      {data.price != null
                        ? data.price
                            .toString()
                            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.') +
                          ' aUEC'
                        : 'N/A'}
                    </p>
                  </div>
                </div>
                <hr className="relative mt-3 mb-2 -ml-1 col-span-full sm:mt-3 sm:mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                <div className="grid grid-cols-2 uppercase">
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Kaufbar bei:</p>
                    <p className="p-0 text-primary">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </BasicPanel>
          <BasicPanel>
            <div className="grid grid-cols-1 px-4 py-3 uppercase 1.5xl:grid-cols-4">
              <div className="col-span-1">
                <div className="text-lg text-secondary">Speed</div>
              </div>
              <div className="col-span-1 1.5xl:col-span-3">
                <div className="grid grid-cols-2 uppercase">
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">SCM Geschwindigkeit:</p>
                    <p className="p-0 normal-case text-primary">
                      {data.scmSpeed ? data.scmSpeed + ' m/s' : 'N/A'}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Afterburner Geschwindigkeit:</p>
                    <p className="p-0 normal-case text-primary">
                      {data.afterburnerSpeed
                        ? data.afterburnerSpeed + ' m/s'
                        : 'N/A'}
                    </p>
                  </div>
                </div>
                <hr className="relative mt-3 mb-2 -ml-1 col-span-full sm:mt-3 sm:mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                <div className="grid grid-cols-3 uppercase">
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Pitch Max:</p>
                    <p className="p-0 normal-case text-primary">
                      {data.pitchMax ? data.pitchMax + ' m/s' : 'N/A'}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Yaw Max:</p>
                    <p className="p-0 normal-case text-primary">
                      {data.yawMax ? data.yawMax + ' m/s' : 'N/A'}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Roll Max:</p>
                    <p className="p-0 normal-case text-primary">
                      {data.rollMax ? data.rollMax + ' m/s' : 'N/A'}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 uppercase">
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">X-Achse:</p>
                    <p className="p-0 normal-case text-primary">
                      {data.xaxisAcceleration
                        ? data.xaxisAcceleration + ' m/s'
                        : 'N/A'}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Y-Achse:</p>
                    <p className="p-0 normal-case text-primary">
                      {data.yaxisAcceleration
                        ? data.yaxisAcceleration + ' m/s'
                        : 'N/A'}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Z-Achse:</p>
                    <p className="p-0 normal-case text-primary">
                      {data.zaxisAcceleration
                        ? data.zaxisAcceleration + ' m/s'
                        : 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </BasicPanel>
          <div className="flex space-x-4">
            <div className="flex-grow-[2]">
              {data.storeUrl ? (
                <BasicPanelButton
                  className="w-full"
                  a
                  external
                  href={
                    data.onSale
                      ? data.storeUrl + '#buying-options'
                      : data.storeUrl
                  }
                >
                  {data.onSale ? (
                    <p className="p-0 text-sm">
                      On Sale: ${data.pledgePrice} excl. VAT
                    </p>
                  ) : (
                    <p className="p-0">RSI Page</p>
                  )}
                </BasicPanelButton>
              ) : (
                <BasicPanelButton disabled className="w-full">
                  <p className="p-0">Keine RSI Page vorhanden</p>
                </BasicPanelButton>
              )}
            </div>
            <div onClick={() => handleShare()} className="flex-grow-0">
              <div
                className={
                  'relative w-[44px] h-[44px] text-inherit decoration-transparent aspect-square inline-block p-[2px] bg-transparent group border-2 border-primary rounded-[10px] cursor-pointer transition-all hover:duration-200 duration-500 ease-out box-border before:absolute before:-top-[2px] before:right-[14px] before:left-[14px] before:h-[2px] before:bg-[#444] before:box-border after:absolute after:-bottom-[2px] after:right-[14px] after:left-[14px] after:h-[2px] after:bg-[#444] after:box-border '
                }
              >
                <div className="group-hover:bg-white/5 group-hover:text-primary p-[10px] box-border overflow-hidden whitespace-nowrap text-center text-ellipsis rounded-[6px] transition-all hover:duration-200 duration-500 ease-out">
                  <ShareSquare className="fill-white" />
                </div>
              </div>
            </div>
            <Menu as="div" className="relative flex-grow-0">
              <Menu.Button>
                <div
                  className={
                    'relative w-[44px] h-[44px] text-inherit decoration-transparent aspect-square inline-block p-[2px] bg-transparent group border-2 border-primary rounded-[10px] cursor-pointer transition-all hover:duration-200 duration-500 ease-out box-border before:absolute before:-top-[2px] before:right-[14px] before:left-[14px] before:h-[2px] before:bg-[#444] before:box-border after:absolute after:-bottom-[2px] after:right-[14px] after:left-[14px] after:h-[2px] after:bg-[#444] after:box-border '
                  }
                >
                  <div className="group-hover:bg-white/5 group-hover:text-primary p-[10px] box-border overflow-hidden whitespace-nowrap text-center text-ellipsis rounded-[6px] transition-all hover:duration-200 duration-500 ease-out">
                    <ThreeDots className="fill-white" />
                  </div>
                </div>
              </Menu.Button>
              <Menu.Items
                as="div"
                className={
                  'right-2 left-auto block absolute top-full mt-[10px] z-50 min-w-[200px] p-[2px] bg-[#111] border-2 border-primary rounded-[10px] cursor-pointer box-border before:absolute before:-top-[2px] before:right-[14px] before:left-[14px] before:h-[2px] before:bg-[#444] before:box-border after:absolute after:-bottom-[2px] after:right-[14px] after:left-[14px] after:h-[2px] after:bg-[#444] after:box-border'
                }
              >
                <Menu.Item
                  as="a"
                  target="_blank"
                  href={data.salesPageUrl}
                  className={
                    'group mb-0 text-inherit decoration-transparent bg-transparent border-none block w-full m-0 text-left relative min-w-[50px] p-[2px] rounded-[10px] cursor-pointer transition-all duration-500 box-border'
                  }
                >
                  <div className="group-hover:bg-white/10 group-hover:text-primary flex items-center justify-between text-left py-[6px] px-[14px] overflow-hidden whitespace-nowrap text-ellipsis rounded-[6px] transition-all duration-500 box-border">
                    <div className="mr-[6px] w-1/4">
                      {' '}
                      <Presentation height={18} className="stroke-white" />{' '}
                    </div>
                    <span className="box-border flex-1">RSI Promoseite</span>
                  </div>
                </Menu.Item>

                <Menu.Item
                  as="a"
                  target="_blank"
                  href={
                    data.brochure
                      ? 'https://cms.ariscorp.de/assets/' + data.brochure.id
                      : null
                  }
                  className={
                    'group mb-0 text-inherit decoration-transparent bg-transparent border-none block w-full m-0 text-left relative min-w-[50px] p-[2px] rounded-[10px] cursor-pointer transition-all duration-500 box-border ' +
                    (data.brochure ? '' : 'hidden')
                  }
                >
                  <div className="group-hover:bg-white/10 group-hover:text-primary flex items-center justify-between text-left py-[6px] px-[14px] overflow-hidden whitespace-nowrap text-ellipsis rounded-[6px] transition-all duration-500 box-border ">
                    <div className="mr-[6px] w-1/4">
                      {' '}
                      <Catalog height={18} className="stroke-white" />{' '}
                    </div>
                    <span className="box-border flex-1">Broschüre</span>
                  </div>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </div>
      <hr />
      <div>
        {data.history ||
        data.gallery[0] ||
        data.commercialVideoId ||
        data.rating ? (
          <Tab.Group
            selectedIndex={activeTab}
            onChange={(event) =>
              replace(
                {
                  pathname: `${Ship}`,
                  query: { tab: event },
                },
                undefined,
                { shallow: true }
              ) + setActiveTab(event)
            }
          >
            <Tab.List className="flex flex-wrap justify-between">
              {data.hardpoints && (
                <Tab
                  className={({ selected }) =>
                    (selected ? 'text-primary' : 'opacity-50') +
                    ' focus-visible:outline-none p-3 m-1 outline-none transition-all duration-300 ease-in-out'
                  }
                >
                  <h1 className="text-base font-normal uppercase font-base lg:text-xl xl:text-2xl text-inherit">
                    Austattung
                  </h1>
                </Tab>
              )}
              {data.history && (
                <Tab
                  className={({ selected }) =>
                    (selected ? 'text-primary' : 'opacity-50') +
                    ' focus-visible:outline-none p-3 m-1 outline-none transition-all duration-300 ease-in-out'
                  }
                >
                  <h1 className="text-base font-normal uppercase font-base lg:text-xl xl:text-2xl text-inherit">
                    Geschichte
                  </h1>
                </Tab>
              )}
              {data.gallery[0] && (
                <Tab
                  className={({ selected }) =>
                    (selected ? 'text-primary' : 'opacity-50') +
                    ' focus-visible:outline-none p-3 m-1 outline-none transition-all duration-300 ease-in-out'
                  }
                >
                  <h1 className="text-base font-normal uppercase font-base lg:text-xl xl:text-2xl text-inherit">
                    Gallerie
                  </h1>
                </Tab>
              )}
              {data.commercialVideoId && (
                <Tab
                  className={({ selected }) =>
                    (selected ? 'text-primary' : 'opacity-50') +
                    ' focus-visible:outline-none p-3 m-1 outline-none transition-all duration-300 ease-in-out'
                  }
                >
                  <h1 className="text-base font-normal uppercase font-base lg:text-xl xl:text-2xl text-inherit">
                    Commercial
                  </h1>
                </Tab>
              )}
              {data.rating && (
                <Tab
                  className={({ selected }) =>
                    (selected ? 'text-primary' : 'opacity-50') +
                    ' focus-visible:outline-none p-3 m-1 outline-none transition-all duration-300 ease-in-out'
                  }
                >
                  <h1 className="text-base font-normal uppercase font-base lg:text-xl xl:text-2xl text-inherit">
                    Wertung
                  </h1>
                </Tab>
              )}
            </Tab.List>
            <Tab.Panels className={'px-4 1.5xl:px-0 pt-5'}>
              {data.hardpoints && (
                <Tab.Panel>
                  <ShipHardpoints
                    data={data}
                    components={components}
                    companies={companies}
                  />
                </Tab.Panel>
              )}
              {data.history && (
                <Tab.Panel>
                  <BasicPanel>
                    <div>
                      <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        className="mx-auto prose prose-td:align-middle prose-invert max-w-[90%] 1.5xl:text-"
                      >
                        {data.history}
                      </ReactMarkdown>
                    </div>
                  </BasicPanel>
                </Tab.Panel>
              )}
              {data.gallery[0] && (
                <Tab.Panel>
                  <BasicPanel>
                    <div className="overflow-hidden rounded-2xl">
                      <ImageGallery items={galleryImages} />
                    </div>
                  </BasicPanel>
                </Tab.Panel>
              )}
              {data.commercialVideoId && (
                <Tab.Panel>
                  <BasicPanel>
                    <VideoPlayer videoId={data.commercialVideoId} />
                  </BasicPanel>
                </Tab.Panel>
              )}
              {data.rating && (
                <Tab.Panel>
                  {data.rating?.ratings ? (
                    <BasicPanel>
                      <div>
                        <div>
                          <div>
                            <h1 className="pl-4">
                              <span className="text-primary">ArisCorp</span>
                              <span> Wertung</span>
                            </h1>
                          </div>
                          <div className="grid gap-8 px-4 mt-4 1.5xl:px-8 1.5xl:grid-cols-2">
                            <div className="flex flex-wrap">
                              <div className="h-fit">
                                <div className="px-2 mb-8 border border-secondary">
                                  <ReactMarkdown
                                    rehypePlugins={[rehypeRaw]}
                                    className="text-lg"
                                  >
                                    {data.rating.introduction}
                                  </ReactMarkdown>
                                </div>

                                <ul className="pl-2 text-xl">
                                  {data.rating.s_w
                                    ? data.rating.s_w
                                        .filter(
                                          (e) => e.kategorie == 'positive'
                                        )
                                        .map((object, index) => (
                                          <li
                                            key={index}
                                            className='list-none my-2 before:content-["+"] before:text-green-500 before:mr-2'
                                          >
                                            {object.name}
                                          </li>
                                        ))
                                    : null}
                                  {data.rating.s_w
                                    ? data.rating.s_w
                                        .filter(
                                          (e) => e.kategorie == 'negative'
                                        )
                                        .map((object, index) => (
                                          <li
                                            key={index}
                                            className='list-none my-2 before:content-["-"] before:text-red-500 before:mr-2'
                                          >
                                            {object.name}
                                          </li>
                                        ))
                                    : null}
                                </ul>
                              </div>

                              <div className="flex-wrap items-center justify-center hidden py-6 mt-auto whitespace-normal 1.5xl:flex">
                                <div>
                                  <h2 className="w-full">Die {data.name}</h2>
                                  <p>Erreichte eine Wertung von:</p>
                                </div>
                                <div className="w-3/12 pl-2">
                                  <CircularProgressbarWithChildren
                                    value={overallScore}
                                    text={`${overallScore}%`}
                                    strokeWidth={10}
                                    styles={buildStyles({
                                      strokeLinecap: 'butt',
                                    })}
                                  >
                                    <RadialSeparators
                                      count={12}
                                      style={{
                                        background: '#666',
                                        width: '2px',
                                        // This needs to be equal to props.strokeWidth
                                        height: `${10}%`,
                                      }}
                                    />
                                  </CircularProgressbarWithChildren>
                                </div>
                              </div>
                            </div>
                            <div className="mb-6 1.5xl:pl-4">
                              <h2 className="-ml-2 1.5xl:-ml-4 text-primary">
                                Unsere Einschätzung:
                              </h2>
                              <div>
                                <p className="text-lg text-secondary">
                                  <span>Kampfpontenzial - </span>
                                  <span>
                                    {fightScore == 10
                                      ? 'Gering'
                                      : fightScore == 15
                                      ? 'Mittel'
                                      : fightScore == 20
                                      ? 'Gut'
                                      : fightScore == 25
                                      ? 'Sehr Gut'
                                      : 'nicht vorhanden'}
                                  </span>
                                </p>
                                <p className="ml-4 -mt-3">{fightReason}</p>
                              </div>
                              <div>
                                <p className="text-lg text-secondary">
                                  <span>Wirtschaftliches Potenzial - </span>
                                  <span>
                                    {ecoScore == 10
                                      ? 'Gering'
                                      : ecoScore == 15
                                      ? 'Mittel'
                                      : ecoScore == 20
                                      ? 'Gut'
                                      : ecoScore == 25
                                      ? 'Sehr Gut'
                                      : 'nicht vorhanden'}
                                  </span>
                                </p>
                                <p className="ml-4 -mt-3">{ecoReason}</p>
                              </div>
                              <div>
                                <p className="text-lg text-secondary">
                                  <span>Benutzungspotenzial - </span>
                                  <span>
                                    {useScore == 10
                                      ? 'Gering'
                                      : useScore == 15
                                      ? 'Mittel'
                                      : useScore == 20
                                      ? 'Gut'
                                      : useScore == 25
                                      ? 'Sehr Gut'
                                      : 'nicht vorhanden'}
                                  </span>
                                </p>
                                <p className="ml-4 -mt-3">{useReason}</p>
                              </div>
                              <div>
                                <p className="text-lg text-secondary">
                                  <span>Preis-Leistungsverhältnis - </span>
                                  <span>
                                    {ppScore == 10
                                      ? 'Gering'
                                      : ppScore == 15
                                      ? 'Mittel'
                                      : ppScore == 20
                                      ? 'Gut'
                                      : ppScore == 25
                                      ? 'Sehr Gut'
                                      : 'nicht vorhanden'}
                                  </span>
                                </p>
                                <p className="ml-4 -mt-3">{ppReason}</p>
                              </div>
                              <div>
                                <p className="text-lg text-secondary">
                                  <span>Schlussfolgerung - </span>
                                  <span>
                                    {conclusionScore == 10
                                      ? 'Gering'
                                      : conclusionScore == 15
                                      ? 'Mittel'
                                      : conclusionScore == 20
                                      ? 'Gut'
                                      : conclusionScore == 25
                                      ? 'Sehr Gut'
                                      : 'nicht vorhanden'}
                                  </span>
                                </p>
                                <p className="ml-4 -mt-3">{conclusionReason}</p>
                              </div>
                              <div className="flex flex-wrap items-center justify-center py-6 mt-auto whitespace-normal 1.5xl:hidden">
                                <div>
                                  <h2 className="w-full">Die {data.name}</h2>
                                  <p>Erreichte eine Wertung von:</p>
                                </div>
                                <div className="w-32 pl-2 aspect-square">
                                  <CircularProgressbarWithChildren
                                    value={overallScore}
                                    text={`${overallScore}%`}
                                    strokeWidth={10}
                                    styles={buildStyles({
                                      strokeLinecap: 'butt',
                                    })}
                                  >
                                    <RadialSeparators
                                      count={12}
                                      style={{
                                        background: '#666',
                                        width: '2px',
                                        // This needs to be equal to props.strokeWidth
                                        height: `${10}%`,
                                      }}
                                    />
                                  </CircularProgressbarWithChildren>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </BasicPanel>
                  ) : null}
                </Tab.Panel>
              )}
            </Tab.Panels>
          </Tab.Group>
        ) : (
          <ShipHardpoints
            data={data}
            components={components}
            companies={companies}
          />
        )}
        <hr />
        <div className="flex flex-wrap w-full space-x-4 italic uppercase 1.5xl:flex-nowrap text-secondary">
          {variants[0] && (
            <>
              <div className="w-full">
                <h3 className="mt-0 text-secondary">Varianten</h3>
                <div
                  className={`gap-x-3 gap-y-2 grid grid-cols-${
                    columns == 1 ? 2 : 1
                  }`}
                >
                  {variants.map((obj) => (
                    <ShipCard key={obj.id} data={obj} />
                  ))}
                </div>
              </div>
              <hr className="1.5xl:hidden" />
            </>
          )}
          {loaners[0] && (
            <>
              <div className="w-full">
                <h3 className="mt-0 text-secondary">Loaners</h3>
                <div
                  className={`gap-x-3 grid gap-y-2 grid-cols-${
                    columns == 1 ? 2 : 1
                  }`}
                >
                  {loaners.map((obj) => (
                    <ShipCard key={obj.id} data={obj} />
                  ))}
                </div>
              </div>
              <hr className="1.5xl:hidden" />
            </>
          )}
          {data.paints[0] && (
            <div className="w-full">
              <h3 className="mt-0 text-secondary">Paints</h3>
              <div
                className={`gap-x-3 gap-y-2 grid 1.5xl:grid-cols-${
                  columns == 1 ? 2 : 1
                }`}
              >
                {data.paints?.map((obj) => (
                  <ShipPaintCard key={obj.name} data={obj} />
                ))}
              </div>
            </div>
          )}
          {data.modules[0] && (
            <div className="w-full">
              <h3 className="mt-0 text-secondary">Module</h3>
              <div
                className={`gap-x-3 gap-y-2 grid 1.5xl:grid-cols-${
                  columns == 1 ? 2 : 1
                }`}
              >
                {data.modules?.map((obj) => (
                  <ShipPaintCard key={obj.name} data={obj} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

ShipPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
