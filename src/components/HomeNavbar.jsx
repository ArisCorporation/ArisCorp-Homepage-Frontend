import Link from "next/link";
import React from "react";
import MainLogo from "./icons/MainLogo";
import {
  MemberIcon,
  FleetIcon,
  GameplaysIcon,
  CommLinksIcon,
  RecruitmentIcon,
  PartnerIcon,
  ShipExkursBanner,
  VerseExkursBanner,
} from "./icons";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen((current) => !current);

  return (
    <nav className="fixed z-20 flex flex-wrap w-full bg-black lg:h-24 bg-opacity-30">
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
              <NavbarItem
                link="/#member"
                tooltip="Unsere Member"
                content={
                  <MemberIcon width="82" height="82" classes="navbar-icon" />
                }
              />
              <NavbarItem
                link="/#fleet"
                tooltip="Unsere Flotte"
                content={
                  <FleetIcon width="82" height="82" classes="navbar-icon" />
                }
              />
              <NavbarItem
                link="/#gameplays"
                tooltip="Unsere Aufgabenfelder"
                content={
                  <GameplaysIcon width="82" height="82" classes="navbar-icon" />
                }
              />
              <NavbarItem
                link="/#comm-links"
                tooltip="Comm-Links"
                content={
                  <CommLinksIcon width="82" height="82" classes="navbar-icon" />
                }
              />
              <NavbarItem
                link="/#recruitment"
                tooltip="Rekrutierung"
                content={
                  <RecruitmentIcon
                    width="82"
                    height="82"
                    classes="navbar-icon"
                  />
                }
              />
              <NavbarItem
                link="/#member"
                tooltip="Unsere Partner"
                content={
                  <PartnerIcon width="82" height="82" classes="navbar-icon" />
                }
              />
              <NavbarItem
                link="/"
                tooltip="ShipExkurs - COMMING SOON"
                content={
                  <ShipExkursBanner
                    width="120"
                    height="120"
                    classes="navbar-banner-soon"
                  />
                }
              />
              <NavbarItem
                link="/VerseExkurs"
                tooltip="VerseExkurs"
                content={
                  <VerseExkursBanner
                    width="120"
                    height="120"
                    classes="navbar-banner"
                  />
                }
              />
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="flex flex-wrap items-center justify-between w-full px-5 mx-auto bg-black lg:hidden bg-opacity-80">
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
                  <Link href="/">
                    <a>
                      <span className="block px-3 pt-3 pb-1 text-white border-b-2 border-white hover:border-primary">
                        Unsere Member
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="block w-full">
                  <Link href="/">
                    <a>
                      <span className="block px-3 pt-3 pb-1 text-white border-b-2 border-white hover:border-primary">
                        Unsere Flotte
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="block w-full">
                  <Link href="/">
                    <a>
                      <span className="block px-3 pt-3 pb-1 text-white border-b-2 border-white hover:border-primary">
                        Unsere Arbeitsfelder
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="block w-full">
                  <Link href="/">
                    <a>
                      <span className="block px-3 pt-3 pb-1 text-white border-b-2 border-white hover:border-primary">
                        Comm-Links
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="block w-full">
                  <Link href="/">
                    <a>
                      <span className="block px-3 pt-3 pb-1 text-white border-b-2 border-white hover:border-primary">
                        Rekrutierung
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="block w-full mb-5">
                  <Link href="/">
                    <a>
                      <span className="block px-3 pt-3 pb-1 text-white border-b-2 border-white hover:border-primary">
                        Partner
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="block w-full mb-5">
                  <Link href="/VerseExkurs">
                    <a>
                      <span className="block px-3 pt-3 pb-1 text-white border-b-2 border-white hover:border-primary">
                        VerseExkurs
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

const NavbarItem = ({ content, link, tooltip }) => {
  return (
    <li>
      <Link href={link}>
        <a className="flex justify-center group">
          {content}
          <NavbarTooltip tooltip={tooltip} />
        </a>
      </Link>
    </li>
  );
};

const NavbarTooltip = ({ tooltip }) => {
  return (
    <span className="navbar-tooltip group-hover:scale-100">{tooltip}</span>
  );
};

export default Navbar;
