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
    united_empire_of_earth(filter: { status: { _eq: "published" } }) {
      id
      title
      isuee
      image {
        id
        width
        height
      }
      text
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
            ALLES ÜBER DAS{" "}
            <span className="text-primary">UEE</span>
          </h1>
          <hr />
          <div className="w-full">
            <Image
              src="https://cms.ariscorp.de/assets/4a39860e-9448-485e-b66b-1bce7c88d789"
              alt={"Banner"}
              width={1600}
              height={900}
              placeholder="blur"
              blurDataURL={
                "https://cms.ariscorp.de/assets/4a39860e-9448-485e-b66b-1bce7c88d789?width=16&quality=1"
              }
            />
          </div>
        </div>
        <div
          className={"max-w-[1600px] mx-auto"}
        >
          <h2 className="mt-3">
            VerseExkurs - UEE: Übersicht
          </h2>
          <hr className="max-w-[80px]" />
        </div>
        <div className="font-nasa article-font">
          <div>
            <p>Als die Menscheit in das Sonnesystem aufbrach, wusste sie, dass sie für große Dinge bestimmt war. Während sie noch kleinere Differenzen hatte, vereinte sie die Expansion ins Universun dennoch als eine Spezies. Planeten wurden terraformt, un wachsendem Ressourcenbedarf gerecht zu werden, so dass die uberbefolkerung der Erde bald kein Problem mehr war. Die Menscheit schloss sich zusammen, um sich den monumentalen Herausforderungen zu stellen, die vor ihr lagen.</p>
            <p>Auf der Reise stiess die Menschheit auf neü ausserirdische Zivilisationen. Einige waren freundlich gesinnt, wie zum beBeispiel die handelsorientierten Banu - andere hingegen nicht. Eine stolze Kriegerrasse, bekannt als Tevarin, lOESte den ersten und zweiten interstellaren Krieg der Menschheit aus. Das Xi{"'"}an-Inperium unterhielt mit den Menschen eine kühle Beziehung.</p>
            <p>Der Kampf ums überleben führt die Menschheit schliesslich auf einen dunklen Pfad. Ein brilliantervund manipulativer Soldat namens Ivar Messer schürte Angst, um sich schliesslich als erster Imperator der Erde aufzuschwingen und die bis dahin unabhängigen Planeten zu einem Empire zu formen. Hunderte Jahre regierte die Dynastie der Messers das Vereinigte Empire Empire der Erde mit Härte und Kontrolle, bis das Volk aufstand, um die # despotischen Herscher zu stürzen und die korrupte Regierung in eine Institution des Volkes zu wandeln.</p>
            <p>Heute wird die UEE von Senatoren regiert, die von Bürgern aus dem ganzen Empire gewählt werden, wärend das Militär die Grenzen des Empires mit rieseigen Kanpfschiffen schützt. Gleichzeitig gedeiht der Handel zwischen den Systemen und Spezies. Mit dem Ende des Jahrhunderts zeichnen sich jedoch neü Probleme am Horizont ab, die viele dazu veranlassen, sich zu fragen, ob die UEE weiterhin überleben kann.</p>
            <h2 className="mt-10">Das Jahr 2951</h2>
            <p>Im Jahr 2951 also heute, leben die Menschen auf mehr Welten in mehr Systemen als zu irgendeinem anderen Zeitpunkt in der Geschichte. Unternehmen der Xi{"'"}an operieren offen im vom Menschen besiedelten Raum und neü Handelsabkommen sehen noch mehr Möglichkeiten vor.Zum ersten Mal überhaupt wird ein Tevarin in den Senat gewählt. Menschen haben eine bessere Chance als je zuvor, ein erfolgreiches und Glückliches Leben zu führen. Aber das soll nicht so bleiben.</p>
            <p>Die Grenzen des Empires werden von den Vanduul belagert und der Grossteil der millitärischen Macht der UEE widmet sich der Kriegführung. Dies belastet den Haushalt der UEE, der durch massive Projekte wie die Synthworld, ein ehrgeiziges Experiment zur Schaffung einer künstlichen neün Welt, ohnehin unter Druck ist. Während sich das Empire bemüht, über die Runden zu kommen, gewinnen kriminelle Organisationen an Stärke und es wird mehr auf Milizen und private Söldnergruppen vertraut, um die Sicherheit im Empire zu gewährleisten. Einige glauben, dass die Zeit des Empires Ende geht und Gruppen wie die Terranischen Separatisten oder die People{"'"}s Alliance versuchen, so schnell wie möglich eine neü ära des Wandels einzuleiten.</p>
            <p>Mehr noch: Obwohl es so aussieht, als würden sich die xeno-diplomatischen Beziehungen nach und nach verbessern, scheint es unter der oberfläche doch zu brodeln. Kann man den Xi{"'"}an wirklich vertraün ? Haben sie nach Jahrhunderten des Misstraüns wirklich nur das Beste für die Menschheit im sinn oder ist ihr wirtschaftliches Engagement in die UEE nur ein Versuch, die Menschheit zu schwächen ? Die Banu sind zwar ständige Handelspartner, aber mit ihrer anhaltenden Beteiligung am Slavenhandel und ihrer launischen Natur- wie lange wird es daürn, bis ihnen jemand ein besseres Angebot macht und sie die Menschen verraten? Viele Tevarin sind mit ihrem Platz in der UEE unzufrieden und flüstern über die mögliche Wiedergeburt einer eigenen Nation. Kurz: Die Liste der Feinde der Menschheit könnte bald mehr als die Vanduul umfassen...</p>
          </div>
          <hr />
          <Tab.Group>
            <Tab.List className="flex flex-wrap justify-between">
              <Tab
                className={({ selected }) =>
                  (selected ? "text-primary" : "opacity-50") +
                  " p-3 m-1 transition-all duration-300 ease-in-out"
                }
              >
                <h1 className="text-base font-normal font-base md:text-lg lg:text-xl xl:text-2xl">
                  Leben im UEE
                </h1>
              </Tab>
              <Tab
                className={({ selected }) =>
                  (selected ? "text-primary" : "opacity-50") +
                  " p-3 m-1 transition-all duration-300 ease-in-out"
                }
              >
                <h1 className="text-base font-normal font-base md:text-lg lg:text-xl xl:text-2xl">
                  Regierung des UEE
                </h1>
              </Tab>
              <hr />
            </Tab.List>
            <Tab.Panels className={"px-4"}>
              <Tab.Panel className="flex flex-wrap items-center justify-between text-center">
                {Data.map((data) => (
                  <Link href={"/VerseExkurs/" + data.title} key={data.title}>
                  <a
                    className={
                      "children-square text-white children-square hover:text-secondary decoration-transparent " +
                      (data.isuee == false ? "hidden" : "")
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
                {Data.map((data) => (
                  <Link href={"/VerseExkurs/" + data.title} key={data.title}>
                    <a
                      className={
                        "children-square text-white children-square hover:text-secondary decoration-transparent " +
                        (data.isuee == true ? "hidden" : "")
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
