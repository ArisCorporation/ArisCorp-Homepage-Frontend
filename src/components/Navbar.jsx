import Link from "next/link";
import MainLogo from "./icons/MainLogo";
import MemberIcon from "./icons/MemberIcon";
import FleetIcon from "./icons/FleetIcon";
import GameplaysIcon from "./icons/GameplaysIcon";
import CommLinksIcon from "./icons/CommLinksIcon";
import RecruitingIcon from "./icons/RecruitingIcon";
import PartnerIcon from "./icons/PartnerIcon";
import VerseExkursIcon from "./icons/VerseExkursIcon";
import ShipExkursIcon from "./icons/ShipExkursIcon";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen((current) => !current);

  return (
    <nav className="fixed flex flex-wrap w-full bg-black lg:h-24 bg-opacity-30">
      {/* Desktop menu */}
      <div className="container flex-wrap items-center justify-between hidden w-full mx-auto lg:flex">
        <div>
          <Link href="/">
            <a className="absolute top-0 px-2 mt-[-16px] scale-75 xl:scale-100">
              <MainLogo width="128" height="128" />
            </a>
          </Link>
        </div>
        <div>
          <div className="">
            <ul className="flex items-center px-10 space-x-10 mt-[-14px] scale-75 xl:scale-100">
              <li className="">
                <Link href="/">
                  <a className="group">
                    <MemberIcon width="82" height="82" classes="navbaritem" />
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/">
                  <a className="group">
                    <FleetIcon width="82" height="82" classes="navbaritem" />
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/">
                  <a className="group">
                    <GameplaysIcon
                      width="82"
                      height="82"
                      classes="navbaritem"
                    />
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/">
                  <a className="group">
                    <CommLinksIcon
                      width="82"
                      height="82"
                      classes="navbaritem"
                    />
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/">
                  <a className="group">
                    <RecruitingIcon
                      width="82"
                      height="82"
                      classes="navbaritem"
                    />
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/">
                  <a className="group">
                    <PartnerIcon width="82" height="82" classes="navbaritem" />
                  </a>
                </Link>
              </li>
              <li className="pl-10">
                <Link href="/">
                  <a className="group">
                    <VerseExkursIcon
                      width="120"
                      height="120"
                      className="absolute"
                    />
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/">
                  <a className="group">
                    <ShipExkursIcon
                      width="120"
                      height="120"
                      className="absolute"
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="flex flex-wrap items-center justify-between w-full px-5 mx-auto lg:hidden">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div>
            <Link href="/">
              <a className="top-0 flex items-center px-2 ">
                <MainLogo width="64" height="64" />
                <span className="pl-5 text-xl font-bold text-white">
                  ArisCorp
                </span>
              </a>
            </Link>
          </div>
          <button type="button" className="text-white" onClick={toggleMobile}>
            <FaBars />
          </button>

          <div className={mobileOpen ? "flex w-full" : "hidden"}>
            <div className="flex flex-wrap w-full">
              <ul className="flex flex-wrap w-full px-10">
                <li className="block w-full">
                  <Link href="">
                    <a>
                      <span className="block px-3 pt-3 pb-1 text-white border-b-2 border-white hover:border-primary">
                        Unsere Member
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="block w-full">
                  <Link href="">
                    <a>
                      <span className="block px-3 pt-3 pb-1 text-white border-b-2 border-white hover:border-primary">
                        Unsere Flotte
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="block w-full">
                  <Link href="">
                    <a>
                      <span className="block px-3 pt-3 pb-1 text-white border-b-2 border-white hover:border-primary">
                        Unsere Arbeitsfelder
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="block w-full">
                  <Link href="">
                    <a>
                      <span className="block px-3 pt-3 pb-1 text-white border-b-2 border-white hover:border-primary">
                        Comm-Links
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="block w-full">
                  <Link href="">
                    <a>
                      <span className="block px-3 pt-3 pb-1 text-white border-b-2 border-white hover:border-primary">
                        Rekrutierung
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="block w-full mb-5">
                  <Link href="">
                    <a>
                      <span className="block px-3 pt-3 pb-1 text-white border-b-2 border-white hover:border-primary">
                        Partner
                      </span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavbarItem = ({ content, link }) => {
  return (
    <Link href={link}>
      <a>{content}</a>
    </Link>
  );
};

export default Navbar;
