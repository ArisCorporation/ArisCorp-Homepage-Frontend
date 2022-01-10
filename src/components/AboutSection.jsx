import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TheArisCorp from "./AboutSection/AboutArisCorp";
import ArisCorpHistory from "./AboutSection/ArisCorpHistory";
import ArisCorpManifest from "./AboutSection/ArisCorpManifest";
import ArisCorpCharta from "./AboutSection/ArisCorpCharta";

const AboutSection = () => (
  <Tabs>
    <TabList>
      <h1>ÜBER</h1>
      <hr />
      <Tab><h1>DIE ARISCORP</h1></Tab>
      <Tab><h1>HISTORY</h1></Tab>
      <Tab><h1>MANIFEST</h1></Tab>
      <Tab><h1>CHARTER</h1></Tab>
      <hr />
    </TabList>

    <TabPanel>
      <TheArisCorp />
    </TabPanel>

    <TabPanel>
      <ArisCorpHistory />
    </TabPanel>

    <TabPanel>
      <ArisCorpManifest />
    </TabPanel>

    <TabPanel>
      <ArisCorpCharta />
    </TabPanel>
  </Tabs>
);

export default AboutSection;
