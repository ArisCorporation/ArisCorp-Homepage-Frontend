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
                        <ShipInfo
                          key={data.id}
                          name={data.technologie_name}
                          desc={data.technologie_beschreibung}
                          image={data.technologie_banner?.id}
                        />
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
            <div className="flex w-full mt-12">
              <div className="flex flex-wrap w-4/12">
                <BasicPanel bgo="0">
                  <div className="flex items-center justify-center p-10 text-center">
                    <div className="relative w-full aspect-[428/980]">
                      <TechHuman />
                    </div>
                  </div>
                </BasicPanel>
              </div>
              <div className="flex flex-wrap w-7/12 mx-auto">
                <div className="relative w-full">
                  {selectedTech ? (
                    selectedTech != 'grav' &&
                    selectedTech != 'powerplant' &&
                    selectedTech != 'weaponexkurs' &&
                    selectedTech != 'armorexkurs' ? (
                      data
                        .filter((data) => data.id == selectedTech)
                        .map((data) => (
                          <PersonalInfo
                            key={data.id}
                            name={data.technologie_name}
                            desc={data.technologie_beschreibung}
                            image={data.technologie_banner?.id}
                          />
                        ))
                    ) : selectedTech == 'weaponexkurs' ? (
                      <PersonalInfo
                        name={'WeaponExkurs'}
                        desc={'Hier fehlt eine Beschreibung und ein Banner'}
                        image={null}
                      />
                    ) : selectedTech == 'armorexkurs' ? (
                      <PersonalInfo
                        name={'ArmorExkurs'}
                        desc={'Hier fehlt eine Beschreibung und ein Banner'}
                        image={null}
                      />
                    ) : null
                  ) : null}
                  <div className="absolute flex flex-wrap justify-between w-full mx-auto xs:flex-nowrap h-36 md:h-48 lg:px-6 top-64 lg:h-60">
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
                        objectFit="contain"
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
                        objectFit="contain"
                        placeholder="blur"
                        blurDataURL={
                          'https://cms.ariscorp.de/assets/3ba7bb79-a9f8-4e8a-9d6e-4e14616695ca' +
                          '?width=16&quality=1'
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

const PersonalInfo = ({ name, desc, image }) => (
  <div className="top-4 relative h-44 lg:w-[516px] xl:w-[548px] lg:float-right">
    <div className="md:w-full mx-auto h-full w-[90%] md:bg-transparent">
      <BasicPanel>
        <div className="flex flex-wrap items-center justify-center px-2 py-6 text-center">
          <h5 className="w-full mb-5">{name}</h5>
          <div className="w-[47%]">
            <div className="relative sm:w-64 w-56 h-[5.5rem]">
              <Image
                src={'https://cms.ariscorp.de/assets/' + image}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={
                  'https://cms.ariscorp.de/assets/' +
                  image +
                  '?width=16&quality=1'
                }
              />
            </div>
          </div>
          <div className="w-[48%]">
            <p className="p-0 text-xs lg:text-base">{desc}</p>
          </div>
        </div>
      </BasicPanel>
    </div>
  </div>
)

const ShipInfo = ({ name, desc, image }) => (
  <div className="relative block">
    <div className="relative w-full md:absolute mt-5 right-0 h-44 top-0 md:w-[480px] lg:w-[548px]">
      <div className="w-full h-full">
        <BasicPanel>
          <div className="flex flex-wrap items-center justify-center px-2 py-6 text-center">
            <h5 className="w-full mb-5">{name}</h5>
            <div className="w-[47%]">
              <div className="relative w-56 h-[5.5rem]">
                <Image
                  src={'https://cms.ariscorp.de/assets/' + image}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={
                    'https://cms.ariscorp.de/assets/' +
                    image +
                    '?width=16&quality=1'
                  }
                />
              </div>
            </div>
            <div className="w-[48%]">
              <p className="p-0 text-base">{desc}</p>
            </div>
          </div>
        </BasicPanel>
      </div>
    </div>
  </div>
)

Technologie.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
