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
            filename_disk
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

  const { data: aboutData } = await client.query({
    query: gql`
      query DieArisCorp {
        die_ariscorp {
          about_ariscorp
        }
      }
    `,
  });

  if (!memberData || !commsData || !aboutData) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: {
      about: aboutData.die_ariscorp.about_ariscorp,
      member: memberData.member,
      comm_links: commsData.comm_links,
    },
    revalidate: 60
 };
}

export default function Home({ member, comm_links, about }) {
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
        <AboutSection aboutData={about} />
        <OrgaSection memberData={member} />
        <CommLinksSection data={comm_links} />
        <RectruitmentSection />
        <PartnerSection />
      </div>
    </>
  );
}
