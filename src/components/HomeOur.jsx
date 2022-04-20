import { Tab } from '@headlessui/react'
import OurMember from './HomeOurMember'
import OurFleet from './HomeOurFleet'
import dynamic from 'next/dynamic'
import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'

const OurGameplays = dynamic(() => import('./HomeOurGameplays'), {})

const OrgaSection = () => {
  const { replace, query } = useRouter()
  const [activeTab, setActiveTab] = useState()
  const urlquery = query.our

  useEffect(() => {
    if (urlquery != null && urlquery != '') {
      setActiveTab(urlquery)
    } else {
      setActiveTab(0)
    }
  }, [urlquery])

  return (
    <div className="my-24">
      <Tab.Group
        selectedIndex={activeTab}
        onChange={(event) =>
          (query.about != null && query.about != '' ? (replace({ query: { about: query.about, our: event } }, undefined, { shallow: true })) : (replace({ query: { our: event, } }, undefined, { shallow: true }))) +
          setActiveTab(event)
        }
      >
        <Tab.List className="flex flex-wrap justify-between">
          <h1 className="scroll-mt-28" id="our">
            UNSERE
          </h1>
          <hr />
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' p-3 m-1 transition-all duration-300 ease-in-out'
            }
          >
            <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl text-inherit">
              MEMBER
            </h1>
          </Tab>
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' p-3 m-1 transition-all duration-300 ease-in-out'
            }
          >
            <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl text-inherit">
              FLOTTE
            </h1>
          </Tab>
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' p-3 m-1 transition-all duration-300 ease-in-out'
            }
          >
            <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl text-inherit">
              ABTEILUNGEN
            </h1>
          </Tab>
          <hr />
        </Tab.List>
        <Tab.Panels className={'px-4'}>
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
  )
}

export default OrgaSection
