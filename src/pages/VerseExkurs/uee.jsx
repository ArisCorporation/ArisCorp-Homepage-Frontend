import Layout from "pages/VerseExkurs/layout";
import { SquareLoader } from "react-spinners";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Tab } from "@headlessui/react";
import { Tabs } from "react-tabs";
import Link from "next/link";

const { gql, useQuery } = require("@apollo/client");

const UEE = gql`
  query united_empire_of_earth {
    united_empire_of_earth {
      id
      title
      image {
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
  const { loading, error, data } = useQuery(UEE);

  if (loading)
    return (
      <div className="flex justify-center pt-32">
        <SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} />
      </div>
    );

  if (error) return <p>Error :(</p>;

  const Data = data.united_empire_of_earth;

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto">
      <div>
        <div className="items-center text-center">
          <h1 className="uppercase">
            ALLES ÜBER DAS <span className="text-primary">{Data.title}</span>
          </h1>
          <hr />
          <div className="w-full">
            <Image
              src={"https://cms.ariscorp.de/assets/" + Data.image.id}
              alt={"Banner"}
              width={Data.image.width}
              height={Data.image.width}
              placeholder="blur"
              blurDataURL={
                "https://cms.ariscorp.de/assets/" +
                Data.image.id +
                "?width=16&quality=1"
              }
            />
          </div>
        </div>
        <div className={"max-w-[1600px] mx-auto"}>
          <h2 className="mt-3">VerseExkurs - UEE: Übersicht</h2>
          <hr className="max-w-[80px]" />
        </div>
        <div className="font-nasa article-font">
          <div>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {Data.text}
            </ReactMarkdown>
          </div>
          <hr />
          <Tab.Group>
            <Tab.List className="">
              {Data.sections.map((data) => (
                <Tab
                  key={data.title}
                  className={({ selected }) =>
                    (selected ? "text-primary" : "opacity-50") +
                    " p-3 m-1 transition-all duration-300 ease-in-out"
                  }
                >
                  <h1 className="text-base font-normal font-base md:text-lg lg:text-xl xl:text-2xl">
                    {data.title}
                  </h1>
                </Tab>
              ))}
              <hr />
            </Tab.List>
            <Tab.Panels className={"px-4"}>
              {Data.sections.map((data) => (
                <Tab.Panel key={data.title}>
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {data.content}
                  </ReactMarkdown>
                </Tab.Panel>
              ))}
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
