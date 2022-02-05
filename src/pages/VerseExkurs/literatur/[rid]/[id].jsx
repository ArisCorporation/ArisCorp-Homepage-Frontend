import Layout from "pages/VerseExkurs/layout";
import { SquareLoader } from "react-spinners";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Link from "next/link";
import { useRouter } from "next/router";

const { gql, useQuery } = require("@apollo/client");

const LITERATUR_LISTE = gql`
  query Literatur_Liste($Id: Float!) {
    literatur(
      filter: { id: { _eq: $Id } }
      sort: ["sort", "literatur_kapitel"]
    ) {
      id
      status
      literatur_reihe {
        id
        reihen_cover {
          id
          width
          height
        }
        reihen_titel
      }
      literatur_kapitel
      literatur_text
    }
  }
`;

export default function LiteraturReihenPage() {
  const router = useRouter();
  const { rid: rid, id: id } = router.query;

  const Id = parseFloat(id);
  const rId = parseFloat(rid);

  const { loading, error, data } = useQuery(LITERATUR_LISTE, {
    variables: { rId, Id },
  });

  if (loading)
    return (
      <div className="flex justify-center pt-32">
        <SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} />
      </div>
    );

  if (error) return <p>Error :(</p>;

  const Data = data.literatur[0];

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto">
        <div key={Data.id}>
          <div className="items-center text-center">
            <h1 className="uppercase">
              Literatur:{" "}
              <span className="text-primary">{Data.literatur_reihe.reihen_titel} - Kapitel: {data.literatur_kapitel}</span>
            </h1>
            <hr />
            <div className="w-full">
              <Image
                src={"https://cms.ariscorp.de/assets/" + Data.literatur_reihe.reihen_cover.id}
                alt={"Banner"}
                width={Data.literatur_reihe.reihen_cover.width}
                height={Data.literatur_reihe.reihen_cover.height}
                placeholder="blur"
                blurDataURL={
                  "https://cms.ariscorp.de/assets/" +
                  Data.literatur_reihe.reihen_cover.id +
                  "?width=16&quality=1"
                }
              />
            </div>
          </div>
          <div className={"max-w-[" + Data.literatur_reihe.reihen_cover.width + "px] mx-auto"}>
            <h2 className="mt-3">
              VerseExkurs - Literatur: {Data.literatur_reihe.reihen_titel} - Kapitel: {Data.literatur_kapitel}
            </h2>
            <hr className="max-w-[80px]" />
          </div>
          <div className="font-nasa article-font">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {Data.literatur_text}
            </ReactMarkdown>
          </div>
        </div>
    </div>
  );
}

LiteraturReihenPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
