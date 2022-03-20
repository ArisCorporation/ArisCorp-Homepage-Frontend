import Layout from 'pages/VerseExkurs/layout'
import client from 'apollo/clients'
import { GET_VERSEEXKURS_TIMELINE } from 'graphql/queries'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import HorizontalTimeline from 'react-horizontal-timeline'
import Head from 'next/head'
import Script from 'next/script'
import JsonFile from './timeline.json'
import { useState, useEffect } from 'react'
import loadTimelineScript from 'components/VerseExkursMountTimeline'

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_VERSEEXKURS_TIMELINE,
    variables: { titel: 'Timeline' },
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: await data.geschichte,
    },
  }
}

function TSS(JsonFile) {
  return {}
}

export default function Timeline({ data }) {
  // data = data[0]
  const json_file = JSON.stringify(JsonFile)

  const js = () => {
    var additionalOptions = {
      language: 'de',
      default_bg_color: { r: 17, g: 17, b: 17 },
      timenav_height: 600,
    }

    timeline = new TL.Timeline('timeline-embed', json_file, additionalOptions)
  }

  useEffect(() => {
    const script = document.createElement('script')

    script.text = `
      var additionalOptions = {
        language: 'de',
        default_bg_color: { r: 17, g: 17, b: 17 },
        timenav_height: 600,
      }

      timeline = new TL.Timeline('timeline-embed', ${json_file}, additionalOptions)
    `
    script.id = 'lul'
    script.async = true

    document.body.appendChild(script)


    const script2 = document.createElement('script')

    script2.src = "/timeline3/js/timeline.js"
    script2.async = true

    document.body.appendChild(script2)

    return () => {
      document.body.removeChild(script)
      document.body.removeChild(script2)
    }
  }, [])

  return (
    <div>
      <link rel="stylesheet" href="/timeline3/css/timeline.css"></link>

      <Script
        strategy="beforeInteractive"
        src="/timeline3/js/timeline.js"
      ></Script>

      <div id="timeline-embed" className="w-full h-[500px] hwite bw"></div>

      {/* <script
        dangerouslySetInnerHTML={{
          __html: `
          var additionalOptions = {
            language: 'de',
            default_bg_color: {r:17, g:17, b:17},
            timenav_height: 600
          }


        timeline = new TL.Timeline('timeline-embed', ${json_file}, additionalOptions
              )
        `,
        }}
      ></script> */}
    </div>
  )
}

Timeline.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
