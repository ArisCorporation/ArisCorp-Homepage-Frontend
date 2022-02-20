import Head from 'next/head'
import AboutSection from 'components/HomeAbout'
import OrgaSection from 'components/HomeOur'
import CommLinksSection from 'components/HomeCommLinksSection'
import RectruitmentSection from 'components/HomeRecruitment'
import PartnerSection from 'components/HomePartnerSection'
import Script from 'next/script'
const { gql } = require('@apollo/client')
import { client } from './_app'
import { useEffect } from 'react'
import Layout from './layout'

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query GetIndexData {
        die_ariscorp {
          about_ariscorp
        }
        ariscorp_history {
          ariscorp_history
        }
        manifest {
          manifest
        }
        charta {
          text
        }
        comm_links(
          filter: { status: { _eq: "published" } }
          sort: ["sort", "-date_created"]
          limit: 4
        ) {
          id
          status
          comm_link_titel
          comm_link_banner {
            id
          }
          comm_link_author {
            member_titel
          }
          comm_link
          comm_link_beschreibung
          comm_link_channel {
            channel
            beschreibung
          }
        }
        partner(filter: { status: { _eq: "published" } }) {
          id
          partner_name
          partner_logo {
            id
          }
          partner_website
          date_created
        }
      }
    `,
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      about: await data.die_ariscorp.about_ariscorp,
      history: await data.ariscorp_history.ariscorp_history,
      manifest: await data.manifest.manifest,
      charta: await data.charta.text,

      comm_links: await data.comm_links,

      partner: await data.partner,
    },
  }
}

export default function IndexPage({
  about,
  history,
  manifest,
  charta,
  comm_links,
  partner,
}) {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = 'https://fleetyards.net/embed.js'
    script.async = false

    document.body.appendChild(script)
  })

  return (
    <>
      <Head>
        <title>
          Astro Research and Industrial Service Corporation - Homepage
        </title>
      </Head>

      <Script src="/FleetYards.js"></Script>
      <div className="no-marker">
        <AboutSection
          aboutData={about}
          historyData={history}
          manifestData={manifest}
          chartaData={charta}
        />
        <OrgaSection />
        <CommLinksSection data={comm_links} />
        <RectruitmentSection />
        <PartnerSection data={partner} />
      </div>
    </>
  )
}

IndexPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
