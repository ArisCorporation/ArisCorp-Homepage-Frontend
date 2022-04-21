import Head from 'next/head'
import AboutSection from 'components/HomeAbout'
import OrgaSection from 'components/HomeOur'
import CommLinksSection from 'components/HomeCommLinksSection'
import RectruitmentSection from 'components/HomeRecruitment'
import PartnerSection from 'components/HomePartnerSection'
import Script from 'next/script'
import client from 'apollo/clients'
import { useEffect, useState, useContext } from 'react'
import Layout from './layout'
import { OurTabSelectionProvider } from 'context/OurTabSelectionContext'
import { GET_INDEX_DATA } from 'graphql/queries'

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_INDEX_DATA,
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      about: await data?.die_ariscorp?.about_ariscorp,
      history: await data?.ariscorp_history?.ariscorp_history,
      manifest: await data?.manifest?.manifest,
      charta: await data?.charta?.text,

      comm_links: await data?.comm_links,

      partner: await data?.partner,
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
  const [ourIndex, setOurIndex] = useState(0)

  return (
    <OurTabSelectionProvider>
      <Layout ourIndex={ourIndex} onOurIndexChange={setOurIndex}>
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
      </Layout>
    </OurTabSelectionProvider>
  )
}
