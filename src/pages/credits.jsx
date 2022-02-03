import ReactMarkdown from "react-markdown";
import { SquareLoader } from "react-spinners";
import rehypeRaw from "rehype-raw";
import Layout from "./layout";
const { gql, useQuery } = require("@apollo/client");

const CREDITS = gql`
  query Credits {
    credits {
      id
      status
      credits
    }
  }
`;

export default function CreditsPage() {
  const { loading, error, data } = useQuery(CREDITS);

  if (loading)
    return (
      <div className="flex justify-center pt-32">
        <SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} />
      </div>
    );
  if (error) return <p>Error :(</p>;
  return (
    <>
      <div className="pt-32">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} className="justify-center">
          {data.credits.credits}
        </ReactMarkdown>
      </div>
    </>
  );
}

CreditsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
