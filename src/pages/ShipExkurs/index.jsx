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
import { Combobox } from '@headlessui/react'
import { util } from 'prettier'

export async function getServerSideProps () {
  const { data } = await client.query({ query: GET_SHIPEXKURS_SHIPUTILS })

  const manufacturers = data.firmen
  let utils = {
    prodStatus: [],
    careers: [],
    roles: [],
    sizes: [],
    manufacturers: []
  }

  data.ships.forEach((i) => {
    // if (i.role) {
    //   i.role.forEach((obj) => {
    //     if (!utils.roles.includes(obj)) {
    //       utils.roles.push(obj)
    //     }
    //   })
    // }

    if (i.career) {
      if (!utils.careers.includes(i.career.toLowerCase())) {
        utils.careers.push(i.career.toLowerCase())
      }
    }

    if (i.productionStatus) {
      if (!utils.prodStatus.includes(i.productionStatus)) {
        utils.prodStatus.push(i.productionStatus)
      }
    }

    if (i.size) {
      if (!utils.sizes.includes(i.size)) {
        utils.sizes.push(i.size)
      }
    }
  })

  manufacturers.forEach((object, index) => {
    var name = object.firmen_name

    var aname = utils.manufacturers.find((i) => i === name)

    if (!aname && name) {
      utils.manufacturers.push(name)
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
  const [shipProdStatus, setShipProdStatus] = useState([])
  const [manufacturer, setManufacturer] = useState([])
  const [shipSale, setShipSale] = useState(null)
  const [vehicleType, setVehicleType] = useState([])
  // const [data, setData] = useState([])
  const [manufacturerMenu, setManufacturerMenu] = useState(false)
  const [classesMenu, setClassesMenu] = useState(false)
  const squery = query.q
  const classquery = query.cls
  const focusquery = query.focus
  const sizequery = query.size
  const manuquery = query.manufacturer
  const prodquery = query.prodStatus
  const salequery = query.sale
  const typequery = query.type
  let { loading, error, data } = useQuery(GET_SHIPEXKURS_SHIPS_INDEX, {
    variables: {
      squery,
      prodStatus: prodquery ? prodquery : utils.prodStatus,
      manufacturers: manuquery ? manuquery : utils.manufacturers,
      sizes: sizequery ? sizequery : utils.sizes,
      careers: classquery ? classquery : utils.careers,
    },
  })

  data = data?.ships

  console.log(utils.careers)
  console.warn(error)

  const classMenuItems = [
    {
      name: "Transport",
      value: "transport",
      icon: "da3caa51-c087-479b-8bd8-4ac6f4328450",
    },
    {
      name: "Multi",
      value: "multi",
      icon: "3a4dc057-a29e-49df-a846-f8dfa4fd770c",
    },
    {
      name: "Industriel",
      value: "industrial",
      icon: "4b21e214-0e73-4d7c-89de-86316c4bf5de",
    },
    {
      name: "Kampf",
      value: "combat",
      icon: "57c4e53b-579f-485c-b3b6-405ff04f11b3",
    },
    {
      name: "Wettkampf",
      value: "competition",
      icon: "fe647dce-f1bf-4d5c-9d4e-c0d1b2307658",
    },
    {
      name: "Unterstützung",
      value: "support",
      icon: "b2eef6f0-36f4-4379-9548-b11e7cedfa4c",
    },
    {
      name: "Erkundung",
      value: "exploration",
      icon: "6ff37caa-e47e-4c69-a81c-26b0b3d0a7a8",
    },
  ]

  function handleClick (name) {
    push('/ShipExkurs/' + name)
  }

  useEffect(() => {
    if (isMounted.current) {
      let prodStatus
      let sale
      let manufactr
      let size
      let cls
      let focus
      let type

      if (shipProdStatus) {
        prodStatus = shipProdStatus
      }

      if (shipSale) {
        sale = shipSale
      }

      if (manufacturer) {
        manufactr = manufacturer
      }

      if (shipSize) {
        size = shipSize
      }

      if (shipClass) {
        cls = shipClass
      }

      if (shipFocus) {
        focus = shipFocus
      }

      if (vehicleType) {
        type = vehicleType
      }

      let timer = setTimeout(() => {
        let queries = {}
        if (search) {
          queries = {
            ...queries,
            q: search
          }
        }

        if (prodStatus) {
          queries = {
            ...queries,
            prodStatus: prodStatus
          }
        }

        if (sale) {
          queries = {
            ...queries,
            sale: sale
          }
        }

        if (manufactr) {
          queries = {
            ...queries,
            manufacturer: manufactr
          }
        }

        if (size) {
          queries = {
            ...queries,
            size: size
          }
        }

        if (cls) {
          queries = {
            ...queries,
            cls: cls
          }
        }

        if (focus) {
          queries = {
            ...queries,
            focus: focus
          }
        }

        if (type) {
          queries = {
            ...queries,
            type: type
          }
        }

        replace(
          {
            query: queries,
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
      setShipProdStatus(prodquery)
      setShipSale(salequery)
      setManufacturer(manuquery)
      setShipSize(sizequery)
      setShipClass(classquery)
      setShipFocus(focusquery)
      setVehicleType(typequery)
    }
  }, [search, shipClass, shipFocus, shipSize, manufacturer, shipProdStatus, shipSale, vehicleType])

  useEffect(() => {
    if (isReady) setSearch(squery)
  }, [isReady])

  // useEffect(() => {
  //   if (Data) {
  //     if (salequery || typequery) {
  //       let array = []
  //       if (salequery) {
  //         if (salequery.includes(true)) {
  //           const ships = Data.ships.filter((e) => e.onSale == true)
  //           array = [
  //             ...ships
  //           ]
  //         } else if (salequery.includes(false)) {
  //           const ships = Data.ships.filter((e) => e.onSale == false)
  //           array = [
  //             ...array,
  //             ...ships
  //           ]
  //         }
  //       }

  //       if (typequery) {
  //         if (typequery.includes("ground")) {
  //           let vehicles = []
  //           if (array[0]) {
  //             vehicles = array.filter((e) => e.size === "vehicle" || e.groundVehicle == true || e.focus === "ground")
  //           } else {
  //             vehicles = Data.ships.filter((e) => e.size === "vehicle" || e.groundVehicle == true || e.focus === "ground")
  //           }

  //           array = vehicles
  //         } else if (typequery.includes("ship")) {
  //           let vehicles = []
  //           if (array[0]) {
  //             vehicles = array.filter((e) => e.size !== "vehicle" && e.groundVehicle != true && e.focus !== "ground")
  //           } else {
  //             vehicles = Data.ships.filter((e) => e.size !== "vehicle" && e.groundVehicle != true && e.focus !== "ground")
  //           }

  //           array = vehicles
  //         }
  //       }

  //       setData(array)
  //     } else {
  //       let array = [
  //         ...Data.ships
  //       ]
  //       setData(array)
  //     }
  //   }
  // }, [Data, salequery, typequery])

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
          <div className='flex'>
            <div className="flex mx-auto">
              <div
                className="w-24 hover:cursor-pointer group"
                onClick={() => {
                  setShipClass(),
                    setShipFocus(),
                    setShipSize(),
                    setShipProdStatus(),
                    setManufacturer(),
                    setShipSale(),
                    setVehicleType()
                }}
              >
                <div className="relative w-24 mx-auto aspect-square">
                  <Image
                    src={
                      'https://cms.ariscorp.de/assets/' +
                      '1638095c-c0f3-49bf-b8c9-6e1a52a44333'
                    }
                    alt="Alle-Icon"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={
                      'https://cms.ariscorp.de/assets/1638095c-c0f3-49bf-b8c9-6e1a52a44333?width=16&quality=1'
                    }
                  />
                </div>
                <p
                  className={
                    'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors'}
                >
                  Alle Anzeigen
                </p>
              </div>
              <div className="flex ml-10 space-x-2">
                <div
                  className="w-24 hover:cursor-pointer group"
                  onClick={() => setVehicleType(['ship'])}
                >
                  <div className="relative w-24 mx-auto aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        '0cb20cc7-593e-480f-80ce-fc43296bda39'
                      }
                      alt="Ship-Icon"
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/0cb20cc7-593e-480f-80ce-fc43296bda39?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                      (typequery?.includes("ship")
                        ? ' text-secondary'
                        : ' group-hover:text-white')
                    }
                  >
                    Schiffe
                  </p>
                </div>
                <div
                  className="w-24 hover:cursor-pointer group"
                  onClick={() => setVehicleType(['ground'])}
                >
                  <div className="relative w-24 mx-auto aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        'fc3c9400-e9b7-426b-abf2-80e0db326c3a'
                      }
                      alt="Ground-Icon"
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/fc3c9400-e9b7-426b-abf2-80e0db326c3a?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                      (typequery?.includes("ground")
                        ? ' text-secondary'
                        : ' group-hover:text-white')
                    }
                  >
                    Fahrzeuge
                  </p>
                </div>
              </div>
              <div className="flex ml-6 space-x-2">
                <div
                  className="w-24 hover:cursor-pointer group"
                  onClick={() => setShipSize([1])}
                >
                  <div className="relative w-24 mx-auto aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        'fcb5c0b1-de39-4d84-acde-5368b725ed70'
                      }
                      alt="XS-Icon"
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/fcb5c0b1-de39-4d84-acde-5368b725ed70?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                      (sizequery == ["snub"]
                        ? ' text-secondary'
                        : ' group-hover:text-white')
                    }
                  >
                    XS - Snub
                  </p>
                </div>
                <div
                  className="w-24 hover:cursor-pointer group"
                  onClick={() => setShipSize([2])}
                >
                  <div className="relative w-24 mx-auto aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        'ed637355-d7b9-4ac3-bd07-ee039028215c'
                      }
                      alt="S-Icon"
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/ed637355-d7b9-4ac3-bd07-ee039028215c?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                      (sizequery == ["small"]
                        ? ' text-secondary'
                        : ' group-hover:text-white')
                    }
                  >
                    S - Small
                  </p>
                </div>
                <div
                  className="w-24 hover:cursor-pointer group"
                  onClick={() => setShipSize([3])}
                >
                  <div className="relative w-24 mx-auto aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        'b40ef483-f55f-4a74-8bac-6495f3c5f55d'
                      }
                      alt="M-Icon"
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/b40ef483-f55f-4a74-8bac-6495f3c5f55d?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                      (sizequery == ["medium"]
                        ? ' text-secondary'
                        : ' group-hover:text-white')
                    }
                  >
                    M - Medium
                  </p>
                </div>
                <div
                  className="w-24 hover:cursor-pointer group"
                  onClick={() => setShipSize([4])}
                >
                  <div className="relative w-24 mx-auto aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        'e8f72a80-8ce0-4ad9-85da-ca961a8d3367'
                      }
                      alt="L-Icon"
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/e8f72a80-8ce0-4ad9-85da-ca961a8d3367?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                      (sizequery == ["large"]
                        ? ' text-secondary'
                        : ' group-hover:text-white')
                    }
                  >
                    L - Large
                  </p>
                </div>
                <div
                  className="w-24 hover:cursor-pointer group"
                  onClick={() => setShipSize([5])}
                >
                  <div className="relative w-24 mx-auto aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        'a9cf9685-e972-42ad-91c5-762002975eb0'
                      }
                      alt="C-Icon"
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/a9cf9685-e972-42ad-91c5-762002975eb0?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                      (sizequery == ["capital"]
                        ? ' text-secondary'
                        : ' group-hover:text-white')
                    }
                  >
                    C - Capital
                  </p>
                </div>
              </div>
              <div onClick={() => setClassesMenu(!classesMenu)} className="w-24 ml-6 hover:cursor-pointer">
                <div className="relative w-24 mx-auto aspect-square">
                  <Image
                    src={
                      'https://cms.ariscorp.de/assets/' +
                      'd20622cf-dff9-4188-81b1-4029b8862ece'
                    }
                    alt="Alle-Icon"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={
                      'https://cms.ariscorp.de/assets/d20622cf-dff9-4188-81b1-4029b8862ece?width=16&quality=1'
                    }
                  />
                </div>
                <p className={"p-0 mx-auto text-xs text-center transition-colors duration-150 ease-out group-hover:duration-200" +
                  (classquery
                    ? ' text-secondary'
                    : ' group-hover:text-white')
                }>
                  Klassifizierungen
                </p>
              </div>
              <div onClick={() => setManufacturerMenu(!manufacturerMenu)} className="w-24 ml-10 hover:cursor-pointer">
                <div className="relative w-24 mx-auto aspect-square">
                  <Image
                    src={
                      'https://cms.ariscorp.de/assets/' +
                      '314cc998-245d-4487-97cd-fb86342eaf8d'
                    }
                    alt="Alle-Icon"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={
                      'https://cms.ariscorp.de/assets/314cc998-245d-4487-97cd-fb86342eaf8d?width=16&quality=1'
                    }
                  />
                </div>
                <p className={"p-0 mx-auto text-xs text-center transition-colors duration-150 ease-out group-hover:duration-200" +
                  (manuquery
                    ? ' text-secondary'
                    : ' group-hover:text-white')}>
                  Hersteller
                </p>
              </div>
            </div>
          </div>
          <hr />
          {!classesMenu ? '' : (
            <div className="flex">
              <div className="flex mx-auto">
                <div
                  className="w-24 hover:cursor-pointer group"
                  onClick={() => {
                    setShipClass()
                  }}
                >
                  <div className="relative w-24 mx-auto aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        '1638095c-c0f3-49bf-b8c9-6e1a52a44333'
                      }
                      alt="Alle-Icon"
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/1638095c-c0f3-49bf-b8c9-6e1a52a44333?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors'
                    }
                  >
                    Alle Klassifizierungen
                  </p>
                </div>
                <div className="flex flex-wrap justify-center px-24 ml-4 space-x-2">
                  {classMenuItems.map((obj) => (
                    <div
                      key={obj.value}
                      className="w-24 hover:cursor-pointer group"
                      onClick={() => setShipClass([obj.value])}
                    >
                      <div className="relative w-24 mx-auto aspect-square">
                        <Image
                          src={
                            'https://cms.ariscorp.de/assets/' +
                            (obj.icon ? obj.icon : '9bf3dcd8-be29-4aea-8a27-44340b607d49')
                          }
                          alt={obj.name + "-Icon"}
                          layout="fill"
                          objectFit="cover"
                          placeholder="blur"
                          blurDataURL={
                            'https://cms.ariscorp.de/assets/' + '9bf3dcd8-be29-4aea-8a27-44340b607d49' + '?width=16&quality=1'
                          }
                        />
                      </div>
                      <p
                        className={
                          'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors ' +
                          (classquery == [obj.value] ? 'text-secondary' : 'group-hover:text-white')
                        }
                      >
                        {obj.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {!classesMenu ? null : <hr />}
          {!manufacturerMenu ? '' : (
            <div className="flex">
              <div className="flex mx-auto">
                <div
                  className="w-24 hover:cursor-pointer group"
                  onClick={() => {
                    setManufacturer()
                  }}
                >
                  <div className="relative w-24 mx-auto aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        '1638095c-c0f3-49bf-b8c9-6e1a52a44333'
                      }
                      alt="Alle-Icon"
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/1638095c-c0f3-49bf-b8c9-6e1a52a44333?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors'
                    }
                  >
                    Alle Hersteller
                  </p>
                </div>
                <div className="flex flex-wrap justify-center px-24 ml-4 space-x-2">
                  {manufacturers.map((obj) => (
                    <div
                      key={obj.firmen_name}
                      className="w-24 hover:cursor-pointer group"
                      onClick={() => setManufacturer([obj.firmen_name])}
                    >
                      <div className="relative w-24 mx-auto aspect-square">
                        <Image
                          src={
                            'https://cms.ariscorp.de/assets/' +
                            obj.firmen_trans_logo?.id
                          }
                          alt="Energie-Icon"
                          layout="fill"
                          objectFit="cover"
                          placeholder="blur"
                          blurDataURL={
                            'https://cms.ariscorp.de/assets/' + obj.firmen_trans_logo?.id + '?width=16&quality=1'
                          }
                        />
                      </div>
                      <p
                        className={
                          'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors ' +
                          (manuquery == [obj.firmen_name] ? 'text-secondary' : 'group-hover:text-white')
                        }
                      >
                        {obj.firmen_name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {!manufacturerMenu ? null : <hr />}
          {loading ? (
            <div className="flex items-center justify-center pt-32 mx-auto my-auto text-center">
              <SquareLoader
                color="#00ffe8"
                speedMultiplier="0.8"
                loading={loading}
              />
            </div>
          ) : (
            <div className='grid grid-cols-1 px-2 lg:grid-cols-2 1.5xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 5xl:grid-cols-6 gap-x-6 gap-y-4'>
              {data.map((object, index) => (
                <ShipCard key={object.id} data={object} />
              ))}
            </div>
          )}
        </div>
      </div >
    </div >
  )
}

Ships.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
