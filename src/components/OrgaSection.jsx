import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import OurMember from "./OrgaSection/OurMember";

const OrgaSection = () => (
  <Tabs>
    <TabList>
      <h1>UNSERE</h1>
      <hr />
      <Tab><h1>MEMBER</h1></Tab>
      <Tab><h1>FLOTTE</h1></Tab>
      <Tab><h1>AUFGABENFELDER</h1></Tab>
      <hr />
    </TabList>

    <TabPanel>
      <OurMember />
    </TabPanel>

    <TabPanel>
      <h1 />
    </TabPanel>

    <TabPanel>
      <h1 />
    </TabPanel>
  </Tabs>
);

export default OrgaSection;
