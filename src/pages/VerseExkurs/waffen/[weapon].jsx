import Layout from 'pages/VerseExkurs/layout'
import { useEffect, useState } from 'react'
import { SquareLoader } from 'react-spinners'
import Image from 'next/future/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Router, { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_VERSEEXKURS_WEAPON } from 'graphql/queries'
import { BasicPanel } from 'components/panels'
import { Tab } from '@headlessui/react'
import Head from 'next/head'
import client from 'apollo/clients'

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

  useEffect(() => {
    if (urlquery != null && urlquery != '') {
      setActiveTab(urlquery)
    } else {
      setActiveTab(0)
    }
  }, [urlquery])

  return (
    <div className="items-center pt-10 mx-auto print:pt-5">
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
            {' '}
            <span>{weapon.waffen_name}</span>{' '}
            <span className="text-secondary">
              {weapon.waffen_klasse.waffenklasse}
            </span>{' '}
          </h1>
          <div
            className="relative ml-auto -my-10 hover:cursor-pointer xs:h-32 h-28 xmlnsXlink xxs:h-24 sm:h-40 md:h-48 aspect-square"
            onClick={() =>
              router.push(
                '/VerseExkurs/firmen/' + weapon.waffenhersteller.firmen_name
              )
            }
          >
            <Image
              src={
                'https://cms.ariscorp.de/assets/' +
                weapon.waffenhersteller.firmen_trans_logo.id
              }
              alt={'Logo von ' + weapon.waffenhersteller.firmen_name}
              fill
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                weapon.waffenhersteller.firmen_trans_logo.id +
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
              src={'https://cms.ariscorp.de/assets/' + weapon.waffen_bild.id}
              alt={'Bild von ' + weapon.waffen_name}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                weapon.waffen_bild.id +
                '?width=16&quality=1'
              }
            />
          </BasicPanel>
        </div>
        <div className="w-full xl:w-2/5">
          <BasicPanel
            className={'h-full'}
            childClassName={'h-full overflow-hidden'}
          >
            <div className="w-full h-full px-5 pb-2 text-xs italic uppercase xs:text-sm">
              <table className="w-full space-y-10 table-auto">
                <div>
                  <p className="pt-2 m-0 -ml-2 text-sm xs:text-base text-secondary">
                    Spezifikationen
                  </p>
                </div>
                <tr>
                  <th className="pr-2 text-left">Klassifizierung:</th>
                  <td className="text-left text-primary">
                    {weapon.waffen_klasse.waffenklasse != null
                      ? weapon.waffen_klasse.waffenklasse +
                      ' (S' +
                      weapon.waffen_klasse.waffenklassensize.waffensize +
                      ')'
                      : 'N/A'}
                  </td>
                </tr>
                <tr>
                  <th className="pr-2 text-left">Hersteller:</th>
                  <td className="text-left text-primary">
                    {weapon.waffenhersteller.firmen_name != null
                      ? weapon.waffenhersteller.firmen_name
                      : 'N/A'}
                  </td>
                </tr>
                <tr>
                  <th className="pr-2 text-left">Gewicht:</th>
                  <td className="text-left text-primary">
                    {weapon.waffengewicht != null
                      ? weapon.waffengewicht + ' KG'
                      : 'N/A'}
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <hr className="relative w-[85%] mt-3 sm:mt-5 sm:mb-4 mb-2 -ml-1 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                  </td>
                </tr>
                <tr>
                  <th className="pr-2 text-left">Schadenstyp:</th>
                  <td className="text-left text-primary">
                    {weapon.wafffen_schadenstyp.schadenstyp != null
                      ? weapon.wafffen_schadenstyp.schadenstyp
                      : 'N/A'}
                  </td>
                </tr>
                <tr>
                  <th className="pr-2 text-left">Feuermodi:</th>
                  <td className="text-left break-words text-primary">
                    {feuermodi[0] != null ? feuermodi.join(", ") : 'N/A'}
                  </td>
                </tr>
                <tr>
                  <th className="pr-2 text-left">Feuerrate:</th>
                  <td className="text-left text-primary">
                    {weapon.waffen_feuerrate_einzel ||
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
                      : 'N/A'}
                  </td>
                </tr>
                <tr>
                  <th className="pr-2 text-left">Mündungs Geschwindigkeit:</th>
                  <td className="text-left text-primary">
                    {weapon.waffen_muendungs_geschwindigkeit != null
                      ? weapon.waffen_muendungs_geschwindigkeit
                      : 'N/A'}
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <hr className="relative w-[85%] mt-3 -ml-1 mb-0 sm:mt-5 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                  </td>
                </tr>
                <div>
                  <p className="pt-0 m-0 -ml-2 text-sm xs:text-base text-secondary">
                    Attachments
                  </p>
                </div>
                <tr>
                  <th className="pr-2 text-left">Magazine:</th>
                  <td className="text-left break-words text-primary">
                    {weapon.waffen_magazin != null
                      ? weapon.waffen_magazin
                      : 'N/A'}
                  </td>
                </tr>
                <tr>
                  <th className="pr-2 text-left">Visierung:</th>
                  <td className="text-left text-primary">
                    {weapon.waffen_visier != null
                      ? weapon.waffen_visier.visiername
                      : 'Leer' +
                      ' (S' +
                      weapon.waffen_klasse.waffenklassensize.waffensize +
                      ')'}
                  </td>
                </tr>
                <tr>
                  <th className="pr-2 text-left">Lauf:</th>
                  <td className="text-left text-primary">
                    {weapon.waffen_lauf != null
                      ? weapon.waffengewicht + ' KG'
                      : 'Leer' +
                      ' (S' +
                      weapon.waffen_klasse.waffenklassensize.waffensize +
                      ')'}
                  </td>
                </tr>
                <tr>
                  <th className="pr-2 text-left">Unterlauf:</th>
                  <td className="text-left text-primary">
                    {weapon.waffen_unterlauf != null
                      ? weapon.waffengewicht + ' KG'
                      : 'Leer' +
                      ' (S' +
                      weapon.waffen_klasse.waffenklassensize.waffensize +
                      ')'}
                  </td>
                </tr>
              </table>
            </div>
          </BasicPanel>
        </div>
      </div>
      <hr />
      <div>
        <Tab.Group
          selectedIndex={activeTab}
          onChange={(event) =>
            replace(
              {
                pathname: `${Weapon}`,
                query: { tab: event },
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
                ' p-3 m-1 transition-all duration-300 ease-in-out'
              }
            >
              <h1 className="text-base font-normal uppercase font-base md:text-lg lg:text-xl xl:text-2xl text-inherit">
                Statistiken
              </h1>
            </Tab>
            <Tab
              className={({ selected }) =>
                (selected ? 'text-primary' : 'opacity-50') +
                ' p-3 m-1 transition-all duration-300 ease-in-out'
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
                  c
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
