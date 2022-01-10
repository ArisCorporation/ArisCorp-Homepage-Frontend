import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const AboutSection = () => (
  <Tabs>
    <TabList>
      <Tab>Die ArisCorp</Tab>
      <Tab>History</Tab>
      <Tab>Manifest</Tab>
      <Tab>Charter</Tab>
    </TabList>
    

    <TabPanel>
      <h2>Die ArisCorp</h2>
    </TabPanel>

    <TabPanel>
      <h2>History</h2>
    </TabPanel>

    <TabPanel>
      <h2>Manifest</h2>
    </TabPanel>

    <TabPanel>
      <h2>Charter</h2>
    </TabPanel>
  </Tabs>
);

export default AboutSection