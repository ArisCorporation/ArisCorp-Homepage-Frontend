import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TheArisCorp from "./AboutSection/AboutArisCorp";
import ArisCorpHistory from "./AboutSection/ArisCorpHistory";
import ArisCorpManifest from "./AboutSection/ArisCorpManifest";
import ArisCorpCharta from "./AboutSection/ArisCorpCharta";

const AboutSection = ({ aboutData }) => (
  <Tabs>
    <TabList>
      <h1>ÜBER</h1>
      <hr />
      <Tab><h1 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl">DIE ARISCORP</h1></Tab>
      <Tab><h1 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl">HISTORY</h1></Tab>
      <Tab><h1 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl">MANIFEST</h1></Tab>
      <Tab><h1 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl">CHARTER</h1></Tab>
      <hr />
    </TabList>

    <TabPanel>
      <TheArisCorp data={aboutData} />
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
