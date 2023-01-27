import Layout from './layout'
import { useEffect, useState } from 'react'
import { SquareLoader } from 'react-spinners'
import Image from 'next/future/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Router, { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_SHIPEXKURS_SHIP } from 'graphql/queries'
import { BasicPanel } from 'components/panels'
import { Tab } from '@headlessui/react'
import client from 'apollo/clients'
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar'
import ImageGallery from 'react-image-gallery';
// import 'react-circular-progressbar/dist/styles.css'
import './progressbar.css'
import "react-image-gallery/styles/css/image-gallery.css";

import React from 'react'

import _ from 'lodash'

// Animation
import { easeQuadInOut } from 'd3-ease'
import Head from 'next/head'

function Separator (props) {
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

function RadialSeparators (props) {
  const turns = 1 / props.count
  return _.range(props.count).map((index) => (
    <Separator key={index} turns={index * turns} style={props.style} />
  ))
}

export async function getServerSideProps (context) {
  const { params } = context
  const { ship } = params

  let { data } = await client.query({
    query: GET_SHIPEXKURS_SHIP,
    variables: { slug: ship },
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  data = data.ships[0]

  const siteTitle = data.name + " - Astro Research and Service Industrial Corporation"

  return {
    props: {
      data,
      siteTitle
    },
  }
}

export default function SpectrumArticlePage ({ data, siteTitle }) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState()
  const { replace, query } = useRouter()
  const urlquery = query.tab
  const { ship: Ship } = router.query

  useEffect(() => {
    if (urlquery != null && urlquery != '') {
      setActiveTab(urlquery)
    } else {
      setActiveTab(0)
    }
  }, [urlquery])

  function getScore (array) {
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
    data.ratings.filter((e) => e.kategorie == 'fight_potential')[0].grad
  )
  const fightReason = data.ratings.filter(
    (e) => e.kategorie == 'fight_potential'
  )[0].begrundung
  const ecoScore = parseInt(
    data.ratings.filter((e) => e.kategorie == 'eco_potential')[0].grad
  )
  const ecoReason = data.ratings.filter(
    (e) => e.kategorie == 'eco_potential'
  )[0].begrundung
  const useScore = parseInt(
    data.ratings.filter((e) => e.kategorie == 'use_potential')[0].grad
  )
  const useReason = data.ratings.filter(
    (e) => e.kategorie == 'use_potential'
  )[0].begrundung
  const ppScore = parseInt(
    data.ratings.filter((e) => e.kategorie == 'p-p_ratio')[0].grad
  )
  const ppReason = data.ratings.filter((e) => e.kategorie == 'p-p_ratio')[0]
    .begrundung
  const conclusionScore = parseInt(
    data.ratings.filter((e) => e.kategorie == 'conclusion')[0].grad
  )
  const conclusionReason = data.ratings.filter(
    (e) => e.kategorie == 'fight_potential'
  )[0].begrundung
  const overallScore = getScore(data.ratings)

  const galleryImages = data.gallery.map((i) => {
    const original = ("https://cms.ariscorp.de/assets/" + i.directus_files_id.id)
    const thumbnail = ("https://cms.ariscorp.de/assets/" + i.directus_files_id.id + "?width=250")

    return {
      original,
      thumbnail
    }
  })

  return (
    <div className="items-center max-w-6xl mx-auto print:pt-5">
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
        <div className="relative flex items-center align-center">
          <div className="absolute bottom-0">
            <h1 className="text-2xl italic xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              {/* <span>{data.manufacturer.firmen_name} </span> */}
              <span className="text-secondary">{data.name}</span>{' '}
            </h1>
            <h3 className="mb-0 uppercase">
              <span className="text-white/25">Status: </span>
              <span>{data.productionStatus}</span>
            </h3>
          </div>
          <div
            className="relative mt-0 ml-auto hover:cursor-pointer xs:h-32 h-28 xmlnsXlink xxs:h-24 sm:h-40 md:h-48 aspect-square"
            onClick={() =>
              router.push(
                '/VerseExkurs/firmen/' + data.manufacturer.firmen_name
              )
            }
          >
            <Image
              src={
                'https://cms.ariscorp.de/assets/' +
                data.manufacturer.firmen_trans_logo.id
              }
              alt={'Logo von ' + data.manufacturer.firmen_name}
              fill
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                data.manufacturer.firmen_trans_logo.id +
                '?width=16&quality=1'
              }
            />
          </div>
        </div>
        <hr className="mt-2" />
      </div>
      <div className="w-full space-y-2 xl:space-y-0 xl:space-x-2 lg:flex lg:flex-wrap xl:flex-nowrap">
        <div className="w-full aspect-[21/9] xl:aspect-auto xl:w-3/5">
          <BasicPanel
            className={'h-full'}
            childClassName={'h-full'}
          >
            <Image
              src={'https://cms.ariscorp.de/assets/' + data.storeImage.id}
              alt={'Bild von ' + data.name}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                data.storeImage.id +
                '?width=16&quality=1'
              }
            />
          </BasicPanel>
        </div>
        <div className="w-full xl:w-2/5">
          <BasicPanel>
            <div className='overflow-hidden rounded-2xl'>
              <div className="w-full h-full px-5 pb-2 text-xs italic uppercase xs:text-sm">
                <table className="w-full table-fixed">
                  <caption className="pt-2 m-0 -ml-2 text-sm text-left xs:text-base text-secondary">
                    Spezifikationen
                  </caption>
                  <tbody>
                    <tr className="">
                      <th className="pr-2 text-left">Länge:</th>
                      <td className="text-left text-primary">
                        {data.length != null ? data.length + 'M' : 'N/A'}
                      </td>
                      <th className="pr-2 text-left">Breite:</th>
                      <td className="text-left text-primary">
                        {data.beam != null ? data.beam + 'M' : 'N/A'}
                      </td>
                      <th className="pr-2 text-left">Höhe:</th>
                      <td className="text-left text-primary">
                        {data.height != null ? data.height + 'M' : 'N/A'}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full table-auto">
                  <tbody>
                    <tr>
                      <td colSpan="2">
                        <hr className="relative w-full mt-3 mb-2 -ml-1 sm:mt-3 sm:mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                      </td>
                    </tr>
                    <tr>
                      <th className="pr-2 text-left">Typ Klassifizierung:</th>
                      <td className="text-left text-primary">
                        {data.classification != null
                          ? data.classification
                          : 'N/A'}
                      </td>
                    </tr>
                    <tr>
                      <th className="pr-2 text-left">Größen Klassifizierung:</th>
                      <td className="text-left text-primary">
                        {data.classification != null
                          ? data.size == 'small'
                            ? 'Klein'
                            : data.size == 'medium'
                              ? 'Medium'
                              : data.size == 'large'
                                ? 'Groß'
                                : data.size == 'capital'
                                  ? data.size
                                  : 'N/A'
                          : 'N/A'}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <hr className="relative w-full mt-3 mb-2 -ml-1 sm:mt-3 sm:mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full table-fixed">
                  <tbody>
                    <tr>
                      <th className="pr-2 text-left">Min Crew:</th>
                      <td className="text-left text-primary">
                        {data.minCrew != null
                          ? data.minCrew +
                          (data.minCrew > 1 ? ' Personen' : ' Person')
                          : 'N/A'}
                      </td>
                      <th className="pr-2 text-left">Max Crew:</th>
                      <td className="text-left text-primary">
                        {data.minCrew != null
                          ? data.maxCrew +
                          (data.maxCrew > 1 ? ' Personen' : ' Person')
                          : 'N/A'}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full table-auto">
                  <tbody>
                    <tr>
                      <td colSpan="2">
                        <hr className="relative w-full mt-3 mb-2 -ml-1 sm:mt-3 sm:mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                      </td>
                    </tr>
                    <tr>
                      <th className="pr-2 text-left">Kaufpreis:</th>
                      <td className="text-left text-primary">
                        {data.price != null ? (
                          <div className="flex items-center">
                            <p>
                              {data.price
                                .toString()
                                .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}
                              <span className="lowercase"> a</span>UEC
                            </p>
                          </div>
                        ) : (
                          'N/A'
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th className="pr-2 text-left">Kaufbar Bei:</th>
                      <td className="text-left text-primary">N/A</td>
                    </tr>
                    <tr>
                      <th className="pr-2 text-left">Pledgewert:</th>
                      <td className="text-left text-primary">
                        {data.pledgePrice != null
                          ? data.pledgePrice
                            .toString()
                            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.') + '$'
                          : 'N/A'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </BasicPanel>
          <BasicPanel>
            <div className='overflow-hidden rounded-2xl'>
              <div className="w-full h-full px-5 pb-2 text-xs italic uppercase xs:text-sm">
                <table className="w-full table-fixed">
                  <caption className="pt-2 m-0 -ml-2 text-sm text-left xs:text-base text-secondary">
                    Geschwindigkeit
                  </caption>
                  <tbody>
                    <tr>
                      <th className="pr-2 text-left scale-60">
                        SCM Geschwindigkeit:
                      </th>

                      <th className="pr-2 text-xs text-left">
                        Afterburner Geschwindigkeit:
                      </th>
                    </tr>
                    <tr>
                      <td className="text-left text-primary">
                        {data.ScmSpeed != null ? data.ScmSpeed + ' M/S' : 'N/A'}
                      </td>
                      <td className="text-left text-primary">
                        {data.afterburnerSpeed != null
                          ? data.afterburnerSpeed + 'M/S'
                          : 'N/A'}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <hr className="relative w-[85%] mt-3 sm:mt-3 sm:mb-2 mb-2 -ml-1 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full table-fixed">
                  <tbody>
                    <tr>
                      <th className="pr-2 text-left">Pitch Max:</th>
                      <td className="text-left text-primary">N/A</td>
                      <th className="pr-2 text-left">X-Achse:</th>
                      <td className="text-left text-primary">N/A</td>
                    </tr>
                    <tr>
                      <th className="pr-2 text-left">Yaw Max:</th>
                      <td className="text-left text-primary">N/A</td>
                      <th className="pr-2 text-left">Y-Achse:</th>
                      <td className="text-left text-primary">N/A</td>
                    </tr>
                    <tr>
                      <th className="pr-2 text-left">Roll Max:</th>
                      <td className="text-left text-primary">N/A</td>
                      <th className="pr-2 text-left">Z-Achse:</th>
                      <td className="text-left text-primary">N/A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                pathname: `${Ship}`,
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
                Austattung
              </h1>
            </Tab>
            <Tab
              className={({ selected }) =>
                (selected ? 'text-primary' : 'opacity-50') +
                ' p-3 m-1 transition-all duration-300 ease-in-out'
              }
            >
              <h1 className="text-base font-normal uppercase font-base md:text-lg lg:text-xl xl:text-2xl text-inherit">
                Geschichte
              </h1>
            </Tab>
            <Tab
              className={({ selected }) =>
                (selected ? 'text-primary' : 'opacity-50') +
                ' p-3 m-1 transition-all duration-300 ease-in-out'
              }
            >
              <h1 className="text-base font-normal uppercase font-base md:text-lg lg:text-xl xl:text-2xl text-inherit">
                Gallerie
              </h1>
            </Tab>
            <Tab
              className={({ selected }) =>
                (selected ? 'text-primary' : 'opacity-50') +
                ' p-3 m-1 transition-all duration-300 ease-in-out'
              }
            >
              <h1 className="text-base font-normal uppercase font-base md:text-lg lg:text-xl xl:text-2xl text-inherit">
                Wertung
              </h1>
            </Tab>
          </Tab.List>
          <Tab.Panels className={'px-4 xl:px-0 pt-5'}>
            <Tab.Panel>
              <div className="flex space-x-2 uppercase">
                <BasicPanel className={'h-fit w-1/3'}>
                  <div className="relative mx-3 mt-4 mb-4 space-y-1">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <div className="w-8 aspect-square">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#00ffe8"
                            stroke="#00ffe8"
                            viewBox="0 0 44.93 45.42"
                            nighteye="disabled"
                          >
                            <path
                              d="m31.49 43.8h-18.41l2-2h15.58l10.93-10.93v-15.58l2-2v18.41zm-27.92-29.09 10.93-10.93h14.6l2-2h-17.43l-12.1 12.1v18.41l2-2zm28.9 14.29v-12.38l-3.72-3.72h-12.34l-3.72 3.72v12.38l3.72 3.72h12.34zm-17.78-.83v-10.72l2.55-2.55h10.68l2.55 2.55v10.68l-2.55 2.55h-10.68z"
                              opacity=".4"
                            />
                            <path d="m12.3 28.28a2.93 2.93 0 1 0 -3.09-.67 2.9 2.9 0 0 0 1.09.68v2.76l-7.81 7.86 1.42 1.41 8.39-8.43zm-1.68-3.4a.93.93 0 1 1 0 1.32.93.93 0 0 1 0-1.32zm-3.07-3.15 2.45-2.39a2.93 2.93 0 0 0 3.33-4.72 3 3 0 0 0 -4.15 0 2.91 2.91 0 0 0 -.59 3.29l-3.05 3v10l-5.54 5.53 1.41 1.42 6.14-6.13zm3.06-5.73a.93.93 0 0 1 1.32 0 .93.93 0 0 1 0 1.32 1 1 0 0 1 -1.32 0 .93.93 0 0 1 0-1.32zm6.23 19a2.93 2.93 0 0 0 .63.95 2.52 2.52 0 0 0 1.89.86 3.35 3.35 0 0 0 2.26-.81 2.93 2.93 0 0 0 0-4.15 3 3 0 0 0 -4.15 0 2.9 2.9 0 0 0 -.71 1.21h-3.31l-8.32 8.34 1.41 1.41 7.74-7.74zm2-1.79a.93.93 0 1 1 1.32 1.32 1 1 0 0 1 -1.32 0 .93.93 0 0 1 0-1.32zm13.96-15.86a2.93 2.93 0 1 0 3.14.65 2.9 2.9 0 0 0 -1.14-.69v-3.11l7.64-7.68-1.44-1.42-8.2 8.27zm1.73 3.39a.93.93 0 1 1 0-1.32.94.94 0 0 1 0 1.32zm9-13.17-6 6v10l-2.46 2.39a2.93 2.93 0 1 0 1.41 1.42l3.06-3v-10l5.39-5.38zm-9.07 21.68a.93.93 0 1 1 0-1.32.94.94 0 0 1 0 1.32zm-6.29-18.73a2.9 2.9 0 0 0 -.69-1.11 2.94 2.94 0 1 0 0 4.15 2.91 2.91 0 0 0 .66-1h3.2l8.47-8.56-1.42-1.39-7.87 7.91zm-2.1 1.62a1 1 0 0 1 -1.32 0 .93.93 0 1 1 1.32 0zm4 19.79a3 3 0 0 0 -4.15 0 2.9 2.9 0 0 0 -.57 3.33l-2.79 2.87h-8.97l-5.86 5.87 1.42 1.41 5.28-5.29h8.95l3.37-3.46a2.93 2.93 0 0 0 3.25-4.73zm-1.41 2.74a1 1 0 0 1 -1.32 0 .93.93 0 0 1 1.32-1.32.93.93 0 0 1 0 1.32zm-11.83-20.18a2.92 2.92 0 0 0 2.64-4.19l2.93-3h8.93l5.87-5.88-1.41-1.42-5.28 5.29h-8.95l-3.56 3.61a3 3 0 0 0 -3.29.58 2.93 2.93 0 0 0 2.08 5zm-.66-3.59a.93.93 0 0 1 1.32 0 .93.93 0 1 1 -1.32 0z" />
                          </svg>
                        </div>
                        <p className="pl-2 text-sm">Computer</p>
                      </div>
                      <div className="absolute right-0 text-xs text-primary">
                        3X - Größe 2
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center">
                        <div className="w-8 aspect-square">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#00ffe8"
                            stroke="#00ffe8"
                            viewBox="0 0 41.32 41.32"
                            nighteye="disabled"
                          >
                            <circle
                              cx="20.66"
                              cy="20.66"
                              opacity=".3"
                              r="16.46"
                              strokeMiterlimit="10"
                              strokeWidth="5"
                            />
                            <path d="m41.32 20.16h-20.16v-20.16h-1v20.16h-20.16v1h20.16v20.16h1v-19.42l11.26 11.94a1 1 0 1 0 1.41-1.41l-12-11.26h19.49z">
                              <circle
                                cx="20.66"
                                cy="20.66"
                                opacity=".2"
                                r="9.18"
                                strokeMiterlimit="10"
                                strokeWidth="5"
                              />
                              <circle
                                cx="20.66"
                                cy="20.66"
                                opacity=".15"
                                r="5.58"
                                strokeMiterlimit="10"
                                strokeWidth="5"
                              />
                            </path>
                          </svg>
                        </div>
                        <p className="pl-2 text-sm">Radar</p>
                      </div>
                      <div className="absolute right-0 text-xs text-primary">
                        2X - Größe 3
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center">
                        <div className="w-8 aspect-square">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 39.366 39.366"
                            fill="#00ffe8"
                            stroke="#00ffe8"
                            nighteye="disabled"
                          >
                            <path d="M19.683 0c-4.44 0-8.527 1.495-11.823 3.984h-.004l-.003.005C3.093 7.584 0 13.27 0 19.682c0 10.854 8.83 19.683 19.683 19.683 4.44 0 8.527-1.495 11.823-3.984h.004l.004-.006c4.758-3.596 7.852-9.283 7.852-15.693C39.366 8.83 30.536 0 19.683 0zm10.453 29.12c-2.71-.188-5.183-1.615-6.7-3.868l-.7-1.04-2.927.99.26 1.757c.527 3.556 3.162 6.436 6.66 7.276l2.157.52c-2.685 1.645-5.83 2.612-9.204 2.612-.358 0-.708-.033-1.06-.054l-1.885-3.86c-1.193-2.44-1.193-5.295 0-7.737l.55-1.126-2.32-2.038-1.39 1.103c-2.818 2.236-3.994 5.958-2.973 9.406l.638 2.158c-3.168-1.728-5.736-4.405-7.358-7.637l2.4-3.562c1.518-2.254 3.99-3.68 6.7-3.87l1.252-.086.606-3.03-1.65-.65C9.847 15.06 6.035 15.9 3.56 18.51l-1.536 1.618c-.005-.15-.024-.295-.024-.445 0-3.595 1.085-6.94 2.935-9.734l4.295.296c2.71.188 5.183 1.615 6.7 3.868l.7 1.04 2.927-.99-.26-1.756c-.528-3.557-3.163-6.437-6.66-7.277l-2.16-.518C13.165 2.967 16.31 2 19.684 2c.358 0 .708.033 1.06.054l1.886 3.86c1.192 2.44 1.192 5.295 0 7.737l-.55 1.127 2.32 2.04 1.39-1.104c2.817-2.236 3.993-5.958 2.972-9.406l-.64-2.157c3.17 1.728 5.737 4.405 7.36 7.637l-2.4 3.563c-1.52 2.253-3.99 3.68-6.702 3.87l-1.25.086-.606 3.03 1.65.65c3.345 1.323 7.157.48 9.633-2.128l1.536-1.618c.004.15.022.294.022.444 0 3.595-1.085 6.94-2.935 9.734l-4.294-.298z" />
                          </svg>
                        </div>

                        <p className="pl-2 text-sm">Kühler</p>
                      </div>
                      <div className="absolute right-0 text-xs text-primary">
                        2X - Größe 3
                      </div>
                      <div className="absolute right-0 flex pl-2 mt-8 text-xs">
                        <p className="mr-2 text-secondary">Ice-Flush</p>
                        <p className="text-white/20">Juno Starwerk</p>
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center">
                        <div className="w-8 aspect-square">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 39.87 39.87"
                            fill="#00ffe8"
                            stroke="#00ffe8"
                            nighteye="disabled"
                          >
                            <path d="M34.29,39.87H28.8v-3H33L36.87,33V6.82L33,3H28.8V0h5.49l5.58,5.58V34.29Zm-23.23,0H5.58L0,34.29V5.58L5.58,0h5.49V3H6.82L3,6.82V33l3.82,3.82h4.25Zm3.75-5.63L25.88,18.81l-5.55-.46L25,6.94H16.18L14,20.36l3.54.44Z" />
                          </svg>
                        </div>
                        <p className="pl-2 text-sm">Energie Generator</p>
                      </div>
                      <div className="absolute right-0 text-xs text-primary">
                        1X - Größe 3
                      </div>
                      <div className="absolute right-0 flex pl-2 mt-8 text-xs">
                        <p className="mr-2 text-secondary">Reliance</p>
                        <p className="text-white/20">Juno Starwerk</p>
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center">
                        <div className="w-8 aspect-square">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#00ffe8"
                            stroke="#00ffe8"
                            viewBox="0 0 37.83 32.76"
                            nighteye="disabled"
                          >
                            <path d="m35.17 21 2.65-4.59-2.65-4.59h-3.56l-2.37-4.14 1.76-3.09-2.63-4.59h-5.3l-1.79 3.09h-4.74l-1.78-3.09h-5.3l-2.65 4.59 1.78 3.09-2.37 4.11h-3.57l-2.65 4.59 2.65 4.62h3.57l2.37 4.11-1.78 3.06 2.65 4.59h5.3l1.78-3.09h4.74l1.78 3.09h5.3l2.64-4.59-1.78-3.09 2.39-4.08zm-12.1 2.58-1.78 3.09h-4.75l-1.78-3.09h-3.57l-2.37-4.11 1.78-3.09-1.78-3.09 2.37-4.11h3.57l1.78-3.09h4.74l1.78 3.09h3.57l2.37 4.11-1.78 3.09 1.78 3.09-2.37 4.11z" />
                          </svg>
                        </div>
                        <p className="pl-2 text-sm">Schild Generator</p>
                      </div>
                      <div className="absolute right-0 text-xs text-primary">
                        2X - Größe 3
                      </div>
                      <div className="absolute right-0 flex pl-2 mt-8 text-xs">
                        <p className="mr-2 text-secondary">Barbican</p>
                        <p className="text-white/20">Basilisk</p>
                      </div>
                    </div>
                  </div>
                </BasicPanel>
                <BasicPanel className={'h-fit w-1/3'}>
                  <div className="relative mx-3 mt-4 mb-4 space-y-1">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <div className="w-8 aspect-square">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#00ffe8"
                            stroke="#00ffe8"
                            viewBox="0 0 38.57 25.18"
                            nighteye="disabled"
                          >
                            <path d="m38.57 10.23v4.69l-8.42 10.26h-17v-4l1.94-2v4h4.35l5.44-5.41v-10.38l-5.29-5.39h-4.49v4l-1.9-2v-4h17zm-38.57.93h11.36l-1-5.2 6.64 6.63-6.63 6.63 1-5.32h-11.37z" />
                          </svg>
                        </div>
                        <p className="pl-2 text-sm">Treibstoff Einlass</p>
                      </div>
                      <div className="absolute right-0 text-xs text-primary">
                        2X - Größe 3
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <div className="w-8 aspect-square">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#00ffe8"
                            stroke="#00ffe8"
                            viewBox="0 0 29.74 34.76"
                            nighteye="disabled"
                          >
                            <path d="m27.06 0h-15.23l-4.53 4.53h-1l-.37-.33v-.55l-1.41-1.42h-.52l-4 4v.56l1.42 1.37h.58l.33.33v1l-.76.76v21.83l2.68 2.68h22.81l2.68-2.68v-29.47zm-11.87 30.74a7.42 7.42 0 0 1 -6.19-11.55 7.43 7.43 0 0 1 .47-.62c3.19-3.66 3.38-7.68 6.73-10-1 3.9 2.09 7 4.63 10a7.44 7.44 0 0 1 .47.62 7.42 7.42 0 0 1 -6.15 11.56zm12-26.14h-17.27l2.81-2.81h13.08l1.36 1.36zm-12.41 11.18a14.6 14.6 0 0 0 2.71 3.81c.29.33.58.65.86 1a4.14 4.14 0 1 1 -6.33 0 16.13 16.13 0 0 0 2.62-4.49zm.41-2.78c-1.39 1.63-1.73 4.41-3.93 6.94a5.14 5.14 0 0 0 -.32.43 5.13 5.13 0 1 0 8.51 0 5.16 5.16 0 0 0 -.33-.43c-1.76-2.09-3.93-3.94-3.93-6.94z" />
                          </svg>
                        </div>
                        <p className="pl-2 text-sm">Treibstofftank</p>
                      </div>
                      <div className="absolute right-0 text-xs text-primary">
                        2X - Größe 3
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <div className="w-8 aspect-square">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 29.74 34.76"
                            fill="#00ffe8"
                            stroke="#00ffe8"
                            nighteye="disabled"
                          >
                            <path d="M6.15,20.57l9.64,9.64,9.64-9.64-9.64-9.64Zm12.27-2.63v2h3.9v1.3h-3.9v2h-2v3.9h-1.3V23.2h-2v-2H9.26v-1.3h3.9v-2h2V14h1.3v3.9ZM27.06,0H11.83L7.3,4.53h-1L5.93,4.2V3.65L4.52,2.23H4l-4,4v.56L1.42,8.16H2l.33.33v1l-.76.76V32.08l2.68,2.68H27.06l2.68-2.68V2.61ZM12.74,1.79H25.81l1.36,1.36V4.61H9.92ZM15.79,33,3.31,20.57,15.79,8.09,28.27,20.57Z" />
                          </svg>
                        </div>
                        <p className="pl-2 text-xs">Quantum Treibstofftank</p>
                      </div>
                      <div className="absolute right-0 text-xs text-primary">
                        2X - Größe 3
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <div className="w-8 aspect-square">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 40.35 40.35"
                            fill="#00ffe8"
                            stroke="#00ffe8"
                            nighteye="disabled"
                          >
                            <path d="M15.84,7.56,14.23,5.95,20.18,0l5.95,5.95L24.51,7.56,20.18,3.23Zm-9.9,6.67L0,20.18l5.95,5.95,1.62-1.62L3.23,20.18l4.33-4.33ZM34.4,26.12l5.95-5.95L34.4,14.23l-1.62,1.62,4.33,4.33-4.33,4.33Zm-14.23,11-4.33-4.33L14.23,34.4l5.95,5.95,5.95-5.95-1.62-1.62Zm7.94-16.94L25,17,35.87,6.1,34.25,4.49,23.34,15.4l-3.16-3.16L17,15.4,6.1,4.49,4.49,6.1,15.4,17l-3.16,3.16,3.16,3.16L4.49,34.25,6.1,35.87,17,25l3.16,3.16L23.34,25,34.25,35.87l1.62-1.62L25,23.34Z" />
                          </svg>
                        </div>
                        <p className="pl-2 text-sm">Quantum Antrieb</p>
                      </div>
                      <div className="absolute right-0 text-xs text-primary">
                        1X - Größe 3
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <div className="w-8 aspect-square">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 40.35 40.35"
                            fill="#00ffe8"
                            stroke="#00ffe8"
                            nighteye="disabled"
                          >
                            <path d="M40.35,20.18,20.18,40.35,0,20.18,20.18,0ZM20.18,37.12,37.12,20.18,20.18,3.23,3.23,20.18ZM19,24.79v6.86h2.28V24.79h3.47V21.32h6.86V19H24.79V15.56H21.32V8.7H19v6.86H15.56V19H8.7v2.28h6.86v3.47Z" />
                          </svg>
                        </div>
                        <p className="pl-2 text-sm">Sprung Antrieb</p>
                      </div>
                      <div className="absolute right-0 text-xs text-primary">
                        1X - Größe 3
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <div className="w-8 aspect-square">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#00ffe8"
                            stroke="#00ffe8"
                            viewBox="0 0 27.6 37"
                            nighteye="disabled"
                          >
                            <path d="m21.8 2.3 5.8 8.3-1.4 2.6-3.9-3.8a7.3 7.3 0 0 0 -5.1-2.1h-6.8a7.3 7.3 0 0 0 -5.1 2.1l-4 3.9-1.3-2.7 5.8-8.3a5.5 5.5 0 0 1 4.5-2.3h7.1a5.5 5.5 0 0 1 4.4 2.3zm-8 28.4 6.8-16.6 6.8 7.1-5.1-.6-8.5 16.4-8.6-16.4-5 .6 6.8-7.1zm-2.5-19.6h5.1a1.1 1.1 0 0 1 1 1.5l-3.6 8-3.5-7.9a1.1 1.1 0 0 1 1-1.5z" />
                          </svg>
                        </div>
                        <p className="pl-2 text-sm">Haupt Triebwerke</p>
                      </div>
                      <div className="absolute right-0 text-xs text-primary">
                        6X - Größe 1,
                      </div>
                      <div className="absolute right-0 mt-8 text-sm text-primary">
                        4X - Größe 1 VTOL
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <div className="w-8 aspect-square">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#00ffe8"
                            stroke="#00ffe8"
                            viewBox="0 0 45.89 29.54"
                            nighteye="disabled"
                          >
                            <path d="m20.12 18.42-1 5.89-1.68.51v-3.23a4.29 4.29 0 0 0 -1.26-3l-2.84-2.84a4.29 4.29 0 0 0 -3-1.26h-3.3l.57-1.68 5.9-1a3.22 3.22 0 0 1 2.84.89l2.95 2.95a3.22 3.22 0 0 1 .82 2.77zm-15 8.28 9.55-3.84-.1 5.8-1.88-2.37-10.39 3.25 3.26-10.42-2.33-1.83 5.77-.12zm6.88-9 2.13 2.13a.64.64 0 0 1 -.23 1.05l-4.76 1.83 1.86-4.78a.64.64 0 0 1 1-.22zm14.64-2.13 2.95-2.95a3.22 3.22 0 0 1 2.84-.89l5.9 1 .57 1.68h-3.3a4.29 4.29 0 0 0 -3 1.26l-2.81 2.93a4.29 4.29 0 0 0 -1.26 3v3.23l-1.68-.51-1-5.89a3.22 3.22 0 0 1 .82-2.85zm10.21 1.59 5.78.12-2.33 1.84 3.26 10.42-10.39-3.25-1.88 2.37-.1-5.8 9.55 3.84zm-2 .76 1.84 4.77-4.69-1.8a.64.64 0 0 1 -.23-1.05l2.13-2.13a.64.64 0 0 1 1.01.22zm-16.48-12c-5.45-3.44-13.21-3.29-13.21-3.29v-2.63a32.91 32.91 0 0 0 -5.16 4.17 21 21 0 0 1 5.16 3.27v-2.67s4.6-.77 13.27 1.14zm22.35-1.15v2.67a21 21 0 0 1 5.16-3.26 32.91 32.91 0 0 0 -5.16-4.18v2.63s-7.72-.15-13.26 3.28c8.66-1.91 13.26-1.14 13.26-1.14z" />
                          </svg>
                        </div>
                        <p className="pl-2 text-sm">Manöber Triebwerke</p>
                      </div>
                      <div className="absolute right-0 text-xs text-primary">
                        12X - Größe 1
                      </div>
                    </div>
                  </div>
                </BasicPanel>
                <BasicPanel className={'h-fit w-1/3'}>
                  <div className="relative mx-3 mt-4 mb-4 space-y-1">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <div className="w-8 aspect-square">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#00ffe8"
                            stroke="#00ffe8"
                            viewBox="0 0 45.89 29.54"
                            nighteye="disabled"
                          >
                            <path d="m20.12 18.42-1 5.89-1.68.51v-3.23a4.29 4.29 0 0 0 -1.26-3l-2.84-2.84a4.29 4.29 0 0 0 -3-1.26h-3.3l.57-1.68 5.9-1a3.22 3.22 0 0 1 2.84.89l2.95 2.95a3.22 3.22 0 0 1 .82 2.77zm-15 8.28 9.55-3.84-.1 5.8-1.88-2.37-10.39 3.25 3.26-10.42-2.33-1.83 5.77-.12zm6.88-9 2.13 2.13a.64.64 0 0 1 -.23 1.05l-4.76 1.83 1.86-4.78a.64.64 0 0 1 1-.22zm14.64-2.13 2.95-2.95a3.22 3.22 0 0 1 2.84-.89l5.9 1 .57 1.68h-3.3a4.29 4.29 0 0 0 -3 1.26l-2.81 2.93a4.29 4.29 0 0 0 -1.26 3v3.23l-1.68-.51-1-5.89a3.22 3.22 0 0 1 .82-2.85zm10.21 1.59 5.78.12-2.33 1.84 3.26 10.42-10.39-3.25-1.88 2.37-.1-5.8 9.55 3.84zm-2 .76 1.84 4.77-4.69-1.8a.64.64 0 0 1 -.23-1.05l2.13-2.13a.64.64 0 0 1 1.01.22zm-16.48-12c-5.45-3.44-13.21-3.29-13.21-3.29v-2.63a32.91 32.91 0 0 0 -5.16 4.17 21 21 0 0 1 5.16 3.27v-2.67s4.6-.77 13.27 1.14zm22.35-1.15v2.67a21 21 0 0 1 5.16-3.26 32.91 32.91 0 0 0 -5.16-4.18v2.63s-7.72-.15-13.26 3.28c8.66-1.91 13.26-1.14 13.26-1.14z" />
                          </svg>
                        </div>
                        <p className="pl-2 text-sm">Waffen</p>
                      </div>
                      <div className="absolute right-0 text-xs text-primary">
                        N/A
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <div className="w-8 aspect-square">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#00ffe8"
                            stroke="#00ffe8"
                            viewBox="0 0 45.89 29.54"
                            nighteye="disabled"
                          >
                            <path d="m20.12 18.42-1 5.89-1.68.51v-3.23a4.29 4.29 0 0 0 -1.26-3l-2.84-2.84a4.29 4.29 0 0 0 -3-1.26h-3.3l.57-1.68 5.9-1a3.22 3.22 0 0 1 2.84.89l2.95 2.95a3.22 3.22 0 0 1 .82 2.77zm-15 8.28 9.55-3.84-.1 5.8-1.88-2.37-10.39 3.25 3.26-10.42-2.33-1.83 5.77-.12zm6.88-9 2.13 2.13a.64.64 0 0 1 -.23 1.05l-4.76 1.83 1.86-4.78a.64.64 0 0 1 1-.22zm14.64-2.13 2.95-2.95a3.22 3.22 0 0 1 2.84-.89l5.9 1 .57 1.68h-3.3a4.29 4.29 0 0 0 -3 1.26l-2.81 2.93a4.29 4.29 0 0 0 -1.26 3v3.23l-1.68-.51-1-5.89a3.22 3.22 0 0 1 .82-2.85zm10.21 1.59 5.78.12-2.33 1.84 3.26 10.42-10.39-3.25-1.88 2.37-.1-5.8 9.55 3.84zm-2 .76 1.84 4.77-4.69-1.8a.64.64 0 0 1 -.23-1.05l2.13-2.13a.64.64 0 0 1 1.01.22zm-16.48-12c-5.45-3.44-13.21-3.29-13.21-3.29v-2.63a32.91 32.91 0 0 0 -5.16 4.17 21 21 0 0 1 5.16 3.27v-2.67s4.6-.77 13.27 1.14zm22.35-1.15v2.67a21 21 0 0 1 5.16-3.26 32.91 32.91 0 0 0 -5.16-4.18v2.63s-7.72-.15-13.26 3.28c8.66-1.91 13.26-1.14 13.26-1.14z" />
                          </svg>
                        </div>
                        <p className="pl-2 text-sm">Raketen</p>
                      </div>
                      <div className="absolute right-0 text-xs text-primary">
                        N/A
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <div className="w-8 aspect-square">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#00ffe8"
                            stroke="#00ffe8"
                            viewBox="0 0 45.89 29.54"
                            nighteye="disabled"
                          >
                            <path d="m20.12 18.42-1 5.89-1.68.51v-3.23a4.29 4.29 0 0 0 -1.26-3l-2.84-2.84a4.29 4.29 0 0 0 -3-1.26h-3.3l.57-1.68 5.9-1a3.22 3.22 0 0 1 2.84.89l2.95 2.95a3.22 3.22 0 0 1 .82 2.77zm-15 8.28 9.55-3.84-.1 5.8-1.88-2.37-10.39 3.25 3.26-10.42-2.33-1.83 5.77-.12zm6.88-9 2.13 2.13a.64.64 0 0 1 -.23 1.05l-4.76 1.83 1.86-4.78a.64.64 0 0 1 1-.22zm14.64-2.13 2.95-2.95a3.22 3.22 0 0 1 2.84-.89l5.9 1 .57 1.68h-3.3a4.29 4.29 0 0 0 -3 1.26l-2.81 2.93a4.29 4.29 0 0 0 -1.26 3v3.23l-1.68-.51-1-5.89a3.22 3.22 0 0 1 .82-2.85zm10.21 1.59 5.78.12-2.33 1.84 3.26 10.42-10.39-3.25-1.88 2.37-.1-5.8 9.55 3.84zm-2 .76 1.84 4.77-4.69-1.8a.64.64 0 0 1 -.23-1.05l2.13-2.13a.64.64 0 0 1 1.01.22zm-16.48-12c-5.45-3.44-13.21-3.29-13.21-3.29v-2.63a32.91 32.91 0 0 0 -5.16 4.17 21 21 0 0 1 5.16 3.27v-2.67s4.6-.77 13.27 1.14zm22.35-1.15v2.67a21 21 0 0 1 5.16-3.26 32.91 32.91 0 0 0 -5.16-4.18v2.63s-7.72-.15-13.26 3.28c8.66-1.91 13.26-1.14 13.26-1.14z" />
                          </svg>
                        </div>
                        <p className="pl-2 text-sm">Türme</p>
                      </div>
                      <div className="absolute right-0 text-xs text-primary">
                        3X - Größe 4 (Bemannt),
                      </div>
                      <div className="absolute right-0 mt-8 text-xs text-primary">
                        1X - Größe 4 (Remote)
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <div className="w-8 aspect-square">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#00ffe8"
                            stroke="#00ffe8"
                            viewBox="0 0 45.89 29.54"
                            nighteye="disabled"
                          >
                            <path d="m20.12 18.42-1 5.89-1.68.51v-3.23a4.29 4.29 0 0 0 -1.26-3l-2.84-2.84a4.29 4.29 0 0 0 -3-1.26h-3.3l.57-1.68 5.9-1a3.22 3.22 0 0 1 2.84.89l2.95 2.95a3.22 3.22 0 0 1 .82 2.77zm-15 8.28 9.55-3.84-.1 5.8-1.88-2.37-10.39 3.25 3.26-10.42-2.33-1.83 5.77-.12zm6.88-9 2.13 2.13a.64.64 0 0 1 -.23 1.05l-4.76 1.83 1.86-4.78a.64.64 0 0 1 1-.22zm14.64-2.13 2.95-2.95a3.22 3.22 0 0 1 2.84-.89l5.9 1 .57 1.68h-3.3a4.29 4.29 0 0 0 -3 1.26l-2.81 2.93a4.29 4.29 0 0 0 -1.26 3v3.23l-1.68-.51-1-5.89a3.22 3.22 0 0 1 .82-2.85zm10.21 1.59 5.78.12-2.33 1.84 3.26 10.42-10.39-3.25-1.88 2.37-.1-5.8 9.55 3.84zm-2 .76 1.84 4.77-4.69-1.8a.64.64 0 0 1 -.23-1.05l2.13-2.13a.64.64 0 0 1 1.01.22zm-16.48-12c-5.45-3.44-13.21-3.29-13.21-3.29v-2.63a32.91 32.91 0 0 0 -5.16 4.17 21 21 0 0 1 5.16 3.27v-2.67s4.6-.77 13.27 1.14zm22.35-1.15v2.67a21 21 0 0 1 5.16-3.26 32.91 32.91 0 0 0 -5.16-4.18v2.63s-7.72-.15-13.26 3.28c8.66-1.91 13.26-1.14 13.26-1.14z" />
                          </svg>
                        </div>
                        <p className="pl-2 text-sm">Utility</p>
                      </div>
                      <div className="absolute right-0 text-xs text-primary">
                        N/A
                      </div>
                    </div>
                  </div>
                </BasicPanel>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <BasicPanel>
                <div>
                  <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    className="mx-auto prose prose-td:align-middle prose-invert xl:max-w-[90%] md:text-"
                  >
                    {data.history}
                  </ReactMarkdown>
                </div>
              </BasicPanel>
            </Tab.Panel>
            <Tab.Panel>
              <BasicPanel>
                <div className="overflow-hidden rounded-2xl">
                  <ImageGallery items={galleryImages} />
                </div>
              </BasicPanel>
            </Tab.Panel>
            <Tab.Panel>
              <BasicPanel>
                <div>
                  <div>
                    <h1>
                      <span className="text-primary">ArisCorp</span>
                      <span> Wertung</span>
                    </h1>
                  </div>
                  <div className="flex mt-4">
                    <div className="w-3/12">
                      <div className="text-xs border border-secondary">
                        <ReactMarkdown
                          rehypePlugins={[rehypeRaw]}
                          className="text-xs"
                        >
                          {data.description}
                        </ReactMarkdown>
                      </div>
                    </div>
                    <div className="w-3/12">
                      <ul className="pl-1">
                        {data.s_w
                          .filter((e) => e.kategorie == 'positive')
                          .map((object, index) => (
                            <li
                              key={index}
                              className='list-none before:content-["+"] before:text-green-500 before:mr-2'
                            >
                              {object.name}
                            </li>
                          ))}
                        {data.s_w
                          .filter((e) => e.kategorie == 'negative')
                          .map((object, index) => (
                            <li
                              key={index}
                              className='list-none before:content-["-"] before:text-red-500 before:mr-2'
                            >
                              {object.name}
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div className="w-6/12">
                      <div>
                        <p className="text-secondary">
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
                        <p className="-mt-3">{fightReason}</p>
                      </div>
                      <div>
                        <p className="text-secondary">
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
                        <p className="-mt-3">{ecoReason}</p>
                      </div>
                      <div>
                        <p className="text-secondary">
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
                        <p className="-mt-3">{useReason}</p>
                      </div>
                      <div>
                        <p className="text-secondary">
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
                        <p className="-mt-3">{ppReason}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center py-6 whitespace-normal">
                  <div>
                    <h2 className="w-full">Die {data.name}</h2>
                    <p>Erreichte eine Wertung von:</p>
                  </div>
                  <div className="w-1/12 pl-2">
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
              </BasicPanel>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        <hr />
        <div className="flex w-full space-x-4 italic uppercase text-secondary">
          <div className="w-1/3">
            <h3 className="mt-0 text-secondary">Varianten</h3>
            <div>
              <BasicPanel>
                <div className="overflow-hidden rounded-2xl">
                  <p className="absolute">Carrack Expedition</p>
                  <div className="relative w-full aspect-[18/9]">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' + data.storeImage.id
                      }
                      alt={'Bild von ' + data.name}
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/' +
                        data.storeImage.id +
                        '?width=16&quality=1'
                      }
                    />
                    <div className="absolute bottom-0 w-full pl-4 bg-opacity-80 bg-bg-secondary">
                      <p className="pb-0 mb-0 leading-none transition-colors duration-200 hover:cursor-pointer text-secondary/90 hover:text-secondary hover:duration-300">
                        Carrack Expedition
                      </p>
                      <p className="mt-0 text-[8px] leading-none text-white/50 hover:text-white/80 transition-colors hover:cursor-pointer duration-200 hover:duration-300">
                        Anvil Aerospace
                      </p>
                    </div>
                  </div>
                </div>
              </BasicPanel>
            </div>
          </div>
          <div className="w-1/3">
            <h3 className="mt-0 text-secondary">Loaner</h3>
          </div>
          <div className="w-1/3">
            <h3 className="mt-0 text-secondary">Paints</h3>
            <div>
              <BasicPanel>
                <div className="overflow-hidden rounded-2xl">
                  <p className="absolute">Carrack Expedition</p>
                  <div className="relative w-full aspect-[18/9]">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        'ed04bd46-cc2e-4ab7-8130-f421121a5b0b'
                      }
                      alt={'Bild von ' + data.name}
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/' +
                        'ed04bd46-cc2e-4ab7-8130-f421121a5b0b' +
                        '?width=16&quality=1'
                      }
                    />

                    <p className="absolute bottom-0 w-full pl-4 bg-opacity-80 bg-bg-secondary">
                      Best in Show
                    </p>
                  </div>
                </div>
              </BasicPanel>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SpectrumArticlePage.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
