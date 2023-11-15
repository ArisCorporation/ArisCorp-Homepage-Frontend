import { Tab } from '@headlessui/react'
import ArisCorpManifest from './HomeAboutManifest'
import { useEffect, useState } from 'react'
import { Router, useRouter } from 'next/router'
import TheArisCorp from './HomeAboutArisCorp'
import ArisCorpHistory from './HomeAboutHistory'
import ArisCorpCharta from './HomeAboutCharta'

const AboutSection = ({ aboutData, historyData, manifestData, chartaData }) => {
  const { replace, query } = useRouter()
  const [activeTab, setActiveTab] = useState()
  const urlquery = query.about

  useEffect(() => {
    if (urlquery != null && urlquery != '') {
      setActiveTab(urlquery)
    } else {
      setActiveTab(0)
    }
  }, [urlquery])

  return (
    <Tab.Group
      selectedIndex={activeTab}
      onChange={(event) =>
        (query.our != null && query.our != ''
          ? replace({ query: { about: event, our: query.our, department: query.department } }, undefined, {
              shallow: true,
            })
          : replace({ query: { about: event } }, undefined, {
              shallow: true,
            })) + setActiveTab(event)
      }
    >
      <Tab.List className="flex flex-wrap justify-between">
        <h1>ÜBER</h1>
        <hr />
        <Tab
          className={({ selected }) =>
            (selected ? 'text-primary' : 'opacity-50') +
            ' focus-visible:outline-none p-3 m-1 transition-all duration-300 ease-in-out'
          }
        >
          <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl text-inherit">
            DIE ARISCORP
          </h1>
        </Tab>
        <Tab
          className={({ selected }) =>
            (selected ? 'text-primary' : 'opacity-50') +
            ' focus-visible:outline-none p-3 m-1 transition-all duration-300 ease-in-out'
          }
        >
          <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl text-inherit">
            HISTORY
          </h1>
        </Tab>
        <Tab
          className={({ selected }) =>
            (selected ? 'text-primary' : 'opacity-50') +
            ' focus-visible:outline-none p-3 m-1 transition-all duration-300 ease-in-out'
          }
        >
          <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl text-inherit">
            MANIFEST
          </h1>
        </Tab>
        <Tab
          className={({ selected }) =>
            (selected ? 'text-primary' : 'opacity-50') +
            ' focus-visible:outline-none p-3 m-1 transition-all duration-300 ease-in-out'
          }
        >
          <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl text-inherit">
            CHARTER
          </h1>
        </Tab>
        <hr />
      </Tab.List>
      <Tab.Panels
        className={
          'p-4 mx-auto prose prose-td:align-middle prose-invert xl:max-w-full'
        }
      >
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
  )
}

export default AboutSection
