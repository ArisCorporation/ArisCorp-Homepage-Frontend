import Head from "next/head";
import Navbar from "components/HomeNavbar";
import Footer from "components/Footer";
import HeroSection from "components/HomeHero";
import AboutSection from "components/HomeAbout";
import OrgaSection from "components/HomeOur";
import CommLinksSection from "components/HomeCommLinksSection";
import RectruitmentSection from "components/HomeRecruitment";
import PartnerSection from "components/HomePartnerSection";
import Script from "next/script";
const { gql, useQuery } = require("@apollo/client");
import { client } from "./_app";
import { useEffect } from "react";

export async function getStaticProps() {

  const { data: aboutData } = await client.query({
    query: gql`
      query DieArisCorp {
        die_ariscorp {
          about_ariscorp
        }
      }
    `,
  });

  const { data: arisHistoryData } = await client.query({
    query: gql`
      query ArisHistory {
        ariscorp_history {
          ariscorp_history
        }
      }
    `,
  });

  const { data: manifestData } = await client.query({
    query: gql`
      query ArisManifest {
        manifest {
          manifest
        }
      }
    `,
  });

  const { data: chartaData } = await client.query({
    query: gql`
      query ArisCharta {
        charta {
          charta
        }
      }
    `,
  });

  const { data: commsData } = await client.query({
    query: gql`
      query Comm_Links {
        comm_links (
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
          }
        }
      }
    `,
  });

  const { data: partnerData } = await client.query({
    query: gql`
      query Partner {
        partner (
          filter: { status: { _eq: "published" } }
        ) {
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
  });

  if (!commsData || !aboutData || !arisHistoryData) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: {
      about: await aboutData.die_ariscorp.about_ariscorp,
      history: await arisHistoryData.ariscorp_history.ariscorp_history,
      manifest: await manifestData.manifest.manifest,
      charta: await chartaData.charta.charta,

      comm_links: await commsData.comm_links,

      partner: await partnerData.partner,
    },
    revalidate: 60
 };
}

export default function Home({ about, history, manifest, charta, comm_links, partner }) {

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://fleetyards.net/embed.js";
    script.async = false;

    document.body.appendChild(script);
  })

  return (
    <>
      <Head>
        <title>
          Astro Research and Industrial Service Corporation - Homepage
        </title>
      </Head>

      <Navbar />

      <HeroSection />

      <div className="px-4 md:container md:mx-auto">
        <Script src="/FleetYards.js"></Script>

        <AboutSection aboutData={about} historyData={history} manifestData={manifest} chartaData={charta} />
        <OrgaSection />
        <CommLinksSection data={comm_links} />
        <RectruitmentSection />
        <PartnerSection data={partner} />
      </div>

      <Footer />
    </>
  );
}
