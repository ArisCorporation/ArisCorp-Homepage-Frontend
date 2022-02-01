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
} from "react-icons/fa";
import { BiPlanet } from "react-icons/bi";
import { GiSolarSystem } from "react-icons/gi";
import { GrTasks } from "react-icons/gr";
import { useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";

export default function Sidebar() {
  const [isShipsOpen, setIsShipsOpen] = useState(false);

  return (
    <nav className="relative z-50 w-[300px] min-w-[300px] h-screen block">
      <div className="fixed w-[300px] h-full p-0 overflow-x-hidden overflow-y-auto bg-[rgba(39,43,48,.5)] border-r-[1px] border-solid border-r-[rgba(30,34,38,.5)] transition-[left] duration-500 ease-[right]">
        <div className="relative min-h-full pb-[150px]">
          <ul className="pt-5 m-0 list-none">
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
  );
}
