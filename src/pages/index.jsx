import Head from "next/head";
import Navbar from "components/Navbar";
import HeroSection from "components/HeroSection";
import AboutSection from "components/AboutSection";
import OrgaSection from "components/OrgaSection";
import CommLinksSection from "components/CommLinksSection";
import RectruitmentSection from "components/RecruitmentSection";
import PartnerSection from "components/PartnerSection";
import { data } from "autoprefixer";
const { gql, useQuery } = require("@apollo/client");
import { client } from "./_app";

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
  
  const { data: memberData } = await client.query({
    query: gql`
      query Member {
        member(
          filter: { status: { _eq: "published" } }
          sort: ["sort", "member_name"]
        ){
          id
          status
          member_name
          member_titel
          member_rollen
          member_potrait {
            id
          }
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

  if (!memberData || !commsData || !aboutData || !arisHistoryData) {
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

      member: await memberData.member,

      comm_links: await commsData.comm_links,

      partner: await partnerData.partner,
    },
    revalidate: 60
 };
}

export default function Home({ about, history, manifest, charta, member, comm_links, partner }) {
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
        <AboutSection aboutData={about} historyData={history} manifestData={manifest} chartaData={charta} />
        <OrgaSection memberData={member} />
        <CommLinksSection data={comm_links} />
        <RectruitmentSection />
        <PartnerSection data={partner} />
      </div>
    </>
  );
}
