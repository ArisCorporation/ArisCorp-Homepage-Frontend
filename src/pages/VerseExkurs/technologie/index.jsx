import Image from 'next/image'
import Layout from 'pages/VerseExkurs/layout'
import TechCarrack from 'components/VerseExkursTechCarrack'
import TechHuman from 'components/VerseExkursTechHuman'
import { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import client from 'apollo/clients'
import { GET_VERSEEXKURS_TECHNOLOGIES } from 'graphql/queries'
import { ShipTechnologieModalContext } from 'context/ShipTechnologieModalContext'
import { Tab } from '@headlessui/react'
import { BasicPanel } from 'components/panels'
import Link from 'next/link'

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

  const components = [
    {
      id: '63d432e4-eafa-4ea1-9870-4610dd74d087',
      icon: '0db5201a-cbca-483f-b3a3-af677a5b3310',
      name: 'IFCS',
      desc: ''
    },
    {
      id: '5f235080-66a5-4ea5-970a-9c3aa83dbc69',
      icon: '0e5f5484-b084-4758-857e-161340276737',
      name: 'Energiegeneratoren',
    },
    {
      id: '1c44c62a-e1f6-4dfb-a907-90de864dde29',
      icon: '338c5195-5425-4c1e-9777-443e7ac14060',
      name: 'Computer Systeme und Avionic',
    },
    {
      id: '691372da-bca6-4ca9-9bb8-2c7ddb28d928',
      icon: '8a559a38-820d-4179-a335-82124dc1b703',
      name: 'Kühlsysteme',
    },
    {
      id: '41db2450-c335-4bfb-bdc3-c21ca8c934e7',
      icon: 'e11dcb3a-4978-4b6e-9acc-15a9755bfcbf',
      name: 'Radar und Signaturen',
    },
    {
      id: 'c5fba33f-9cdc-42b2-b601-6e7e6f59621b',
      icon: '25985e91-fe8a-49be-b9a2-0a2b5106a56a',
      name: 'Fusionstriebwerke',
    },
    {
      id: '165f1bde-3678-4f85-bb8b-0e4c5e20e67f',
      icon: 'f53d657b-aa5b-423d-b468-fe2bc02c5c80',
      name: 'Quantum und Sprungantrieb',
    },
    {
      id: '165f1bde-3678-4f85-bb8b-0e4c5e20e67f',
      icon: '',
      name: 'Quantum und Sprungantrieb',
    },
    {
      id: '07ff69e2-31b4-4fe6-ad09-3719a659aa51',
      icon: '06a914e5-ce11-4e06-8358-88001d86f439',
      name: 'Treibstoff Mechanik',
    },
    {
      id: '07ff69e2-31b4-4fe6-ad09-3719a659aa51',
      icon: 'e722f37f-c5a5-47a0-8fb3-e3203417c8dd',
      name: 'Treibstoff Mechanik',
    },
    {
      id: 'grav',
      icon: 'bb487d7c-d4bb-41e8-8f67-c14d52ecc6fa',
      name: 'Gravitationsgenerator',
      desc: 'noch keine Beschreibung für Grav gens'
    },
    {
      id: '94cb2026-4b08-4f4e-b5cf-8a24574cf576',
      icon: 'c0f5954b-e122-4a72-92dd-e7828f4c7bf0',
      name: 'Schutzschilde',
    },
    {
      id: 'ac4583c6-8df9-4faf-97c6-0881eedf3afe',
      icon: '8fcfe5e8-ac21-40cd-ae7d-5f5148991850',
      name: 'Waffensysteme',
    },
    {
      id: 'e1c5e831-534e-473b-856b-bb8ba33655ac',
      icon: 'a8d6fcac-0374-4e26-ad7d-22aa8ece821f',
      name: 'Fracht Mechanik',
    },
  ]

  const complength = components.length

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

  console.log(selectedTech)

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
                <div
                  className={`grid justify-between grid-cols-[repeat(${complength},_minmax(0,_1fr))] mt-6 gap-x-4`}
                >
                  {components.map((object, index) => (
                    <div
                      key={object.id}
                      onMouseEnter={() => setSelectedTech(object.id)}
                      onMouseLeave={() => setSelectedTech(undefined)}
                    >
                      <Link
                        href={
                          object.link == null
                            ? '/VerseExkurs/technologie/komponenten'
                            : '/VerseExkurs/technologie/' + object.name
                        }
                      >
                        <a>
                          <div
                            className={
                              'transition-opacity duration-150 hover:duration-300 hover:cursor-pointer aspect-square ' +
                              (selectedTech == object.id
                                ? 'opacity-100'
                                : 'opacity-80')
                            }
                          >
                            <div className="relative w-full h-full">
                              <Image
                                src={
                                  'https://cms.ariscorp.de/assets/' +
                                  object.icon
                                }
                                layout="fill"
                                objectFit="cover"
                                alt={'icon von: ' + object.name}
                                placeholder="blur"
                                blurDataURL={
                                  'https://cms.ariscorp.de/assets/' +
                                  object.icon +
                                  '?width=16&quality=1'
                                }
                              />
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
                {selectedTech ? (
                  selectedTech != 'grav' &&
                  selectedTech != 'weaponexkurs' &&
                  selectedTech != 'armorexkurs' ? (
                    data
                      .filter((data) => data.id == selectedTech)
                      .map((data) => (
                        <ShipInfo
                          key={data.id}
                          name={data.technologie_name}
                          desc={data.technologie_beschreibung}
                          image={data.technologie_banner?.id}
                        />
                      ))
                  ) : (
                    <ShipInfo
                      key={selectedTech}
                      name={components.find((e) => e.id == selectedTech).name}
                      desc={components.find((e) => e.id == selectedTech).desc}
                      image={'811cff57-2e74-4b1c-a872-d2b8acbf9218'}
                    />
                  )
                ) : activeTab == 0 ? (
                  <ShipInfo
                    key={'idle'}
                    name={'Komponenten'}
                    desc={'idle anzeige, noch kein text vorhanden'}
                    image={'811cff57-2e74-4b1c-a872-d2b8acbf9218'}
                  />
                ) : null}
                <div className="top-0 left-0 flex justify-center mt-24 md md:justify-start md:mt-5 ">
                  <div
                    className="relative w-52 aspect-square hover:cursor-pointer"
                    onClick={() => push('/VerseExkurs/technologie/Komponenten')}
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
                        image={'fbd2c23c-74bc-4142-a145-f2f43dbfdc77'}
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
                      onClick={() => push('/VerseExkurs/waffen')}
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

const ComponentDisplay = ({ obj }) => {
  const [selectedTech, setSelectedTech] = useContext(
    ShipTechnologieModalContext
  )

  return (
    <Link
      href={
        obj.link == null
          ? '/VerseExkurs/technologie/komponenten'
          : '/VerseExkurs/technologie/' + obj.name
      }
    >
      <a>
        <div
          className={
            'transition-opacity duration-150 hover:duration-300 hover:cursor-pointer aspect-square opacity-80' +
              selectedTech ==
            obj.id
          }
        >
          <div className="relative w-full h-full">
            <Image
              src={'https://cms.ariscorp.de/assets/' + obj.icon}
              layout="fill"
              objectFit="cover"
              alt={'icon von: ' + obj.name}
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                obj.icon +
                '?width=16&quality=1'
              }
            />
          </div>
        </div>
      </a>
    </Link>
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
            <div className="w-[44%]">
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
