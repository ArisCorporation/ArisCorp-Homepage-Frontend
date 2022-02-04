import { Tab } from "@headlessui/react";
import ArisCorpManifest from "./HomeAboutManifest";
import dynamic from "next/dynamic";

const TheArisCorp = dynamic(() => import("./HomeAboutArisCorp"), {});
const ArisCorpHistory = dynamic(() => import("./HomeAboutHistory"), {});
const ArisCorpCharta = dynamic(() => import("./HomeAboutCharta"), {});

const AboutSection = ({ aboutData, historyData, manifestData, chartaData }) => (
  <Tab.Group>
    <Tab.List className="flex flex-wrap justify-between">
      <h1>ÜBER</h1>
      <hr />
      <Tab
        className={({ selected }) => (selected ? "text-primary" : "opacity-50") + " p-3 m-1 transition-all duration-300 ease-in-out"}
      >
        <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl">
          DIE ARISCORP
        </h1>
      </Tab>
      <Tab
        className={({ selected }) => (selected ? "text-primary" : "opacity-50") + " p-3 m-1 transition-all duration-300 ease-in-out"}
      >
        <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl">
          HISTORY
        </h1>
      </Tab>
      <Tab
        className={({ selected }) => (selected ? "text-primary" : "opacity-50") + " p-3 m-1 transition-all duration-300 ease-in-out"}
      >
        <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl">
          MANIFEST
        </h1>
      </Tab>
      <Tab
        className={({ selected }) => (selected ? "text-primary" : "opacity-50") + " p-3 m-1 transition-all duration-300 ease-in-out"}
      >
        <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl">
          CHARTER
        </h1>
      </Tab>
      <hr />
    </Tab.List>
    <Tab.Panels className={"p-4"}>
      <Tab.Panel>
        <TheArisCorp data={aboutData} />
      </Tab.Panel>
      <Tab.Panel>
        <ArisCorpHistory data={historyData} />
      </Tab.Panel>
      <Tab.Panel>
        <ArisCorpManifest data={manifestData} />
      </Tab.Panel>
      <Tab.Panel>
        <ArisCorpCharta data={chartaData} />
      </Tab.Panel>
    </Tab.Panels>
  </Tab.Group>
);

export default AboutSection;
