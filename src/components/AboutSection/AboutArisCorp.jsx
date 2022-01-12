import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Image from "next/image";

const { gql, useQuery } = require("@apollo/client");

const THE_ARISCORP = gql`
  query GetTheArisCorp {
    die_ariscorp {
      about_ariscorp
    }
  }
`;

export default function TheArisCorp() {
  const { loading, error, data } = useQuery(THE_ARISCORP);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data.die_ariscorp.about_ariscorp);
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      className="flex flex-wrap justify-center text-center"
    >
      {data.die_ariscorp.about_ariscorp}
    </ReactMarkdown>
  );
}