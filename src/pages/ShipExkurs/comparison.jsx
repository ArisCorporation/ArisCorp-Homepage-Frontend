import client from 'apollo/clients'
import {
  GET_SHIPEXKURS_SHIPLIST,
  GET_SHIPEXKURS_COMPARISON_DATA,
  GET_VERSEEXKURS_FIRMEN,
} from 'graphql/queries'
import Head from 'next/head'
import Layout from './layout'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FaChevronRight, FaPlaceOfWorship } from 'react-icons/fa'
import { useQuery } from '@apollo/client'
import Avionics from 'components/ShipExkurs/ShipHardpoints/Avionics'
import Systems from 'components/ShipExkurs/ShipHardpoints/Systems'
import Propulsion from 'components/ShipExkurs/ShipHardpoints/Propulsion'
import Thruster from 'components/ShipExkurs/ShipHardpoints/Thruster'
import Weapons from 'components/ShipExkurs/ShipHardpoints/Weapons'
import { Listbox, Transition } from '@headlessui/react'
import { HiSelector } from 'react-icons/hi'
import { AiOutlineCheck } from 'react-icons/ai'

export async function getServerSideProps() {
  let { data: shipList } = await client.query({
    query: GET_SHIPEXKURS_COMPARISON_DATA,
  })

  let { data: companies } = await client.query({
    query: GET_VERSEEXKURS_FIRMEN,
  })

  if (!shipList.ships[0]) {
    return {
      notFound: true,
    }
  }

  const siteTitle =
    'Schiffsvergleich - Astro Research and Industrial Service Corporation'

  return {
    props: {
      siteTitle,
      shipList: shipList.ships,
      components: shipList.components,
      companies: companies.firmen,
    },
  }
}

