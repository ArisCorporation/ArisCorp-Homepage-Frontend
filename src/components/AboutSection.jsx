import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ArisCorpManifest from "./AboutSection/ArisCorpManifest";
import dynamic from 'next/dynamic';

const TheArisCorp = dynamic(() => import('./AboutSection/AboutArisCorp'), {});
const ArisCorpHistory = dynamic(() => import('./AboutSection/ArisCorpHistory'), {});
const ArisCorpCharta = dynamic(() => import('./AboutSection/ArisCorpCharta'), {});

const AboutSection = ({ aboutData, historyData, manifestData, chartaData }) => (
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
  <ArisCorpManifest data={manifestData} />
</TabPanel>

    <TabPanel>
      <TheArisCorp data={aboutData} />
    </TabPanel>

    <TabPanel>
      <ArisCorpHistory data={historyData} />
    </TabPanel>

    <TabPanel>
      <ArisCorpCharta data={chartaData} />
    </TabPanel>
  </Tabs>
);

export default AboutSection;
