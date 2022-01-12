import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const { gql, useQuery } = require("@apollo/client");

const OUR_MEMBERS = gql`
  query GetMember {
    member(
      filter: { status: { _eq: "published" } }
      sort: ["sort", "member_name"]
    ) {
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
`;

export default function OurMember() {
  const { loading, error, data } = useQuery(OUR_MEMBERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="flex items-center justify-center text-center">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.member.map((member) => (
          <div className="m-0 relative w-full px-[15px]" key={member.id}>
            <figure className="relative inline-block overflow-hidden text-center group">
              <div className="relative border-b-2 border-solid rounded-sm border-secondary max-w-full w-[270px] h-[320px]">
                <Image
                  src={
                    "https://cms.ariscorp.de/assets/" +
                    member.member_potrait?.id
                  }
                  alt={member.member_name + "Potrait"}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <figcaption className="absolute top-0 left-0 h-full bg-opacity-50 text-center pt-[40%] px-[20px] pb-[20px] z-5 opacity-0 bg-black group-hover:opacity-100 transition-all ease-linear min-w-full min-h-full block">
                <hr className="w-[100px] h-[2px] mt-[5px] mb-auto m-auto" />
                <p className="p-[10px] m-0">“Member“</p>
                <hr className="w-[100px] h-[2px] m-auto" />
                <ul className="mt-3">
                  <a
                    href=""
                    className="italic bg-transparent text-secondary hover:underline"
                  >
                    BIOGRAFIE
                  </a>
                </ul>
              </figcaption>
            </figure>
            <p className="text-2xl">{member.member_titel}</p>
            <p className="text-[#999]">Mitglied</p>
          </div>
        ))}
      </div>
    </div>
  );
}
