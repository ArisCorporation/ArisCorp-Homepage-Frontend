import Link from 'next/link'
import Image from 'next/image'
import {
  FaHome,
  FaChevronRight,
  FaPlaceOfWorship,
  FaExchangeAlt,
  FaSearch,
} from 'react-icons/fa'
import { GiAlienSkull, GiSolarSystem } from 'react-icons/gi'
import { FiCpu } from 'react-icons/fi'
import { MdGroups, MdHistoryEdu } from 'react-icons/md'
import { RiArrowGoBackLine } from 'react-icons/ri'
import { ImBook } from 'react-icons/im'
import { useState, useEffect, useRef } from 'react'
import {
  BsChevronDoubleLeft,
  BsShieldShaded,
  BsTriangleFill,
} from 'react-icons/bs'
import MainLogo from './icons/MainLogo'
import { useRouter } from 'next/router'
import ReactTooltip from 'react-tooltip'

export default function Sidebar() {
  const router = useRouter()
  const size = useWindowSize()
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    })
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
      // Add event listener
      window.addEventListener('resize', handleResize)
      // Call handler right away so state gets updated with initial window size
      handleResize()
      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize)
    }, []) // Empty array ensures that effect is only run on mount
    return windowSize
  }

  useEffect(() => {
    mobileOpen && mobileView
      ? (document
          .querySelector('body')
          .classList.add('absolute', 'right-0', 'left-0', 'overflow-hidden'),
        document
          .querySelector('footer')
          .classList.add('right-[300px]', 'relative'),
        document
          .querySelector('main')
          .classList.add('right-[300px]', 'left-[-300px]'))
      : (document
          .querySelector('body')
          .classList.remove('absolute', 'right-0', 'left-0', 'overflow-hidden'),
        document
          .querySelector('footer')
          .classList.remove('right-[300px]', 'relative'),
        document
          .querySelector('main')
          .classList.remove('right-[300px]', 'left-[-300px]'))
  })

  const mobileView = size.width < 1024
  const homeRef = useRef()

  return (
    <>
      <div
        className={
          'fixed bottom-0 z-50 w-full lg:hidden print:hidden ' +
          (mobileOpen ? 'right-[300px]' : 'right-0')
        }
        style={{ transition: 'left .5s ease,right .5s ease,width .5s ease' }}
      >
        <div className="flex items-stretch justify-between min-h-[60px] pb-5 bg-[rgba(23,25,28,.95)] border-t-[1px] border-solid border-t-[rgba(30,34,38,.5)]">
          <Link legacyBehavior href="/VerseExkurs">
            <a
              className={
                'min-w-[62px] bg-transparent border-none relative flex items-center justify-center w-full m-h-[60px] mr-0 p-0 opacity-90 transition-all duration-500 ease-linear after:absolute after:top-0 after:w-4/5 after:h-[3px] after:bg-primary after:rounded-b-md after:shadow' +
                (router.pathname == '/ShipExkurs'
                  ? ' text-white'
                  : ' after:hidden text-[#c8c8c8]')
              }
            >
              <div
                className="px-4 py-2 overflow-hidden text-center whitespace-normal transition-all duration-500 ease-linear rounded-md text-inherit text-ellipsis"
                style={{ fontSize: '130%' }}
              >
                <FaHome
                  className="relative text-center whitespace-normal"
                  style={{ fontSize: '130%' }}
                />
              </div>
            </a>
          </Link>
          <Link legacyBehavior href="/ShipExkurs/ships">
            <a
              className={
                'min-w-[62px] bg-transparent border-none relative flex items-center justify-center w-full m-h-[60px] mr-0 p-0 opacity-90 transition-all duration-500 ease-linear after:absolute after:top-0 after:w-4/5 after:h-[3px] after:bg-primary after:rounded-b-md after:shadow' +
                (router.pathname.startsWith('/ShipExkurs/ships')
                  ? ' after:block text-white'
                  : ' after:hidden text-[#c8c8c8]')
              }
            >
              <div
                className="px-4 py-2 overflow-hidden text-center whitespace-normal transition-all duration-500 ease-linear rounded-md text-inherit text-ellipsis"
                style={{ fontSize: '130%' }}
              >
                <FaPlaceOfWorship
                  className="relative text-center whitespace-normal"
                  style={{ fontSize: '130%' }}
                />
              </div>
            </a>
          </Link>
          <Link legacyBehavior href="/VerseExkurs/search">
            <a
              className={
                'min-w-[62px] bg-transparent border-none relative flex items-center justify-center w-full m-h-[60px] mr-0 p-0 opacity-90 transition-all duration-500 ease-linear after:absolute after:top-0 after:w-4/5 after:h-[3px] after:bg-primary after:rounded-b-md after:shadow' +
                (router.pathname.startsWith('/VerseExkurs/search')
                  ? ' after:block text-white'
                  : ' after:hidden text-[#c8c8c8]')
              }
            >
              <div
                className="px-4 py-2 overflow-hidden text-center whitespace-normal transition-all duration-500 ease-linear rounded-md text-inherit text-ellipsis"
                style={{ fontSize: '130%' }}
              >
                <FaSearch
                  className="relative text-center whitespace-normal"
                  style={{ fontSize: '120%' }}
                />
              </div>
            </a>
          </Link>
          <Link legacyBehavior href="/ShipExkurs/firmen">
            <a
              className={
                'min-w-[62px] bg-transparent border-none relative flex items-center justify-center w-full m-h-[60px] mr-0 p-0 opacity-90 transition-all duration-500 ease-linear after:absolute after:top-0 after:w-4/5 after:h-[3px] after:bg-primary after:rounded-b-md after:shadow' +
                (router.pathname.startsWith('/ShipExkurs/firmen')
                  ? ' after:block text-white'
                  : ' after:hidden text-[#c8c8c8]')
              }
            >
              <div
                className="px-4 py-2 overflow-hidden text-center whitespace-normal transition-all duration-500 ease-linear rounded-md text-inherit text-ellipsis"
                style={{ fontSize: '130%' }}
              >
                <GiAlienSkull
                  className="relative text-center whitespace-normal"
                  style={{ fontSize: '130%' }}
                />
              </div>
            </a>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex-col relative flex items-center justify-center w-full min-h-[60px] mr-0 p-0 opacity-90 bg-transparent h-[43px] border-[1px] border-solid border-transparent cursor-pointer"
          >
            <span className="absolute w-[1px] h-[1px] p-0 m-[-1px] overflow-hidden whitespace-nowrap border-0 ">
              Toggle Navigation
            </span>
            <span
              className={
                'transform origin-[10%_10%] block w-[22px] h-[2px] bg-[#c8c8c8] rounded-[1px] transition-all duration-200 ease-linear ' +
                (mobileOpen ? 'rotate-45' : 'rotate-0')
              }
            ></span>
            <span
              className={
                'block w-[22px] h-[2px] bg-[#c8c8c8] rounded-[1px] transition-all duration-200 ease-linear mt-1 ' +
                (mobileOpen ? 'opacity-0' : 'opacity-100')
              }
            ></span>
            <span
              className={
                'transform rotate-0 origin-[10%_90%] block w-[22px] h-[2px] bg-[#c8c8c8] rounded-[1px] transition-all duration-200 ease-linear mt-1 ' +
                (mobileOpen ? '-rotate-45' : 'rotate-0')
              }
            ></span>
          </button>
        </div>
      </div>

      <nav
        className={
          'absolute top-0 right-0 w-full h-auto mt-[env(safe-area-inset-top)] lg:relative z-50 lg:w-[300px] min-w-[300px] lg:h-screen lg:top-auto lg:right-auto lg:mt-0 block print:hidden ' +
          (!mobileView && sidebarCollapsed ? 'lg:w-[80px] lg:min-w-[80px]' : '')
        }
      >
        <div
          className={
            'sidebar-scrollbar fixed w-[300px] lg:h-full top-0 lg:top-auto lg:r-auto bottom-0 lg:bottom-auto left-auto lg:left-0 h-screen max-h-screen lg:max-h-full pt-[env(safe-area-inset-top)] pl-[env(safe-area-inset-left)] lg:p-0 overflow-x-hidden overflow-y-auto bg-[rgba(39,43,48,.5)] border-r-[1px] border-solid border-r-[rgba(30,34,38,.5)] transition-[left] duration-500 ease-[right] ' +
            (mobileOpen ? ' right-0' : 'right-[-300px]') +
            (!mobileView && sidebarCollapsed ? ' w-[80px]' : '')
          }
          style={{ transition: 'left .5s ease,right .5s ease,width .5s ease' }}
        >
          <div className="relative min-h-full pb-[150px]">
            <ul className="pl-0 lg:pt-5 pt-[5px] pb-[10px] lg:pb-8 m-0 list-none">
              <li
                className="p-0 m-0 list-none group"
                data-tip
                data-for="HomeTip"
              >
                <Link legacyBehavior href="/ShipExkurs">
                  <a
                    className={
                      'group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                      (router.pathname == '/ShipExkurs'
                        ? 'after:block text-white '
                        : 'after:hidden text-[#afafaf] ') +
                      (!mobileView && sidebarCollapsed
                        ? 'py-[10px] pl-[25px] pr-[10px] text-2xl'
                        : '')
                    }
                  >
                    <div
                      className={
                        'relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear ' +
                        (!mobileView && sidebarCollapsed ? 'h-[30px]' : '')
                      }
                    >
                      <FaPlaceOfWorship className="min-w-[30px] text-center relative antialiased inline-block" />
                      <span
                        className={
                          'ml-[5px] ' +
                          (!mobileView && sidebarCollapsed ? 'hidden' : '')
                        }
                      >
                        {' '}
                        Ships{' '}
                      </span>
                      {!mobileView && sidebarCollapsed ? (
                        <ReactTooltip
                          id="HomeTip"
                          place="right"
                          effect="solid"
                          arrowColor="transparent"
                          type="dark"
                          padding="8px"
                        >
                          Home
                        </ReactTooltip>
                      ) : (
                        ''
                      )}
                    </div>
                  </a>
                </Link>
              </li>
              {/* <li
                className="p-0 m-0 list-none group"
                data-tip
                data-for="FirmenTip"
              >
                <Link legacyBehavior href="/ShipExkurs/firmen">
                  <a
                    className={
                      'group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                      (router.pathname.startsWith('/ShipExkurs/firmen')
                        ? 'after:block text-white '
                        : 'after:hidden text-[#afafaf] ') +
                      (!mobileView && sidebarCollapsed
                        ? 'py-[10px] pl-[25px] pr-[10px] text-2xl'
                        : '')
                    }
                  >
                    <div
                      className={
                        'relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear ' +
                        (!mobileView && sidebarCollapsed ? 'h-[30px]' : '')
                      }
                    >
                      <FaPlaceOfWorship className="min-w-[30px] text-center relative antialiased inline-block" />
                      <span
                        className={
                          'ml-[5px] ' +
                          (!mobileView && sidebarCollapsed ? 'hidden' : '')
                        }
                      >
                        {' '}
                        Firmen{' '}
                      </span>
                      {!mobileView && sidebarCollapsed ? (
                        <ReactTooltip
                          id="FirmenTip"
                          place="right"
                          effect="solid"
                          arrowColor="transparent"
                          type="dark"
                          padding="8px"
                        >
                          Firmen
                        </ReactTooltip>
                      ) : (
                        ''
                      )}
                    </div>
                  </a>
                </Link>
              </li> */}
            </ul>
            <ul className="absolute bottom-0 p-0 pb-[10px] lg:pb-5 m-0 list-none">
              <li
                className="p-0 m-0 list-none group"
                data-tip={!mobileView && sidebarCollapsed ? 'Zurück' : ''}
              >
                <div
                  className={
                    'group-hover:text-[#e2e2e2] hover:cursor-pointer relative block py-[10px] pl-[30px] pr-[15px] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                    (router.pathname == '/'
                      ? 'after:block text-white '
                      : 'after:hidden text-[#afafaf] ') +
                    (!mobileView && sidebarCollapsed
                      ? 'py-[10px] pl-[25px] pr-[10px] text-2xl'
                      : '')
                  }
                  onClick={() => router.back()}
                >
                  <div
                    className={
                      'relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear ' +
                      (!mobileView && sidebarCollapsed ? 'h-[30px]' : '')
                    }
                  >
                    <RiArrowGoBackLine className="min-w-[30px] text-center relative antialiased inline-block" />
                    <span
                      className={
                        'ml-[5px] ' +
                        (!mobileView && sidebarCollapsed ? 'hidden' : '')
                      }
                    >
                      {' '}
                      Zurück{' '}
                    </span>
                  </div>
                </div>
              </li>
              <li
                className={
                  'p-0 m-0 list-none group' + (mobileView ? ' hidden' : '')
                }
                data-tip={!mobileView && sidebarCollapsed ? 'Expand' : ''}
              >
                <a
                  className={
                    'group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] text-[#afafaf] pr-[15px] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent ' +
                    (sidebarCollapsed
                      ? 'py-[10px] pl-[25px] pr-[10px] text-2xl'
                      : '')
                  }
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                >
                  <div
                    className={
                      'relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear ' +
                      (sidebarCollapsed ? 'h-[30px]' : '')
                    }
                  >
                    <BsChevronDoubleLeft
                      className={
                        'min-w-[30px] text-center relative antialiased inline-block' +
                        (sidebarCollapsed ? ' transform rotate-180' : '')
                      }
                    />
                    <span
                      className={
                        'ml-[5px] ' + (sidebarCollapsed ? 'hidden' : '')
                      }
                    >
                      {' '}
                      Collapse{' '}
                    </span>
                  </div>
                </a>
              </li>
              <li className="min-h-[60px] list-none group">
                <Link legacyBehavior href="/">
                  <a className="group-hover:text-[#e2e2e2] text-[#afafaf] transition-all duration-500 ease-linear decoration-transparent">
                    <span
                      className={
                        'relative block py-[10px] pl-[30px] pr-[15px] text-lg whitespace-nowrap' +
                        (!mobileView && sidebarCollapsed ? ' w-16 h-16' : '')
                      }
                      style={{ transition: 'all .5s ease' }}
                    >
                      <div
                        className={
                          'absolute transition-all duration-500 ease-linear top-2.5 left-[30px] w-12 h-12' +
                          (!mobileView && sidebarCollapsed
                            ? ' top-auto left-5'
                            : '')
                        }
                      >
                        <MainLogo />
                      </div>
                      <span
                        className={
                          'block pt-[6px] pr-5 pl-[50px]' +
                          (!mobileView && sidebarCollapsed ? ' hidden' : '')
                        }
                      >
                        ArisCorp Homepage
                      </span>
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
