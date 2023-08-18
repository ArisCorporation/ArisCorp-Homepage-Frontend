import Layout from './layout'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import {
  GET_SHIPEXKURS_SHIPS_INDEX,
  GET_SHIPEXKURS_SHIPUTILS,
} from 'graphql/queries'
import { SquareLoader } from 'react-spinners'
import { useQuery } from '@apollo/client'
import Image from 'next/image'
import { BasicPanel } from 'components/panels'
import client from 'apollo/clients'
import Link from 'next/link'
import Head from 'next/head'
import ShipCard from 'components/ShipExkurs/ShipCard'
import SelectionGridWrapper from 'components/SelectionGridWrapper'
import { Listbox, Transition } from '@headlessui/react'
import { HiSelector } from 'react-icons/hi'
import { AiOutlineCheck } from 'react-icons/ai'

export async function getServerSideProps() {
  const { data } = await client.query({ query: GET_SHIPEXKURS_SHIPS_INDEX })

  if (!data?.ships) {
    return {
      notFound: true,
    }
  }

  const manufacturers = data.firmen

  const siteTitle =
    'ShipExurs - Astro Research and Industrial Service Corporation'

  return {
    props: {
      siteTitle,
      manufacturers,
      Data: data.ships,
    },
  }
}

export default function Ships({ siteTitle, manufacturers, Data }) {
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
  const [data, setData] = useState(Data)
  const [manufacturerMenu, setManufacturerMenu] = useState(false)
  const [classesMenu, setClassesMenu] = useState(false)
  const [roleMenu, setRoleMenu] = useState()
  const squery = query.q
  const classquery = query.cls
  const focusquery = query.focus
  const sizequery = query.size
  const manuquery = query.manufacturer
  const prodquery = query.prodStatus
  const salequery = query.sale
  const typequery = query.type

  function slugify(str) {
    str = str.replace(/^\s+|\s+$/g, '') // trim
    str = str.toLowerCase()

    // remove accents, swap ñ for n, etc
    var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
    var to = 'aaaaeeeeiiiioooouuuunc------'
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
    }

    str = str
      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-') // collapse dashes

    return str
  }

  const classMenuItems = [
    {
      name: 'Transport',
      value: 'transport',
      icon: 'da3caa51-c087-479b-8bd8-4ac6f4328450',
    },
    {
      name: 'Multi',
      value: 'multi',
      icon: '3a4dc057-a29e-49df-a846-f8dfa4fd770c',
    },
    {
      name: 'Industriel',
      value: 'industrial',
      icon: '4b21e214-0e73-4d7c-89de-86316c4bf5de',
    },
    {
      name: 'Kampf',
      value: 'combat',
      icon: '57c4e53b-579f-485c-b3b6-405ff04f11b3',
    },
    {
      name: 'Wettkampf',
      value: 'competition',
      icon: 'fe647dce-f1bf-4d5c-9d4e-c0d1b2307658',
    },
    {
      name: 'Unterstützung',
      value: 'support',
      icon: 'b2eef6f0-36f4-4379-9548-b11e7cedfa4c',
    },
    {
      name: 'Erkundung',
      value: 'exploration',
      icon: '6ff37caa-e47e-4c69-a81c-26b0b3d0a7a8',
    },
    {
      name: 'Forschung',
      value: 'science',
      icon: '20bee075-394a-46a8-af24-c8f2087c9643',
    },
  ]

  const roleMenuItems = [
    {
      career: 'transport',
      name: 'Fracht',
      value: 'freight',
    },
    {
      career: 'transport',
      name: 'Daten',
      value: 'data',
    },
    {
      career: 'transport',
      name: 'Personen',
      value: 'persons',
    },
    {
      career: 'industrial',
      name: 'Bergbau',
      value: 'mining',
    },
    {
      career: 'industrial',
      name: 'Bergung',
      value: 'salvage',
    },
    {
      career: 'industrial',
      name: 'Raffinerie',
      value: 'refinery',
    },
    {
      career: 'industrial',
      name: 'Konstruktion',
      value: 'construction',
    },
    {
      career: 'combat',
      name: 'Fighter',
      value: 'fighter',
    },
    {
      career: 'combat',
      name: 'Bomber',
      value: 'bomber',
    },
    {
      career: 'combat',
      name: 'Kannonenboot',
      value: 'gunboat',
    },
    {
      career: 'combat',
      name: 'Korvette',
      value: 'corvette',
    },
    {
      career: 'combat',
      name: 'Fregatte',
      value: 'frigate',
    },
    {
      career: 'combat',
      name: 'Zerstörer',
      value: 'destroyer',
    },
    {
      career: 'support',
      name: 'Reparatur',
      value: 'repair',
    },
    {
      career: 'support',
      name: 'Betankung',
      value: 'refueling',
    },
    {
      career: 'support',
      name: 'Schlepper',
      value: 'tug',
    },
    {
      career: 'support',
      name: 'Medizin',
      value: 'medical',
    },
    {
      career: 'support',
      name: 'Report',
      value: 'report',
    },
    {
      career: 'exploration',
      name: 'Aufklärung',
      value: 'scout',
    },
    {
      career: 'exploration',
      name: 'Pfadfindung',
      value: 'pathfinding',
    },
    {
      career: 'exploration',
      name: 'Expedition',
      value: 'expedition',
    },
  ]

  function handleClick(name) {
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

        if (Array.isArray(size)) {
          shipSize.forEach((obj, i) => {
            size[i] = obj?.value || obj
          })
        } else {
          size = size.value
        }
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
            q: search,
          }
        }

        if (prodStatus) {
          queries = {
            ...queries,
            prodStatus: prodStatus,
          }
        }

        if (sale) {
          queries = {
            ...queries,
            sale: sale,
          }
        }

        if (manufactr) {
          queries = {
            ...queries,
            manufacturer: manufactr,
          }
        }

        if (size) {
          queries = {
            ...queries,
            size: size,
          }
        }

        if (cls) {
          queries = {
            ...queries,
            cls: cls,
          }
        }

        if (focus) {
          queries = {
            ...queries,
            focus: focus,
          }
        }

        if (type) {
          queries = {
            ...queries,
            type: type,
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

      if (Array.isArray(sizequery)) {
        let array = []
        sizequery.forEach((obj) => {
          array = [...array, ...sizesS.filter((e) => e.value == parseInt(obj))]
        })
        setShipSize([...array])
      } else {
        setShipSize([...sizesS.filter((e) => e.value == parseInt(sizequery))])
      }
      setShipClass(classquery)
      setShipFocus(focusquery)
      setVehicleType(typequery)
    }
  }, [
    search,
    shipClass,
    shipFocus,
    shipSize,
    manufacturer,
    shipProdStatus,
    shipSale,
    vehicleType,
  ])

  useEffect(() => {
    if (isReady) setSearch(squery)
  }, [isReady])

  useEffect(() => {
    let filteredData = Data

    if (squery) {
      // let filterTemp = []
      // filteredTemp = filteredData.filter((e) => e.name.toLowerCase().includes(squery.toLowerCase()) || e.manufacturer.firmen_name.toLowerCase().includes(squery.toLowerCase()))
      filteredData = filteredData.filter(
        (e) =>
          e.name.toLowerCase().includes(squery.toLowerCase()) ||
          e.manufacturer.firmen_name
            .toLowerCase()
            .includes(squery.toLowerCase())
      )
    }

    if (classquery) {
      let classes = Array.isArray(classquery) ? [...classquery] : [classquery]

      classes.forEach((o, i) => {
        classes[i] = slugify(classes[i])
      })

      filteredData = filteredData.filter((e) =>
        classes.includes(slugify(e.career))
      )
    }

    if (focusquery) {
      let foci = Array.isArray(focusquery) ? [...focusquery] : [focusquery]

      foci.forEach((o, i) => {
        foci[i] = slugify(foci[i])
      })

      filteredData = filteredData.filter((e) => foci.includes(slugify(e.focus)))
    }

    if (sizequery) {
      let sizes = Array.isArray(sizequery) ? [...sizequery] : [sizequery]

      sizes.forEach((o, i) => {
        sizes[i] = parseInt(sizes[i])
      })

      filteredData = filteredData.filter((e) => sizes.includes(e.sortSize))
    }

    if (manuquery) {
      let manufacturer = Array.isArray(manuquery) ? [...manuquery] : [manuquery]

      manufacturer.forEach((o, i) => {
        manufacturer[i] = slugify(manufacturer[i])
      })

      filteredData = filteredData.filter((e) =>
        manufacturer.includes(slugify(e.manufacturer.firmen_name))
      )
    }

    if (prodquery) {
      let prodstatuses = Array.isArray(prodquery) ? [...prodquery] : [prodquery]

      prodstatuses.forEach((o, i) => {
        prodstatuses[i] = slugify(prodstatuses[i])
      })

      filteredData = filteredData.filter((e) =>
        prodstatuses.includes(slugify(e.productionStatus))
      )
    }

    if (salequery) {
      const sale = salequery == 'true' ? true : false
      filteredData = filteredData.filter((e) => e.onSale == sale)
    }

    if (typequery) {
      if (typequery == 'ground') {
        filteredData = filteredData.filter(
          (e) =>
            e.sortSize == 0 ||
            e.groundVehicle == true ||
            e.classification == 'ground' ||
            e.career == 'ground' ||
            e.focus == 'ground'
        )
      }
      if (typequery == 'ship') {
        filteredData = filteredData.filter(
          (e) =>
            e.size != 0 &&
            e.groundVehicle != true &&
            e.classification !== 'ground' &&
            e.career !== 'ground' &&
            e.focus !== 'ground'
        )
      }
    }

    setData(filteredData)
  }, [
    squery,
    classquery,
    sizequery,
    manuquery,
    prodquery,
    salequery,
    typequery,
  ])

  useEffect(() => {})

  const handleRemoveItem = (name) => {
    setShipFocus(shipFocus.filter((item) => item !== name))
  }

  const toggleType = (type) => {
    if (typequery == type) {
      setVehicleType(null)
    } else {
      setVehicleType(type)
    }
  }

  const toggleSize = (size) => {
    const sizes = Array.isArray(sizequery)
      ? [...sizequery]
      : sizequery
      ? [sizequery]
      : []

    if (sizes.includes(size)) {
      setShipSize([...sizes.filter((e) => e != size)])
    } else {
      setShipSize([...sizes, size])
    }
  }

  const toggleManufacturer = (company) => {
    const companies = Array.isArray(manuquery)
      ? [...manuquery]
      : manuquery
      ? [manuquery]
      : []

    console.log(companies)

    if (companies.includes(company)) {
      setManufacturer([...companies.filter((e) => e != company)])
    } else {
      setManufacturer([...companies, company])
    }
  }

  const sizesS = [
    {
      id: 1,
      name: 'XS - Snub',
      value: '1',
    },
    {
      id: 2,
      name: 'S - Small',
      value: '2',
    },
    {
      id: 3,
      name: 'M - Medium',
      value: '3',
    },
    {
      id: 4,
      name: 'L - Large',
      value: '4',
    },
    {
      id: 5,
      name: 'C - Capital',
      value: '5',
    },
  ]
  const typesS = [
    {
      id: 1,
      name: 'Schiffe',
      value: 'flight',
    },
    {
      id: 2,
      name: 'Fahrzeuge',
      value: 'ground',
    },
  ]

  console.log(data)

  return (
    <div className="items-center pt-8 mx-auto">
      <Head>
        <title>{siteTitle}</title>

        <meta property="twitter:title" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
        <meta name="title" content={siteTitle} />
      </Head>
      <div>
        <div className="">
          <div className="flex justify-center">
            <div className="w-full mb-3 ">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Avenger, Carrack, Hercules"
                className="form-control block w-1/2 mx-auto lg:w-full lg:max-w-xl px-3 py-1.5 text-base font-normal text-gray-300 bg-bg-secondary/30 bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none "
              />
            </div>
          </div>
          <div className="hidden xl:block">
            <div className="flex">
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
                      fill
                      cover
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
                    Alle Anzeigen
                  </p>
                </div>
                <div className="flex ml-10 space-x-2">
                  <div
                    className="w-24 hover:cursor-pointer group"
                    onClick={() => toggleType('ship')}
                  >
                    <div className="relative w-24 mx-auto aspect-square">
                      <Image
                        src={
                          'https://cms.ariscorp.de/assets/' +
                          '0cb20cc7-593e-480f-80ce-fc43296bda39'
                        }
                        alt="Ship-Icon"
                        fill
                        cover
                        placeholder="blur"
                        blurDataURL={
                          'https://cms.ariscorp.de/assets/0cb20cc7-593e-480f-80ce-fc43296bda39?width=16&quality=1'
                        }
                      />
                    </div>
                    <p
                      className={
                        'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                        (typequery?.includes('ship')
                          ? ' text-secondary'
                          : ' group-hover:text-white')
                      }
                    >
                      Schiffe
                    </p>
                  </div>
                  <div
                    className="w-24 hover:cursor-pointer group"
                    onClick={() => toggleType('ground')}
                  >
                    <div className="relative w-24 mx-auto aspect-square">
                      <Image
                        src={
                          'https://cms.ariscorp.de/assets/' +
                          'fc3c9400-e9b7-426b-abf2-80e0db326c3a'
                        }
                        alt="Ground-Icon"
                        fill
                        cover
                        placeholder="blur"
                        blurDataURL={
                          'https://cms.ariscorp.de/assets/fc3c9400-e9b7-426b-abf2-80e0db326c3a?width=16&quality=1'
                        }
                      />
                    </div>
                    <p
                      className={
                        'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                        (typequery?.includes('ground')
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
                    onClick={() => toggleSize('1')}
                  >
                    <div className="relative w-24 mx-auto aspect-square">
                      <Image
                        src={
                          'https://cms.ariscorp.de/assets/' +
                          'fcb5c0b1-de39-4d84-acde-5368b725ed70'
                        }
                        alt="XS-Icon"
                        fill
                        cover
                        placeholder="blur"
                        blurDataURL={
                          'https://cms.ariscorp.de/assets/fcb5c0b1-de39-4d84-acde-5368b725ed70?width=16&quality=1'
                        }
                      />
                    </div>
                    <p
                      className={
                        'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                        (sizequery?.includes('1')
                          ? ' text-secondary'
                          : ' group-hover:text-white')
                      }
                    >
                      XS - Snub
                    </p>
                  </div>
                  <div
                    className="w-24 hover:cursor-pointer group"
                    onClick={() => toggleSize('2')}
                  >
                    <div className="relative w-24 mx-auto aspect-square">
                      <Image
                        src={
                          'https://cms.ariscorp.de/assets/' +
                          'ed637355-d7b9-4ac3-bd07-ee039028215c'
                        }
                        alt="S-Icon"
                        fill
                        cover
                        placeholder="blur"
                        blurDataURL={
                          'https://cms.ariscorp.de/assets/ed637355-d7b9-4ac3-bd07-ee039028215c?width=16&quality=1'
                        }
                      />
                    </div>
                    <p
                      className={
                        'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                        (sizequery?.includes('2')
                          ? ' text-secondary'
                          : ' group-hover:text-white')
                      }
                    >
                      S - Small
                    </p>
                  </div>
                  <div
                    className="w-24 hover:cursor-pointer group"
                    onClick={() => toggleSize('3')}
                  >
                    <div className="relative w-24 mx-auto aspect-square">
                      <Image
                        src={
                          'https://cms.ariscorp.de/assets/' +
                          'b40ef483-f55f-4a74-8bac-6495f3c5f55d'
                        }
                        alt="M-Icon"
                        fill
                        cover
                        placeholder="blur"
                        blurDataURL={
                          'https://cms.ariscorp.de/assets/b40ef483-f55f-4a74-8bac-6495f3c5f55d?width=16&quality=1'
                        }
                      />
                    </div>
                    <p
                      className={
                        'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                        (sizequery?.includes('3')
                          ? ' text-secondary'
                          : ' group-hover:text-white')
                      }
                    >
                      M - Medium
                    </p>
                  </div>
                  <div
                    className="w-24 hover:cursor-pointer group"
                    onClick={() => toggleSize('4')}
                  >
                    <div className="relative w-24 mx-auto aspect-square">
                      <Image
                        src={
                          'https://cms.ariscorp.de/assets/' +
                          'e8f72a80-8ce0-4ad9-85da-ca961a8d3367'
                        }
                        alt="L-Icon"
                        fill
                        cover
                        placeholder="blur"
                        blurDataURL={
                          'https://cms.ariscorp.de/assets/e8f72a80-8ce0-4ad9-85da-ca961a8d3367?width=16&quality=1'
                        }
                      />
                    </div>
                    <p
                      className={
                        'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                        (sizequery?.includes('4')
                          ? ' text-secondary'
                          : ' group-hover:text-white')
                      }
                    >
                      L - Large
                    </p>
                  </div>
                  <div
                    className="w-24 hover:cursor-pointer group"
                    onClick={() => toggleSize('5')}
                  >
                    <div className="relative w-24 mx-auto aspect-square">
                      <Image
                        src={
                          'https://cms.ariscorp.de/assets/' +
                          'a9cf9685-e972-42ad-91c5-762002975eb0'
                        }
                        alt="C-Icon"
                        fill
                        cover
                        placeholder="blur"
                        blurDataURL={
                          'https://cms.ariscorp.de/assets/a9cf9685-e972-42ad-91c5-762002975eb0?width=16&quality=1'
                        }
                      />
                    </div>
                    <p
                      className={
                        'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                        (sizequery?.includes('5')
                          ? ' text-secondary'
                          : ' group-hover:text-white')
                      }
                    >
                      C - Capital
                    </p>
                  </div>
                </div>
                <div
                  onClick={() => setClassesMenu(!classesMenu)}
                  className="w-24 ml-6 hover:cursor-pointer"
                >
                  <div className="relative w-24 mx-auto aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        'd20622cf-dff9-4188-81b1-4029b8862ece'
                      }
                      alt="Alle-Icon"
                      fill
                      cover
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/d20622cf-dff9-4188-81b1-4029b8862ece?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center transition-colors duration-150 ease-out group-hover:duration-200' +
                      (classquery
                        ? ' text-secondary'
                        : ' group-hover:text-white')
                    }
                  >
                    Klassifizierungen
                  </p>
                </div>
                <div
                  onClick={() => setManufacturerMenu(!manufacturerMenu)}
                  className="w-24 ml-10 hover:cursor-pointer"
                >
                  <div className="relative w-24 mx-auto aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        '314cc998-245d-4487-97cd-fb86342eaf8d'
                      }
                      alt="Alle-Icon"
                      fill
                      cover
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/314cc998-245d-4487-97cd-fb86342eaf8d?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center transition-colors duration-150 ease-out group-hover:duration-200' +
                      (manuquery
                        ? ' text-secondary'
                        : ' group-hover:text-white')
                    }
                  >
                    Hersteller
                  </p>
                </div>
              </div>
            </div>
            <hr />
            {!classesMenu ? (
              ''
            ) : (
              <>
                <div className="flex pb-8">
                  <div className="flex m-auto">
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
                          fill
                          cover
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
                    <div className="flex flex-wrap justify-center px-24 ml-4">
                      {classMenuItems.map((obj) => (
                        <>
                          <div
                            key={obj.value}
                            className="relative w-24 overflow-visible hover:cursor-pointer group"
                            onClick={() =>
                              setShipClass([obj.value]) && setShipFocus([])
                            }
                          >
                            <div className="relative w-24 mx-auto aspect-square">
                              <Image
                                src={
                                  'https://cms.ariscorp.de/assets/' +
                                  (obj.icon
                                    ? obj.icon
                                    : '9bf3dcd8-be29-4aea-8a27-44340b607d49')
                                }
                                alt={obj.name + '-Icon'}
                                fill
                                cover
                                placeholder="blur"
                                blurDataURL={
                                  'https://cms.ariscorp.de/assets/' +
                                  '9bf3dcd8-be29-4aea-8a27-44340b607d49' +
                                  '?width=16&quality=1'
                                }
                              />
                            </div>
                            <p
                              className={
                                'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors ' +
                                (classquery == [obj.value]
                                  ? 'text-secondary'
                                  : 'group-hover:text-white')
                              }
                            >
                              {obj.name}
                            </p>
                            <div
                              className={
                                'grid gap-x-2 absolute z-10 mt-2 justify-between overflow-visible grid-cols-2 ' +
                                (classquery == obj.value ? '' : 'hidden')
                              }
                            >
                              {roleMenuItems
                                .filter((e) => e.career.includes(classquery))
                                .map((i) => (
                                  <p
                                    key={i.value}
                                    className={
                                      'p-0 w-fit active:scale-75 even:justify-self-start odd:justify-self-end text-xs col-span-1 duration-150 hover:duration-200 ease-out transition-colors ' +
                                      (focusquery == [i.value]
                                        ? 'text-secondary'
                                        : 'hover:text-white')
                                    }
                                  >
                                    {i.name}
                                  </p>
                                ))}
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
            {!classesMenu ? null : <hr />}
            {!manufacturerMenu ? (
              ''
            ) : (
              <div className="flex">
                <div className="flex mx-auto">
                  <div
                    className="w-24 pl-12 hover:cursor-pointer group"
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
                        fill
                        cover
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
                        onClick={() =>
                          setManufacturer([slugify(obj.firmen_name)])
                        }
                      >
                        <div className="relative w-24 mx-auto aspect-square">
                          <Image
                            src={
                              'https://cms.ariscorp.de/assets/' +
                              obj.firmen_trans_logo?.id
                            }
                            alt="Energie-Icon"
                            fill
                            cover
                            placeholder="blur"
                            blurDataURL={
                              'https://cms.ariscorp.de/assets/' +
                              obj.firmen_trans_logo?.id +
                              '?width=16&quality=1'
                            }
                          />
                        </div>
                        <p
                          className={
                            'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors ' +
                            (manuquery == [obj.firmen_name]
                              ? 'text-secondary'
                              : 'group-hover:text-white')
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
          </div>
          <div className="w-full px-2 xl:hidden">
            <div className="flex px-2 space-x-6">
              <div className="w-1/3">
                <h3 className="mb-0 text-base md:text-lg">Größe</h3>
                <Listbox
                  value={sizesS.filter((e) => sizequery?.includes(e.value))}
                  onChange={setShipSize}
                  multiple
                >
                  <div className="relative z-10 mt-1">
                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left border-2 rounded-lg shadow-md cursor-pointer border-bg-secondary bg-bg-primary focus-visible:outline-none sm:text-sm">
                      <span className="block truncate">
                        {sizequery != '' && sizequery != null
                          ? sizesS
                              .filter((e) => sizequery?.includes(e.value))
                              .map((i) => i.name)
                              .join(', ')
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
                        <li
                          className={`cursor-pointer select-none relative py-2 pl-4 pr-4 hover:text-secondary hover:bg-bg-secondary hover:opacity-100 ${
                            sizequery == null
                              ? 'text-secondary bg-bg-secondary'
                              : 'opacity-50'
                          }`}
                          onClick={() => setShipSize([])}
                        >
                          <span
                            className={`block truncate ${sizequery == null}`}
                          >
                            Alle
                          </span>
                        </li>
                        {sizesS.map((size, sizeIdx) => (
                          <Listbox.Option
                            key={sizeIdx}
                            className={({ active }) =>
                              `text-xs md:text-base cursor-pointer select-none relative py-2 pl-4 pr-4 hover:text-secondary hover:bg-bg-secondary hover:opacity-100 ${
                                sizesS
                                  .filter((e) => shipSize?.includes(e.value))
                                  .includes(size)
                                  ? 'text-secondary bg-bg-secondary'
                                  : 'opacity-50'
                              }`
                            }
                            value={size}
                          >
                            {({ slected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    sizesS
                                      .filter((e) =>
                                        shipSize?.includes(e.value)
                                      )
                                      .includes(size)
                                      ? 'font-medium'
                                      : 'font-normal'
                                  }`}
                                >
                                  {size.name}
                                </span>
                                {slected ? (
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
              <div className="w-1/3">
                <h3 className="mb-0 text-base md:text-lg">Fahrzeug Typ</h3>
                <Listbox
                  value={typequery}
                  onChange={(event) => setVehicleType(event.value)}
                >
                  <div className="relative z-10 mt-1">
                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left border-2 rounded-lg shadow-md cursor-pointer border-bg-secondary bg-bg-primary focus-visible:outline-none sm:text-sm">
                      <span className="block truncate">
                        {typequery != '' && typequery != null
                          ? typesS.filter((e) => e.value == typequery)[0].name
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
                        <li
                          className={`cursor-pointer select-none relative py-2 pl-4 pr-4 hover:text-secondary hover:bg-bg-secondary hover:opacity-100 ${
                            typequery == null
                              ? 'text-secondary bg-bg-secondary'
                              : 'opacity-50'
                          }`}
                          onClick={() => setVehicleType(null)}
                        >
                          <span
                            className={`block truncate ${typequery == null}`}
                          >
                            Alle
                          </span>
                        </li>
                        {typesS.map((type, typeIdx) => (
                          <Listbox.Option
                            key={typeIdx}
                            className={`text-xs md:text-base cursor-pointer select-none relative py-2 pl-4 pr-4 hover:text-secondary hover:bg-bg-secondary hover:opacity-100 ${
                              typesS.filter((e) => e.value == typequery)[0] ==
                              type
                                ? 'text-secondary bg-bg-secondary'
                                : 'opacity-50'
                            }`}
                            value={type}
                          >
                            <span
                              className={`block truncate ${
                                typesS.filter((e) => e.value == typequery)[0] ==
                                type
                                  ? 'font-medium'
                                  : 'font-normal'
                              }`}
                            >
                              {type.name}
                            </span>
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
              <div className="w-1/3">
                <h3 className="mb-0 text-base md:text-lg">Hersteller</h3>
                <Listbox
                  value={manuquery}
                  onChange={(event) =>
                    setManufacturer(slugify(event.firmen_name))
                  }
                >
                  <div className="relative z-10 mt-1">
                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left border-2 rounded-lg shadow-md cursor-pointer border-bg-secondary bg-bg-primary focus-visible:outline-none sm:text-sm">
                      <span className="block truncate">
                        {manuquery != '' && manuquery != null
                          ? manufacturers.filter(
                              (e) => slugify(e.firmen_name) == manuquery
                            )[0].firmen_name
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
                        <li
                          className={`cursor-pointer select-none relative py-2 pl-4 pr-4 hover:text-secondary hover:bg-bg-secondary hover:opacity-100 ${
                            manuquery == null
                              ? 'text-secondary bg-bg-secondary'
                              : 'opacity-50'
                          }`}
                          onClick={() => setManufacturer(null)}
                        >
                          <span
                            className={`block truncate ${manuquery == null}`}
                          >
                            Alle
                          </span>
                        </li>
                        {manufacturers.map((company, companyIdx) => (
                          <Listbox.Option
                            key={companyIdx}
                            className={`text-xs md:text-base cursor-pointer select-none relative py-2 pl-4 pr-4 hover:text-secondary hover:bg-bg-secondary hover:opacity-100 ${
                              manufacturers.filter(
                                (e) => slugify(e.firmen_name) == manuquery
                              )[0] == company
                                ? 'text-secondary bg-bg-secondary'
                                : 'opacity-50'
                            }`}
                            value={company}
                          >
                            <span
                              className={`block truncate ${
                                manufacturers.filter(
                                  (e) => slugify(e.firmen_name) == manuquery
                                )[0] == company
                                  ? 'font-medium'
                                  : 'font-normal'
                              }`}
                            >
                              {company.firmen_name}
                            </span>
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div>
            <hr />
          </div>
          <SelectionGridWrapper>
            {data.map((object, index) => (
              <ShipCard key={object.id} data={object} />
            ))}
          </SelectionGridWrapper>
        </div>
      </div>
    </div>
  )
}
