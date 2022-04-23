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
import { MdHistoryEdu, MdTimeline } from 'react-icons/md'
import { RiArrowGoBackLine } from 'react-icons/ri'
import { ImBook } from 'react-icons/im'
import { useState, useEffect, useRef } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import {
  BsCalendar3,
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
          <Link href="/VerseExkurs">
            <a
              className={
                'min-w-[62px] bg-transparent border-none relative flex items-center justify-center w-full m-h-[60px] mr-0 p-0 opacity-90 transition-all duration-500 ease-linear after:absolute after:top-0 after:w-4/5 after:h-[3px] after:bg-primary after:rounded-b-md after:shadow' +
                (router.pathname == '/VerseExkurs' ? '' : ' after:hidden')
              }
            >
              <div
                className="px-4 py-2 overflow-hidden text-center text-white whitespace-normal transition-all duration-500 ease-linear rounded-md text-ellipsis"
                style={{ fontSize: '130%' }}
              >
                <FaHome
                  className="relative text-center whitespace-normal"
                  style={{ fontSize: '130%' }}
                />
              </div>
            </a>
          </Link>
          <Link href="/VerseExkurs/firmen">
            <a
              className={
                'min-w-[62px] bg-transparent border-none relative flex items-center justify-center w-full m-h-[60px] mr-0 p-0 opacity-90 transition-all duration-500 ease-linear after:absolute after:top-0 after:w-4/5 after:h-[3px] after:bg-primary after:rounded-b-md after:shadow after:hidden' +
                (router.pathname == '/VerseExkurs/firmen'
                  ? ''
                  : ' after:hidden')
              }
            >
              <div
                className="py-2 px-4 whitespace-normal overflow-hidden text-[#c8c8c8] text-center text-ellipsis rounded-md transition-all duration-500 ease-linear"
                style={{ fontSize: '130%' }}
              >
                <FaPlaceOfWorship
                  className="relative text-center whitespace-normal"
                  style={{ fontSize: '130%' }}
                />
              </div>
            </a>
          </Link>
          <Link href="/VerseExkurs/search">
            <a
              className={
                'min-w-[62px] bg-transparent border-none relative flex items-center justify-center w-full m-h-[60px] mr-0 p-0 opacity-90 transition-all duration-500 ease-linear after:absolute after:top-0 after:w-4/5 after:h-[3px] after:bg-primary after:rounded-b-md after:shadow after:hidden' +
                (router.pathname == '/VerseExkurs/search'
                  ? ''
                  : ' after:hidden')
              }
            >
              <div
                className="py-2 px-4 whitespace-normal overflow-hidden text-[#c8c8c8] text-center text-ellipsis rounded-md transition-all duration-500 ease-linear"
                style={{ fontSize: '130%' }}
              >
                <FaSearch
                  className="relative text-center whitespace-normal"
                  style={{ fontSize: '120%' }}
                />
              </div>
            </a>
          </Link>
          <Link href="/VerseExkurs/alienrassen">
            <a
              className={
                'min-w-[62px] bg-transparent border-none relative flex items-center justify-center w-full m-h-[60px] mr-0 p-0 opacity-90 transition-all duration-500 ease-linear after:absolute after:top-0 after:w-4/5 after:h-[3px] after:bg-primary after:rounded-b-md after:shadow' +
                (router.pathname == '/VerseExkurs/alienrassen'
                  ? ''
                  : ' after:hidden')
              }
            >
              <div
                className="py-2 px-4 whitespace-normal overflow-hidden text-[#c8c8c8] text-center text-ellipsis rounded-md transition-all duration-500 ease-linear"
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
                data-tip={!mobileView && sidebarCollapsed ? 'Home' : ''}
              >
                <Link href="/VerseExkurs">
                  <a
                    className={
                      'group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                      (router.pathname == '/VerseExkurs'
                        ? 'after:block '
                        : 'after:hidden ') +
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
                      <FaHome className="min-w-[30px] text-center relative antialiased inline-block" />
                      <span
                        className={
                          'ml-[5px] ' +
                          (!mobileView && sidebarCollapsed ? 'hidden' : '')
                        }
                      >
                        {' '}
                        Home{' '}
                      </span>
                      {!mobileView && sidebarCollapsed ? <div></div> : ''}
                    </div>
                  </a>
                </Link>
              </li>
              <Disclosure as="li" className="p-0 m-0 list-none">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      as="a"
                      className={
                        'hover:text-[#e2e2e2] cursor-pointer relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent' +
                        (!mobileView && sidebarCollapsed
                          ? 'py-[10px] pl-[25px] pr-[10px] text-2xl'
                          : '')
                      }
                      data-tip={
                        !mobileView && sidebarCollapsed ? 'Geschichte' : ''
                      }
                    >
                      <div
                        className={
                          'relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear ' +
                          (!mobileView && sidebarCollapsed ? 'h-[30px]' : '')
                        }
                      >
                        <MdHistoryEdu className="min-w-[30px] text-center relative antialiased inline-block" />
                        <span
                          className={
                            'ml-[5px] ' +
                            (!mobileView && sidebarCollapsed ? 'hidden' : '')
                          }
                        >
                          {' '}
                          Geschichte{' '}
                        </span>
                      </div>
                      <span
                        className={
                          'absolute top-1/2 right-[20px] mt-[-10px]' +
                          (!mobileView && sidebarCollapsed ? 'hidden' : '')
                        }
                      >
                        <FaChevronRight
                          className={`${
                            open ? 'transform rotate-90' : ''
                          } transition-all duration-300 ease-linear antialiased ${
                            !mobileView && sidebarCollapsed ? 'hidden' : ''
                          }`}
                        />
                      </span>
                    </Disclosure.Button>

                    <Transition>
                      <Disclosure.Panel
                        as="ul"
                        className="mb-[10px] list-none relative overflow-hidden pl-0"
                      >
                        <Transition.Child
                          enter="transform transition-all duration-300 ease-linear"
                          enterFrom="transform h-0"
                          enterTo="transform h-[99px]"
                          leave="transform transition-all duration-300 ease-linear"
                          leaveFrom="transform h-[99px]"
                          leaveTo="transform h-0"
                        >
                          <li
                            className="p-0 m-0 list-none group"
                            data-tip
                            data-for="timelineTip"
                          >
                            <Link href="/VerseExkurs/timeline">
                              <a
                                className={
                                  'group-hover:text-[#e2e2e2] text-base relative block text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                                  (router.pathname == '/VerseExkurs/timeline'
                                    ? 'after:block '
                                    : 'after:hidden ') +
                                  (!mobileView && sidebarCollapsed
                                    ? 'py-[10px] pl-[25px] pr-[10px] text-2xl '
                                    : ' py-[10px] pl-10 pr-[15px] ')
                                }
                              >
                                <div
                                  className={
                                    'relative whitespace-nowrap ' +
                                    (!mobileView && sidebarCollapsed
                                      ? 'h-[30px]'
                                      : 'h-6')
                                  }
                                >
                                  <MdTimeline className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span
                                    className={
                                      'ml-[5px] ' +
                                      (!mobileView && sidebarCollapsed
                                        ? 'hidden'
                                        : '')
                                    }
                                  >
                                    {' '}
                                    Zeitleiste des Verse{' '}
                                  </span>
                                  {!mobileView && sidebarCollapsed ? (
                                    <ReactTooltip
                                      id="timelineTip"
                                      place="right"
                                      effect="solid"
                                      arrowColor="transparent"
                                      type="dark"
                                      padding="8px"
                                    >
                                      Zeitleiste des Verse
                                    </ReactTooltip>
                                  ) : (
                                    ''
                                  )}
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li className="h-[1px] list-none my-[5px] mx-[15px] bg-[#272b30]"></li>
                          <li
                            className="p-0 m-0 list-none group"
                            data-tip
                            data-for="oneDayInHistoryTip"
                          >
                            <Link href="/VerseExkurs/onedayinhistory">
                              <a
                                className={
                                  'group-hover:text-[#e2e2e2] text-base relative block text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                                  (router.pathname ==
                                  '/VerseExkurs/onedayinhistory'
                                    ? 'after:block '
                                    : 'after:hidden ') +
                                  (!mobileView && sidebarCollapsed
                                    ? 'py-[10px] pl-[25px] pr-[10px] text-2xl '
                                    : ' py-[10px] pl-10 pr-[15px] ')
                                }
                              >
                                <div
                                  className={
                                    'relative h-6 whitespace-nowrap ' +
                                    (!mobileView && sidebarCollapsed
                                      ? 'h-[30px]'
                                      : 'h-6')
                                  }
                                >
                                  <BsCalendar3 className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span
                                    className={
                                      'ml-[5px] ' +
                                      (!mobileView && sidebarCollapsed
                                        ? 'hidden'
                                        : '')
                                    }
                                  >
                                    {' '}
                                    Ein Tag in der Geschichte{' '}
                                  </span>
                                  {!mobileView && sidebarCollapsed ? (
                                    <ReactTooltip
                                      id="oneDayInHistoryTip"
                                      place="right"
                                      effect="solid"
                                      arrowColor="transparent"
                                      type="dark"
                                      padding="8px"
                                    >
                                      Ein Tag in der Geschichte
                                    </ReactTooltip>
                                  ) : (
                                    ''
                                  )}
                                </div>
                              </a>
                            </Link>
                          </li>
                        </Transition.Child>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
              <li
                className="p-0 m-0 list-none group"
                data-tip={!mobileView && sidebarCollapsed ? 'Home' : ''}
              >
                <Link href="/VerseExkurs/uee">
                  <a
                    className={
                      'group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                      (router.pathname == '/VerseExkurs/uee'
                        ? 'after:block '
                        : 'after:hidden ') +
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
                      <BsShieldShaded className="min-w-[30px] text-center relative antialiased inline-block" />
                      <span
                        className={
                          'ml-[5px] ' +
                          (!mobileView && sidebarCollapsed ? 'hidden' : '')
                        }
                      >
                        {' '}
                        UEE{' '}
                      </span>
                      {!mobileView && sidebarCollapsed ? <div></div> : ''}
                    </div>
                  </a>
                </Link>
              </li>
              <li
                className="p-0 m-0 list-none group"
                data-tip={!mobileView && sidebarCollapsed ? 'ARK Starmap' : ''}
              >
                <Link href="/VerseExkurs/starmap">
                  <a
                    className={
                      'group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                      (router.pathname == '/VerseExkurs/starmap'
                        ? 'after:block '
                        : 'after:hidden ') +
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
                      <GiSolarSystem className="min-w-[30px] text-center relative antialiased inline-block" />
                      <span
                        className={
                          'ml-[5px] ' +
                          (!mobileView && sidebarCollapsed ? 'hidden' : '')
                        }
                      >
                        {' '}
                        ARK Starmap{' '}
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
              <Disclosure as="li" className="p-0 m-0 list-none">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      as="a"
                      className={
                        'hover:text-[#e2e2e2] cursor-pointer relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent' +
                        (!mobileView && sidebarCollapsed
                          ? 'py-[10px] pl-[25px] pr-[10px] text-2xl'
                          : '')
                      }
                      data-tip={
                        !mobileView && sidebarCollapsed ? 'Alienrassen' : ''
                      }
                    >
                      <div
                        className={
                          'relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear ' +
                          (!mobileView && sidebarCollapsed ? 'h-[30px]' : '')
                        }
                      >
                        <GiAlienSkull className="min-w-[30px] text-center relative antialiased inline-block" />
                        <span
                          className={
                            'ml-[5px] ' +
                            (!mobileView && sidebarCollapsed ? 'hidden' : '')
                          }
                        >
                          {' '}
                          Alienrassen{' '}
                        </span>
                      </div>
                      <span
                        className={
                          'absolute top-1/2 right-[20px] mt-[-10px]' +
                          (!mobileView && sidebarCollapsed ? 'hidden' : '')
                        }
                      >
                        <FaChevronRight
                          className={`${
                            open ? 'transform rotate-90' : ''
                          } transition-all duration-300 ease-linear antialiased ${
                            !mobileView && sidebarCollapsed ? 'hidden' : ''
                          }`}
                        />
                      </span>
                    </Disclosure.Button>

                    <Transition>
                      <Disclosure.Panel
                        as="ul"
                        className="mb-[10px] list-none relative overflow-hidden pl-0"
                      >
                        <Transition.Child
                          enter="transform transition-all duration-300 ease-linear"
                          enterFrom="transform h-0"
                          enterTo="transform h-[275px]"
                          leave="transform transition-all duration-300 ease-linear"
                          leaveFrom="transform h-[275px]"
                          leaveTo="transform h-0"
                        >
                          <li
                            className="p-0 m-0 list-none group"
                            data-tip
                            data-for="BanuTip"
                          >
                            <Link href="/VerseExkurs/banu">
                              <a
                                className={
                                  'group-hover:text-[#e2e2e2] text-base relative block text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                                  (router.pathname == '/VerseExkurs/banu'
                                    ? 'after:block '
                                    : 'after:hidden ') +
                                  (!mobileView && sidebarCollapsed
                                    ? 'py-[10px] pl-[25px] pr-[10px] text-2xl '
                                    : ' py-[10px] pl-10 pr-[15px] ')
                                }
                              >
                                <div
                                  className={
                                    'relative whitespace-nowrap ' +
                                    (!mobileView && sidebarCollapsed
                                      ? 'h-[30px]'
                                      : 'h-6')
                                  }
                                >
                                  <GiAlienSkull className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span
                                    className={
                                      'ml-[5px] ' +
                                      (!mobileView && sidebarCollapsed
                                        ? 'hidden'
                                        : '')
                                    }
                                  >
                                    {' '}
                                    Banu{' '}
                                  </span>
                                  {!mobileView && sidebarCollapsed ? (
                                    <ReactTooltip
                                      id="BanuTip"
                                      place="right"
                                      effect="solid"
                                      arrowColor="transparent"
                                      type="dark"
                                      padding="8px"
                                    >
                                      Banu
                                    </ReactTooltip>
                                  ) : (
                                    ''
                                  )}
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li
                            className="p-0 m-0 list-none group"
                            data-tip
                            data-for="TevarinTip"
                          >
                            <Link href="/VerseExkurs/tevarin">
                              <a
                                className={
                                  'group-hover:text-[#e2e2e2] text-base relative block text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                                  (router.pathname == '/VerseExkurs/tevarin'
                                    ? 'after:block '
                                    : 'after:hidden ') +
                                  (!mobileView && sidebarCollapsed
                                    ? 'py-[10px] pl-[25px] pr-[10px] text-2xl '
                                    : ' py-[10px] pl-10 pr-[15px] ')
                                }
                              >
                                <div
                                  className={
                                    'relative whitespace-nowrap ' +
                                    (!mobileView && sidebarCollapsed
                                      ? 'h-[30px]'
                                      : 'h-6')
                                  }
                                >
                                  <GiAlienSkull className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span
                                    className={
                                      'ml-[5px] ' +
                                      (!mobileView && sidebarCollapsed
                                        ? 'hidden'
                                        : '')
                                    }
                                  >
                                    {' '}
                                    Tevarin{' '}
                                  </span>
                                  {!mobileView && sidebarCollapsed ? (
                                    <ReactTooltip
                                      id="TevarinTip"
                                      place="right"
                                      effect="solid"
                                      arrowColor="transparent"
                                      type="dark"
                                      padding="8px"
                                    >
                                      Tevarin
                                    </ReactTooltip>
                                  ) : (
                                    ''
                                  )}
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li
                            className="p-0 m-0 list-none group"
                            data-tip
                            data-for="VanduulTip"
                          >
                            <Link href="/VerseExkurs/vanduul">
                              <a
                                className={
                                  'group-hover:text-[#e2e2e2] text-base relative block text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                                  (router.pathname == '/VerseExkurs/vanduul'
                                    ? 'after:block '
                                    : 'after:hidden ') +
                                  (!mobileView && sidebarCollapsed
                                    ? 'py-[10px] pl-[25px] pr-[10px] text-2xl '
                                    : ' py-[10px] pl-10 pr-[15px] ')
                                }
                              >
                                <div
                                  className={
                                    'relative whitespace-nowrap ' +
                                    (!mobileView && sidebarCollapsed
                                      ? 'h-[30px]'
                                      : 'h-6')
                                  }
                                >
                                  <GiAlienSkull className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span
                                    className={
                                      'ml-[5px] ' +
                                      (!mobileView && sidebarCollapsed
                                        ? 'hidden'
                                        : '')
                                    }
                                  >
                                    {' '}
                                    Vanduul{' '}
                                  </span>
                                  {!mobileView && sidebarCollapsed ? (
                                    <ReactTooltip
                                      id="VanduulTip"
                                      place="right"
                                      effect="solid"
                                      arrowColor="transparent"
                                      type="dark"
                                      padding="8px"
                                    >
                                      Vanduul
                                    </ReactTooltip>
                                  ) : (
                                    ''
                                  )}
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li
                            className="p-0 m-0 list-none group"
                            data-tip
                            data-for="XiAnTip"
                          >
                            <Link href="/VerseExkurs/xian">
                              <a
                                className={
                                  'group-hover:text-[#e2e2e2] text-base relative block text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                                  (router.pathname == '/VerseExkurs/xian'
                                    ? 'after:block '
                                    : 'after:hidden ') +
                                  (!mobileView && sidebarCollapsed
                                    ? 'py-[10px] pl-[25px] pr-[10px] text-2xl '
                                    : ' py-[10px] pl-10 pr-[15px] ')
                                }
                              >
                                <div
                                  className={
                                    'relative whitespace-nowrap ' +
                                    (!mobileView && sidebarCollapsed
                                      ? 'h-[30px]'
                                      : 'h-6')
                                  }
                                >
                                  <GiAlienSkull className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span
                                    className={
                                      'ml-[5px] ' +
                                      (!mobileView && sidebarCollapsed
                                        ? 'hidden'
                                        : '')
                                    }
                                  >
                                    {' '}
                                    Xi{"'"}An{' '}
                                  </span>
                                  {!mobileView && sidebarCollapsed ? (
                                    <ReactTooltip
                                      id="XiAnTip"
                                      place="right"
                                      effect="solid"
                                      arrowColor="transparent"
                                      type="dark"
                                      padding="8px"
                                    >
                                      Xi{"'"}An
                                    </ReactTooltip>
                                  ) : (
                                    ''
                                  )}
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li className="h-[1px] my-[5px] mx-[15px] bg-[#272b30] list-none"></li>
                          <li
                            className="p-0 m-0 list-none group"
                            data-tip
                            data-for="BiestariumTip"
                          >
                            <Link href="/VerseExkurs/biestarium">
                              <a
                                className={
                                  'group-hover:text-[#e2e2e2] text-base relative block text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                                  (router.pathname == '/VerseExkurs/biestarium'
                                    ? 'after:block '
                                    : 'after:hidden ') +
                                  (!mobileView && sidebarCollapsed
                                    ? 'py-[10px] pl-[25px] pr-[10px] text-2xl '
                                    : ' py-[10px] pl-10 pr-[15px] ')
                                }
                              >
                                <div
                                  className={
                                    'relative h-6 whitespace-nowrap ' +
                                    (!mobileView && sidebarCollapsed
                                      ? 'h-[30px]'
                                      : 'h-6')
                                  }
                                >
                                  <GiAlienSkull className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span
                                    className={
                                      'ml-[5px] ' +
                                      (!mobileView && sidebarCollapsed
                                        ? 'hidden'
                                        : '')
                                    }
                                  >
                                    {' '}
                                    Biestarium{' '}
                                  </span>
                                  {!mobileView && sidebarCollapsed ? (
                                    <ReactTooltip
                                      id="BiestariumTip"
                                      place="right"
                                      effect="solid"
                                      arrowColor="transparent"
                                      type="dark"
                                      padding="8px"
                                    >
                                      Biestarium
                                    </ReactTooltip>
                                  ) : (
                                    ''
                                  )}
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li
                            className="p-0 m-0 list-none group"
                            data-tip
                            data-for="PflanzenTip"
                          >
                            <Link href="/VerseExkurs/pflanzen">
                              <a
                                className={
                                  'group-hover:text-[#e2e2e2] text-base relative block text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                                  (router.pathname == '/VerseExkurs/pflanzen'
                                    ? 'after:block '
                                    : 'after:hidden ') +
                                  (!mobileView && sidebarCollapsed
                                    ? 'py-[10px] pl-[25px] pr-[10px] text-2xl '
                                    : ' py-[10px] pl-10 pr-[15px] ')
                                }
                              >
                                <div
                                  className={
                                    'relative h-6 whitespace-nowrap ' +
                                    (!mobileView && sidebarCollapsed
                                      ? 'h-[30px]'
                                      : 'h-6')
                                  }
                                >
                                  <GiAlienSkull className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span
                                    className={
                                      'ml-[5px] ' +
                                      (!mobileView && sidebarCollapsed
                                        ? 'hidden'
                                        : '')
                                    }
                                  >
                                    {' '}
                                    Pflanzen{' '}
                                  </span>
                                  {!mobileView && sidebarCollapsed ? (
                                    <ReactTooltip
                                      id="PflanzenTip"
                                      place="right"
                                      effect="solid"
                                      arrowColor="transparent"
                                      type="dark"
                                      padding="8px"
                                    >
                                      Pflanzen
                                    </ReactTooltip>
                                  ) : (
                                    ''
                                  )}
                                </div>
                              </a>
                            </Link>
                          </li>
                        </Transition.Child>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
              {/* <Disclosure as="li" className="p-0 m-0 list-none">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      as="a"
                      className={
                        'hover:text-[#e2e2e2] cursor-pointer relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent' +
                        (!mobileView && sidebarCollapsed
                          ? 'py-[10px] pl-[25px] pr-[10px] text-2xl'
                          : '')
                      }
                      data-tip={!mobileView && sidebarCollapsed ? 'Firmen' : ''}
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
                      </div>
                      <span
                        className={
                          'absolute top-1/2 right-[20px] mt-[-10px]' +
                          (!mobileView && sidebarCollapsed ? 'hidden' : '')
                        }
                      >
                        <FaChevronRight
                          className={`${
                            open ? 'transform rotate-90' : ''
                          } transition-all duration-300 ease-linear antialiased ${
                            !mobileView && sidebarCollapsed ? 'hidden' : ''
                          }`}
                        />
                      </span>
                    </Disclosure.Button>

                    <Transition>
                      <Disclosure.Panel
                        as="ul"
                        className="mb-[10px] list-none relative overflow-hidden pl-0"
                      >
                        <Transition.Child
                          enter="transform transition-all duration-300 ease-linear"
                          enterFrom="transform h-0"
                          enterTo="transform h-[275px]"
                          leave="transform transition-all duration-300 ease-linear"
                          leaveFrom="transform h-[275px]"
                          leaveTo="transform h-0"
                        >
                          <li
                            className="p-0 m-0 list-none group"
                            data-tip
                            data-for="HerstellerTip"
                          >
                            <Link href="/VerseExkurs/hersteller">
                              <a
                                className={
                                  'group-hover:text-[#e2e2e2] text-base relative block text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                                  (router.pathname == '/VerseExkurs/hersteller'
                                    ? 'after:block '
                                    : 'after:hidden ') +
                                  (!mobileView && sidebarCollapsed
                                    ? 'py-[10px] pl-[25px] pr-[10px] text-2xl '
                                    : ' py-[10px] pl-10 pr-[15px] ')
                                }
                              >
                                <div
                                  className={
                                    'relative whitespace-nowrap ' +
                                    (!mobileView && sidebarCollapsed
                                      ? 'h-[30px]'
                                      : 'h-6')
                                  }
                                >
                                  <MdTimeline className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span
                                    className={
                                      'ml-[5px] ' +
                                      (!mobileView && sidebarCollapsed
                                        ? 'hidden'
                                        : '')
                                    }
                                  >
                                    {' '}
                                    Hersteller{' '}
                                  </span>
                                  {!mobileView && sidebarCollapsed ? (
                                    <ReactTooltip
                                      id="HerstellerTip"
                                      place="right"
                                      effect="solid"
                                      arrowColor="transparent"
                                      type="dark"
                                      padding="8px"
                                    >
                                      Hersteller
                                    </ReactTooltip>
                                  ) : (
                                    ''
                                  )}
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li
                            className="p-0 m-0 list-none group"
                            data-tip
                            data-for="DienstleisterTip"
                          >
                            <Link href="/VerseExkurs/dienstleister">
                              <a
                                className={
                                  'group-hover:text-[#e2e2e2] text-base relative block text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                                  (router.pathname == '/VerseExkurs/dienstleister'
                                    ? 'after:block '
                                    : 'after:hidden ') +
                                  (!mobileView && sidebarCollapsed
                                    ? 'py-[10px] pl-[25px] pr-[10px] text-2xl '
                                    : ' py-[10px] pl-10 pr-[15px] ')
                                }
                              >
                                <div
                                  className={
                                    'relative whitespace-nowrap ' +
                                    (!mobileView && sidebarCollapsed
                                      ? 'h-[30px]'
                                      : 'h-6')
                                  }
                                >
                                  <MdTimeline className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span
                                    className={
                                      'ml-[5px] ' +
                                      (!mobileView && sidebarCollapsed
                                        ? 'hidden'
                                        : '')
                                    }
                                  >
                                    {' '}
                                    Dienstleister{' '}
                                  </span>
                                  {!mobileView && sidebarCollapsed ? (
                                    <ReactTooltip
                                      id="DienstleisterTip"
                                      place="right"
                                      effect="solid"
                                      arrowColor="transparent"
                                      type="dark"
                                      padding="8px"
                                    >
                                      Dienstleister
                                    </ReactTooltip>
                                  ) : (
                                    ''
                                  )}
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li
                            className="p-0 m-0 list-none group"
                            data-tip
                            data-for="GeschaefteTip"
                          >
                            <Link href="/VerseExkurs/geschafte">
                              <a
                                className={
                                  'group-hover:text-[#e2e2e2] text-base relative block text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                                  (router.pathname ==
                                  '/VerseExkurs/Firmen/geschafte'
                                    ? 'after:block '
                                    : 'after:hidden ') +
                                  (!mobileView && sidebarCollapsed
                                    ? 'py-[10px] pl-[25px] pr-[10px] text-2xl '
                                    : ' py-[10px] pl-10 pr-[15px] ')
                                }
                              >
                                <div
                                  className={
                                    'relative whitespace-nowrap ' +
                                    (!mobileView && sidebarCollapsed
                                      ? 'h-[30px]'
                                      : 'h-6')
                                  }
                                >
                                  <MdTimeline className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span
                                    className={
                                      'ml-[5px] ' +
                                      (!mobileView && sidebarCollapsed
                                        ? 'hidden'
                                        : '')
                                    }
                                  >
                                    {' '}
                                    Geschäfte{' '}
                                  </span>
                                  {!mobileView && sidebarCollapsed ? (
                                    <ReactTooltip
                                      id="GeschaefteTip"
                                      place="right"
                                      effect="solid"
                                      arrowColor="transparent"
                                      type="dark"
                                      padding="8px"
                                    >
                                      Geschäfte
                                    </ReactTooltip>
                                  ) : (
                                    ''
                                  )}
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li
                            className="p-0 m-0 list-none group"
                            data-tip
                            data-for="OrganisationenTip"
                          >
                            <Link href="/VerseExkurs/organisationen">
                              <a
                                className={
                                  'group-hover:text-[#e2e2e2] text-base relative block text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                                  (router.pathname ==
                                  '/VerseExkurs/organisationen'
                                    ? 'after:block '
                                    : 'after:hidden ') +
                                  (!mobileView && sidebarCollapsed
                                    ? 'py-[10px] pl-[25px] pr-[10px] text-2xl '
                                    : ' py-[10px] pl-10 pr-[15px] ')
                                }
                              >
                                <div
                                  className={
                                    'relative h-6 whitespace-nowrap ' +
                                    (!mobileView && sidebarCollapsed
                                      ? 'h-[30px]'
                                      : 'h-6')
                                  }
                                >
                                  <FaExchangeAlt className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span
                                    className={
                                      'ml-[5px] ' +
                                      (!mobileView && sidebarCollapsed
                                        ? 'hidden'
                                        : '')
                                    }
                                  >
                                    {' '}
                                    Organisationen{' '}
                                  </span>
                                  {!mobileView && sidebarCollapsed ? (
                                    <ReactTooltip
                                      id="OrganisationenTip"
                                      place="right"
                                      effect="solid"
                                      arrowColor="transparent"
                                      type="dark"
                                      padding="8px"
                                    >
                                      Organisationen
                                    </ReactTooltip>
                                  ) : (
                                    ''
                                  )}
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li className="h-[1px] my-[5px] mx-[15px] bg-[#272b30] list-none"></li>
                          <li
                            className="p-0 m-0 list-none group"
                            data-tip
                            data-for="VerschiedeneTip"
                          >
                            <Link href="/VerseExkurs/verschiedene">
                              <a
                                className={
                                  'group-hover:text-[#e2e2e2] text-base relative block text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                                  (router.pathname == '/VerseExkurs/verschiedene'
                                    ? 'after:block '
                                    : 'after:hidden ') +
                                  (!mobileView && sidebarCollapsed
                                    ? 'py-[10px] pl-[25px] pr-[10px] text-2xl '
                                    : ' py-[10px] pl-10 pr-[15px] ')
                                }
                              >
                                <div
                                  className={
                                    'relative h-6 whitespace-nowrap ' +
                                    (!mobileView && sidebarCollapsed
                                      ? 'h-[30px]'
                                      : 'h-6')
                                  }
                                >
                                  <FaExchangeAlt className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span
                                    className={
                                      'ml-[5px] ' +
                                      (!mobileView && sidebarCollapsed
                                        ? 'hidden'
                                        : '')
                                    }
                                  >
                                    {' '}
                                    Verschiedene{' '}
                                  </span>
                                  {!mobileView && sidebarCollapsed ? (
                                    <ReactTooltip
                                      id="VerschiedeneTip"
                                      place="right"
                                      effect="solid"
                                      arrowColor="transparent"
                                      type="dark"
                                      padding="8px"
                                    >
                                      Verschiedene
                                    </ReactTooltip>
                                  ) : (
                                    ''
                                  )}
                                </div>
                              </a>
                            </Link>
                          </li>
                        </Transition.Child>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure> */}
              <li
                className="p-0 m-0 list-none group"
                data-tip={!mobileView && sidebarCollapsed ? 'Firmen' : ''}
              >
                <Link href="/VerseExkurs/firmen">
                  <a
                    className={
                      'group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                      (router.pathname == '/VerseExkurs/firmen'
                        ? 'after:block '
                        : 'after:hidden ') +
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
                    </div>
                  </a>
                </Link>
              </li>
              <li
                className="p-0 m-0 list-none group"
                data-tip={!mobileView && sidebarCollapsed ? 'Technologie' : ''}
              >
                <Link href="/VerseExkurs/technologie">
                  <a
                    className={
                      'group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                      (router.pathname == '/VerseExkurs/technologie'
                        ? 'after:block '
                        : 'after:hidden ') +
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
                      <FiCpu className="min-w-[30px] text-center relative antialiased inline-block" />
                      <span
                        className={
                          'ml-[5px] ' +
                          (!mobileView && sidebarCollapsed ? 'hidden' : '')
                        }
                      >
                        {' '}
                        Technologie{' '}
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
              <li
                className="p-0 m-0 list-none group"
                data-tip={!mobileView && sidebarCollapsed ? 'Spectrum' : ''}
              >
                <Link href="/VerseExkurs/spectrum">
                  <a
                    className={
                      'group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                      (router.pathname == '/VerseExkurs/spectrum'
                        ? 'after:block '
                        : 'after:hidden ') +
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
                      <BsTriangleFill className="min-w-[30px] text-center relative antialiased inline-block" />
                      <span
                        className={
                          'ml-[5px] ' +
                          (!mobileView && sidebarCollapsed ? 'hidden' : '')
                        }
                      >
                        {' '}
                        Spectrum{' '}
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
              <li
                className="p-0 m-0 list-none group"
                data-tip={!mobileView && sidebarCollapsed ? 'Literatur' : ''}
              >
                <Link href="/VerseExkurs/literatur">
                  <a
                    className={
                      'group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                      (router.pathname == '/VerseExkurs/literatur'
                        ? 'after:block '
                        : 'after:hidden ') +
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
                      <ImBook className="min-w-[30px] text-center relative antialiased inline-block" />
                      <span
                        className={
                          'ml-[5px] ' +
                          (!mobileView && sidebarCollapsed ? 'hidden' : '')
                        }
                      >
                        {' '}
                        Literatur{' '}
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="absolute bottom-0 p-0 pb-[10px] lg:pb-5 m-0 list-none">
              <li
                className="p-0 m-0 list-none group"
                data-tip={!mobileView && sidebarCollapsed ? 'Zurück' : ''}
              >
                <Link href="/">
                  <a
                    className={
                      'group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                      (router.pathname == '/'
                        ? 'after:block '
                        : 'after:hidden ') +
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
                  </a>
                </Link>
              </li>
              <li
                className={
                  'p-0 m-0 list-none group' + (mobileView ? ' hidden' : '')
                }
                data-tip={!mobileView && sidebarCollapsed ? 'Expand' : ''}
              >
                <a
                  className={
                    'group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent ' +
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
              <li className="min-h-[60px] list-none">
                <Link href="/">
                  <a className="decoration-transparent">
                    <span
                      className={
                        'relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap' +
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
                        ArisCorp VerseExkurs
                      </span>
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          {router.pathname == '/VerseExkurs/technologie' ? (
            <div className="z-50">
              <ReactTooltip
                place="right"
                effect="solid"
                arrowColor="transparent"
                type="dark"
                padding="8px"
              />
            </div>
          ) : null}
        </div>
      </nav>
    </>
  )
}
