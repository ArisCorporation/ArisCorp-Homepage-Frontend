import Layout from './layout'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { GET_SHIPEXKURS_SHIPS_INDEX, GET_SHIPEXKURS_SHIPUTILS } from 'graphql/queries'
import { SquareLoader } from 'react-spinners'
import { useQuery } from '@apollo/client'
import Image from 'next/image'
import { BasicPanel } from 'components/panels'
import client from 'apollo/clients'
import Link from 'next/link'
import Head from 'next/head'

export async function getServerSideProps () {
  const { data } = await client.query({ query: GET_SHIPEXKURS_SHIPUTILS })

  const manufacturers = data.firmen
  let utils = { classes: [], focuses: [], sizes: [], manufacturers: [] }

  data.ships.forEach((object, index) => {
    var classification = object.classification
    var focus = object.focus
    var size = object.size

    var aclassification = utils.classes.find((i) => i === classification)
    var afocus = utils.focuses.find((i) => i === classification)
    var asize = utils.sizes.find((i) => i === size)

    if (!aclassification && classification) {
      utils.classes.push(classification)
    }
    if (!afocus && focus) {
      utils.focuses.push(focus)
    }
    if (!asize && size) {
      utils.sizes.push(size)
    }
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      manufacturers,
      utils
    },
  }
}

export default function Ships ({ manufacturers, utils }) {
  const { replace, query, isReady, push } = useRouter()
  const isMounted = useRef(false)
  const [search, setSearch] = useState()
  const [shipClass, setShipClass] = useState([])
  const [shipFocus, setShipFocus] = useState([])
  const [shipSize, setShipSize] = useState([])
  const [manufacturer, setManufacturer] = useState([])
  const squery = query.q
  const classquery = query.class
  const focusquery = query.focus
  const sizequery = query.size
  const manuquery = query.manuf
  const { loading, error, data } = useQuery(GET_SHIPEXKURS_SHIPS_INDEX, {
    variables: { squery, classquery, focusquery, sizequery, manuquery },
  })

  function handleClick (name) {
    push('/ShipExkurs/' + name)
  }

  useEffect(() => {
    if (isMounted.current) {
      let cls
      let focus
      let size
      let manufactr

      if (!shipClass) {
        cls = utils.classes
      } else {
        cls = shipClass
      }

      if (!shipFocus) {
        focus = utils.focus
      } else {
        focus = shipFocus
      }

      if (!size) {
        size = utils.size
      } else {
        size = shipSize
      }

      if (!manufacturer) {
        manufactr = utils.manufacturers
      } else {
        manufactr = manufacturer
      }

      let timer = setTimeout(() => {
        replace(
          {
            query: {
              q: search,
              class: cls,
              focus: focus,
              size: size,
              manuf: manufactr,
            },
          },
          undefined,
          {
            scroll: false,
          }
        )
      }, 500)

      return () => clearTimeout(timer)
    } else {
      isMounted.current = true
      setSearch(squery)
      setShipClass(classquery)
      setShipFocus(focusquery)
      setShipSize(sizequery)
      setManufacturer(manuquery)
    }
  }, [search, shipClass, shipFocus, shipSize, manufacturer])

  useEffect(() => {
    if (isReady) setSearch(squery)
  }, [isReady])

  const siteTitle = "ShipExurs - Astro Research and Industrial Service Corporation"

  return (
    <div className="items-center max-w-6xl pt-8 mx-auto">
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
      <div>
        <div>
          <div className="flex justify-center">
            <div className="mb-3 px-80 xl:w-full">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Avenger, Carrack, Hercules"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-bg-secondary/30 bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none "
              />
            </div>
          </div>
          <hr />
          <div className="flex flex-wrap px-2">
            {loading ? (
              <div className="flex items-center justify-center pt-32 mx-auto my-auto text-center">
                <SquareLoader
                  color="#00ffe8"
                  speedMultiplier="0.8"
                  loading={loading}
                />
              </div>
            ) : (
              data?.ships.map((object, index) => (
                <div key={object.id} className="w-1/3 px-2 pb-8">
                  <BasicPanel>
                    <Link href={'/ShipExkurs/' + object.slug}>
                      <a className='group'>
                        <div className="overflow-hidden rounded-2xl">
                          <div className="relative w-full aspect-[18/10]">
                            <Image
                              src={
                                'https://cms.ariscorp.de/assets/' + object.storeImage?.id
                              }
                              alt={'Bild von ' + object.name}
                              layout="fill"
                              className="object-cover"
                              placeholder="blur"
                              blurDataURL={
                                'https://cms.ariscorp.de/assets/' +
                                object.storeImage?.id +
                                '?width=16&quality=1'
                              }
                            />
                            <div className="absolute bottom-0 w-full pl-4 bg-opacity-80 bg-bg-secondary">
                              <p className="pb-0 text-lg leading-none transition-colors duration-200 text-secondary/90 group-hover:text-secondary group-hover:duration-300">
                                {object.name}
                              </p>
                              <Link href={"/VerseExkurs/firmen/" + object.manufacturer.firmen_name}>
                                <a className='decoration-transparent'>
                                  <p className="mb-1 text-xs leading-none transition-colors duration-200 text-white/50 hover:text-white/80 hover:cursor-pointer hover:duration-300">
                                    {object.manufacturer.firmen_name}
                                  </p>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </BasicPanel>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

Ships.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