export default function ShipComparison({
  siteTitle,
  shipList,
  components,
  companies,
}) {
  const router = useRouter()
  const { replace } = router
  const { ships } = router.query
  const [shipsState, setShipsState] = useState([])
  const isMounted = useRef(false)
  const [avionicsValid, setAvionicsValid] = useState(true)
  const [shipSearch, setShipSearch] = useState(null)

  console.log(shipSearch)

  const selectedShips = []
  if (Array.isArray(ships)) {
    ships.forEach((obj) => {
      selectedShips.push(shipList.find((e) => e.slug == obj))
    })
  } else if (ships) {
    selectedShips.push(shipList.find((e) => e.slug == ships))
  }
  console.log(selectedShips)

  const class1 =
    'min-w-[400px] max-w-[33%] pb-2 text-center relative w-full px-4'

  function removeShip(ship) {
    shipsState.forEach((obj, i) => {
      if (obj == ship) {
        const array = shipsState
        array.splice(i, 1)
        setShipsState([...array])
      }
    })
  }

  useEffect(() => {
    if (isMounted.current) {
      let shipsVar

      // if (shipsState) {
      //   shipsVar = shipsState
      // }

      if (shipsState) {
        shipsVar = shipsState

        if (Array.isArray(shipsVar)) {
          shipsState.forEach((obj, i) => {
            shipsVar[i] = obj?.slug || obj
          })
        } else {
          shipsVar = shipsVar.slug
        }

        console.log(shipsVar)
      }

      let timer = setTimeout(() => {
        let queries = {}
        if (shipsVar) {
          queries = {
            ...queries,
            ships: shipsVar,
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
      setShipsState(ships)
    }
  }, [shipsState])

  return (
    <>
      <Head>
        <title>{siteTitle}</title>

        <meta property="twitter:title" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
        <meta name="title" content={siteTitle} />
      </Head>
      <div className="w-full min-h-screen">
        <div className="flex flex-nowrap">
          <div className="left-0 w-[300px] min-w-[300px] max-[20%] mt-0 pb-2">
            {/* <div className="flex flex-wrap">
              <div
                onClick={() =>
                  ships?.includes('100i') || ships == '100i'
                    ? removeShip('100i')
                    : ships
                    ? Array.isArray(shipsState)
                      ? setShipsState([...shipsState, '100i'])
                      : setShipsState([shipsState, '100i'])
                    : setShipsState(['100i'])
                }
                className={
                  (ships?.includes('100i') || ships == '100i'
                    ? 'text-secondary '
                    : '') + 'w-full cursor-pointer'
                }
              >
                100i
              </div>
              <div
                onClick={() =>
                  ships?.includes('cutlass-black') || ships == 'cutlass-black'
                    ? removeShip('cutlass-black')
                    : ships
                    ? Array.isArray(shipsState)
                      ? setShipsState([...shipsState, 'cutlass-black'])
                      : setShipsState([shipsState, 'cutlass-black'])
                    : setShipsState(['cutlass-black'])
                }
                className={
                  (ships?.includes('cutlass-black') || ships == 'cutlass-black'
                    ? 'text-secondary '
                    : '') + 'w-full cursor-pointer'
                }
              >
                Cutlass Black
              </div>
              <div
                onClick={() =>
                  ships?.includes('carrack') || ships == 'carrack'
                    ? removeShip('carrack')
                    : ships
                    ? Array.isArray(shipsState)
                      ? setShipsState([...shipsState, 'carrack'])
                      : setShipsState([shipsState, 'carrack'])
                    : setShipsState(['carrack'])
                }
                className={
                  (ships?.includes('carrack') || ships == 'carrack'
                    ? 'text-secondary '
                    : '') + 'w-full cursor-pointer'
                }
              >
                Carrack
              </div>
              <div
                onClick={() =>
                  ships?.includes('mole') || ships == 'mole'
                    ? removeShip('mole')
                    : ships
                    ? Array.isArray(shipsState)
                      ? setShipsState([...shipsState, 'mole'])
                      : setShipsState([shipsState, 'mole'])
                    : setShipsState(['mole'])
                }
                className={
                  (ships?.includes('mole') || ships == 'mole'
                    ? 'text-secondary '
                    : '') + 'w-full cursor-pointer'
                }
              >
                Mole
              </div>
            </div> */}
            <div className="mt-6">
              <div>
                <Listbox
                  value={selectedShips}
                  onChange={setShipsState}
                  multiple
                >
                  <div className="relative z-[60] mt-1">
                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left border-2 rounded-lg shadow-md cursor-pointer border-bg-secondary bg-bg-primary focus-visible:outline-none sm:text-sm">
                      <span className="block truncate">
                        {ships != '' && ships != null
                          ? selectedShips.map((i) => i.name).join(', ')
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
                      <Listbox.Options className="absolute w-full py-1 pl-0 mt-1 overflow-auto text-base rounded-md shadow-lg bg-bg-primary max-h-[200px] ring-1 ring-white ring-opacity-5 focus:outline-none sm:text-sm">
                        <li
                          className={`cursor-pointer select-none relative py-2 pl-4 pr-4 hover:text-secondary hover:bg-bg-secondary hover:opacity-100 ${
                            ships == null
                              ? 'text-secondary bg-bg-secondary'
                              : 'opacity-50'
                          }`}
                          onClick={() => setShipsState([])}
                        >
                          <span className={`block truncate ${ships == null}`}>
                            Alle
                          </span>
                        </li>
                        {shipList.map((ship, shipIdx) => (
                          <Listbox.Option
                            key={shipIdx}
                            className={({ active }) =>
                              `text-xs md:text-base cursor-pointer select-none relative py-2 pl-4 pr-4 hover:text-secondary hover:bg-bg-secondary hover:opacity-100 ${
                                shipList
                                  .filter((e) => shipsState?.includes(e.slug))
                                  .includes(ship)
                                  ? 'text-secondary bg-bg-secondary'
                                  : 'opacity-50'
                              }`
                            }
                            value={ship}
                          >
                            {({ slected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    shipList
                                      .filter((e) =>
                                        shipsState?.includes(e.slug)
                                      )
                                      .includes(ship)
                                      ? 'font-medium'
                                      : 'font-normal'
                                  }`}
                                >
                                  {ship.name}
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
            </div>
          </div>
          {selectedShips.map((obj) => (
            <div
              key={obj.id}
              className="w-[450px] pb-2 relative px-4"
            >
              <div className="relative h-[180px] overflow-hidden">
                <Link
                  href={'/ShipExkurs/' + obj.slug}
                  style={{
                    backgroundImage: `url(https://cms.ariscorp.de/assets/${obj.storeImage.id}?height=400)`,
                  }}
                  className="relative block w-full h-full bg-[#0009] bg-no-repeat bg-center bg-cover rounded-t"
                ></Link>
              </div>
            </div>
          ))}
        </div>
        <div className="sticky top-0 z-50 flex flex-nowrap">
          <div className="left-0 w-[300px] min-w-[300px] max-w-[20%] mt-0 pb-2 relative px-4"></div>
          {selectedShips.map((obj) => (
            <div
              key={obj.id}
              className="left-0 w-[400px] pb-2 relative px-4"
            >
              <div className="py-2 text-xl text-center bg-opacity-75 rounded-b bg-bg-secondary">
                <strong className="align-middle">{obj.name}</strong>
              </div>
            </div>
          ))}
        </div>
        {/* {ships && (
          <> */}
        <div className={selectedShips[0] ? '' : 'mt-[189px]'}>
          <div>
            <div className="flex mt-7 flex-nowrap">
              <div className="left-0 lg:left-[300px] pt-2 rounded-tr w-[300px] min-w-[300px] max-w-[300px] mt-0 pb-2 sticky z-50 px-2">
                <div className="relative pr-6 uppercase cursor-pointer">
                  Base{' '}
                  <FaChevronRight className="absolute right-0 inline-block transition-all duration-500 ease-linear rotate-90 top-2" />
                </div>
              </div>
              {selectedShips.map((obj) => (
                <div key={obj.id} className={class1}></div>
              ))}
            </div>
            <div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)] rounded-tr lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  Hersteller
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <div>{obj.manufacturer.firmen_name || 'N/A'}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  Produktionsstatus
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <div>{obj.productionStatus || 'N/A'}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  Fokus
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <div>Not ready yet</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  Klassifikation
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <div>Not ready yet</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  Größe
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    {obj.size
                      ? obj.size == 0
                        ? `Bodenfahrzeug - XS (${obj.size})`
                        : obj.size == 1
                        ? `Klein - S (${obj.size})`
                        : obj.size == 2
                        ? `Medium - M (${obj.size})`
                        : obj.size == 3
                        ? `Gross - L (${obj.size})`
                        : obj.size == 4
                        ? `X-Gross - XL (${obj.size})`
                        : obj.size == 5 && `Capital - C (${obj.size})`
                      : 'N/A'}
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  Länge
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <div>{obj.length ? obj.length + 'm' : 'N/A'}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  Breite
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <div>{obj.beam ? obj.beam + 'm' : 'N/A'}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  Höhe
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <div>{obj.height ? obj.height + 'm' : 'N/A'}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  Gewicht
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <div>{obj.mass ? obj.mass + ' t' : 'N/A'}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  Frachtkapazität
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <div>{obj.cargo ? obj.cargo + ' SCU' : 'N/A'}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  Price
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <div>{obj.price ? obj.price + ' aUEC' : 'N/A'}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  rounded-br lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  Pledge Price
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <div>{obj.pledgePrice ? '$' + obj.pledgePrice : 'N/A'}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex mt-7 flex-nowrap">
              <div className="left-[300px] pt-2 rounded-tr w-[300px] min-w-[300px] max-w-[20%] mt-0 pb-2 sticky z-50 px-2">
                <div className="relative pr-6 uppercase cursor-pointer">
                  Crew
                  <FaChevronRight className="absolute right-0 inline-block transition-all duration-500 ease-linear rotate-90 top-2" />
                </div>
              </div>
              {selectedShips.map((obj) => (
                <div key={obj.id} className={class1}></div>
              ))}
            </div>
            <div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  rounded-tr lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  Min. Crew
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <div>{obj.minCrew || 'N/A'}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  Max. Crew
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <div>{obj.maxCrew || 'N/A'}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex mt-7 flex-nowrap">
              <div className="left-[300px] pt-2 rounded-tr w-[300px] min-w-[300px] max-w-[20%] mt-0 pb-2 sticky z-50 px-2">
                <div className="relative pr-6 uppercase cursor-pointer">
                  Geschwindigkeit
                  <FaChevronRight className="absolute right-0 inline-block transition-all duration-500 ease-linear rotate-90 top-2" />
                </div>
              </div>
              {selectedShips.map((obj) => (
                <div key={obj.id} className={class1}></div>
              ))}
            </div>
            <div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  rounded-tr lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  SCM Geschwindigkeit
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <div>{obj.scmSpeed || 'N/A'}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  Max. Geschwindigkeit
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <div>{obj.afterburnerSpeed || 'N/A'}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  Max. Bodengeschwindigkeit
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <div>{obj.afterburnerGroundSpeed || 'N/A'}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  Rückwärts Bodengeschwindigkeit
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <div>{obj.reverseGroundSpeed || 'N/A'}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  Pitch
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <div>{obj.pitchMax || 'N/A'}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  Yaw
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <div>{obj.yawMax || 'N/A'}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  Roll
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <div>{obj.rollMax || 'N/A'}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  Zero to SCM
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <div>{obj.afterburnerSpeed || 'N/A'}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  SCM to Zero
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <div>{obj.afterburnerSpeed || 'N/A'}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  Zero to Max
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <div>{obj.afterburnerSpeed || 'N/A'}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  Max to Zero
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <div>{obj.afterburnerSpeed || 'N/A'}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  Bodenbeschleunigung
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <div>{obj.groundAcceleration || 'N/A'}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4">
                  Bodenbremsung
                </div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <div>{obj.groundDecceleration || 'N/A'}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex mt-7 flex-nowrap">
              <div className="left-[300px] pt-2 rounded-tr w-[300px] min-w-[300px] max-w-[20%] mt-0 pb-2 sticky z-50 px-2">
                <div className="relative pr-6 uppercase cursor-pointer">
                  Avionik
                  <FaChevronRight className="absolute right-0 inline-block transition-all duration-500 ease-linear rotate-90 top-2" />
                </div>
              </div>
              {selectedShips.map((obj) => (
                <div key={obj.id} className={class1}></div>
              ))}
            </div>
            <div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  rounded-r lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4"></div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <h2 className={'hardpointGroupLabel text-left'}>Avionik</h2>
                    <Avionics data={obj} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex mt-7 flex-nowrap">
              <div className="left-[300px] pt-2 rounded-tr w-[300px] min-w-[300px] max-w-[20%] mt-0 pb-2 sticky z-50 px-2">
                <div className="relative pr-6 uppercase cursor-pointer">
                  Systeme
                  <FaChevronRight className="absolute right-0 inline-block transition-all duration-500 ease-linear rotate-90 top-2" />
                </div>
              </div>
              {selectedShips.map((obj) => (
                <div key={obj.id} className={class1}></div>
              ))}
            </div>
            <div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  rounded-r lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4"></div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <h2 className={'hardpointGroupLabel text-left'}>Systeme</h2>
                    <Systems data={obj} components={components} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex mt-7 flex-nowrap">
              <div className="left-[300px] pt-2 rounded-tr w-[300px] min-w-[300px] max-w-[20%] mt-0 pb-2 sticky z-50 px-2">
                <div className="relative pr-6 uppercase cursor-pointer">
                  Antrieb
                  <FaChevronRight className="absolute right-0 inline-block transition-all duration-500 ease-linear rotate-90 top-2" />
                </div>
              </div>
              {selectedShips.map((obj) => (
                <div key={obj.id} className={class1}></div>
              ))}
            </div>
            <div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  rounded-r lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4"></div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <h2 className={'hardpointGroupLabel text-left'}>Antrieb</h2>
                    <Propulsion data={obj} components={components} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex mt-7 flex-nowrap">
              <div className="left-[300px] pt-2 rounded-tr w-[300px] min-w-[300px] max-w-[20%] mt-0 pb-2 sticky z-50 px-2">
                <div className="relative pr-6 uppercase cursor-pointer">
                  Triebwerke
                  <FaChevronRight className="absolute right-0 inline-block transition-all duration-500 ease-linear rotate-90 top-2" />
                </div>
              </div>
              {selectedShips.map((obj) => (
                <div key={obj.id} className={class1}></div>
              ))}
            </div>
            <div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  rounded-r lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4"></div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <h2 className={'hardpointGroupLabel text-left'}>
                      Triebwerke
                    </h2>
                    <Thruster data={obj} components={components} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex mt-7 flex-nowrap">
              <div className="left-[300px] pt-2 rounded-tr w-[300px] min-w-[300px] max-w-[20%] mt-0 pb-2 sticky z-50 px-2">
                <div className="relative pr-6 uppercase cursor-pointer">
                  Waffen
                  <FaChevronRight className="absolute right-0 inline-block transition-all duration-500 ease-linear rotate-90 top-2" />
                </div>
              </div>
              {selectedShips.map((obj) => (
                <div key={obj.id} className={class1}></div>
              ))}
            </div>
            <div>
              <div className="flex flex-nowrap">
                <div className="bg-gradient-to-l from-[rgba(39,43,48,.75)]  rounded-r lg:text-right left-0 lg:left-[300px] w-[300px] min-w-[300px] max-w-[20%] pb-2 sticky z-50 px-4"></div>
                {selectedShips.map((obj) => (
                  <div key={obj.id} className={class1}>
                    <h2 className={'hardpointGroupLabel text-left'}>Waffen</h2>
                    {!obj.weaponHardpoints[0] ? (
                      <p>N/A</p>
                    ) : (
                      <Weapons
                        data={obj}
                        components={components}
                        companies={companies}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* </>
        )} */}
      </div>
    </>
  )
}

ShipComparison.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
