import Link from "next/link";
import Image from "next/image";
import {
  FaHome,
  FaRegBookmark,
  FaChevronRight,
  FaSignInAlt,
  FaPlaceOfWorship,
  FaTh,
  FaExchangeAlt,
  FaStoreAlt,
  FaRocket,
  FaImages,
  FaPallet,
  FaTasks,
  FaChartBar,
  FaSearch,
} from "react-icons/fa";
import { BiPlanet } from "react-icons/bi";
import { GiSolarSystem } from "react-icons/gi";
import { GrTasks } from "react-icons/gr";
import { FiPlus } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { BsChevronDoubleLeft } from "react-icons/bs";
import MainLogo from "./icons/MainLogo";
import { RotateSpinner } from "react-spinners-kit";
import { useRouter } from "next/router";
import ReactTooltip from "react-tooltip";

export default function Sidebar() {
  const router = useRouter();
  const size = useWindowSize();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  useEffect(() => {
    mobileOpen
      ? (document
          .querySelector("body")
          .classList.add("absolute", "right-0", "left-0", "overflow-hidden"),
        document
          .querySelector("footer")
          .classList.add("right-[300px]", "relative"),
        document
          .querySelector("main")
          .classList.add("right-[300px]", "left-[-300px]"))
      : (document
          .querySelector("body")
          .classList.remove("absolute", "right-0", "left-0", "overflow-hidden"),
        document
          .querySelector("footer")
          .classList.remove("right-[300px]", "relative"),
        document
          .querySelector("main")
          .classList.remove("right-[300px]", "left-[-300px]"));
  });

  const mobileView = size.width < 1024;
  const homeRef = useRef();

  return (
    <>
      <div
        className={
          "fixed bottom-0 z-50 w-full lg:hidden " +
          (mobileOpen ? "right-[300px]" : "right-0")
        }
        style={{ transition: "left .5s ease,right .5s ease,width .5s ease" }}
      >
        <div className="flex items-stretch justify-between min-h-[60px] pb-5 bg-[rgba(23,25,28,.95)] border-t-[1px] border-solid border-t-[rgba(30,34,38,.5)]">
          <Link href="/VerseExkurs">
            <a
              className={
                "min-w-[62px] bg-transparent border-none relative flex items-center justify-center w-full m-h-[60px] mr-0 p-0 opacity-90 transition-all duration-500 ease-linear after:absolute after:top-0 after:w-4/5 after:h-[3px] after:bg-primary after:rounded-b-md after:shadow" +
                (router.pathname == "/VerseExkurs" ? "" : " after:hidden")
              }
            >
              <div
                className="px-4 py-2 overflow-hidden text-center text-white whitespace-normal transition-all duration-500 ease-linear rounded-md text-ellipsis"
                style={{ fontSize: "130%" }}
              >
                <FaHome
                  className="relative text-center whitespace-normal"
                  style={{ fontSize: "130%" }}
                />
              </div>
            </a>
          </Link>
          <Link href="#">
            <a
              className={
                "min-w-[62px] bg-transparent border-none relative flex items-center justify-center w-full m-h-[60px] mr-0 p-0 opacity-90 transition-all duration-500 ease-linear after:absolute after:top-0 after:w-4/5 after:h-[3px] after:bg-primary after:rounded-b-md after:shadow after:hidden" +
                (router.pathname == "/VerseExkurs/ships" ? "" : " after:hidden")
              }
            >
              <div
                className="py-2 px-4 whitespace-normal overflow-hidden text-[#c8c8c8] text-center text-ellipsis rounded-md transition-all duration-500 ease-linear"
                style={{ fontSize: "130%" }}
              >
                <FaPlaceOfWorship
                  className="relative text-center whitespace-normal"
                  style={{ fontSize: "130%" }}
                />
              </div>
            </a>
          </Link>
          <Link href="#">
            <a
              className={
                "min-w-[62px] bg-transparent border-none relative flex items-center justify-center w-full m-h-[60px] mr-0 p-0 opacity-90 transition-all duration-500 ease-linear after:absolute after:top-0 after:w-4/5 after:h-[3px] after:bg-primary after:rounded-b-md after:shadow after:hidden" +
                (router.pathname == "/VerseExkurs/search"
                  ? ""
                  : " after:hidden")
              }
            >
              <div
                className="py-2 px-4 whitespace-normal overflow-hidden text-[#c8c8c8] text-center text-ellipsis rounded-md transition-all duration-500 ease-linear"
                style={{ fontSize: "130%" }}
              >
                <FaSearch
                  className="relative text-center whitespace-normal"
                  style={{ fontSize: "120%" }}
                />
              </div>
            </a>
          </Link>
          <Link href="#">
            <a
              className={
                "min-w-[62px] bg-transparent border-none relative flex items-center justify-center w-full m-h-[60px] mr-0 p-0 opacity-90 transition-all duration-500 ease-linear after:absolute after:top-0 after:w-4/5 after:h-[3px] after:bg-primary after:rounded-b-md after:shadow" +
                (router.pathname == "/VerseExkurs/hangar"
                  ? ""
                  : " after:hidden")
              }
            >
              <div
                className="py-2 px-4 whitespace-normal overflow-hidden text-[#c8c8c8] text-center text-ellipsis rounded-md transition-all duration-500 ease-linear"
                style={{ fontSize: "130%" }}
              >
                <FaRegBookmark
                  className="relative text-center whitespace-normal"
                  style={{ fontSize: "130%" }}
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
                "transform origin-[10%_10%] block w-[22px] h-[2px] bg-[#c8c8c8] rounded-[1px] transition-all duration-200 ease-linear " +
                (mobileOpen ? "rotate-45" : "rotate-0")
              }
            ></span>
            <span
              className={
                "block w-[22px] h-[2px] bg-[#c8c8c8] rounded-[1px] transition-all duration-200 ease-linear mt-1 " +
                (mobileOpen ? "opacity-0" : "opacity-100")
              }
            ></span>
            <span
              className={
                "transform rotate-0 origin-[10%_90%] block w-[22px] h-[2px] bg-[#c8c8c8] rounded-[1px] transition-all duration-200 ease-linear mt-1 " +
                (mobileOpen ? "-rotate-45" : "rotate-0")
              }
            ></span>
          </button>
        </div>
      </div>

      <nav
        className={
          "absolute top-0 right-0 w-full h-auto mt-[env(safe-area-inset-top)] lg:relative z-50 lg:w-[300px] min-w-[300px] lg:h-screen lg:top-auto lg:right-auto lg:mt-0 block " +
          (!mobileView && sidebarCollapsed ? "lg:w-[80px] lg:min-w-[80px]" : "")
        }
      >
        <div
          className={
            "fixed w-[300px] lg:h-full top-0 lg:top-auto lg:r-auto bottom-0 lg:bottom-auto left-auto lg:left-0 h-screen max-h-screen lg:max-h-full pt-[env(safe-area-inset-top)] pl-[env(safe-area-inset-left)] lg:p-0 overflow-x-hidden overflow-y-auto bg-[rgba(39,43,48,.5)] border-r-[1px] border-solid border-r-[rgba(30,34,38,.5)] transition-[left] duration-500 ease-[right] " +
            (mobileOpen ? " right-0" : "right-[-300px]") +
            (!mobileView && sidebarCollapsed ? " w-[80px]" : "")
          }
          style={{ transition: "left .5s ease,right .5s ease,width .5s ease" }}
        >
          <div className="relative min-h-full pb-[150px]">
            <ul className="lg:pt-5 pt-[5px] m-0 list-none">
              <li className="p-0 m-0 list-none group" data-tip="Login">
                <Link href="/VerseExkurs/login">
                  <a
                    className={
                      "group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent " +
                      (router.pathname == "/VerseExkurs/login"
                        ? "after:block "
                        : "after:hidden ") +
                      (!mobileView && sidebarCollapsed
                        ? "py-[10px] pl-[25px] pr-[10px] text-2xl"
                        : "")
                    }
                  >
                    <div
                      className={
                        "relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear " +
                        (!mobileView && sidebarCollapsed ? "h-[30px]" : "")
                      }
                    >
                      <FaSignInAlt className="min-w-[30px] text-center relative antialiased inline-block" />
                      <span
                        className={
                          "ml-[5px] " +
                          (!mobileView && sidebarCollapsed ? "hidden" : "")
                        }
                      >
                        {" "}
                        Login{" "}
                      </span>
                    </div>
                  </a>
                </Link>
              </li>

              <li className="p-0 m-0 list-none group" data-tip="Home">
                <Link href="/VerseExkurs">
                  <a
                    className={
                      "group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent " +
                      (router.pathname == "/VerseExkurs"
                        ? "after:block "
                        : "after:hidden ") +
                      (!mobileView && sidebarCollapsed
                        ? "py-[10px] pl-[25px] pr-[10px] text-2xl"
                        : "")
                    }
                  >
                    <div
                      className={
                        "relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear " +
                        (!mobileView && sidebarCollapsed ? "h-[30px]" : "")
                      }
                    >
                      <FaHome className="min-w-[30px] text-center relative antialiased inline-block" />
                      <span
                        className={
                          "ml-[5px] " +
                          (!mobileView && sidebarCollapsed ? "hidden" : "")
                        }
                      >
                        {" "}
                        Home{" "}
                      </span>
                      {!mobileView && sidebarCollapsed ? <div></div> : ""}
                    </div>
                  </a>
                </Link>
              </li>
              <li className="p-0 m-0 list-none group" data-tip="Hangar">
                <Link href="/VerseExkurs/hangar">
                  <a
                    className={
                      "group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent " +
                      (router.pathname == "/VerseExkurs/hangar"
                        ? "after:block "
                        : "after:hidden ") +
                      (!mobileView && sidebarCollapsed
                        ? "py-[10px] pl-[25px] pr-[10px] text-2xl"
                        : "")
                    }
                  >
                    <div
                      className={
                        "relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear " +
                        (!mobileView && sidebarCollapsed ? "h-[30px]" : "")
                      }
                    >
                      <FaSignInAlt className="min-w-[30px] text-center relative antialiased inline-block" />
                      <span
                        className={
                          "ml-[5px] " +
                          (!mobileView && sidebarCollapsed ? "hidden" : "")
                        }
                      >
                        {" "}
                        My Hangar{" "}
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
                        "hover:text-[#e2e2e2] cursor-pointer relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent" +
                        (!mobileView && sidebarCollapsed
                          ? "py-[10px] pl-[25px] pr-[10px] text-2xl"
                          : "")
                      }
                      data-tip="Ships"
                    >
                      <div
                        className={
                          "relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear " +
                          (!mobileView && sidebarCollapsed ? "h-[30px]" : "")
                        }
                      >
                        <FaPlaceOfWorship className="min-w-[30px] text-center relative antialiased inline-block" />
                        <span
                          className={
                            "ml-[5px] " +
                            (!mobileView && sidebarCollapsed ? "hidden" : "")
                          }
                        >
                          {" "}
                          Ships{" "}
                        </span>
                      </div>
                      <span
                        className={
                          "absolute top-1/2 right-[20px] mt-[-10px]" +
                          (!mobileView && sidebarCollapsed ? "hidden" : "")
                        }
                      >
                        <FaChevronRight
                          className={`${
                            open ? "transform rotate-90" : ""
                          } transition-all duration-300 ease-linear antialiased ${
                            !mobileView && sidebarCollapsed ? "hidden" : ""
                          }`}
                        />
                      </span>
                    </Disclosure.Button>

                    <Transition>
                      <Disclosure.Panel
                        as="ul"
                        className="mb-[10px] list-none relative overflow-hidden"
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
                            data-for="shipsTip"
                          >
                            <Link href="/VerseExkurs/ships">
                              <a
                                className={
                                  "group-hover:text-[#e2e2e2] text-base relative block text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent " +
                                  (router.pathname == "/VerseExkurs/ships"
                                    ? "after:block "
                                    : "after:hidden ") +
                                  (!mobileView && sidebarCollapsed
                                    ? "py-[10px] pl-[25px] pr-[10px] text-2xl "
                                    : " py-[10px] pl-10 pr-[15px] ")
                                }
                              >
                                <div
                                  className={
                                    "relative whitespace-nowrap " +
                                    (!mobileView && sidebarCollapsed
                                      ? "h-[30px]"
                                      : "h-6")
                                  }
                                >
                                  <FaTh className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span
                                    className={
                                      "ml-[5px] " +
                                      (!mobileView && sidebarCollapsed
                                        ? "hidden"
                                        : "")
                                    }
                                  >
                                    {" "}
                                    Ships{" "}
                                  </span>
                                  {!mobileView && sidebarCollapsed ? (
                                    <ReactTooltip
                                      id="shipsTip"
                                      place="right"
                                      effect="solid"
                                      arrowColor="transparent"
                                      type="dark"
                                      padding="8px"
                                    >
                                      Ships
                                    </ReactTooltip>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li className="h-[1px] my-[5px] mx-[15px] bg-[#272b30]"></li>
                          <li
                            className="p-0 m-0 list-none group"
                            data-tip
                            data-for="compareshipsTip"
                          >
                            <Link href="/VerseExkurs/compare">
                              <a
                                className={
                                  "group-hover:text-[#e2e2e2] text-base relative block text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent " +
                                  (router.pathname == "/VerseExkurs/compare"
                                    ? "after:block "
                                    : "after:hidden ") +
                                  (!mobileView && sidebarCollapsed
                                    ? "py-[10px] pl-[25px] pr-[10px] text-2xl "
                                    : " py-[10px] pl-10 pr-[15px] ")
                                }
                              >
                                <div
                                  className={
                                    "relative h-6 whitespace-nowrap " +
                                    (!mobileView && sidebarCollapsed
                                      ? "h-[30px]"
                                      : "h-6")
                                  }
                                >
                                  <FaExchangeAlt className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span
                                    className={
                                      "ml-[5px] " +
                                      (!mobileView && sidebarCollapsed
                                        ? "hidden"
                                        : "")
                                    }
                                  >
                                    {" "}
                                    Compare{" "}
                                  </span>
                                  {!mobileView && sidebarCollapsed ? (
                                    <ReactTooltip
                                      id="compareshipsTip"
                                      place="right"
                                      effect="solid"
                                      arrowColor="transparent"
                                      type="dark"
                                      padding="8px"
                                    >
                                      Compare
                                    </ReactTooltip>
                                  ) : (
                                    ""
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

              <Disclosure as="li" className="p-0 m-0 list-none">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      as="a"
                      className={
                        "hover:text-[#e2e2e2] cursor-pointer relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent" +
                        (!mobileView && sidebarCollapsed
                          ? "py-[10px] pl-[25px] pr-[10px] text-2xl"
                          : "")
                      }
                      data-tip="Stations"
                    >
                      <div
                        className={
                          "relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear " +
                          (!mobileView && sidebarCollapsed ? "h-[30px]" : "")
                        }
                      >
                        <BiPlanet className="min-w-[30px] text-center relative antialiased inline-block" />
                        <span
                          className={
                            "ml-[5px] " +
                            (!mobileView && sidebarCollapsed ? "hidden" : "")
                          }
                        >
                          {" "}
                          Stations{" "}
                        </span>
                      </div>
                      <span
                        className={
                          "absolute top-1/2 right-[20px] mt-[-10px]" +
                          (!mobileView && sidebarCollapsed ? "hidden" : "")
                        }
                      >
                        <FaChevronRight
                          className={`${
                            open ? "transform rotate-90" : ""
                          } transition-all duration-300 ease-linear antialiased ${
                            !mobileView && sidebarCollapsed ? "hidden" : ""
                          }`}
                        />
                      </span>
                    </Disclosure.Button>

                    <Transition>
                      <Disclosure.Panel
                        as="ul"
                        className="mb-[10px] list-none relative overflow-hidden"
                      >
                        <Transition.Child
                          enter="transform transition-all duration-300 ease-linear"
                          enterFrom="transform h-0"
                          enterTo="transform h-[143px]"
                          leave="transform transition-all duration-300 ease-linear"
                          leaveFrom="transform h-[143px]"
                          leaveTo="transform h-0"
                        >
                          <li
                            className="p-0 m-0 list-none group"
                            data-tip
                            data-for="staoverviewTip"
                          >
                            <Link href="/VerseExkurs/overview">
                              <a
                                className={
                                  "group-hover:text-[#e2e2e2] text-base relative block text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent " +
                                  (router.pathname == "/VerseExkurs/overview"
                                    ? "after:block "
                                    : "after:hidden ") +
                                  (!mobileView && sidebarCollapsed
                                    ? "py-[10px] pl-[25px] pr-[10px] text-2xl "
                                    : " py-[10px] pl-10 pr-[15px] ")
                                }
                              >
                                <div
                                  className={
                                    "relative h-6 whitespace-nowrap " +
                                    (!mobileView && sidebarCollapsed
                                      ? "h-[30px]"
                                      : "h-6")
                                  }
                                >
                                  <BiPlanet className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span
                                    className={
                                      "ml-[5px] " +
                                      (!mobileView && sidebarCollapsed
                                        ? "hidden"
                                        : "")
                                    }
                                  >
                                    {" "}
                                    Overview{" "}
                                  </span>
                                  {!mobileView && sidebarCollapsed ? (
                                    <ReactTooltip
                                      id="staoverviewTip"
                                      place="right"
                                      effect="solid"
                                      arrowColor="transparent"
                                      type="dark"
                                      padding="8px"
                                    >
                                      Overview
                                    </ReactTooltip>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li
                            className="p-0 m-0 list-none group"
                            data-tip
                            data-for="starsystemsTip"
                          >
                            <Link href="/VerseExkurs/starsystems">
                              <a
                                className={
                                  "group-hover:text-[#e2e2e2] text-base relative block text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent " +
                                  (router.pathname == "/VerseExkurs/starsystems"
                                    ? "after:block "
                                    : "after:hidden ") +
                                  (!mobileView && sidebarCollapsed
                                    ? "py-[10px] pl-[25px] pr-[10px] text-2xl "
                                    : " py-[10px] pl-10 pr-[15px] ")
                                }
                              >
                                <div
                                  className={
                                    "relative h-6 whitespace-nowrap " +
                                    (!mobileView && sidebarCollapsed
                                      ? "h-[30px]"
                                      : "h-6")
                                  }
                                >
                                  <GiSolarSystem className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span
                                    className={
                                      "ml-[5px] " +
                                      (!mobileView && sidebarCollapsed
                                        ? "hidden"
                                        : "")
                                    }
                                  >
                                    {" "}
                                    By Starsystems{" "}
                                  </span>
                                  {!mobileView && sidebarCollapsed ? (
                                    <ReactTooltip
                                      id="starsystemsTip"
                                      place="right"
                                      effect="solid"
                                      arrowColor="transparent"
                                      type="dark"
                                      padding="8px"
                                    >
                                      Ships
                                    </ReactTooltip>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li className="h-[1px] my-[5px] mx-[15px] bg-[#272b30]"></li>
                          <li
                            className="p-0 m-0 list-none group"
                            data-tip
                            data-for="shopsTip"
                          >
                            <Link href="/VerseExkurs/shops">
                              <a
                                className={
                                  "group-hover:text-[#e2e2e2] text-base relative block text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent " +
                                  (router.pathname == "/VerseExkurs/shops"
                                    ? "after:block "
                                    : "after:hidden ") +
                                  (!mobileView && sidebarCollapsed
                                    ? "py-[10px] pl-[25px] pr-[10px] text-2xl "
                                    : " py-[10px] pl-10 pr-[15px] ")
                                }
                              >
                                <div
                                  className={
                                    "relative h-6 whitespace-nowrap " +
                                    (!mobileView && sidebarCollapsed
                                      ? "h-[30px]"
                                      : "h-6")
                                  }
                                >
                                  <FaStoreAlt className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span
                                    className={
                                      "ml-[5px] " +
                                      (!mobileView && sidebarCollapsed
                                        ? "hidden"
                                        : "")
                                    }
                                  >
                                    {" "}
                                    Shops{" "}
                                  </span>
                                  {!mobileView && sidebarCollapsed ? (
                                    <ReactTooltip
                                      id="shopsTip"
                                      place="right"
                                      effect="solid"
                                      arrowColor="transparent"
                                      type="dark"
                                      padding="8px"
                                    >
                                      Shops
                                    </ReactTooltip>
                                  ) : (
                                    ""
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
              <Disclosure as="li" className="p-0 m-0 list-none">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      as="a"
                      className={
                        "hover:text-[#e2e2e2] cursor-pointer relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent" +
                        (!mobileView && sidebarCollapsed
                          ? "py-[10px] pl-[25px] pr-[10px] text-2xl"
                          : "")
                      }
                      data-tip="Fleets"
                    >
                      <div
                        className={
                          "relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear " +
                          (!mobileView && sidebarCollapsed ? "h-[30px]" : "")
                        }
                      >
                        <FaRocket className="min-w-[30px] text-center relative antialiased inline-block" />
                        <span
                          className={
                            "ml-[5px] " +
                            (!mobileView && sidebarCollapsed ? "hidden" : "")
                          }
                        >
                          {" "}
                          Fleets{" "}
                        </span>
                      </div>
                      <span
                        className={
                          "absolute top-1/2 right-[20px] mt-[-10px]" +
                          (!mobileView && sidebarCollapsed ? "hidden" : "")
                        }
                      >
                        <FaChevronRight
                          className={`${
                            open ? "transform rotate-90" : ""
                          } transition-all duration-300 ease-linear antialiased ${
                            !mobileView && sidebarCollapsed ? "hidden" : ""
                          }`}
                        />
                      </span>
                    </Disclosure.Button>

                    <Transition>
                      <Disclosure.Panel
                        as="ul"
                        className="mb-[10px] list-none relative overflow-hidden"
                      >
                        <Transition.Child
                          enter="transform transition-all duration-300 ease-linear"
                          enterFrom="transform h-0"
                          enterTo="transform h-[44px]"
                          leave="transform transition-all duration-300 ease-linear"
                          leaveFrom="transform h-[44px]"
                          leaveTo="transform h-0"
                        >
                          <li
                            className="p-0 m-0 list-none group"
                            data-tip
                            data-for="createfleetTip"
                          >
                            <Link href="/VerseExkurs/createfleet">
                              <a
                                className={
                                  "group-hover:text-[#e2e2e2] text-base relative block text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent " +
                                  (router.pathname == "/VerseExkurs/"
                                    ? "after:block "
                                    : "after:hidden ") +
                                  (!mobileView && sidebarCollapsed
                                    ? "py-[10px] pl-[25px] pr-[10px] text-2xl "
                                    : " py-[10px] pl-10 pr-[15px] ")
                                }
                              >
                                <div
                                  className={
                                    "relative h-6 whitespace-nowrap " +
                                    (!mobileView && sidebarCollapsed
                                      ? "h-[30px]"
                                      : "h-6")
                                  }
                                >
                                  <FiPlus className="min-w-[30px] text-center relative antialiased inline-block mb-[2px]" />
                                  <span
                                    className={
                                      "ml-[5px] " +
                                      (!mobileView && sidebarCollapsed
                                        ? "hidden"
                                        : "")
                                    }
                                  >
                                    {" "}
                                    Create a new Fleet{" "}
                                  </span>
                                  {!mobileView && sidebarCollapsed ? (
                                    <ReactTooltip
                                      id="createfleetTip"
                                      place="right"
                                      effect="solid"
                                      arrowColor="transparent"
                                      type="dark"
                                      padding="8px"
                                    >
                                      Create a new Fleet
                                    </ReactTooltip>
                                  ) : (
                                    ""
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
              <li className="p-0 m-0 list-none group" data-tip="Images">
                <Link href="/VerseExkurs/images">
                  <a
                    className={
                      "group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent " +
                      (router.pathname == "/VerseExkurs/images"
                        ? "after:block "
                        : "after:hidden ") +
                      (!mobileView && sidebarCollapsed
                        ? "py-[10px] pl-[25px] pr-[10px] text-2xl"
                        : "")
                    }
                  >
                    <div
                      className={
                        "relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear " +
                          !mobileView && sidebarCollapsed
                          ? "h-[30px]"
                          : ""
                      }
                    >
                      <FaImages className="min-w-[30px] text-center relative antialiased inline-block" />
                      <span
                        className={
                          "ml-[5px] " +
                          (!mobileView && sidebarCollapsed ? "hidden" : "")
                        }
                      >
                        {" "}
                        Images{" "}
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="p-0 m-0 list-none group" data-tip="Trade Routes">
                <Link href="/VerseExkurs/traderoutes">
                  <a
                    className={
                      "group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent " +
                      (router.pathname == "/VerseExkurs/traderoutes"
                        ? "after:block "
                        : "after:hidden ") +
                      (!mobileView && sidebarCollapsed
                        ? "py-[10px] pl-[25px] pr-[10px] text-2xl"
                        : "")
                    }
                  >
                    <div
                      className={
                        "relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear " +
                        (!mobileView && sidebarCollapsed ? "h-[30px]" : "")
                      }
                    >
                      <FaPallet className="min-w-[30px] text-center relative antialiased inline-block" />
                      <span
                        className={
                          "ml-[5px] " +
                          (!mobileView && sidebarCollapsed ? "hidden" : "")
                        }
                      >
                        {" "}
                        Trade Routes{" "}
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
                        "hover:text-[#e2e2e2] cursor-pointer relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent" +
                        (!mobileView && sidebarCollapsed
                          ? "py-[10px] pl-[25px] pr-[10px] text-2xl"
                          : "")
                      }
                      data-tip="Roadmap"
                    >
                      <div
                        className={
                          "relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear " +
                          (!mobileView && sidebarCollapsed ? "h-[30px]" : "")
                        }
                      >
                        <GrTasks className="min-w-[30px] text-center relative antialiased inline-block" />
                        <span
                          className={
                            "ml-[5px] " +
                            (!mobileView && sidebarCollapsed ? "hidden" : "")
                          }
                        >
                          {" "}
                          Roadmap{" "}
                        </span>
                      </div>
                      <span
                        className={
                          "absolute top-1/2 right-[20px] mt-[-10px]" +
                          (!mobileView && sidebarCollapsed ? "hidden" : "")
                        }
                      >
                        <FaChevronRight
                          className={`${
                            open ? "transform rotate-90" : ""
                          } transition-all duration-300 ease-linear antialiased ${
                            !mobileView && sidebarCollapsed ? "hidden" : ""
                          }`}
                        />
                      </span>
                    </Disclosure.Button>

                    <Transition>
                      <Disclosure.Panel
                        as="ul"
                        className="mb-[10px] list-none relative overflow-hidden"
                      >
                        <Transition.Child
                          enter="transform transition-all duration-300 ease-linear"
                          enterFrom="transform h-0"
                          enterTo="transform h-[143px]"
                          leave="transform transition-all duration-300 ease-linear"
                          leaveFrom="transform h-[143px]"
                          leaveTo="transform h-0"
                        >
                          <li
                            className="p-0 m-0 list-none group"
                            data-tip
                            data-for="roadmapoverviewTip"
                          >
                            <Link href="/VerseExkurs/overview">
                              <a
                                className={
                                  "group-hover:text-[#e2e2e2] text-base relative block text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent " +
                                  (router.pathname == "/VerseExkurs/overview"
                                    ? "after:block "
                                    : "after:hidden ") +
                                  (!mobileView && sidebarCollapsed
                                    ? "py-[10px] pl-[25px] pr-[10px] text-2xl "
                                    : " py-[10px] pl-10 pr-[15px] ")
                                }
                              >
                                <div
                                  className={
                                    "relative h-6 whitespace-nowrap " +
                                    (!mobileView && sidebarCollapsed
                                      ? "h-[30px]"
                                      : "h-6")
                                  }
                                >
                                  <GrTasks className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span
                                    className={
                                      "ml-[5px] " +
                                      (!mobileView && sidebarCollapsed
                                        ? "hidden"
                                        : "")
                                    }
                                  >
                                    {" "}
                                    Overview{" "}
                                  </span>
                                  {!mobileView && sidebarCollapsed ? (
                                    <ReactTooltip
                                      id="roadmapoverviewTip"
                                      place="right"
                                      effect="solid"
                                      arrowColor="transparent"
                                      type="dark"
                                      padding="8px"
                                    >
                                      Overview
                                    </ReactTooltip>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li
                            className="p-0 m-0 list-none group"
                            data-tip
                            data-for="changesTip"
                          >
                            <Link href="/VerseExkurs/changes">
                              <a
                                className={
                                  "group-hover:text-[#e2e2e2] text-base relative block text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent " +
                                  (router.pathname == "/VerseExkurs/changes"
                                    ? "after:block "
                                    : "after:hidden ") +
                                  (!mobileView && sidebarCollapsed
                                    ? "py-[10px] pl-[25px] pr-[10px] text-2xl "
                                    : " py-[10px] pl-10 pr-[15px] ")
                                }
                              >
                                <div
                                  className={
                                    "relative h-6 whitespace-nowrap " +
                                    (!mobileView && sidebarCollapsed
                                      ? "h-[30px]"
                                      : "h-6")
                                  }
                                >
                                  <FaTasks className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span
                                    className={
                                      "ml-[5px] " +
                                      (!mobileView && sidebarCollapsed
                                        ? "hidden"
                                        : "")
                                    }
                                  >
                                    {" "}
                                    Changes{" "}
                                  </span>
                                  {!mobileView && sidebarCollapsed ? (
                                    <ReactTooltip
                                      id="changesTip"
                                      place="right"
                                      effect="solid"
                                      arrowColor="transparent"
                                      type="dark"
                                      padding="8px"
                                    >
                                      Changes
                                    </ReactTooltip>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li className="h-[1px] my-[5px] mx-[15px] bg-[#272b30]"></li>
                          <li
                            className="p-0 m-0 list-none group"
                            data-tip
                            data-for="shiproadmapTip"
                          >
                            <Link href="/VerseExkurs/shiproadmap">
                              <a
                                className={
                                  "group-hover:text-[#e2e2e2] text-base relative block text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent " +
                                  (router.pathname == "/VerseExkurs/shiproadmap"
                                    ? "after:block "
                                    : "after:hidden ") +
                                  (!mobileView && sidebarCollapsed
                                    ? "py-[10px] pl-[25px] pr-[10px] text-2xl "
                                    : " py-[10px] pl-10 pr-[15px] ")
                                }
                              >
                                <div
                                  className={
                                    "relative h-6 whitespace-nowrap " +
                                    (!mobileView && sidebarCollapsed
                                      ? "h-[30px]"
                                      : "h-6")
                                  }
                                >
                                  <FaRocket className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span
                                    className={
                                      "ml-[5px] " +
                                      (!mobileView && sidebarCollapsed
                                        ? "hidden"
                                        : "")
                                    }
                                  >
                                    {" "}
                                    Ship-Roadmap{" "}
                                  </span>
                                  {!mobileView && sidebarCollapsed ? (
                                    <ReactTooltip
                                      id="shiproadmapTip"
                                      place="right"
                                      effect="solid"
                                      arrowColor="transparent"
                                      type="dark"
                                      padding="8px"
                                    >
                                      Ship-Roadmap
                                    </ReactTooltip>
                                  ) : (
                                    ""
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
              <li className="p-0 m-0 list-none group" data-tip="Stats">
                <Link href="/VerseExkurs/stats">
                  <a
                    className={
                      "group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent " +
                      (router.pathname == "/VerseExkurs/stats"
                        ? "after:block "
                        : "after:hidden ") +
                      (!mobileView && sidebarCollapsed
                        ? "py-[10px] pl-[25px] pr-[10px] text-2xl"
                        : "")
                    }
                  >
                    <div
                      className={
                        "relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear " +
                        (!mobileView && sidebarCollapsed ? "h-[30px]" : "")
                      }
                    >
                      <FaChartBar className="min-w-[30px] text-center relative antialiased inline-block" />
                      <span
                        className={
                          "ml-[5px] " +
                          (!mobileView && sidebarCollapsed ? "hidden" : "")
                        }
                      >
                        {" "}
                        Stats{" "}
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="absolute bottom-0 p-0 pb-[10px] lg:pb-5 m-0 list-none">
              <li
                className={
                  "p-0 m-0 list-none group" + (mobileView ? " hidden" : "")
                }
                data-tip="Expand"
              >
                <a
                  className={
                    "group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-[2px_0_10px_rgba(36,86,130,.9)] after:transition-all after:rounded-r-sm after:duration-500 after:ease-linear after:h-[80%] after:text-transparent " +
                    (router.pathname == "/VerseExkurs/stats"
                      ? "after:block "
                      : "after:hidden ") +
                    (sidebarCollapsed
                      ? "py-[10px] pl-[25px] pr-[10px] text-2xl"
                      : "")
                  }
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                >
                  <div
                    className={
                      "relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear " +
                      (sidebarCollapsed ? "h-[30px]" : "")
                    }
                  >
                    <BsChevronDoubleLeft
                      className={
                        "min-w-[30px] text-center relative antialiased inline-block" +
                        (sidebarCollapsed ? " transform rotate-180" : "")
                      }
                    />
                    <span
                      className={
                        "ml-[5px] " + (sidebarCollapsed ? "hidden" : "")
                      }
                    >
                      {" "}
                      Collapse{" "}
                    </span>
                  </div>
                </a>
              </li>
              <li className="min-h-[60px]">
                <span
                  className={
                    "relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap" +
                    (!mobileView && sidebarCollapsed ? " w-16 h-16" : "")
                  }
                  style={{ transition: "all .5s ease" }}
                >
                  <div
                    className={
                      "absolute transition-all duration-500 ease-linear top-2.5 left-[30px] w-12 h-12" +
                      (!mobileView && sidebarCollapsed
                        ? " top-auto left-5"
                        : "")
                    }
                  >
                    <MainLogo />
                  </div>
                  <span
                    className={
                      "block pt-[6px] pr-5 pl-[50px]" +
                      (!mobileView && sidebarCollapsed ? " hidden" : "")
                    }
                  >
                    ArisCorp VerseExkurs
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {!mobileView && sidebarCollapsed ? (
        <ReactTooltip
          place="right"
          effect="solid"
          arrowColor="transparent"
          type="dark"
          padding="8px"
        />
      ) : (
        ""
      )}
    </>
  );
}
