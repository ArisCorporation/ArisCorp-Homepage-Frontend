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
import ShipCard from 'components/ShipExkurs/ShipCard'

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
    <div className="items-center pt-8 mx-auto">
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
          {loading ? (
            <div className="flex items-center justify-center pt-32 mx-auto my-auto text-center">
              <SquareLoader
                color="#00ffe8"
                speedMultiplier="0.8"
                loading={loading}
              />
            </div>
          ) : (
            <div className='grid grid-cols-1 px-2 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 5xl:grid-cols-6 gap-x-6 gap-y-4'>
              {data?.ships.map((object, index) => (
                <ShipCard key={object.id} data={object} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

Ships.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
