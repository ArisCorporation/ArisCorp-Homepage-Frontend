import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TheArisCorp from "./AboutSection/AboutArisCorp";
import ArisCorpHistory from "./AboutSection/ArisCorpHistory";
import ArisCorpManifest from "./AboutSection/ArisCorpManifest";
import ArisCorpCharta from "./AboutSection/ArisCorpCharta";

const AboutSection = ({ aboutData, historyData, manifestData, chartaData }) => (
  <Tabs>
    <TabList>
      <h1>ÜBERRR</h1>
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
      <ArisCorpHistory data={historyData} />
    </TabPanel>

    <TabPanel>
      <ArisCorpManifest data={manifestData} />
    </TabPanel>

    <TabPanel>
      <ArisCorpCharta data={chartaData} />
    </TabPanel>
  </Tabs>
);

export default AboutSection;
