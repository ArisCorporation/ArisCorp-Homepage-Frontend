import Link from "next/link";
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
import { useState, useEffect } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { Helmet } from "react-helmet";

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

export default function Sidebar() {
  const [isShipsOpen, setIsShipsOpen] = useState(false);
  const size = useWindowSize();
  const [mobileOpen, setMobileOpen] = useState(false);

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

  {
    /* 
      <Helmet>
        <body
          className={
            mobileOpen
              ? "absolute top-0 right-0 bottom-0 left-0 overflow-hidden"
              : ""
          }
        />
      </Helmet>
    */
  }

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
          <Link href="#">
            <a className="min-w-[62px] bg-transparent border-none relative flex items-center justify-center w-full m-h-[60px] mr-0 p-0 opacity-90 transition-all duration-500 ease-linear after:absolute after:top-0 after:w-4/5 after:h-[3px] after:bg-primary after:rounded-b-md after:shadow after:content-['*'] after:text-transparent after:block">
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
            <a className="min-w-[62px] bg-transparent border-none relative flex items-center justify-center w-full m-h-[60px] mr-0 p-0 opacity-90 transition-all duration-500 ease-linear after:absolute after:top-0 after:w-4/5 after:h-[3px] after:bg-primary after:rounded-b-md after:shadow after:content-['*'] after:text-transparent after:hidden">
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
            <a className="min-w-[62px] bg-transparent border-none relative flex items-center justify-center w-full m-h-[60px] mr-0 p-0 opacity-90 transition-all duration-500 ease-linear after:absolute after:top-0 after:w-4/5 after:h-[3px] after:bg-primary after:rounded-b-md after:shadow after:content-['*'] after:text-transparent after:hidden">
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
            <a className="min-w-[62px] bg-transparent border-none relative flex items-center justify-center w-full m-h-[60px] mr-0 p-0 opacity-90 transition-all duration-500 ease-linear after:absolute after:top-0 after:w-4/5 after:h-[3px] after:bg-primary after:rounded-b-md after:shadow after:content-['*'] after:text-transparent after:hidden">
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

      <nav className="absolute top-0 right-0 w-full h-auto mt-[env(safe-area-inset-top)] lg:relative z-50 lg:w-[300px] min-w-[300px] lg:h-screen lg:top-auto lg:right-auto lg:mt-0 block">
        <div
          className={
            "fixed w-[300px] lg:h-full top-0 lg:top-auto lg:r-auto bottom-0 lg:bottom-auto left-auto lg:left-0 h-screen max-h-screen lg:max-h-full pt-[env(safe-area-inset-top)] pl-[env(safe-area-inset-left)] lg:p-0 overflow-x-hidden overflow-y-auto bg-[rgba(39,43,48,.5)] border-r-[1px] border-solid border-r-[rgba(30,34,38,.5)] transition-[left] duration-500 ease-[right] " +
            (mobileOpen ? "right-0" : "right-[-300px]")
          }
          style={{ transition: "left .5s ease,right .5s ease,width .5s ease" }}
        >
          <div className="relative min-h-full pb-[150px]">
            <ul className="lg:pt-5 pt-[5px] m-0 list-none">
              <li className="p-0 m-0 list-none group">
                <Link href="/VerseExkurs/test">
                  <a className="group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent ">
                    <div className="relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear">
                      <FaSignInAlt className="min-w-[30px] text-center relative antialiased inline-block" />
                      <span className="ml-[5px]"> Login </span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="p-0 m-0 list-none group">
                <Link href="/VerseExkurs/test2">
                  <a className="group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent ">
                    <div className="relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear">
                      <FaHome className="min-w-[30px] text-center relative antialiased inline-block" />
                      <span className="ml-[5px]"> Home </span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="p-0 m-0 list-none group">
                <Link href="#">
                  <a className="group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-[#fbfbfb] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent after:absolute after:top-[10%] after:left-0 after:w-[3px] h-[80%] after:bg-[#00ffe8] after:shadow-md after:shadow-[rgb(36 86 130 / 90%)] after:transition-all after:rounded-sm after:duration-500 after:ease-linear after:content-['*'] after:text-transparent">
                    <div className="relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear">
                      <FaRegBookmark className="min-w-[30px] text-center relative antialiased inline-block" />
                      <span className="ml-[5px]"> My Hangar </span>
                    </div>
                  </a>
                </Link>
              </li>
              <Disclosure as="li" className="p-0 m-0 list-none group">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      as="a"
                      className="group-hover:text-[#e2e2e2] cursor-pointer relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent"
                    >
                      <div className="relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear">
                        <FaPlaceOfWorship className="min-w-[30px] text-center relative antialiased inline-block" />
                        <span className="ml-[5px]"> Ships </span>
                      </div>
                      <span className="absolute top-1/2 right-[20px] mt-[-10px]">
                        <FaChevronRight
                          className={`${
                            open ? "transform rotate-90" : ""
                          } transition-all duration-300 ease-linear antialiased`}
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
                          <li className="p-0 m-0 list-none group">
                            <Link href="#">
                              <a className="group-hover:text-[#e2e2e2] pl-10 text-base relative block py-[10px] pr-[15px] text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear">
                                <div className="relative h-6 whitespace-nowrap">
                                  <FaTh className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span> Ships </span>
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li className="h-[1px] my-[5px] mx-[15px] bg-[#272b30]"></li>
                          <li className="p-0 m-0 list-none group">
                            <Link href="#">
                              <a className="group-hover:text-[#e2e2e2] pl-10 text-base relative block py-[10px] pr-[15px] text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear">
                                <div className="relative h-6 whitespace-nowrap">
                                  <FaExchangeAlt className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span> Compare </span>
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
              <Disclosure as="li" className="p-0 m-0 list-none group">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      as="a"
                      className="group-hover:text-[#e2e2e2] cursor-pointer relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent"
                    >
                      <div className="relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear">
                        <BiPlanet className="min-w-[30px] text-center relative antialiased inline-block" />
                        <span className="ml-[5px]"> Stations </span>
                      </div>
                      <span className="absolute top-1/2 right-[20px] mt-[-10px]">
                        <FaChevronRight
                          className={`${
                            open ? "transform rotate-90" : ""
                          } transition-all duration-300 ease-linear antialiased`}
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
                          <li className="p-0 m-0 list-none group">
                            <Link href="#">
                              <a className="group-hover:text-[#e2e2e2] pl-10 text-base relative block py-[10px] pr-[15px] text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear">
                                <div className="relative h-6 whitespace-nowrap">
                                  <BiPlanet className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span> Overview </span>
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li className="p-0 m-0 list-none group">
                            <Link href="#">
                              <a className="group-hover:text-[#e2e2e2] pl-10 text-base relative block py-[10px] pr-[15px] text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear">
                                <div className="relative h-6 whitespace-nowrap">
                                  <GiSolarSystem className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span> By Starsystems </span>
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li className="h-[1px] my-[5px] mx-[15px] bg-[#272b30]"></li>
                          <li className="p-0 m-0 list-none group">
                            <Link href="#">
                              <a className="group-hover:text-[#e2e2e2] pl-10 text-base relative block py-[10px] pr-[15px] text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear">
                                <div className="relative h-6 whitespace-nowrap">
                                  <FaStoreAlt className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span> Shops </span>
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
              <Disclosure as="li" className="p-0 m-0 list-none group">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      as="a"
                      className="group-hover:text-[#e2e2e2] cursor-pointer relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent"
                    >
                      <div className="relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear">
                        <FaRocket className="min-w-[30px] text-center relative antialiased inline-block" />
                        <span className="ml-[5px]"> Fleets </span>
                      </div>
                      <span className="absolute top-1/2 right-[20px] mt-[-10px]">
                        <FaChevronRight
                          className={`${
                            open ? "transform rotate-90" : ""
                          } transition-all duration-300 ease-linear antialiased`}
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
                          <li className="p-0 m-0 list-none group">
                            <Link href="#">
                              <a className="group-hover:text-[#e2e2e2] pl-10 text-base relative block py-[10px] pr-[15px] text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear">
                                <div className="relative h-6 whitespace-nowrap">
                                  <span> + Create a new Fleet </span>
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
              <li className="p-0 m-0 list-none group">
                <Link href="#">
                  <a className="group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent ">
                    <div className="relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear">
                      <FaImages className="min-w-[30px] text-center relative antialiased inline-block" />
                      <span className="ml-[5px]"> Images </span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="p-0 m-0 list-none group">
                <Link href="#">
                  <a className="group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent ">
                    <div className="relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear">
                      <FaPallet className="min-w-[30px] text-center relative antialiased inline-block" />
                      <span className="ml-[5px]"> Trade Routes </span>
                    </div>
                  </a>
                </Link>
              </li>
              <Disclosure as="li" className="p-0 m-0 list-none group">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      as="a"
                      className="group-hover:text-[#e2e2e2] cursor-pointer relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent"
                    >
                      <div className="relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear">
                        <GrTasks className="min-w-[30px] text-center relative antialiased inline-block" />
                        <span className="ml-[5px]"> Roadmap </span>
                      </div>
                      <span className="absolute top-1/2 right-[20px] mt-[-10px]">
                        <FaChevronRight
                          className={`${
                            open ? "transform rotate-90" : ""
                          } transition-all duration-300 ease-linear antialiased`}
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
                          <li className="p-0 m-0 list-none group">
                            <Link href="#">
                              <a className="group-hover:text-[#e2e2e2] pl-10 text-base relative block py-[10px] pr-[15px] text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear">
                                <div className="relative h-6 whitespace-nowrap">
                                  <GrTasks className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span> Overview </span>
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li className="p-0 m-0 list-none group">
                            <Link href="#">
                              <a className="group-hover:text-[#e2e2e2] pl-10 text-base relative block py-[10px] pr-[15px] text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear">
                                <div className="relative h-6 whitespace-nowrap">
                                  <FaTasks className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span> Changes </span>
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li className="h-[1px] my-[5px] mx-[15px] bg-[#272b30]"></li>
                          <li className="p-0 m-0 list-none group">
                            <Link href="#">
                              <a className="group-hover:text-[#e2e2e2] pl-10 text-base relative block py-[10px] pr-[15px] text-[#afafaf] whitespace-nowrap transition-all duration-500 ease-linear">
                                <div className="relative h-6 whitespace-nowrap">
                                  <FaRocket className="min-w-[30px] text-center relative antialiased inline-block" />
                                  <span> Ship-Roadmap </span>
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
              <li className="p-0 m-0 list-none group">
                <Link href="#">
                  <a className="group-hover:text-[#e2e2e2] relative block py-[10px] pl-[30px] pr-[15px] text-[#afafaf] text-lg whitespace-nowrap transition-all duration-500 ease-linear outline-0 outline-none decoration-transparent ">
                    <div className="relative flex items-center h-6 whitespace-nowrap transition-[height] duration-500 ease-linear">
                      <FaChartBar className="min-w-[30px] text-center relative antialiased inline-block" />
                      <span className="ml-[5px]"> Stats </span>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/**
      <div className="fixed right-0 left-0 bottom-0 z-50 w-full transition-[left .5s ease,right .5s ease,width .5s ease]">
        <div className="flex items-stretch justify-between min-h-[60px] pb-5 bg-[rgba(23,25,28,.95)] border-t-[1px] border-solid border-t-[rgba(30,34,38,.5)]">
          <Link href="#">
            <a className="min-w-[62px] bg-transparent border-none relative flex items-center justify-center w-full m-h-[60px] mr-0 p-0 opacity-90 transition-all duration-500 ease-linear after:absolute after:top-0 after:w-4/5 after:h-[3px] after:bg-primary after:rounded-b-md after:shadow after:content-['*'] after:text-transparent after:block">
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
            <a className="min-w-[62px] bg-transparent border-none relative flex items-center justify-center w-full m-h-[60px] mr-0 p-0 opacity-90 transition-all duration-500 ease-linear after:absolute after:top-0 after:w-4/5 after:h-[3px] after:bg-primary after:rounded-b-md after:shadow after:content-['*'] after:text-transparent after:hidden">
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
            <a className="min-w-[62px] bg-transparent border-none relative flex items-center justify-center w-full m-h-[60px] mr-0 p-0 opacity-90 transition-all duration-500 ease-linear after:absolute after:top-0 after:w-4/5 after:h-[3px] after:bg-primary after:rounded-b-md after:shadow after:content-['*'] after:text-transparent after:hidden">
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
            <a className="min-w-[62px] bg-transparent border-none relative flex items-center justify-center w-full m-h-[60px] mr-0 p-0 opacity-90 transition-all duration-500 ease-linear after:absolute after:top-0 after:w-4/5 after:h-[3px] after:bg-primary after:rounded-b-md after:shadow after:content-['*'] after:text-transparent after:hidden">
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
      </div>  */}
    </>
  );
}
