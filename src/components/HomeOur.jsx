import { Tab } from "@headlessui/react";
import OurMember from "./HomeOurMember";
import OurFleet from "./HomeOurFleet";
import dynamic from "next/dynamic";

const OurGameplays = dynamic(() => import("./HomeOurGameplays"), {});

const OrgaSection = () => (
  <div className="my-24">
    <Tab.Group>
      <Tab.List>
        <h1>UNSERE</h1>
        <hr />
        <Tab
          className={({ selected }) =>
            (selected ? "text-primary" : "opacity-50") + " p-3 m-1 transition-all duration-300 ease-in-out"
          }
        >
          <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl">
            MEMBER
          </h1>
        </Tab>
        <Tab
          className={({ selected }) =>
            (selected ? "text-primary" : "opacity-50") + " p-3 m-1 transition-all duration-300 ease-in-out"
          }
        >
          <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl">
            FLOTTE
          </h1>
        </Tab>
        <Tab
          className={({ selected }) =>
            (selected ? "text-primary" : "opacity-50") + " p-3 m-1 transition-all duration-300 ease-in-out"
          }
        >
          <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl">
            AUFGABENFELDER
          </h1>
        </Tab>
        <hr />
      </Tab.List>
      <Tab.Panels className={"px-4"}>
        <Tab.Panel>
          <OurMember />
        </Tab.Panel>
        <Tab.Panel>
          <OurFleet />
        </Tab.Panel>
        <Tab.Panel>
          <OurGameplays />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  </div>
);

export default OrgaSection;
