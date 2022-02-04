import Layout from "pages/VerseExkurs/layout";
import { SquareLoader } from "react-spinners";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Tab } from "@headlessui/react";
import { Tabs } from "react-tabs";
import Link from "next/link";

const { gql, useQuery } = require("@apollo/client");

const ALIENRASSEN = gql`
  query Alienrassen {
    alienrassen(filter: { alienrassen_name: { _eq: "Pflanzen" } }) {
      id
      alienrassen_name
      alienrassen_banner {
        id
        width
        height
      }
      text
      sections
    }
  }
`;

export default function PflanzenPage() {
  const { loading, error, data } = useQuery(ALIENRASSEN);

  if (loading)
    return (
      <div className="flex justify-center pt-32">
        <SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} />
      </div>
    );

  if (error) return <p>Error :(</p>;

  const Data = data.alienrassen[0];

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto">
      <div>
        <div className="items-center text-center">
          <h1 className="uppercase">
            Alienrasse:{" "}
            <span className="text-primary">{Data.alienrassen_name}</span>
          </h1>
          <hr />
          <div className="w-full">
            <Image
              src={
                "https://cms.ariscorp.de/assets/" + Data.alienrassen_banner.id
              }
              alt={"Banner"}
              width={Data.alienrassen_banner.width}
              height={Data.alienrassen_banner.height}
              placeholder="blur"
              blurDataURL={
                "https://cms.ariscorp.de/assets/" +
                Data.alienrassen_banner.id +
                "?width=16&quality=1"
              }
            />
          </div>
        </div>
        <div
          className={"max-w-[" + Data.alienrassen_banner.width + "px] mx-auto"}
        >
          <h2 className="mt-3">
            VerseExkurs - Alienrassen: {Data.alienrassen_name}
          </h2>
          <hr className="max-w-[80px]" />
        </div>
        <div className="font-nasa article-font">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{Data.text}</ReactMarkdown>
          <Tab.Group>
            <Tab.List className="flex flex-wrap justify-between">
              <Tab
                className={({ selected }) =>
                  (selected ? "text-primary" : "opacity-50") +
                  " p-3 m-1 transition-all duration-300 ease-in-out"
                }
              >
                <h1 className="text-base font-normal font-base md:text-lg lg:text-xl xl:text-2xl">
                  Pflanzen
                </h1>
              </Tab>
              <Tab
                className={({ selected }) =>
                  (selected ? "text-primary" : "opacity-50") +
                  " p-3 m-1 transition-all duration-300 ease-in-out"
                }
              >
                <h1 className="text-base font-normal font-base md:text-lg lg:text-xl xl:text-2xl">
                  Erntbare Objekte
                </h1>
              </Tab>
              <hr />
            </Tab.List>
            <Tab.Panels className={"px-4"}>
              <Tab.Panel className="flex flex-wrap items-center justify-between text-center">
                {Data.sections.map((data) => (
                  <Link href={"/VerseExkurs/" + data.title} key={data.title}>
                  <a
                    className={
                      "children-square text-white children-square hover:text-secondary decoration-transparent " +
                      (data.pflanze == false ? "hidden" : "")
                    }
                  >
                    <div className="text-center">
                      <div>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                          {data.image}
                        </ReactMarkdown>
                        <div>{data.title}</div>
                      </div>
                    </div>
                  </a>
                </Link>
                ))}
              </Tab.Panel>
              <Tab.Panel className="flex flex-wrap items-center justify-between text-center">
                {Data.sections.map((data) => (
                  <Link href={"/VerseExkurs/" + data.title} key={data.title}>
                    <a
                      className={
                        "children-square text-white children-square hover:text-secondary decoration-transparent " +
                        (data.pflanze == true ? "hidden" : "")
                      }
                    >
                      <div className="text-center">
                        <div>
                          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                            {data.image}
                          </ReactMarkdown>
                          <div>{data.title}</div>
                        </div>
                      </div>
                    </a>
                  </Link>
                ))}
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}

PflanzenPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
