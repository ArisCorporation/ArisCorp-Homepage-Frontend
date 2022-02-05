import Layout from "pages/VerseExkurs/layout";
import { SquareLoader } from "react-spinners";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Link from "next/link";
import { useRouter } from "next/router";

const { gql, useQuery } = require("@apollo/client");

const SPECTRUM = gql`
  query Spectrum {
    spectrum(filter: { status: { _eq: "published" } }, limit: 1000) {
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

export default function SpectrumCategoryPage() {
  const router = useRouter();
  const { cid } = router.query;

  const { loading, error, data } = useQuery(SPECTRUM);

  if (loading)
    return (
      <div className="flex justify-center pt-32">
        <SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} />
      </div>
    );

  if (error) return <p>Error :(</p>;

  const Data = data.spectrum;

  const category = Data.filter(
    (data) => data.spectrum_kategorie_beschreibung == true && data.id == cid
  )[0];

  console.log(Data);

  return (
    <div className="pt-10">
      <div className="flex flex-wrap w-full aspect-[40/21] scale-[.8]">
        <div className="relative w-full">
          <Image
            src={"https://cms.ariscorp.de/assets/" + category.image?.id}
            layout="fill"
            alt={
              "Banner von der Kategorie: " + category.spectrum_beitrag_kateogrie
            }
            placeholder="blur"
            blurDataURL={
              "https://cms.ariscorp.de/assets/" +
              category.image?.id +
              "?width=16&quality=1"
            }
            objectFit="cover"
          />
        </div>
      </div>
      <div className="-mt-12 scale-95">
        <hr />
      </div>
      <div>
        {Data.filter(
          (data) =>
            data.spectrum_kategorie_beschreibung == false &&
            data.spectrum_beitrag_kateogrie ===
              category.spectrum_beitrag_kateogrie
        ).map((data) => (
          <div
            key={data.id}
            className="w-full h-48 my-10 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-secondary"
          >
            <Link href={"/VerseExkurs/spectrum/" + category.id + "/" + data.id}>
              <a className="text-white decoration-transparent">
                <div className="flex items-center w-full h-full px-8">
                  <div className={"relative h-3/4 w-1/3"}>
                    <Image
                      src={
                        "https://cms.ariscorp.de/assets/" + category.image?.id
                      }
                      layout="fill"
                      alt={
                        "Banner von der Kategorie: " +
                        category.spectrum_beitrag_kateogrie
                      }
                      placeholder="blur"
                      blurDataURL={
                        "https://cms.ariscorp.de/assets/" +
                        category.image?.id +
                        "?width=16&quality=1"
                      }
                      objectFit="cover"
                    />
                  </div>
                  <div className="w-2/3 px-10 text-xs sm:text-base">
                    <h1 className="text-primary">{data.spectrum_titel}</h1>
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

SpectrumCategoryPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
