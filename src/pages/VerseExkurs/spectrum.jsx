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

  return (
    <div className="pt-3 print:pt-0">
      <div className="flex flex-wrap w-full aspect-[40/21] scale-90">
        <div className="relative w-full">
          <Image
            src="https://cms.ariscorp.de/assets/6e633dd2-1512-405d-92e0-fb3907de86a1"
            layout="fill"
            alt="Spectrum Banner"
            placeholder="blur"
            blurDataURL="https://cms.ariscorp.de/assets/6e633dd2-1512-405d-92e0-fb3907de86a1"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="-mt-5 scale-95">
        <hr />
      </div>
      <div>
        {Data.filter(
          (data) => data.spectrum_kategorie_beschreibung == true
        ).map((data) => (
          <div
            key={data.id}
            className="w-full h-64 transition-all duration-300 ease-in-out my-14 hover:shadow-2xl hover:shadow-secondary"
          >
            <Link href={data.id == 19 ? "/VerseExkurs/spectrum/19/125" : ("/VerseExkurs/spectrum/" + data.id)}>
              <a className="pr-0 text-white decoration-transparent">
                <div className="flex items-center w-full h-full px-8">
                  <div className={"relative h-3/4 w-1/3"}>
                    <Image
                      src={"https://cms.ariscorp.de/assets/" + data.image?.id}
                      layout="fill"
                      alt={
                        "Banner von der Kategorie: " +
                        data.spectrum_beitrag_kateogrie
                      }
                      placeholder="blur"
                      blurDataURL={
                        "https://cms.ariscorp.de/assets/" +
                        data.image?.id +
                        "?width=16&quality=1"
                      }
                      objectFit="cover"
                    />
                  </div>
                  <div className="w-2/3 px-10 text-xs sm:text-base">
                    <h1 className="text-primary">{data.spectrum_titel}</h1>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]} className="pt-3 text-pink-500">
                      {data.spectrum_text}
                    </ReactMarkdown>
                  </div>
                </div>
              </a>
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

SpectrumPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
