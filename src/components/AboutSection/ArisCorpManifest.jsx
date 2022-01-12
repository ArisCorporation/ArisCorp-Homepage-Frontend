import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Image from "next/image";

const { gql, useQuery } = require("@apollo/client");

const ARISCORP_MANIFEST = gql`
  query GetArisCorpManifest {
    manifest {
      manifest
    }
  }
`;

export default function ArisCorpManifest() {
  const { loading, error, data } = useQuery(ARISCORP_MANIFEST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data.manifest.manifest);
  return (
      <ReactMarkdown rehypePlugins={[rehypeRaw]} className="flex flex-wrap justify-center text-center">
        {data.manifest.manifest}
      </ReactMarkdown>
  );
}
