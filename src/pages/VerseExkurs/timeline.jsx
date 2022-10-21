import Layout from 'pages/VerseExkurs/layout'
import { GET_VERSEEXKURS_TIMELINE } from 'graphql/queries'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import React from 'react'
import client from 'apollo/clients'
import TLComponent from 'components/VerseExkursTimeline'
import Image from 'next/image'

export async function getServerSideProps() {
  const { data } = await client.query({ query: GET_VERSEEXKURS_TIMELINE })
  const timelineEvents = []

  // console.log(data.timeline.event.length);

  data.timeline.event.map((object, index) => {
    // console.log('duchlauf: ' + index)
    // console.log(object.title)
    const start_date = object.dates.find((item) => item.type == 'start_date')
    const end_date = object.dates.find((item) => item.type == 'end_date')
    // console.log(start_date.year)

    // const banner = object.banner.match(/\bhttps?:\/\/\S+/gi)[0]
    const banner =
      'https://cms.ariscorp.de/assets/21193739-402c-48fc-9a04-f6a8ca1537ea?width=1118&height=351'
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
    })

    if (object.short_caption != null) {
      timelineEvents[index].text.text = object.short_caption
    }

    // if (start_date.month) {
    //   timelineEvents[index].start_date.month = start_date.month
    // }

    // if (start_date?.day != null) {
    //   timelineEvents[index].start_date.day = start_date.day
    // }

    if (end_date?.year != null) {
      timelineEvents[index].end_date.year = end_date.year
    }

    // if (end_date?.month != null) {
    //   timelineEvents[index].end_date.month = end_date.month
    // }

    // if (end_date?.day != null) {
    //   timelineEvents[index].end_date.day = end_date.day
    // }
  })

  // data.timeline.event.forEach((object, index) => {
  //   // if (end_date != null) {
  //   //   timelineEvents.push({
  //   //     start_date: {
  //   //       year: start_date.year,
  //   //       month: start_date.month,
  //   //       day: start_date.day,
  //   //     },
  //   //     end_date: {
  //   //       year: end_date.year,
  //   //       month: end_date.month,
  //   //       day: end_date.day,
  //   //     },
  //   //     media: {
  //   //       url: banner,
  //   //       thumbnail: banner,
  //   //     },
  //   //     unique_id: index,
  //   //     text: {
  //   //       headline: object.title,
  //   //       text: object.short_caption,
  //   //     },
  //   //     group: group,
  //   //   })
  //   // } else {
  //   //   timelineEvents.push({
  //   //     start_date: {
  //   //       year: start_date.year,
  //   //       month: start_date.month,
  //   //       day: start_date.day,
  //   //     },
  //   //     media: {
  //   //       url: banner,
  //   //       thumbnail: banner,
  //   //     },
  //   //     unique_id: index,
  //   //     text: {
  //   //       headline: object.title,
  //   //       text: object.short_caption,
  //   //     },
  //   //     group: group,
  //   //   })
  //   // }
  // })

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
  // {
  //   start_date: {
  //     year: 2021,
  //     month: 6,
  //     day: 5,
  //   },
  //   media: {
  //     url: 'https://picsum.photos/200/300',
  //     thumbnail: 'https://picsum.photos/200/300',
  //     caption: 'google',
  //     link: 'https://google.de',
  //   },
  //   unique_id: '1',
  //   text: {
  //     headline: 'Event1',
  //     text: '',
  //   },
  //   group: 'Catégorie1',
  // }

  return (
    <div>
      <TLComponent data={data} events={events} />
      <div className="mt-24 ml-2">
        <p className="pl-6">
          Klicke auf das Banner um auf die direkt Ansicht von {'"'}Ein Tag in
          der Geschichte{'"'} zu gelangen.
        </p>
        <div
          className="flex pl-4 flex-wrap hover:cursor-pointer h-full w-2/3 aspect-[1118/351]"
          onClick={() => push('/VerseExkurs/onedayinhistory')}
        >
          <div className="relative w-full h-full">
            <Image
              src="https://cms.ariscorp.de/assets/c0a200fa-83d3-48f1-b6e4-905960cab504"
              layout="fill"
              alt="Spectrum Banner"
              placeholder="blur"
              blurDataURL="https://cms.ariscorp.de/assets/c0a200fa-83d3-48f1-b6e4-905960cab504?width=16&quality=1"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="">
          <hr />
        </div>
      </div>
    </div>
  )
}

TimelinePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
