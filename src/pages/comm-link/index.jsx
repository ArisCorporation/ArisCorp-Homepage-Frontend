import Image from 'next/image'
import { useEffect, useState, useCallback, useRef } from 'react'
import { SquareLoader } from 'react-spinners'
import Layout from '../layout'
import { OneThird, TwoThirds, ThreeThirds } from 'components/CommLinkCards'
import { GET_COMM_LINKS } from 'graphql/queries'
import { useQuery } from '@apollo/client'
import { Listbox, Transition } from '@headlessui/react'
import { AiOutlineCheck } from 'react-icons/ai'
import { HiSelector } from 'react-icons/hi'
import { useRouter } from 'next/router'
import Head from 'next/head'

const channels = [
  { id: 0, name: 'Alle', value: ' ', unavailable: false },
  {
    id: 1,
    name: 'ArisCorp PatchWatch',
    value: 'ArisCorp PatchWatch',
    unavailable: false,
  },
  {
    id: 2,
    name: 'Ein Blick auf die Entwicklung',
    value: 'Ein Blick auf die Entwicklung',
    unavailable: false,
  },
  {
    id: 3,
    name: 'Gameplay Guides',
    value: 'Gameplay Guides',
    unavailable: false,
  },
  {
    id: 4,
    name: 'Monthly Report',
    value: 'Monthly Report',
    unavailable: false,
  },
  {
    id: 5,
    name: 'Special Report',
    value: 'Special Report',
    unavailable: false,
  },
]

