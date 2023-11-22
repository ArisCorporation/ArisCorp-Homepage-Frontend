import Image from 'next/image'
import { SquareLoader } from 'react-spinners'
import { Tab } from '@headlessui/react'
import { useQuery } from '@apollo/client'
import { GET_GAMEPLAYS } from 'graphql/queries'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export default function OurGameplays() {
  const { loading, error, data } = useQuery(GET_GAMEPLAYS)
  const [selectedIndex, setSelectedIndex] = useState(0)

  if (loading)
    return (
      <div id="gameplays" className="flex justify-center pt-10">
        <SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} />
      </div>
    )

  if (error) return <p>Error :(</p>

  function isOdd(n) {
    return Math.abs(n % 2) == 1
  }

  return (
    <>
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className={'flex justify-center flex-wrap mx-auto'}>
          {data.gameplays.map((data, index) => (
            <Tab key={data.id} className={'p-3 m-1 focus-visible:outline-none'}>
              <div
                className={
                  'relative mx-1 my-2 transition-all duration-300 ease-out border-solid cursor-pointer h-20 w-20 border-1 hover:scale-150 ' +
                  (selectedIndex == index ? 'scale-125' : '')
                }
              >
                <Image
                  src={
                    'https://cms.ariscorp.de/assets/' +
                    data.gameplay_logo.id +
                    '?format=webp'
                  }
                  fill
                  cover
                  placeholder="blur"
                  blurDataURL={
                    'https://cms.ariscorp.de/assets/' +
                    data.gameplay_logo.id +
                    '?format=webp&width=16&quality=1'
                  }
                  alt={data.gameplay_name + ' Logo'}
                />
              </div>
            </Tab>
          ))}
          <hr />
        </Tab.List>
        <Tab.Panels className={'p-4'}>
          {data.gameplays.map((data) => (
            <Tab.Panel key={data.id}>
              <div className="mx-auto text-center max-w-7xl">
                <div className="max-w-[1100px] mx-auto">
                  <h1 className="pb-4 uppercase text-primary">
                    {data.gameplay_name}
                  </h1>
                  <div className="flex space-x-5">
                    <div className="w-[542px] h-[228px] relative">
                      <Image
                        src={
                          'https://cms.ariscorp.de/assets/' +
                          data.gameplay_bild_links.id
                        }
                        fill
                        cover
                        placeholder="blur"
                        blurDataURL={
                          'https://cms.ariscorp.de/assets/' +
                          data.gameplay_bild_links.id +
                          '?width=16&quality=1'
                        }
                        alt={data.gameplay_name + ' linkes Bild'}
                      />
                    </div>
                    <div className="w-[542px] h-[228px] relative">
                      <Image
                        src={
                          'https://cms.ariscorp.de/assets/' +
                          data.gameplay_bild_rechts.id
                        }
                        fill
                        cover
                        placeholder="blur"
                        blurDataURL={
                          'https://cms.ariscorp.de/assets/' +
                          data.gameplay_bild_rechts.id +
                          '?width=16&quality=1'
                        }
                        alt={data.gameplay_name + ' rechtes Bild'}
                      />
                    </div>
                  </div>

                  <div className="max-w-5xl mx-auto mt-4 text-center">
                    <ReactMarkdown
                      rehypePlugins={[rehypeRaw]}
                      className="mx-auto prose prose-td:align-middle prose-invert xl:max-w-full"
                    >
                      {data.text}
                    </ReactMarkdown>
                  </div>
                </div>
                <hr />
                <div className="flex justify-between px-6 space-x-24">
                  <div className="flex space-x-8">
                    <div className="relative w-[200px] aspect-[270/320]">
                      <Image
                        src={
                          'https://cms.ariscorp.de/assets/' +
                          (data.head_of_department
                            ? data.head_of_department?.member_potrait?.id
                            : '48d40c97-bd88-486d-973a-79170953fac9') +
                          '?format=webp'
                        }
                        alt={data.head_of_department?.slug + 'Potrait'}
                        fill
                        contain
                        placeholder="blur"
                        blurDataURL={
                          'https://cms.ariscorp.de/assets/' +
                          (data.head_of_department
                            ? data.head_of_department?.member_potrait?.id
                            : '48d40c97-bd88-486d-973a-79170953fac9') +
                          '?format=webp&width=16&quality=1'
                        }
                      />
                    </div>
                    <h2 className="justify-center text-3xl text-left">
                      <span className="block">Abteilungsleiter:</span>
                      <span className="text-2xl text-primary">
                        {data.head_of_department
                          ? `${
                              data.head_of_department?.title
                                ? data.head_of_department?.title + ' '
                                : ''
                            } ${data.head_of_department.firstname} ${
                              data.head_of_department.lastname
                            }`
                          : 'N/A'}
                      </span>
                    </h2>
                  </div>
                  <div className="w-full space-y-12">
                    <h2 className="text-3xl">Abteilungsmitarbeiter:</h2>
                    <ul className="flex flex-wrap justify-between">
                      {data.members.map((obj, i) => (
                        <>
                          <div className={'text-xl basis-1/2'}>
                            <li>
                              {obj?.title ? obj.title + ' ' : ''}
                              {obj?.firstname} {obj?.lastname}
                            </li>
                          </div>
                        </>
                      ))}
                    </ul>
                  </div>
                </div>
                <hr />
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </>
  )
}
