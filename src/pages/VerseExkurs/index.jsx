import Layout from "./layout";
import Image from "next/image";
import { SquareLoader } from "react-spinners";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
const { gql, useQuery } = require("@apollo/client");
import { ARKIcon, GalactapediaIcon, RSICommLinksIcon, RSIRoadmapIcon } from "components/icons";

const INDEX = gql`
  query ArisManifest {
    exkurs_index {
      text
    }
  }
`;

export default function VerseExkursIndex() {
  const { loading, error, data } = useQuery(INDEX);

  if (loading)
    return (
      <div className="flex justify-center pt-10">
        <SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} />
      </div>
    );
  if (error) return <p>Error :(</p>;

  return (
    <>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} className="mx-auto prose prose-td:align-middle prose-invert xl:max-w-[90%]">
        {data.exkurs_index.text}
      </ReactMarkdown>
      <div className="flex flex-wrap items-center justify-center text-center lg:justify-between scale-70 xl:scale-100">
        <a href="https://robertsspaceindustries.com/starmap" target="_blank" rel="noreferrer" className="flex mt-8 group">
          <ARKIcon
            classes="fill-white"
            width="200"
            height="200"
          />
        </a>
        <a href="https://robertsspaceindustries.com/galactapedia" target="_blank" rel="noreferrer" className="flex mt-8 group">
          <GalactapediaIcon
            classes="fill-white"
            width="200"
            height="200"
          />
        </a>
        <a href="https://robertsspaceindustries.com/comm-link" target="_blank" rel="noreferrer" className="flex mt-8 group">
          <RSICommLinksIcon
            classes="fill-white"
            width="200"
            height="200"
          />
        </a>
        <a href="https://robertsspaceindustries.com/roadmap" target="_blank" rel="noreferrer" className="flex mt-8 group">
          <RSIRoadmapIcon
            classes="fill-white"
            width="200"
            height="200"
          />
        </a>
      </div>
      <hr />
    </>
  );
}

VerseExkursIndex.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