export default function CommLinksPage () {
  const { query, replace, isReady } = useRouter()
  const isMounted = useRef(false)
  const [children, setChildren] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [queryChannel, setQueryChannel] = useState(' ')
  const [search, setSearch] = useState()
  const squery = query.q
  const channelquery = query.channel
  const { loading, error, data } = useQuery(GET_COMM_LINKS, {
    variables: { queryChannel, squery },
  })

  useEffect(() => {
    setIsLoading(true)

    if (channelquery != 'Alle' && channelquery != null && channelquery != '') {
      setQueryChannel(channelquery)
    } else {
      setQueryChannel(' ')
    }

    const layout = []

    for (let i = 0; i < data?.comm_links.length; i += 10) {
      layout.push(
        <div key={i} className="flex flex-wrap justify-center">
          <ThreeThirds
            typeicon="type-post"
            typename="post"
            title={data?.comm_links[i].comm_link_titel}
            channel={data?.comm_links[i].comm_link_channel?.channel}
            posted={data?.comm_links[i].date_created}
            description={data?.comm_links[i].comm_link_channel?.beschreibung}
            image={data?.comm_links[i].comm_link_banner.id}
            id={data?.comm_links[i].id}
          />
        </div>
      )

      // Break out of the loop if we've
      // already reached the end of data
      if (i + 1 >= data?.comm_links.length) {
        break
      }

      layout.push(
        <div key={i + 1} className="flex flex-wrap justify-center">
          <OneThird
            typeicon="type-post"
            typename="post"
            image={data?.comm_links[i + 1].comm_link_banner.id}
            title={data?.comm_links[i + 1].comm_link_titel}
            channel={data?.comm_links[i + 1].comm_link_channel.channel}
            posted={data?.comm_links[i + 1].date_created}
            description={
              data?.comm_links[i + 1].comm_link_channel?.beschreibung
            }
            id={data?.comm_links[i + 1].id}
          />
          {/* The boolean expression helps to avoid creating empty cells if the end of data is reached mid-row */}
          {data?.comm_links[i + 2] && (
            <TwoThirds
              typeicon="type-post"
              typename="post"
              image={data?.comm_links[i + 2].comm_link_banner.id}
              title={data?.comm_links[i + 2].comm_link_titel}
              channel={data?.comm_links[i + 2].comm_link_channel.channel}
              posted={data?.comm_links[i + 2].date_created}
              description={
                data?.comm_links[i + 2].comm_link_channel?.beschreibung
              }
              id={data?.comm_links[i + 2].id}
            />
          )}
        </div>
      )

      if (i + 3 >= data?.comm_links.length) {
        break
      }

      layout.push(
        <div key={i + 3} className="flex flex-wrap justify-center">
          <OneThird
            typeicon="type-post"
            typename="post"
            image={data?.comm_links[i + 3].comm_link_banner.id}
            title={data?.comm_links[i + 3].comm_link_titel}
            channel={data?.comm_links[i + 3].comm_link_channel.channel}
            posted={data?.comm_links[i + 3].date_created}
            description={
              data?.comm_links[i + 3].comm_link_channel?.beschreibung
            }
            id={data?.comm_links[i + 3].id}
          />
          {data?.comm_links[i + 4] && (
            <OneThird
              typeicon="type-post"
              typename="post"
              image={data?.comm_links[i + 4].comm_link_banner.id}
              title={data?.comm_links[i + 4].comm_link_titel}
              channel={data?.comm_links[i + 4].comm_link_channel.channel}
              posted={data?.comm_links[i + 4].date_created}
              description={
                data?.comm_links[i + 4].comm_link_channel?.beschreibung
              }
              id={data?.comm_links[i + 4].id}
            />
          )}
          {data?.comm_links[i + 5] && (
            <OneThird
              typeicon="type-post"
              typename="post"
              image={data?.comm_links[i + 5].comm_link_banner.id}
              title={data?.comm_links[i + 5].comm_link_titel}
              channel={data?.comm_links[i + 5].comm_link_channel.channel}
              posted={data?.comm_links[i + 5].date_created}
              description={
                data?.comm_links[i + 5].comm_link_channel?.beschreibung
              }
              id={data?.comm_links[i + 5].id}
            />
          )}
        </div>
      )

      if (i + 6 >= data?.comm_links.length) {
        break
      }

      layout.push(
        <div key={i + 6} className="flex flex-wrap justify-center">
          <TwoThirds
            typeicon="type-post"
            typename="post"
            image={data?.comm_links[i + 6].comm_link_banner.id}
            title={data?.comm_links[i + 6].comm_link_titel}
            channel={data?.comm_links[i + 6].comm_link_channel.channel}
            posted={data?.comm_links[i + 6].date_created}
            description={
              data?.comm_links[i + 6].comm_link_channel?.beschreibung
            }
            id={data?.comm_links[i + 6].id}
          />
          {data?.comm_links[i + 7] && (
            <OneThird
              typeicon="type-post"
              typename="post"
              image={data?.comm_links[i + 7].comm_link_banner.id}
              title={data?.comm_links[i + 7].comm_link_titel}
              channel={data?.comm_links[i + 7].comm_link_channel.channel}
              posted={data?.comm_links[i + 7].date_created}
              description={
                data?.comm_links[i + 7].comm_link_channel?.beschreibung
              }
              id={data?.comm_links[i + 7].id}
            />
          )}
        </div>
      )

      if (i + 8 >= data?.comm_links.length) {
        break
      }

      layout.push(
        <div key={i + 8} className="flex flex-wrap justify-center">
          <OneThird
            typeicon="type-post"
            typename="post"
            image={data?.comm_links[i + 8].comm_link_banner.id}
            title={data?.comm_links[i + 8].comm_link_titel}
            channel={data?.comm_links[i + 8].comm_link_channel.channel}
            posted={data?.comm_links[i + 8].date_created}
            description={
              data?.comm_links[i + 8].comm_link_channel?.beschreibung
            }
            id={data?.comm_links[i + 8].id}
          />
          {data?.comm_links[i + 9] && (
            <TwoThirds
              typeicon="type-post"
              typename="post"
              image={data?.comm_links[i + 9].comm_link_banner.id}
              title={data?.comm_links[i + 9].comm_link_titel}
              channel={data?.comm_links[i + 9].comm_link_channel.channel}
              posted={data?.comm_links[i + 9].date_created}
              description={
                data?.comm_links[i + 9].comm_link_channel?.beschreibung
              }
              id={data?.comm_links[i + 9].id}
            />
          )}
        </div>
      )
    }

    setIsLoading(false)

    setChildren(layout)
  }, [data?.comm_links, channelquery])

  useEffect(() => {
    if (isMounted.current) {
      let timer = setTimeout(() => {
        if (channelquery == null || channelquery == '') {
          replace({ query: { q: search, channel: 'Alle' } }, undefined, {
            scroll: false,
          })
        } else {
          replace({ query: { q: search, channel: channelquery } }, undefined, {
            scroll: false,
          })
        }
      }, 500)

      return () => clearTimeout(timer)
    } else {
      isMounted.current = true
      setSearch(squery)
    }
  }, [search])

  useEffect(() => {
    if (isReady) setSearch(squery)
  }, [isReady])

  return (
    <div>
      <Head>
        <title>
          Comm-Link - Astro Research and Industrial Service Corporation
        </title>
      </Head>
      <div className="flex items-center justify-center pt-32">
        <Image
          src="https://cms.ariscorp.de/assets/2f7590ef-c84a-495c-8acc-93653f0cddd3"
          width="1118"
          height="351"
          alt="ArisCorp CommLinks-Banner"
          placeholder="blur"
          blurDataURL="https://cms.ariscorp.de/assets/2f7590ef-c84a-495c-8acc-93653f0cddd3?width=16&quality=1"
        />
      </div>
      <hr />

      <div>
        <div className="w-full mb-4 xs:mb-0 xs:w-1/4">
          <p>Channel:</p>
          <Listbox
            value={channelquery}
            onChange={(event) =>
              replace(
                { query: { q: query.q, channel: event.name } },
                undefined,
                {
                  scroll: false,
                }
              )
            }
          >
            <div className="relative z-10 mt-1">
              <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left border-2 rounded-lg shadow-md cursor-pointer border-bg-secondary bg-bg-primary focus-visible:outline-none sm:text-sm">
                <span className="block truncate">
                  {channelquery != '' && channelquery != null
                    ? channelquery
                    : 'Alle'}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <HiSelector
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-full py-1 pl-0 mt-1 overflow-auto text-base rounded-md shadow-lg bg-bg-primary max-h-60 ring-1 ring-white ring-opacity-5 focus:outline-none sm:text-sm">
                  {channels.map((channel, channelIdx) => (
                    <Listbox.Option
                      key={channelIdx}
                      className={({ active }) =>
                        `cursor-pointer select-none relative py-2 pl-4 pr-4 ${active
                          ? 'text-secondary bg-bg-secondary'
                          : 'opacity-50'
                        }`
                      }
                      value={channel}
                    >
                      {({ selectedChannel }) => (
                        <>
                          <span
                            className={`block truncate ${selectedChannel ? 'font-medium' : 'font-normal'
                              }`}
                          >
                            {channel.name}
                          </span>
                          {selectedChannel ? (
                            <span className="absolute inset-y-0 left-0 flex items-center text-secondary">
                              <AiOutlineCheck
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Suche..."
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-bg-secondary/30 bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none "
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center pt-12 mx-auto">
        {loading || isLoading == true ? (
          <SquareLoader
            color="#00ffe8"
            speedMultiplier="0.8"
            loading={loading}
          />
        ) : (
          <div className="mx-auto">{children}</div>
        )}
      </div>
    </div>
  )
}

CommLinksPage.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}