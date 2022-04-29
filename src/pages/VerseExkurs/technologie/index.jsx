import Image from 'next/image'
import Layout from 'pages/VerseExkurs/layout'
import TechCarrack from 'components/VerseExkursTechCarrack'
import TechHuman from 'components/VerseExkursTechHuman'
import { useContext } from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import client from 'apollo/clients'
import { GET_VERSEEXKURS_TECHNOLOGIES } from 'graphql/queries'
import { ShipTechnologieModalContext } from 'context/ShipTechnologieModalContext'
import { Tab } from '@headlessui/react'
import { BasicPanel } from 'components/panels'

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_VERSEEXKURS_TECHNOLOGIES,
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: await data.technologien,
    },
  }
}

export default function Technologie({ data }) {
  const { push, replace, query } = useRouter()
  const [activeTab, setActiveTab] = useState()
  const urlquery = query.tab

  useEffect(() => {
    if (urlquery != null && urlquery != '') {
      setActiveTab(urlquery)
    } else {
      setActiveTab(0)
    }
  }, [urlquery])

  const [selectedTech, setSelectedTech] = useContext(
    ShipTechnologieModalContext
  )

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto print:pt-5">
      <Tab.Group
        selectedIndex={activeTab}
        onChange={(event) =>
          replace({ query: { tab: event } }, undefined, { shallow: true }) +
          setActiveTab(event)
        }
      >
        <Tab.List className="flex flex-wrap justify-between">
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' p-3 m-1 transition-all duration-300 ease-in-out'
            }
          >
            <h1 className="text-base uppercase sm:text-lg md:text-xl lg:text-3xl text-inherit">
              Schiffstechnologien
            </h1>
          </Tab>
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' p-3 m-1 transition-all duration-300 ease-in-out'
            }
          >
            <h1 className="text-base uppercase sm:text-lg md:text-xl lg:text-3xl text-inherit">
              Personentechnologien
            </h1>
          </Tab>
          <hr />
        </Tab.List>
        <Tab.Panels className={'px-4'}>
          <Tab.Panel>
            <div className="pt-10 mx-auto print:pt-5 prose prose-td:align-middle prose-invert xl:max-w-[90%] mb-72">
              <div className="block">
                <BasicPanel bgo="0">
                  <div className="flex items-center justify-center px-10 py-5 text-center">
                    <div className="relative w-full aspect-[1825/635]">
                      <TechCarrack />
                    </div>
                  </div>
                </BasicPanel>
              </div>

              {selectedTech
                ? selectedTech != 'grav' &&
                  selectedTech != 'powerplant' &&
                  selectedTech != 'weaponexkurs' &&
                  selectedTech != 'armorexkurs'
                  ? data
                      .filter((data) => data.id == selectedTech)
                      .map((data) => (
                        <div key={data.id} className="relative block">
                          <div className="relative w-full md:absolute mt-5 right-0 h-44 top-0 md:w-[480px] lg:w-[548px]">
                            <div className="w-full h-full">
                              <BasicPanel>
                                <div className="flex flex-wrap items-center justify-center px-2 py-6 text-center">
                                  <h5 className="w-full mb-5">
                                    {data.technologie_name}
                                  </h5>
                                  <div className="w-[47%]">
                                    <div className="relative w-56 h-[5.5rem]">
                                      <Image
                                        src={
                                          'https://cms.ariscorp.de/assets/' +
                                          data.technologie_banner?.id
                                        }
                                        layout="fill"
                                        objectFit="cover"
                                        placeholder="blur"
                                        blurDataURL={
                                          'https://cms.ariscorp.de/assets/' +
                                          data.technologie_banner?.id +
                                          '?width=16&quality=1'
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="w-[48%]">
                                    <p className="p-0 text-base">
                                      {data.technologie_beschreibung}
                                    </p>
                                  </div>
                                </div>
                              </BasicPanel>
                            </div>
                          </div>
                        </div>
                      ))
                  : null
                : null}

              <div className="top-0 left-0 flex justify-center mt-24 md:justify-start md:mt-5 ">
                <div
                  className="relative w-52 aspect-square hover:cursor-pointer"
                  onMouseEnter={() => setSelectedTech('3')}
                  onMouseLeave={() => setSelectedTech(undefined)}
                  onClick={() =>
                    router.push('/VerseExkurs/technologie/Komponenten')
                  }
                >
                  <Image
                    src="https://cms.ariscorp.de/assets/7851a135-3e01-499d-8f5b-149f7b15b827"
                    alt="Kompletter Tech Index"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={
                      'https://cms.ariscorp.de/assets/7851a135-3e01-499d-8f5b-149f7b15b827' +
                      '?width=16&quality=1'
                    }
                  />
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="relative flex hidden w-full mt-12 sm:block">
              <div className="absolute right-0">
                {selectedTech ? (
                  selectedTech != 'grav' &&
                  selectedTech != 'powerplant' &&
                  selectedTech != 'weaponexkurs' &&
                  selectedTech != 'armorexkurs' ? (
                    data
                      .filter((data) => data.id == selectedTech)
                      .map((data) => (
                        <div key={data.id} className="relative block">
                          <div className="absolute w-full mr-0 2xl:mr-24 right-0 h-44 top-0 2xl:h-44 lg:w-[480px] 2xl:w-[548px] md: propulsion-popup">
                            <div className="md:w-full mx-auto h-full w-[90%] md:bg-transparent">
                              <BasicPanel>
                                <div className="flex flex-wrap items-center justify-center px-2 py-6 text-center">
                                  <h5 className="w-full mb-5">
                                    {data.technologie_name}
                                  </h5>
                                  <div className="w-[47%]">
                                    <div className="relative sm:w-64 md:w-72 lg:w-52 2xl:w-56 sm:h-[4.6rem] 2xl:h-[5.5rem]">
                                      <Image
                                        src={
                                          'https://cms.ariscorp.de/assets/' +
                                          data.technologie_banner?.id
                                        }
                                        layout="fill"
                                        objectFit="cover"
                                        placeholder="blur"
                                        blurDataURL={
                                          'https://cms.ariscorp.de/assets/' +
                                          data.technologie_banner?.id +
                                          '?width=16&quality=1'
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="w-[48%]">
                                    <p className="p-0 text-sm 2xl:text-base">
                                      {data.technologie_beschreibung}
                                    </p>
                                  </div>
                                </div>
                              </BasicPanel>
                            </div>
                          </div>
                        </div>
                      ))
                  ) : selectedTech == 'weaponexkurs' ? (
                    <div className="relative block">
                      <div className="absolute w-full mr-0 2xl:mr-24 right-0 h-44 top-0 2xl:h-44 lg:w-[480px] 2xl:w-[548px] md: propulsion-popup">
                        <div className="md:w-full mx-auto h-full w-[90%] md:bg-transparent">
                          <BasicPanel>
                            <div className="flex flex-wrap items-center justify-center px-2 py-6 text-center">
                              <h5 className="w-full mb-5">WeaponExkurs</h5>
                              <div className="w-[47%]">
                                <div className="relative sm:w-64 md:w-72 lg:w-52 2xl:w-56 sm:h-[4.6rem] 2xl:h-[5.5rem]">
                                  <Image
                                    src={'https://cms.ariscorp.de/assets/'}
                                    layout="fill"
                                    objectFit="cover"
                                    placeholder="blur"
                                    blurDataURL={
                                      'https://cms.ariscorp.de/assets/' +
                                      '?width=16&quality=1'
                                    }
                                  />
                                </div>
                              </div>
                              <div className="w-[48%]">
                                <p className="p-0 text-sm 2xl:text-base">
                                  Hier fehlt eine Beschreibung und ein Banner
                                </p>
                              </div>
                            </div>
                          </BasicPanel>
                        </div>
                      </div>
                    </div>
                  ) : selectedTech == 'armorexkurs' ? (
                    <div className="relative block">
                      <div className="absolute w-full mr-0 2xl:mr-24 right-0 h-44 top-0 2xl:h-44 lg:w-[480px] 2xl:w-[548px] md: propulsion-popup">
                        <div className="md:w-full mx-auto h-full w-[90%] md:bg-transparent">
                          <BasicPanel>
                            <div className="flex flex-wrap items-center justify-center px-2 py-6 text-center">
                              <h5 className="w-full mb-5">ArmorExkurs</h5>
                              <div className="w-[47%]">
                                <div className="relative sm:w-64 md:w-72 lg:w-52 2xl:w-56 sm:h-[4.6rem] 2xl:h-[5.5rem]">
                                  <Image
                                    src={'https://cms.ariscorp.de/assets/'}
                                    layout="fill"
                                    objectFit="cover"
                                    placeholder="blur"
                                    blurDataURL={
                                      'https://cms.ariscorp.de/assets/' +
                                      '?width=16&quality=1'
                                    }
                                  />
                                </div>
                              </div>
                              <div className="w-[48%]">
                                <p className="p-0 text-sm 2xl:text-base">
                                  Hier fehlt eine Beschreibung und ein Banner
                                </p>
                              </div>
                            </div>
                          </BasicPanel>
                        </div>
                      </div>
                    </div>
                  ) : null
                ) : null}
              </div>
              <div className="flex flex-wrap">
                <BasicPanel bgo="0">
                  <div className="flex items-center justify-center p-10 text-center">
                    <div className="relative max-h-[512px] aspect-[428/980]">
                      <TechHuman />
                    </div>
                  </div>
                </BasicPanel>
              </div>
              <div className="absolute flex justify-between mt-5 space-x-12 right-32 top-52">
                <div
                  className="relative w-60 aspect-square hover:cursor-pointer"
                  onMouseEnter={() => setSelectedTech('weaponexkurs')}
                  onMouseLeave={() => setSelectedTech(undefined)}
                  // onClick={() => router.push('/WeaponExkurs')}
                >
                  <Image
                    src="https://cms.ariscorp.de/assets/ecc40f84-3743-4e12-a6b2-2f697bfd99ae"
                    alt="Kompletter Tech Index"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={
                      'https://cms.ariscorp.de/assets/ecc40f84-3743-4e12-a6b2-2f697bfd99ae' +
                      '?width=16&quality=1'
                    }
                  />
                </div>
                <div
                  className="relative w-60 aspect-square hover:cursor-pointer"
                  onMouseEnter={() => setSelectedTech('armorexkurs')}
                  onMouseLeave={() => setSelectedTech(undefined)}
                  // onClick={() => router.push('/ArmorExkurs')}
                >
                  <Image
                    src="https://cms.ariscorp.de/assets/3ba7bb79-a9f8-4e8a-9d6e-4e14616695ca"
                    alt="Kompletter Tech Index"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={
                      'https://cms.ariscorp.de/assets/3ba7bb79-a9f8-4e8a-9d6e-4e14616695ca' +
                      '?width=16&quality=1'
                    }
                  />
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

Technologie.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
