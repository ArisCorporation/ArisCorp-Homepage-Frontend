import Layout from './layout'
import {
  GET_MEMBERS,
  GET_VERSEEXKURS_FIRMEN_TIMELINE,
  GET_VERSEEXKURS_TIMELINE,
} from 'graphql/queries'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import React from 'react'
import client from 'apollo/clients'
import TLComponent from 'components/VerseExkursTimeline'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'

export async function getServerSideProps() {
  const { data } = await client.query({ query: GET_VERSEEXKURS_TIMELINE })
  const { data: firmenList } = await client.query({
    query: GET_VERSEEXKURS_FIRMEN_TIMELINE,
  })
  const { data: memberList } = await client.query({ query: GET_MEMBERS })
  const timelineEvents = []
  const urlRegex =
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi

  data.timeline.event.map((object, index) => {
    'duchlauf: ' + index
    const start_date = object.dates.find((item) => item.type == 'start_date')
    const end_date = object.dates.find((item) => item.type == 'end_date')
    var link = '/VerseExkurs'

    const banner = object.banner?.match(urlRegex)
      ? object.banner?.match(urlRegex)[0]
      : 'https://cms.ariscorp.de/assets/8436448c-0c93-430e-a2bf-34493dc15ca3'
    var group

    if (object.category == 'ariscorp') {
      group = 'ArisCorp'
    } else if (object.category == 'verse') {
      group = 'Verse Timeline'
    } else if (object.category == 'one_day_in_history') {
      group = 'Ein Tag in der Geschichte'
    } else if (object.category == 'firma') {
      group = 'Firmengründungen'
    } else if (object.category == 'epoche') {
      group = 'Epochen'
    } else {
      group = 'undefined'
    }

    if (object.beitrags_typ == 'uee') {
      link ? (link = link + '/uee/' + object.link) : ''
    } else if (object.beitrags_typ == 'starsystem') {
      link ? (link = link + '/starmap/' + object.link) : ''
    } else if (object.beitrags_typ == 'one_day_in_history') {
      link ? (link = link + '/onedayinhistory/' + object.link) : ''
    } else if (object.beitrags_typ == 'firma') {
      var firmen_link
      firmenList.firmen.find((e) => e.id == object?.link)
        ? (firmen_link = firmenList.firmen.find(
            (e) => e.id == object.link
          ).firmen_name)
        : null
      object.link ? (link = link + '/firmen/' + firmen_link) : ''
    } else if (object.beitrags_typ == 'literatur') {
      link ? (link = link + '/literatur/' + object.link) : '/'
    } else if (object.beitrags_typ == 'ship') {
      link ? (link = '/ShipExkurs/' + object.link) : '/'
    } else if (object.beitrags_typ == 'fraktion') {
      link ? (link = link + '/fraktionen/' + object.link) : ''
    } else if (object.beitrags_typ == 'spectrum') {
      link ? (link = link + '/spectrum/' + object.link) : ''
    } else if (object.beitrags_typ == 'member') {
      var member_link
      memberList.member.find((e) => e.id == object?.link)
        ? (member_link = memberList.member.find(
            (e) => e.id == object.link
          ).slug)
        : null
      link ? (link = '/biografie/' + member_link) : ''
    } else {
      link ? (link = link + '/' + object.link) : ''
    }

    timelineEvents.push({
      start_date: {
        year: start_date.year,
      },
      end_date: {},
      media: {
        url: banner,
        thumbnail: banner,
      },
      unique_id: index,
      text: {
        headline: object.title,
      },
      group: group,
      autolink: true,
      display_date: start_date.year
    })

    if (object.short_caption != null) {
      timelineEvents[index].text.text =
        object.short_caption +
        (object.link ? `<hr/><a href="${link}" target="">Mehr Lesen</a>` : '')
    }

    if (end_date?.year != null) {
      timelineEvents[index].end_date.year = end_date.year
    }
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: await data.timeline,
      events: await timelineEvents,
    },
  }
}

export default function TimelinePage({ data, events }) {
  const { push } = useRouter()
  
  const siteTitle =
    'Timeline - Astro Research and Industrial Service Corporation'
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>

        <meta property="twitter:title" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
        <meta name="title" content={siteTitle} />
      </Head>
      <div className="mt-2 mb-12 ml-2">
        <h2 className="mb-4 text-center text-primary">
          Klicken sie auf den Banner um in die rubrik: {'"'}Ein Tag in der
          Geschichte{'"'} zu gelangen
        </h2>
        <div
          className="flex pl-4 mx-auto flex-wrap grayscale hover:grayscale-0 duration-150 hover:duration-300 hover:cursor-pointer h-full w-1/2 aspect-[1118/351]"
          onClick={() => push('/VerseExkurs/onedayinhistory')}
        >
          <div className="relative w-full h-full">
            <Image
              src="https://cms.ariscorp.de/assets/c0a200fa-83d3-48f1-b6e4-905960cab504"
              fill
              alt="Spectrum Banner"
              placeholder="blur"
              blurDataURL="https://cms.ariscorp.de/assets/c0a200fa-83d3-48f1-b6e4-905960cab504?width=16&quality=1"
              cover
            />
          </div>
        </div>
        <div className="">
          <hr />
        </div>
      </div>
      <TLComponent data={data} events={events} />
    </div>
  )
}

TimelinePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
