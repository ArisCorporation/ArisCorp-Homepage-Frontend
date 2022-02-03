import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SquareLoader } from "react-spinners";
import Layout from "./layout";
import { OneThird, TwoThirds, ThreeThirds } from "components/CommLinkCards";

const { gql, useQuery } = require("@apollo/client");

const ARIS_COMMLINKS = gql`
  query ArisCommLinks {
    comm_links(
      filter: { status: { _eq: "published" } }
      sort: ["sort", "-date_created"]
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
`;

export default function CommLinksPage() {
  const [children, setChildren] = useState([]);
  const { loading, error, data } = useQuery(ARIS_COMMLINKS);

  useEffect(() => {
    const layout = [];

    for (let i = 0; i < data?.comm_links.length; i += 10) {
      layout.push(
        <div key={i} className="flex flex-wrap justify-center">
          <ThreeThirds
            typeicon="type-post"
            typename="post"
            title={data?.comm_links[i].comm_link_titel}
            channel={data?.comm_links[i].comm_link_channel?.channel}
            posted="1 day ago"
            description={data?.comm_links[i].comm_link_beschreibung}
            image={data?.comm_links[i].comm_link_banner.id}
            id={data?.comm_links[i].id}
          />
        </div>
      );

      // Break out of the loop if we've
      // already reached the end of data
      if (i + 1 >= data?.comm_links.length) {
        break;
      }

      layout.push(
        <div key={i + 1} className="flex flex-wrap justify-center">
          <OneThird
            typeicon="type-post"
            typename="post"
            image={data?.comm_links[i + 1].comm_link_banner.id}
            title={data?.comm_links[i + 1].comm_link_titel}
            channel={data?.comm_links[i + 1].comm_link_channel.channel}
            posted="1 day ago"
            description={data?.comm_links[i + 1].comm_link_beschreibung}
            id={data?.comm_links[i + 1].id}
          />
          {/* The boolean expression helps to avoid creating empty cells if the end of data is reached mid-row */}
          {data?.comm_links[i + 2] && (
            <TwoThirds
              typeicon="type-post"
              typename="post"
              image={data?.comm_links[i + 2].comm_link_banner.id}
              title={data?.comm_links[i + 2].comm_link_titel}
              channel={data?.comm_links[i + 2].comm_link_channel.channel}
              posted="1 day ago"
              description={data?.comm_links[i + 2].comm_link_beschreibung}
              id={data?.comm_links[i + 2].id}
            />
          )}
        </div>
      );

      if (i + 3 >= data?.comm_links.length) {
        break;
      }

      layout.push(
        <div key={i + 3} className="flex flex-wrap justify-center">
          <OneThird
            typeicon="type-post"
            typename="post"
            image={data?.comm_links[i + 3].comm_link_banner.id}
            title={data?.comm_links[i + 3].comm_link_titel}
            channel={data?.comm_links[i + 3].comm_link_channel.channel}
            posted="1 day ago"
            description={data?.comm_links[i + 3].comm_link_beschreibung}
            id={data?.comm_links[i + 3].id}
          />
          {data?.comm_links[i + 4] && (
            <OneThird
              typeicon="type-post"
              typename="post"
              image={data?.comm_links[i + 4].comm_link_banner.id}
              title={data?.comm_links[i + 4].comm_link_titel}
              channel={data?.comm_links[i + 4].comm_link_channel.channel}
              posted="1 day ago"
              description={data?.comm_links[i + 4].comm_link_beschreibung}
              id={data?.comm_links[i + 4].id}
            />
          )}
          {data?.comm_links[i + 5] && (
            <OneThird
              typeicon="type-post"
              typename="post"
              image={data?.comm_links[i + 5].comm_link_banner.id}
              title={data?.comm_links[i + 5].comm_link_titel}
              channel={data?.comm_links[i + 5].comm_link_channel.channel}
              posted="1 day ago"
              description={data?.comm_links[i + 5].comm_link_beschreibung}
              id={data?.comm_links[i + 5].id}
            />
          )}
        </div>
      );

      if (i + 6 >= data?.comm_links.length) {
        break;
      }

      layout.push(
        <div key={i + 6} className="flex flex-wrap justify-center">
          <TwoThirds
            typeicon="type-post"
            typename="post"
            image={data?.comm_links[i + 6].comm_link_banner.id}
            title={data?.comm_links[i + 6].comm_link_titel}
            channel={data?.comm_links[i + 6].comm_link_channel.channel}
            posted="1 day ago"
            description={data?.comm_links[i + 6].comm_link_beschreibung}
            id={data?.comm_links[i + 6].id}
          />
          {data?.comm_links[i + 7] && (
            <OneThird
              typeicon="type-post"
              typename="post"
              image={data?.comm_links[i + 7].comm_link_banner.id}
              title={data?.comm_links[i + 7].comm_link_titel}
              channel={data?.comm_links[i + 7].comm_link_channel.channel}
              posted="1 day ago"
              description={data?.comm_links[i + 7].comm_link_beschreibung}
              id={data?.comm_links[i + 7].id}
            />
          )}
        </div>
      );

      if (i + 8 >= data?.comm_links.length) {
        break;
      }

      layout.push(
        <div key={i + 8} className="flex flex-wrap justify-center">
          <OneThird
            typeicon="type-post"
            typename="post"
            image={data?.comm_links[i + 8].comm_link_banner.id}
            title={data?.comm_links[i + 8].comm_link_titel}
            channel={data?.comm_links[i + 8].comm_link_channel.channel}
            posted="1 day ago"
            description={data?.comm_links[i + 8].comm_link_beschreibung}
            id={data?.comm_links[i + 8].id}
          />
          {data?.comm_links[i + 9] && (
            <TwoThirds
              typeicon="type-post"
              typename="post"
              image={data?.comm_links[i + 9].comm_link_banner.id}
              title={data?.comm_links[i + 9].comm_link_titel}
              channel={data?.comm_links[i + 9].comm_link_channel.channel}
              posted="1 day ago"
              description={data?.comm_links[i + 9].comm_link_beschreibung}
              id={data?.comm_links[i + 9].id}
            />
          )}
        </div>
      );
    }

    setChildren(layout);
  }, [data?.comm_links]);

  if (loading)
    return (
      <div className="flex justify-center pt-32">
        <SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} />
      </div>
    );
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <div className="flex items-center justify-center pt-32">
        <Image src="https://cms.ariscorp.de/assets/2f7590ef-c84a-495c-8acc-93653f0cddd3" width="1118" height="351" alt="ArisCorp CommLinks-Banner" placeholder="blur" blurDataURL="https://cms.ariscorp.de/assets/2f7590ef-c84a-495c-8acc-93653f0cddd3?width=16&quality=1" />
      </div>
      <hr />
      <div className="flex flex-wrap justify-center pt-12 mx-auto">
        <div className="mx-auto scale-[.77] xs:scale-100">{children}</div>
      </div>
    </div>
  );
}

CommLinksPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
