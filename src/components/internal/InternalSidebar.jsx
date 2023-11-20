import Link from 'next/link'
import Image from 'next/image'
import {
  FaHome,
  FaChevronRight,
  FaPlaceOfWorship,
  FaExchangeAlt,
  FaSearch,
  FaRegClipboard,
  FaSpaceShuttle,
} from 'react-icons/fa'
import { GiAlienSkull, GiSolarSystem } from 'react-icons/gi'
import { FiCpu, FiLogOut } from 'react-icons/fi'
import { MdGroups, MdHistoryEdu, MdOutlineConnectingAirports, MdOutlineSatelliteAlt } from 'react-icons/md'
import { RiAdminLine, RiArrowGoBackLine } from 'react-icons/ri'
import { ImBook } from 'react-icons/im'
import { useState, useEffect, useRef } from 'react'
import {
  BsCalendar3,
  BsChevronDoubleLeft,
  BsShieldShaded,
  BsTriangleFill,
} from 'react-icons/bs'
import {
  BiEdit, BiUserCircle
} from 'react-icons/bi'
import {
  HiOutlineRocketLaunch
} from 'react-icons/hi2'
import MainLogo from '../icons/MainLogo'
import { useRouter } from 'next/router'
import ReactTooltip from 'react-tooltip'
import { AiOutlineMail } from 'react-icons/ai'
import { signOut, useSession } from 'next-auth/react'
import Modal from 'components/modal'
import DefaultButton from 'components/DefaultButton'
import HangarIcon from 'components/icons/HangarIcon'

