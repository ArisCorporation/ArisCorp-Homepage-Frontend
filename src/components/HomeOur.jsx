import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import OurMember from "./HomeOurMember";
import OurFleet from "./HomeOurFleet";
import dynamic from 'next/dynamic';

const OurGameplays = dynamic(() => import('./HomeOurGameplays'), {});

const OrgaSection = () => (
  <Tabs>
    <TabList>
      <h1>UNSERE</h1>
      <hr />
      <Tab><h1 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl">MEMBER</h1></Tab>
      <Tab><h1 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl">FLOTTE</h1></Tab>
      <Tab><h1 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl">AUFGABENFELDER</h1></Tab>
      <hr />
    </TabList>

    <TabPanel>
      <OurMember />
    </TabPanel>

    <TabPanel>
      <OurFleet />
    </TabPanel>

    <TabPanel>
      <OurGameplays />
    </TabPanel>
  </Tabs>
);

export default OrgaSection;
