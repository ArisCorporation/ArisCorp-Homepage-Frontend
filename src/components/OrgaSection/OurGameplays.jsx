import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const { gql, useQuery } = require("@apollo/client");

const OUR_GAMEPLAYS = gql`
  query GetGameplays {
    gameplays(filter: { status: { _eq: "published" } }, sort: ["sort", "id"]) {
      id
      status
      gameplay_name
      gameplay_logo {
        id
      }
      gameplay_bild_links {
        id
      }
      gameplay_bild_rechts {
        id
      }
      gameplay_text
    }
  }
`;

export default function OurGameplays() {
  const { loading, error, data } = useQuery(OUR_GAMEPLAYS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.gameplays.map((gameplay) => (
        <div key={gameplay.id} className="inline-block">
          <button className="text-center transition-all duration-75 ease-linear cursor-pointer">
            <div className="width-[140px] transition-all delay-75 ease-linear max-w-full">
              <Image
                src={
                  "https://cms.ariscorp.de/assets/" + gameplay.gameplay_logo?.id
                }
                alt={gameplay.gameplay_name + "Logo"}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}
