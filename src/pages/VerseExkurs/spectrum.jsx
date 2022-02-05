import Layout from "pages/VerseExkurs/layout";
import { SquareLoader } from "react-spinners";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Link from "next/link";

const { gql, useQuery } = require("@apollo/client");

const SPECTRUM = gql`
  query Spectrum {
    spectrum(
      filter: { status: { _eq: "published" } }
      sort: ["sort", "-spectrum_kategorie_beschreibung", "spectrum_titel"]
      limit: 50
    ) {
      id
      status
      spectrum_titel
      spectrum_text
      spectrum_beitrag_kateogrie
      spectrum_kategorie_beschreibung
      image {
        id
        width
        height
      }
    }
  }
`;

export default function SpectrumPage() {
  const { loading, error, data } = useQuery(SPECTRUM);

  if (loading)
    return (
      <div className="flex justify-center pt-32">
        <SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} />
      </div>
    );

  if (error) return <p>Error :(</p>;

  const Data = data.spectrum;

  console.log(Data);

  return (
  <div></div>
  );
}

SpectrumPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