export default function Sidebar ({ changes }) {
  const router = useRouter()
  const size = useWindowSize()
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { data: sessionData } = useSession()
  const [modal, setModal] = useState(false)
  const [modalType, setModalType] = useState()
  const [modalStore, setModalStore] = useState()

  function useWindowSize () {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    })
    useEffect(() => {
      // Handler to call on window resize
      function handleResize () {
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

  function openLeaveModal (event, path, action) {
    if (action == "logout") {
      setModal(true)
      setModalType("cancel")
      setModalStore({action: "logout"})
      return
    }
    event.preventDefault()
    setModal(true)
    setModalType("cancel")
    setModalStore(path)
  }

  function closeModal () {
    setModal(false)
    setTimeout(() => {
      setModalType("")
    }, 600);
  }

  return (
    <>
      <Modal
        state={modal}
        setState={setModal}
        title={
          modalType == 'cancel' && 'Änderungen löschen?'
        }
        closeFunction={closeModal}
      >
        <div className='mb-2'>
          {modalType == 'cancel' &&
            <div className='px-8'>
              <h3>Bist du sicher, dass du die Änderungen löschen möchtest?</h3>
              <div className='w-full mt-8 space-x-12'>
                <DefaultButton animate agree action={closeModal}>
                  Nein!
                </DefaultButton>
                <DefaultButton animate danger action={() => closeModal() + (typeof modalStore == "string" ? router.push("/internal" + (modalStore ? modalStore : "")) : (modalStore.action == "logout" ? signOut({ callbackUrl: '/' }) : null))}>
                  Ja!
                </DefaultButton>
              </div>
            </div>
          }
        </div>
      </Modal>
      <div
        className={
          'fixed bottom-0 z-50 w-full lg:hidden print:hidden ' +
          (mobileOpen ? 'right-[300px]' : 'right-0')
        }
        style={{ transition: 'left .5s ease,right .5s ease,width .5s ease' }}
      >
        <div className="flex items-stretch justify-between min-h-[60px] pb-5 bg-[rgba(23,25,28,.95)] border-t-[1px] border-solid border-t-[rgba(30,34,38,.5)]">
          <Link legacyBehavior href="/internal">
            <a
              className={
                'min-w-[62px] bg-transparent border-none relative flex items-center justify-center w-full m-h-[60px] mr-0 p-0 opacity-90 transition-all duration-500 ease-linear after:absolute after:top-0 after:w-4/5 after:h-[3px] after:bg-primary after:rounded-b-md after:shadow' +
                (router.pathname == '/internal'
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
                <Link legacyBehavior href="/internal">
                  <a
                    className={
                      'group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                      (router.pathname == '/internal'
                        ? 'after:block text-white '
                        : 'after:hidden text-[#afafaf] ') +
                      (!mobileView && sidebarCollapsed
                        ? 'py-[10px] pl-[25px] pr-[10px] text-2xl'
                        : '')
                    }
                    onClick={(e) => changes ? openLeaveModal(e, "") : e}
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
                data-for="EditorTip"
              >
                <Link legacyBehavior href="/internal/posts">
                  <a
                    className={
                      'group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                      (router.pathname.startsWith('/internal/posts')
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
                      <MdOutlineSatelliteAlt className="min-w-[30px] rotate-90 text-center relative antialiased inline-block" />
                      <span
                        className={
                          'ml-[5px] ' +
                          (!mobileView && sidebarCollapsed ? 'hidden' : '')
                        }
                      >
                        {' '}
                        Beiträge{' '}
                      </span>
                      {!mobileView && sidebarCollapsed ? (
                        <ReactTooltip
                          id="EditorTip"
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
              </li> */}
              {/* <li
                className="p-0 m-0 list-none group"
                data-tip
                data-for="DepartmentsTip"
              >
                <Link legacyBehavior href="/internal/departments">
                  <a
                    className={
                      'group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                      (router.pathname.startsWith('/internal/departments')
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
                      <FaRegClipboard className="min-w-[30px] text-center relative antialiased inline-block" />
                      <span
                        className={
                          'ml-[5px] ' +
                          (!mobileView && sidebarCollapsed ? 'hidden' : '')
                        }
                      >
                        {' '}
                        Abteilungsboards{' '}
                      </span>
                      {!mobileView && sidebarCollapsed ? (
                        <ReactTooltip
                          id="DepartmentsTip"
                          place="right"
                          effect="solid"
                          arrowColor="transparent"
                          type="dark"
                          padding="8px"
                        >
                          Abteilungsboards
                        </ReactTooltip>
                      ) : (
                        ''
                      )}
                    </div>
                  </a>
                </Link>
              </li> */}
              {/* <li
                className="p-0 m-0 list-none group"
                data-tip
                data-for="MissionTip"
              >
                <Link legacyBehavior href="/internal/mission-control">
                  <a
                    className={
                      'group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                      (router.pathname.startsWith('/internal/mission-control')
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
                      <HiOutlineRocketLaunch className="min-w-[30px] text-center relative antialiased inline-block" />
                      <span
                        className={
                          'ml-[5px] ' +
                          (!mobileView && sidebarCollapsed ? 'hidden' : '')
                        }
                      >
                        {' '}
                        Auftragsverwaltung{' '}
                      </span>
                      {!mobileView && sidebarCollapsed ? (
                        <ReactTooltip
                          id="MissionTip"
                          place="right"
                          effect="solid"
                          arrowColor="transparent"
                          type="dark"
                          padding="8px"
                        >
                          Auftragsverwaltung
                        </ReactTooltip>
                      ) : (
                        ''
                      )}
                    </div>
                  </a>
                </Link>
              </li> */}
              <li
                className="p-0 m-0 list-none group"
                data-tip
                data-for="FleetTip"
              >
                <Link legacyBehavior href="/internal/fleet">
                  <a
                    className={
                      'group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                      (router.pathname.startsWith('/internal/fleet')
                        ? 'after:block text-white '
                        : 'after:hidden text-[#afafaf] ') +
                      (!mobileView && sidebarCollapsed
                        ? 'py-[10px] pl-[25px] pr-[10px] text-2xl'
                        : '')
                    }
                    onClick={(e) => changes ? openLeaveModal(e, "/fleet") : e}
                  >
                    <div
                      className={
                        'relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear ' +
                        (!mobileView && sidebarCollapsed ? 'h-[30px]' : '')
                      }
                    >
                      <FaSpaceShuttle className="min-w-[30px] text-center relative antialiased inline-block" />
                      <span
                        className={
                          'ml-[5px] ' +
                          (!mobileView && sidebarCollapsed ? 'hidden' : '')
                        }
                      >
                        {' '}
                        Flotte{' '}
                      </span>
                      {!mobileView && sidebarCollapsed ? (
                        <ReactTooltip
                          id="FleetTip"
                          place="right"
                          effect="solid"
                          arrowColor="transparent"
                          type="dark"
                          padding="8px"
                        >
                          Flotte
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
                data-for="MembersTip"
              >
                <Link legacyBehavior href="/internal/members">
                  <a
                    className={
                      'group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                      ((router.pathname.startsWith('/internal/members') || router.pathname.startsWith('/internal/hangar/') || router.pathname.startsWith('/internal/biografie/'))
                        ? 'after:block text-white '
                        : 'after:hidden text-[#afafaf] ') +
                      (!mobileView && sidebarCollapsed
                        ? 'py-[10px] pl-[25px] pr-[10px] text-2xl'
                        : '')
                    }
                    onClick={(e) => changes ? openLeaveModal(e, "/members") : e}
                  >
                    <div
                      className={
                        'relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear ' +
                        (!mobileView && sidebarCollapsed ? 'h-[30px]' : '')
                      }
                    >
                      <MdGroups className="min-w-[30px] text-center relative antialiased inline-block" />
                      <span
                        className={
                          'ml-[5px] ' +
                          (!mobileView && sidebarCollapsed ? 'hidden' : '')
                        }
                      >
                        {' '}
                        Mitglieder{' '}
                      </span>
                      {!mobileView && sidebarCollapsed ? (
                        <ReactTooltip
                          id="MembersTip"
                          place="right"
                          effect="solid"
                          arrowColor="transparent"
                          type="dark"
                          padding="8px"
                        >
                          Mitglieder
                        </ReactTooltip>
                      ) : (
                        ''
                      )}
                    </div>
                  </a>
                </Link>
              </li>
              {sessionData?.user.role == "767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb" || sessionData?.user.position == "administration" ? (
                <li
                  className="p-0 m-0 list-none group"
                  data-tip
                  data-for="AdminTip"
                >
                  <Link legacyBehavior href="/internal/admin">
                    <a
                      className={
                        'group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                        (router.pathname.startsWith('/internal/admin')
                          ? 'after:block text-white '
                          : 'after:hidden text-[#afafaf] ') +
                        (!mobileView && sidebarCollapsed
                          ? 'py-[10px] pl-[25px] pr-[10px] text-2xl'
                          : '')
                      }
                      onClick={(e) => changes ? openLeaveModal(e, "/admin") : e}
                    >
                      <div
                        className={
                          'relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear ' +
                          (!mobileView && sidebarCollapsed ? 'h-[30px]' : '')
                        }
                      >
                        <RiAdminLine className="min-w-[30px] text-center relative antialiased inline-block" />
                        <span
                          className={
                            'ml-[5px] ' +
                            (!mobileView && sidebarCollapsed ? 'hidden' : '')
                          }
                        >
                          {' '}
                          Admin{' '}
                        </span>
                        {!mobileView && sidebarCollapsed ? (
                          <ReactTooltip
                            id="FleetTip"
                            place="right"
                            effect="solid"
                            arrowColor="transparent"
                            type="dark"
                            padding="8px"
                          >
                            Admin
                          </ReactTooltip>
                        ) : (
                          ''
                        )}
                      </div>
                    </a>
                  </Link>
                </li>
              ) : <></>}

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
              <div className='mb-6'>
                {/* <li
                  className="p-0 m-0 list-none group"
                  data-tip
                  data-for="CalendarTip"
                >
                  <Link legacyBehavior href="/internal/calendar">
                    <a
                      className={
                        'group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                        (router.pathname.startsWith('/internal/calendar')
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
                        <BsCalendar3 className="min-w-[30px] text-center relative antialiased inline-block" />
                        <span
                          className={
                            'ml-[5px] ' +
                            (!mobileView && sidebarCollapsed ? 'hidden' : '')
                          }
                        >
                          {' '}
                          Kalender{' '}
                        </span>
                        {!mobileView && sidebarCollapsed ? (
                          <ReactTooltip
                            id="CalendarTip"
                            place="right"
                            effect="solid"
                            arrowColor="transparent"
                            type="dark"
                            padding="8px"
                          >
                            Kalender
                          </ReactTooltip>
                        ) : (
                          ''
                        )}
                      </div>
                    </a>
                  </Link>
                </li> */}
                <li
                  className="p-0 m-0 list-none group"
                  data-tip
                  data-for="HangarTip"
                >
                  <Link legacyBehavior href="/internal/hangar">
                    <a
                      className={
                        'group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                        (router.pathname == '/internal/hangar'
                          ? 'after:block text-white '
                          : 'after:hidden text-[#afafaf] ') +
                        (!mobileView && sidebarCollapsed
                          ? 'py-[10px] pl-[25px] pr-[10px] text-2xl'
                          : '')
                      }
                      onClick={(e) => changes ? openLeaveModal(e, "/hangar") : e}
                    >
                      <div
                        className={
                          'relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear ' +
                          (!mobileView && sidebarCollapsed ? 'h-[30px]' : '')
                        }
                      >
                        <HangarIcon classes="fill-white" classNames="min-w-[30px] max-w-[30px] text-center relative antialiased inline-block" />
                        <span
                          className={
                            'ml-[5px] ' +
                            (!mobileView && sidebarCollapsed ? 'hidden' : '')
                          }
                        >
                          {' '}
                          Mein Hangar{' '}
                        </span>
                        {!mobileView && sidebarCollapsed ? (
                          <ReactTooltip
                            id="HangarTip"
                            place="right"
                            effect="solid"
                            arrowColor="transparent"
                            type="dark"
                            padding="8px"
                          >
                            Mein Hangar
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
                  data-for="MessagesTip"
                >
                  <Link legacyBehavior href="/internal/messages">
                    <a
                      className={
                        'group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                        (router.pathname.startsWith('/internal/messages')
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
                        <AiOutlineMail className="min-w-[30px] text-center relative antialiased inline-block" />
                        <span
                          className={
                            'ml-[5px] ' +
                            (!mobileView && sidebarCollapsed ? 'hidden' : '')
                          }
                        >
                          {' '}
                          Nachrichten{' '}
                        </span>
                        {!mobileView && sidebarCollapsed ? (
                          <ReactTooltip
                            id="MessagesTip"
                            place="right"
                            effect="solid"
                            arrowColor="transparent"
                            type="dark"
                            padding="8px"
                          >
                            Nachrichten
                          </ReactTooltip>
                        ) : (
                          ''
                        )}
                      </div>
                    </a>
                  </Link>
                </li> */}
                <li
                  className="p-0 m-0 list-none group"
                  data-tip
                  data-for="ProfileTip"
                >
                  <Link legacyBehavior href="/internal/profile">
                    <a
                      className={
                        'group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent ' +
                        (router.pathname.startsWith('/internal/profile')
                          ? 'after:block text-white '
                          : 'after:hidden text-[#afafaf] ') +
                        (!mobileView && sidebarCollapsed
                          ? 'py-[10px] pl-[25px] pr-[10px] text-2xl'
                          : '')
                      }
                      onClick={(e) => changes ? openLeaveModal(e, "/profile") : e}
                    >
                      <div
                        className={
                          'relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear ' +
                          (!mobileView && sidebarCollapsed ? 'h-[30px]' : '')
                        }
                      >
                        <BiUserCircle className="min-w-[30px] text-center relative antialiased inline-block" />
                        <span
                          className={
                            'ml-[5px] ' +
                            (!mobileView && sidebarCollapsed ? 'hidden' : '')
                          }
                        >
                          {' '}
                          Mein Profil{' '}
                        </span>
                        {!mobileView && sidebarCollapsed ? (
                          <ReactTooltip
                            id="ProfileTip"
                            place="right"
                            effect="solid"
                            arrowColor="transparent"
                            type="dark"
                            padding="8px"
                          >
                            Mein Profil
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
                  data-for="SignOutTip"
                >
                  <button onClick={() => changes ? (openLeaveModal(null, null, "logout")) : signOut({ callbackUrl: '/' })} className='cursor-pointer'>
                    <div
                      className={
                        'group-hover:text-[#e2e2e2] text-[#afafaf] relative block py-[10px] pl-[30px] pr-[15px] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] ' +
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
                        <FiLogOut className="min-w-[30px] text-center relative antialiased inline-block" />
                        <span
                          className={
                            'ml-[5px] ' +
                            (!mobileView && sidebarCollapsed ? 'hidden' : '')
                          }
                        >
                          {' '}
                          Logout{' '}
                        </span>
                        {!mobileView && sidebarCollapsed ? (
                          <ReactTooltip
                            id="SignOutTip"
                            place="right"
                            effect="solid"
                            arrowColor="transparent"
                            type="dark"
                            padding="8px"
                          >
                            Logout
                          </ReactTooltip>
                        ) : (
                          ''
                        )}
                      </div>
                    </div>
                  </button>
                </li>
              </div>








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
