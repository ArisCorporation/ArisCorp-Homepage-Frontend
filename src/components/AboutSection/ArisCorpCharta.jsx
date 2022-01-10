import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const { gql, useQuery } = require("@apollo/client");

const ARISCORP_CHARTA = gql`
  query GetArisCorpCharta {
    charta {
      charta
    }
  }
`;

export default function ArisCorpCharta() {
  const { loading, error, data } = useQuery(ARISCORP_CHARTA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data.charta.charta);
  return (
      <ReactMarkdown rehypePlugins={[rehypeRaw]} className="flex flex-wrap justify-center text-center">
        {data.charta.charta}
      </ReactMarkdown>
  );
}
