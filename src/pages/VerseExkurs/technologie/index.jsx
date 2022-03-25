import Image from 'next/image'
import Layout from 'pages/VerseExkurs/layout'
import TechCarrack from 'components/VerseExkursTechCarrack'
import TechHuman from 'components/VerseExkursTechHuman'
import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import client from 'apollo/clients'
import { GET_VERSEEXKURS_TECHNOLOGIES } from 'graphql/queries'
import { ShipTechnologieModalContext } from 'context/ShipTechnologieModalContext'
import { Tab } from '@headlessui/react'

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
  const [selectedTech, setSelectedTech] = useContext(
    ShipTechnologieModalContext
  )
  console.log(data.filter((data) => data.id == selectedTech))
  return (
    <div className="items-center max-w-6xl pt-10 mx-auto print:pt-5">
      <Tab.Group>
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
            <div className="pt-10 mx-auto print:pt-5 prose prose-td:align-middle prose-invert xl:max-w-[90%]">
              {selectedTech
                ? selectedTech != 'grav' && selectedTech != 'powerplant'
                  ? data
                      .filter((data) => data.id == selectedTech)
                      .map((data) => (
                        <div key={data.id} className="relative hidden xl:block">
                          <div className="absolute w-full h-40 lg:right-0 top-46 sm:top-44 md:top-52 lg:top-48 xl:-top-4 2xl:h-40 lg:w-[480px] 2xl:w-[512px] md:bg-gray-800/50 propulsion-popup">
                            <div className="md:w-full mx-auto h-full w-[80%] md:bg-transparent bg-gray-800/50">
                              <div className="flex flex-wrap items-center justify-center text-center">
                                <h5 className="w-full -mb-3">
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
                                  <p className="p-0 text-sm 2xl:text-sm">
                                    {data.technologie_beschreibung}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                  : null
                : null}
              <div className="relative w-full aspect-[1825/635] hidden sm:block mt-12">
                <Image
                  src={
                    'https://cms.ariscorp.de/assets/60ca623f-7a9b-4696-9839-97f9cde6e11d'
                  }
                  alt="test"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="relative">
                  <TechCarrack />
                </div>

                {selectedTech
                  ? selectedTech != 'grav' && selectedTech != 'powerplant'
                    ? data
                        .filter((data) => data.id == selectedTech)
                        .map((data) => (
                          <div
                            key={data.id}
                            className="relative block xl:hidden"
                          >
                            <div className="absolute w-full h-36 lg:h-44 lg:right-0 2xl:h-40 lg:w-[480px] 2xl:w-[512px] md:bg-gray-800/50 propulsion-popup">
                              <div className="md:w-full mx-auto h-full w-[80%] md:bg-transparent bg-gray-800/50">
                                <div className="flex flex-wrap items-center justify-center text-center">
                                  <h5 className="w-full mb-2 lg:-mb-3">
                                    {data.technologie_name}
                                  </h5>
                                  <div className="w-[47%]">
                                    <div className="relative sm:w-60 md:w-72 lg:w-52 2xl:w-56 sm:h-[4.6rem] 2xl:h-[5.5rem]">
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
                                    <p className="p-0 text-xs md:text-sm 2xl:text-base">
                                      {data.technologie_beschreibung}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                    : null
                  : null}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="relative hidden w-full mt-12 sm:block">
              <div className="absolute right-0">
                {selectedTech
                  ? selectedTech != 'grav' && selectedTech != 'powerplant'
                    ? data
                        .filter((data) => data.id == selectedTech)
                        .map((data) => (
                          <div
                            key={data.id}
                            className="relative hidden xl:block"
                          >
                            <div className="absolute w-full mr-0 2xl:mr-24 right-0 h-40 top-46 sm:top-44 md:top-52 lg:top-48 2xl:h-44 lg:w-[480px] 2xl:w-[512px] md:bg-gray-800/50 propulsion-popup">
                              <div className="md:w-full mx-auto h-full w-[90%] md:bg-transparent bg-gray-800/50">
                                <div className="flex flex-wrap items-center justify-center text-center">
                                  <h5 className="w-full mb-2">
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
                              </div>
                            </div>
                          </div>
                        ))
                    : null
                  : null}
              </div>
              <div className="relative w-full max-h-[512px] aspect-[428/980] mx-auto xl:mr-0 xl:ml-52">
                <Image
                  src={
                    'https://cms.ariscorp.de/assets/da73378c-1b9a-48c1-9bec-92c0ba814b08'
                  }
                  alt="test"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="relative">
                  <TechHuman />
                </div>
              </div>

              {selectedTech
                ? selectedTech != 'grav' && selectedTech != 'powerplant'
                  ? data
                      .filter((data) => data.id == selectedTech)
                      .map((data) => (
                        <div
                          key={data.id}
                          className="relative block w-full mt-5 mb-48 xl:hidden"
                        >
                          <div className="absolute w-full h-36 lg:h-44 lg:right-0 2xl:h-40 md:bg-gray-800/50 propulsion-popup">
                            <div className="md:w-full mx-auto h-full w-[80%] md:bg-transparent bg-gray-800/50">
                              <div className="flex flex-wrap items-center justify-center text-center">
                                <h5 className="w-full mb-2">
                                  {data.technologie_name}
                                </h5>
                                <div className="w-[47%]">
                                  <div className="relative sm:w-60 md:w-72 lg:w-52 2xl:w-56 sm:h-[4.6rem] 2xl:h-[5.5rem]">
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
                                  <p className="p-0 text-xs md:text-sm 2xl:text-base">
                                    {data.technologie_beschreibung}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                  : null
                : null}
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
