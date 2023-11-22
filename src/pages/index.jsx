import Head from 'next/head'
import AboutSection from 'components/HomeAbout'
import OrgaSection from 'components/HomeOur'
import CommLinksSection from 'components/HomeCommLinksSection'
import RectruitmentSection from 'components/HomeRecruitment'
import PartnerSection from 'components/HomePartnerSection'
import Script from 'next/script'
import client from 'apollo/clients'
import { useState } from 'react'
import Layout from './layout'
import { OurTabSelectionProvider } from 'context/OurTabSelectionContext'
import { GET_INDEX_DATA } from 'graphql/queries'

export async function getServerSideProps () {
  const { data } = await client.query({
    query: GET_INDEX_DATA,
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  const siteTitle = "Astro Research and Industrial Service Corporation"

  return {
    props: {
      about: await data?.die_ariscorp?.text,
      history: await data?.ariscorp_history?.text,
      manifest: await data?.manifest?.text,
      charta: await data?.charta?.text,

      comm_links: await data?.comm_links,

      partner: await data?.partner,
      homepageData: await data?.homepage,

      siteTitle
    },
  }
}

export default function IndexPage ({
  about,
  history,
  manifest,
  charta,
  comm_links,
  partner,
  homepageData,
  siteTitle
}) {
  return (
    <Layout>
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

      <div className="no-marker">
        <AboutSection
          aboutData={about}
          historyData={history}
          manifestData={manifest}
          chartaData={charta}
        />
        <OrgaSection />
        <CommLinksSection data={comm_links} />
        <RectruitmentSection dcLink={homepageData.discordLink} />
        <PartnerSection data={partner} />
      </div>
    </Layout>
  )
}
