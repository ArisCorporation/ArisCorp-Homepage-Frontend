import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Image from "next/image";

const { gql, useQuery } = require("@apollo/client");

const ARISCORP_HISTORY = gql`
  query GetArisCorpHistory {
    ariscorp_history {
      ariscorp_history
    }
  }
`;

export default function ArisCorpHistory() {
  const { loading, error, data } = useQuery(ARISCORP_HISTORY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data.ariscorp_history.ariscorp_history);
  return (
    <div className="flex items-center justify-center justify-items-center">
      <ReactMarkdown rehypePlugins={[rehypeRaw]} className="text-center">
        {data.ariscorp_history.ariscorp_history}
      </ReactMarkdown>
    </div>
  );
}
