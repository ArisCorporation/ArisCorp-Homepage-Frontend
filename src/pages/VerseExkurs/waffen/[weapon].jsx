import Layout from 'pages/VerseExkurs/layout'
import { useEffect, useState } from 'react'
import { SquareLoader } from 'react-spinners'
import Image from 'next/future/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Router, { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_VERSEEXKURS_WEAPON } from 'graphql/queries'
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
  const { weapon: Weapon } = params

  let { data } = await client.query({
    query: GET_VERSEEXKURS_WEAPON,
    variables: { Weapon },
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  const weapon = data.technologien[0]
  const feuermodi = []
  let table = []

  weapon.feuermodi.map((obj) => {
    feuermodi.push(obj.waffen_feuermodi_id.feuermodus)
  })

  weapon.tabelle.map((obj) => {
    if (obj.reihe == "alpha") {
      obj.label = "Alpha Schaden"
    }
    if (obj.reihe == "dps_single") {
      obj.label = "DPS Einzel"
    }
    if (obj.reihe == "dps_burst") {
      obj.label = "DPS Salve"
    }
    if (obj.reihe == "dps_vollauto") {
      obj.label = "DPS Gebündelt"
    }
    if (obj.reihe == "damage_reduction") {
      obj.label = "Schadensreduktion"
    }
    if (obj.reihe == "bullets_per_shot") {
      obj.label = "Geschosse pro Schuss"
    }
    if (obj.reihe == "damage_per_bullet") {
      obj.label = "Schaden pro Geschoss"
    }

    table.push(obj)
  })

  const siteTitle = weapon.waffen_name + " - Astro Research and Industrial Service Corporation"

  return {
    props: {
      weapon,
      feuermodi,
      table,
      siteTitle
    },
  }
}

export default function SpectrumArticlePage ({ weapon, feuermodi, table, siteTitle }) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState()
  const { replace, query } = useRouter()
  const urlquery = query.tab
  const shareUrl = "https://ariscorp.de/VerseExkurs/waffen/" + weapon.waffen_name + (urlquery ? "?tab=" + urlquery : "")

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
          <h1 className="text-2xl italic xs:text-3xl sm:text-4xl lg:text-5xl 1.5xl:text-6xl">
            <span>{weapon.waffen_name}</span>{' '}
            <span className="text-secondary">
              {weapon.waffen_klasse.waffenklasse}
            </span>
          </h1>
        </div>
        <Link href={'/VerseExkurs/firmen/' + weapon.waffenhersteller.firmen_name}>
          <a
            style={{ backgroundImage: `url(https://cms.ariscorp.de/assets/${weapon.waffenhersteller.firmen_trans_logo.id})` }}
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
                <div style={{ backgroundImage: `url(https://cms.ariscorp.de/assets/${weapon.waffen_bild.id})` }} className='w-full h-auto max-h-full overflow-hidden transition-all duration-500 bg-black bg-center bg-no-repeat bg-cover rounded-2xl ease' />
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
                  <p className='pb-0 text-sm'>Klassifizierung:</p>
                  <p className='p-0 text-primary'>{
                    weapon.waffen_klasse.waffenklasse != null
                      ? weapon.waffen_klasse.waffenklasse +
                      ' (S' +
                      weapon.waffen_klasse.waffenklassensize.waffensize +
                      ')'
                      : 'N/A'
                  }</p>
                </div>
                <div className="col-span-1">
                  <p className='pb-0 text-sm'>Hersteller:</p>
                  <p className='p-0 text-primary'>{
                    weapon.waffenhersteller.firmen_name != null
                      ? weapon.waffenhersteller.firmen_name
                      : 'N/A'
                  }</p>
                </div>
                <div className="col-span-1">
                  <p className='pb-0 text-sm'>Gewicht:</p>
                  <p className='p-0 text-primary'>{
                    weapon.waffengewicht != null
                      ? weapon.waffengewicht + ' KG'
                      : 'N/A'
                  }</p>
                </div>
                <hr className='relative mt-3 mb-2 -ml-1 col-span-full sm:mt-3 sm:mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary' />
                <div className='grid grid-cols-2 uppercase'>
                  <div className="col-span-1">
                    <p className='pb-0 text-sm'>Schadenstyp:</p>
                    <p className='p-0 text-primary'>{
                      weapon.wafffen_schadenstyp.schadenstyp != null
                        ? weapon.wafffen_schadenstyp.schadenstyp
                        : 'N/A'
                    }</p>
                  </div>
                  <div className="col-span-1">
                    <p className='pb-0 text-sm'>Feuermodi:</p>
                    <p className='p-0 text-primary'>{
                      weapon.wafffen_schadenstyp.schadenstyp != null
                        ? weapon.wafffen_schadenstyp.schadenstyp
                        : 'N/A'
                    }</p>
                  </div>
                  <div className="col-span-1">
                    <p className='pb-0 text-sm'>Feuerrate:</p>
                    <p className='p-0 text-primary'>{
                      weapon.waffen_feuerrate_einzel ||
                        weapon.waffen_feuerrate_salve ||
                        weapon.waffen_feuerrate_vollauto ||
                        weapon.waffen_feuerrate_aufgeladen != null
                        ? (weapon.waffen_feuerrate_einzel != null
                          ? weapon.waffen_feuerrate_einzel + '/Einzel  '
                          : '') +
                        (weapon.waffen_feuerrate_salve != null
                          ? weapon.waffen_feuerrate_salve + '/Salve  '
                          : '') +
                        (weapon.waffen_feuerrate_vollauto != null
                          ? weapon.waffen_feuerrate_vollauto + '/Gebündelt  '
                          : '') +
                        (weapon.waffen_feuerrate_aufgeladen != null
                          ? weapon.waffen_feuerrate_aufgeladen + '/Aufgeladen  '
                          : '')
                        : 'N/A'
                    }</p>
                  </div>
                  <div className="col-span-1">
                    <p className='pb-0 text-sm'>Mündungs Geschwindigkeit:</p>
                    <p className='p-0 text-primary'>{
                      weapon.waffen_muendungs_geschwindigkeit != null
                        ? weapon.waffen_muendungs_geschwindigkeit
                        : 'N/A'
                    }</p>
                  </div>
                </div>
              </div>
            </div>
          </BasicPanel>
          <BasicPanel>
            <div className="grid grid-cols-1 px-4 py-3 uppercase 1.5xl:grid-cols-4">
              <div className='col-span-4'>
                <div className='text-lg text-secondary'>
                  Attachments
                </div>
              </div>
              <div className="hidden col-span-1 1.5xl:block" />
              <div className='col-span-1 1.5xl:col-span-3'>
                <div className='grid grid-cols-3 uppercase'>
                    <div className="col-span-3">
                      <p className='pb-0 text-sm'>Magazine:</p>
                      <p className='p-0 text-primary'>{
                        weapon.waffen_magazin != null
                          ? weapon.waffen_magazin
                          : 'N/A'
                      }</p>
                    </div>
                    <div className="col-span-1">
                      <p className='pb-0 text-sm'>Visierung:</p>
                      <p className='p-0 normal-case text text-primary'>{
                        weapon.waffen_visier != null
                          ? weapon.waffen_visier.visiername
                          : 'Leer' +
                          ' (S' +
                          weapon.waffen_klasse.waffenklassensize.waffensize +
                          ')'
                      }</p>
                    </div>
                    <div className="col-span-1">
                      <p className='pb-0 text-sm'>Lauf:</p>
                      <p className='p-0 normal-case text text-primary'>{
                        weapon.waffen_lauf != null
                          ? weapon.waffengewicht + ' KG'
                          : 'Leer' +
                          ' (S' +
                          weapon.waffen_klasse.waffenklassensize.waffensize +
                          ')'
                      }</p>
                    </div>
                    <div className="col-span-1">
                      <p className='pb-0 text-sm'>Unterlauf:</p>
                      <p className='p-0 normal-case text text-primary'>{
                        weapon.waffen_unterlauf != null
                          ? weapon.waffengewicht + ' KG'
                          : 'Leer' +
                          ' (S' +
                          weapon.waffen_klasse.waffenklassensize.waffensize +
                          ')'
                      }</p>
                    </div>
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
        <Tab.Group
          selectedIndex={activeTab}
          onChange={(event) =>
            replace(
              {
                query: { weapon: weapon.waffen_name, tab: event },
              },
              undefined,
              { shallow: true }
            ) + setActiveTab(event)
          }
        >
          <Tab.List className="flex flex-wrap justify-between">
            <Tab
              className={({ selected }) =>
                (selected ? 'text-primary' : 'opacity-50') +
                ' p-3 m-1 outline-none transition-all duration-300 ease-in-out'
              }
            >
              <h1 className="text-base font-normal uppercase font-base md:text-lg lg:text-xl xl:text-2xl text-inherit">
                Statistiken
              </h1>
            </Tab>
            <Tab
              className={({ selected }) =>
                (selected ? 'text-primary' : 'opacity-50') +
                ' p-3 m-1 outline-none transition-all duration-300 ease-in-out'
              }
            >
              <h1 className="text-base font-normal uppercase font-base md:text-lg lg:text-xl xl:text-2xl text-inherit">
                kaufen
              </h1>
            </Tab>
          </Tab.List>
          <Tab.Panels className={'px-4 xl:px-0 pt-5'}>
            <BasicPanel>
              <Tab.Panel>
                <div className="flex flex-wrap text-xs xl:space-x-2 xl:flex-nowrap sm:text-sm md:text-base">
                  <div className="px-2 pb-5 mx-auto italic uppercase xs:mx-0 sm:px-8 lg:px-4 xl:pr-0 xl:pl-4 lg:w-5/12">
                    <p className="text-secondary">Statistiken</p>
                    <table>
                      <tr>
                        <th className="text-left">Maximale Reichweite:</th>
                        <td className="text-left text-primary">
                          {weapon.waffen_maximale_reichweite != null
                            ? weapon.waffen_maximale_reichweite
                            : 'N/A'}
                        </td>
                      </tr>
                      <tr>
                        <th className="pr-5 text-left">
                          Effektive Reichweite:
                        </th>
                        <td className="text-left text-primary">
                          {weapon.waffen_effektive_reichweite != null
                            ? weapon.waffen_effektive_reichweite
                            : 'N/A'}
                        </td>
                      </tr>
                    </table>
                    <hr className="w-[98%] relative mt-1 mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                    <table className="table-auto">
                      <tr>
                        <th className="py-2 pr-6 text-left">Entfernung</th>
                        {table[0][0] ? (<th className="px-2">0M</th>) : ""}
                        {table[0][15] ? (<th className="px-2">15M</th>) : ""}
                        {table[0][20] ? (<th className="px-2">20M</th>) : ""}
                        {table[0][25] ? (<th className="px-2">25M</th>) : ""}
                        {table[0][30] ? (<th className="px-2">30M</th>) : ""}
                        {table[0][40] ? (<th className="px-2">40M</th>) : ""}
                        {table[0][50] ? (<th className="px-2">50M</th>) : ""}
                        {table[0][100] ? (<th className="px-2">100M</th>) : ""}
                        {table[0][200] ? (<th className="px-2">200M</th>) : ""}
                        {table[0][400] ? (<th className="px-2">400M</th>) : ""}
                        {table[0][800] ? (<th className="px-2">800M</th>) : ""}
                        {table[0][1000] ? (<th className="px-2">1000M</th>) : ""}
                      </tr>
                      {table.map((obj) => (
                        <tr key={obj.reihe}>
                          <th className="py-2 pr-6 text-left">{obj.label}</th>
                          {obj[0] ? (<td className="px-2 text-center text-primary">{obj[0]}</td>) : ""}
                          {obj[15] ? (<td className="px-2 text-center text-primary">{obj[15]}</td>) : ""}
                          {obj[20] ? (<td className="px-2 text-center text-primary">{obj[20]}</td>) : ""}
                          {obj[25] ? (<td className="px-2 text-center text-primary">{obj[25]}</td>) : ""}
                          {obj[30] ? (<td className="px-2 text-center text-primary">{obj[30]}</td>) : ""}
                          {obj[40] ? (<td className="px-2 text-center text-primary">{obj[40]}</td>) : ""}
                          {obj[50] ? (<td className="px-2 text-center text-primary">{obj[50]}</td>) : ""}
                          {obj[100] ? (<td className="px-2 text-center text-primary">{obj[100]}</td>) : ""}
                          {obj[200] ? (<td className="px-2 text-center text-primary">{obj[200]}</td>) : ""}
                          {obj[400] ? (<td className="px-2 text-center text-primary">{obj[400]}</td>) : ""}
                          {obj[800] ? (<td className="px-2 text-center text-primary">{obj[800]}</td>) : ""}
                          {obj[1000] ? (<td className="px-2 text-center text-primary">{obj[1000]}</td>) : ""}
                        </tr>
                      ))}
                    </table>
                    <hr className="w-[98%] relative mt-1 mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                  </div>
                  <div className="px-2 pb-5 sm:px-8 lg:px-4 xl:pr-0 xl:pl-4 xl:w-7/12">
                    <p className="italic uppercase text-secondary">
                      Beschreibung
                    </p>
                    <ReactMarkdown
                      rehypePlugins={[rehypeRaw]}
                      className="prose prose-td:align-middle prose-invert xl:max-w-[90%] md:text-lg"
                    >
                      {weapon.waffen_beschreibung}
                    </ReactMarkdown>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  className="mx-auto prose prose-td:align-middle prose-invert xl:max-w-[90%] md:text-"
                >
                  coming soon
                </ReactMarkdown>
              </Tab.Panel>
            </BasicPanel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}

SpectrumArticlePage.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
