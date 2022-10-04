import Layout from 'pages/VerseExkurs/layout'
import Image from 'next/image'
import { useEffect, useState, Fragment } from 'react'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { Tab, Listbox } from '@headlessui/react'
import client from 'apollo/clients'
import { GET_VERSEEXKURS_UEE } from 'graphql/queries'
import { AiOutlineCheck } from 'react-icons/ai'
import { BsArrowsExpand } from 'react-icons/bs'
import { BasicPanel } from 'components/panels'
import { FaChevronDown } from 'react-icons/fa'

export async function getServerSideProps() {
  const { data } = await client.query({ query: GET_VERSEEXKURS_UEE })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: await data.united_empire_of_earth,
    },
  }
}

export default function UEEPage(data) {
  const { replace, query } = useRouter()
  const [activeTab, setActiveTab] = useState()
  const [activeFeiertag, setActiveFeiertag] = useState(0)
  const urlquery = query.tab
  const urlquery2 = query.feiertag

  const Data = data.data

  useEffect(() => {
    if (urlquery != null && urlquery != '') {
      setActiveTab(urlquery)
    } else {
      setActiveTab(0)
    }

    if (urlquery2 != null && urlquery2 != '') {
      setActiveFeiertag(urlquery2)
    } else {
      setActiveFeiertag(0)
    }
  }, [urlquery, urlquery2])

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto print:pt-5">
      <div>
        <div className="items-center text-center">
          <h1 className="uppercase">
            ALLES ÜBER DAS <span className="text-primary">{Data.title}</span>
          </h1>
          <hr />
          <div className="w-full">
            <Image
              src={'https://cms.ariscorp.de/assets/' + Data.image.id}
              alt={'Banner'}
              width={Data.image.width}
              height={Data.image.width}
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                Data.image.id +
                '?width=16&quality=1'
              }
            />
          </div>
        </div>
        <div className={'max-w-[1600px] mx-auto'}>
          <h2 className="mt-3">VerseExkurs - UEE: Übersicht</h2>
          <hr className="max-w-[80px]" />
        </div>
        <div className="font-nasa article-font">
          <div>
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              className="mx-auto prose prose-td:align-middle prose-invert xl:max-w-full"
            >
              {Data.text}
            </ReactMarkdown>
          </div>
          <hr />
          <Tab.Group
            selectedIndex={activeTab}
            onChange={(event) =>
              replace({ query: { tab: event } }, undefined, { shallow: true }) +
              setActiveTab(event)
            }
          >
            <Tab.List className="">
              {Data.sections.map((data) => (
                <Tab
                  key={data.title}
                  className={({ selected }) =>
                    (selected ? 'text-primary' : 'opacity-50') +
                    ' p-3 m-1 transition-all duration-300 ease-in-out'
                  }
                >
                  <h1 className="text-base font-normal font-base md:text-lg lg:text-xl xl:text-2xl text-inherit">
                    {data.title}
                  </h1>
                </Tab>
              ))}
              <hr />
            </Tab.List>
            <Tab.Panels className={'px-4 xl:px-0'}>
              {Data.sections.map((data) => (
                <Tab.Panel key={data.title}>
                  <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    className="mx-auto prose prose-td:align-middle prose-invert xl:max-w-[90%]"
                  >
                    {data.content}
                  </ReactMarkdown>
                  {data.title == 'Feiertage & Events' ? (
                    <Tab.Group
                      selectedIndex={activeFeiertag}
                      onChange={(event2) =>
                        replace(
                          { query: { tab: activeTab, feiertag: event2 } },
                          undefined,
                          {
                            shallow: true,
                          }
                        ) + setActiveFeiertag(event2)
                      }
                      as={Fragment}
                    >
                      <div className='flex space-x-6'>
                        <Tab.List>
                          <ul className="py-2 pl-0 mr-12 rounded-md w-96">
                            <BasicPanel>
                              {Data.feiertage.map((data) => (
                                <Tab key={data.name} as={Fragment}>
                                  {({ selected }) => (
                                    <li
                                      className={
                                        // (selected ? 'text-secondary ' : null) +
                                        // (active
                                        //   ? ' bg-bg-primary cursor-pointer '
                                        //   : null) +

                                        (selected
                                          ? 'text-secondary '
                                          : 'text-white/70 hover:text-white ') +
                                        'list-none hover:bg-bg-primary hover:cursor-pointer flex space-x-4 my-2 rounded-lg ml-0 p-2'
                                      }
                                    >
                                      {data.name}
                                      <div className="ml-auto text-sm">
                                        {data.datum}
                                      </div>
                                    </li>
                                  )}
                                </Tab>
                              ))}
                            </BasicPanel>
                          </ul>
                        </Tab.List>
                        <Tab.Panels className={'px-4 xl:px-0'}>
                          {Data.feiertage.map((data) => (
                            <Tab.Panel key={data.name}>
                              <h3 className="text-secondary">
                                {data.name} - {data.datum}
                              </h3>
                              <ReactMarkdown
                                rehypePlugins={[rehypeRaw]}
                                className="mx-auto prose prose-td:align-middle prose-invert xl:max-w-[90%]"
                              >
                                {data.beschreibung}
                              </ReactMarkdown>
                            </Tab.Panel>
                          ))}
                        </Tab.Panels>
                      </div>
                    </Tab.Group>
                  ) : (
                    ''
                  )}
                </Tab.Panel>
              ))}
            </Tab.Panels>
            <hr />
          </Tab.Group>
        </div>
      </div>
    </div>
  )
}

UEEPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
