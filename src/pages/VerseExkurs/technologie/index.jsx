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
import Head from 'next/head'

export async function getServerSideProps () {
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

export default function Technologie ({ data }) {
  const { push, replace, query } = useRouter()
  const [activeTab, setActiveTab] = useState()
  const urlquery = query.tab

  const items = [
    {
      id: '63d432e4-eafa-4ea1-9870-4610dd74d087',
      icon: '0db5201a-cbca-483f-b3a3-af677a5b3310',
      name: 'IFCS',
      category: 'ship',
    },
    {
      id: '5f235080-66a5-4ea5-970a-9c3aa83dbc69',
      icon: '0e5f5484-b084-4758-857e-161340276737',
      name: 'Energiegeneratoren',
      category: 'ship',
    },
    {
      id: '1c44c62a-e1f6-4dfb-a907-90de864dde29',
      icon: '338c5195-5425-4c1e-9777-443e7ac14060',
      name: 'Computer Systeme und Avionic',
      category: 'ship',
    },
    {
      id: '691372da-bca6-4ca9-9bb8-2c7ddb28d928',
      icon: '8a559a38-820d-4179-a335-82124dc1b703',
      name: 'Kühlsysteme',
      category: 'ship',
    },
    {
      id: '41db2450-c335-4bfb-bdc3-c21ca8c934e7',
      icon: 'e11dcb3a-4978-4b6e-9acc-15a9755bfcbf',
      name: 'Radar und Signaturen',
      category: 'ship',
    },
    {
      id: 'c5fba33f-9cdc-42b2-b601-6e7e6f59621b',
      icon: '25985e91-fe8a-49be-b9a2-0a2b5106a56a',
      name: 'Fusionstriebwerke',
      category: 'ship',
    },
    {
      id: '165f1bde-3678-4f85-bb8b-0e4c5e20e67f',
      icon: 'f53d657b-aa5b-423d-b468-fe2bc02c5c80',
      name: 'Quantum und Sprungantrieb',
      category: 'ship',
    },
    {
      id: '165f1bde-3678-4f85-bb8b-0e4c5e20e67f',
      icon: '6d850ace-295f-49c2-8669-bb7774934e76',
      name: 'Quantum und Sprungantrieb',
      category: 'ship',
    },
    {
      id: '07ff69e2-31b4-4fe6-ad09-3719a659aa51',
      icon: '06a914e5-ce11-4e06-8358-88001d86f439',
      name: 'Treibstoff Mechanik',
      category: 'ship',
    },
    {
      id: '07ff69e2-31b4-4fe6-ad09-3719a659aa51',
      icon: 'e722f37f-c5a5-47a0-8fb3-e3203417c8dd',
      name: 'Treibstoff Mechanik',
      category: 'ship',
    },
    {
      id: '39efc5e7-0113-4fe3-9fb7-c4776fdd0786',
      icon: 'bb487d7c-d4bb-41e8-8f67-c14d52ecc6fa',
      name: 'Gravitationsgenerator',
      category: 'ship',
    },
    {
      id: '94cb2026-4b08-4f4e-b5cf-8a24574cf576',
      icon: 'c0f5954b-e122-4a72-92dd-e7828f4c7bf0',
      name: 'Schutzschilde',
      category: 'ship',
    },
    {
      id: 'bb58aaab-a6e0-4f9c-b9d1-0880cb985543',
      icon: '18410645-9926-4ea4-8ab6-9c852b067bd7',
      name: 'Drohnensysteme',
      category: 'ship',
    },
    {
      id: 'ac4583c6-8df9-4faf-97c6-0881eedf3afe',
      icon: '8fcfe5e8-ac21-40cd-ae7d-5f5148991850',
      name: 'Waffensysteme',
      category: 'ship',
    },
    {
      id: 'e1c5e831-534e-473b-856b-bb8ba33655ac',
      icon: 'a8d6fcac-0374-4e26-ad7d-22aa8ece821f',
      name: 'Fracht Mechanik',
      category: 'ship',
    },
    {
      id: '0e824394-db91-4d4a-a547-7ff684e9ea50',
      icon: '',
      name: 'Raumanzüge und Rüstungen',
      category: 'person',
    },
    {
      id: '08470bfa-3e7c-487c-bde3-810895cdfa92',
      icon: '',
      name: 'Personen Ausrüstung',
      category: 'person',
    },
    {
      id: 'b69bb675-77fc-42e5-93ed-9e973d5101cc',
      icon: '',
      name: 'Medizinische Ausrüstung',
      category: 'person',
    },
    {
      id: 'weaponindex',
      icon: '',
      name: 'Weapon Index',
      category: 'person',
      image: 'fbd2c23c-74bc-4142-a145-f2f43dbfdc77',
      desc: 'Im Waffen Index werden alle Waffen die im Verse zur Verfügung stehen aufgeführt. Inklusive Beschreibung, Kategorisierungen von Art, Typ, Wirkung und anderen wichtigen Statistiken die von Interesse sein könnten',
    },
    {
      id: 'armorindex',
      icon: '',
      name: 'Armor Index',
      category: 'person',
      image: 'b4e16143-82a9-48f9-a58c-927732996a38',
      desc: 'Coming Soon',
    },
  ]

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

  const siteTitle = "Technologien - Astro Research and Industrial Service Corporation"

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto print:pt-5">
      <Head>
        <title>
          {siteTitle}
        </title>

        <meta
          property="twitter:title"
          content={siteTitle}
        />
        <meta
          property="og:title"
          content={siteTitle}
        />
        <meta
          name="title"
          content={siteTitle}
        />
      </Head>
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
                  className={`grid justify-between grid-cols-[repeat(15,_minmax(0,_1fr))] mt-6 gap-x-4`}
                >
                  {items
                    .filter((e) => e.category == 'ship')
                    .map((object, index) => (
                      <div
                        key={object.id}
                        onMouseEnter={() => setSelectedTech(object.id)}
                        onMouseLeave={() => setSelectedTech(undefined)}
                      >
                        <Link legacyBehavior href={'/VerseExkurs/technologie/' + object.name}>
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
                <div className="relative flex w-full space-x-4">
                  <div className="w-1/4">
                    <div className="top-0 left-0 flex justify-center mt-24 md md:justify-start md:mt-5 ">
                      <div
                        className="relative w-52 aspect-square hover:cursor-pointer"
                        onClick={() =>
                          push('/VerseExkurs/technologie/Komponenten')
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
                  <div className="w-3/4">
                    {selectedTech && activeTab == 0 ? (
                      selectedTech != 'grav' &&
                        selectedTech != 'weaponindex' &&
                        selectedTech != 'armorindex' ? (
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
                          name={items.find((e) => e.id == selectedTech).name}
                          desc={items.find((e) => e.id == selectedTech).desc}
                          image={'811cff57-2e74-4b1c-a872-d2b8acbf9218'}
                        />
                      )
                    ) : (
                      data
                        .filter(
                          (data) =>
                            data.id == '3f533c4e-bfb0-4c6f-8151-5b002056da28'
                        )
                        .map((data) => (
                          <ShipInfo
                            key={data.id}
                            name={data.technologie_name}
                            desc={data.technologie_beschreibung}
                            image={data.technologie_banner?.id}
                          />
                        ))
                    )}
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
                  {selectedTech && activeTab == 1 ? (
                    selectedTech != 'weaponindex' &&
                      selectedTech != 'armorindex' ? (
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
                    ) : (
                      <PersonalInfo
                        key={selectedTech}
                        name={items.find((e) => e.id == selectedTech).name}
                        desc={items.find((e) => e.id == selectedTech).desc}
                        image={items.find((e) => e.id == selectedTech).image}
                      />
                    )
                  ) : (
                    <PersonalInfo
                      key={'idle'}
                      name={'Personenausrüstung'}
                      desc={
                        'Personenausrüstung ist ein wesentlicher Bestandteil des Überlebens- und Arbeitens im Weltraum. Von Raum- und Schutzanzügen über Werkzeuge und andere Hilfsmittel sind sie ein unerlässlicher Teil eines jeden Raumfahrers'
                      }
                      image={'327e44ea-3045-44a9-a8f0-1fc1279df782'}
                    />
                  )}
                  <div className="absolute flex flex-wrap justify-between w-full mx-auto xs:flex-nowrap h-36 md:h-48 lg:px-6 top-96 lg:h-60">
                    <div
                      className="relative w-60 aspect-square hover:cursor-pointer"
                      onMouseEnter={() => setSelectedTech('weaponindex')}
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
                      onMouseEnter={() => setSelectedTech('armorindex')}
                      onMouseLeave={() => setSelectedTech(undefined)}
                    // onClick={() => router.push('/armorindex')}
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
  <div className="top-4 relative h-44 lg:w-[516px] xl:w-[650px] lg:float-right">
    <div className="md:w-full mx-auto h-full w-[90%] md:bg-transparent">
      <BasicPanel>
        <div className="flex flex-wrap items-center justify-center px-2 py-6 text-center">
          <h4 className="w-full mt-0 mb-5 text-secondary">{name}</h4>
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
  <div className="relative block lg:right-0">
    <div className="relative w-full md:absolute mt-5 right-0 h-44 top-0 md:w-[480px] lg:w-full">
      <div className="w-full h-full">
        <BasicPanel>
          <div className="flex flex-wrap items-center justify-center px-2 py-6 text-center">
            <h4 className="w-full mt-0 mb-5 text-secondary">{name}</h4>
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

Technologie.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
