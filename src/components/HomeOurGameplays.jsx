import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const { gql, useQuery } = require("@apollo/client");

const OUR_GAMEPLAYS = gql`
  query GetGameplays {
    gameplays(filter: { status: { _eq: "published" } }, sort: ["sort", "id"]) {
      id
      status
      gameplay_name
      gameplay_logo {
        id
      }
      gameplay_bild_links {
        id
      }
      gameplay_bild_rechts {
        id
      }
      gameplay_text
    }
  }
`;

export default function OurGameplays() {
  const { loading, error, data } = useQuery(OUR_GAMEPLAYS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      
      <Tabs>
        <TabList>
          <div className="flex flex-wrap justify-center max-w-6xl mx-auto">
            <Tab>
              <div className="relative mx-3 my-2 transition-all duration-300 ease-out border-solid cursor-pointer h-36 w-36 border-1 hover:scale-150">
                <Image src="https://cms.ariscorp.de/assets/887a0d8b-9a09-4ae0-9870-b319c9a9345c" width={144} height={144} layout="fill" objectFit="cover" />
              </div>
            </Tab>
            <Tab>
              <div className="relative mx-3 my-2 transition-all duration-300 ease-out border-solid cursor-pointer h-36 w-36 border-1 hover:scale-150">
                <Image src="https://cms.ariscorp.de/assets/887a0d8b-9a09-4ae0-9870-b319c9a9345c" width={144} height={144} layout="fill" objectFit="cover" />
              </div>
            </Tab>
          </div>
        </TabList>

        <TabPanel>
          <div className="mx-auto text-center cursor-pointer max-w-7xl">
            <div className="max-w-[1100px] mx-auto">
                <h1 className="pb-4 text-primary">MEDICAL</h1>
                <div className="flex space-x-5">
                  <div className="w-[542px] h-[228px] relative">
                    <Image src={`https://cms.ariscorp.de/assets/51b456ea-7c71-4804-b53a-06a92e87fbd3`} layout="fill" objectFit="cover" />
                  </div>
                  <div className="w-[542px] h-[228px] relative">
                    <Image src={`https://cms.ariscorp.de/assets/51b456ea-7c71-4804-b53a-06a92e87fbd3`} layout="fill" objectFit="cover" />
                  </div>
                </div>

                <div className="max-w-5xl mx-auto mt-4 text-center">
                  <p>
                    Das wichtigste Gut der ARIS Corporation sind die Mitarbeiter. Daher ist der Arbeitsbereich "Medizin" ein wichtiger Bestandteil für das Wohl und der Gesundheit unserer Mitarbeiter. Egal ob im Einsatz von medizinischem Personal auf einem Raumschiff wie der Anvil Carrack oder im Einsatz auf einem unserer dedizierten Rettungsschiffe wie der RSI Apollo bzw. einem unserer Krankenhausschiffe wie der MISC Endeavor Hope Klasse, unser qualifiziertes medizinisches Personal ist für jede Eventualität ausgestattet. Unsere Ärzte und Sanitäter sind für jeden Notfall qualifiziert.
                  </p>
                </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          d
        </TabPanel>
      </Tabs>
      
      
    </>
  );
}