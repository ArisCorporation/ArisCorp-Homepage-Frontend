import Link from 'next/link'
import MainLogo from './icons/MainLogo'
import {
  MemberIcon,
  FleetIcon,
  GameplaysIcon,
  CommLinksIcon,
  RecruitmentIcon,
  PartnerIcon,
  ShipExkursBanner,
  VerseExkursBanner,
} from './icons'
import { useState, useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { useRouter } from 'next/router'
import AMSLogo from './icons/AMSLogo'

function Navbar () {
  const [mobileOpen, setMobileOpen] = useState(false)

  const { pathname, replace, query } = useRouter()


  const toggleMobile = () => setMobileOpen((current) => !current)

  return (
    <nav className="fixed z-20 flex flex-wrap w-full bg-black lg:h-24 bg-opacity-30 print:hidden">
      {/* Desktop menu */}
      <div className="2xl:max-w-[1536px] container flex-wrap items-center justify-between hidden w-full mx-auto lg:flex">
        <div>
          <Link legacyBehavior
            href={
              pathname == '/'
                ? 'https://robertsspaceindustries.com/orgs/ARISCORP'
                : '/'
            }
          >
            <a className="absolute top-0 pl-2 mt-[-16px] xl:scale-50 2xl:scale-100 group">
              <MainLogo width="128" height="128" />
              <NavbarTooltip
                tooltip={
                  pathname == '/' ? 'Zur RSI-Homepage' : 'Zurück zur Homepage'
                }
              />
            </a>
          </Link>
        </div>
        {/* <div>
          <Link legacyBehavior
            href={
              '/internal'
            }
          >
            <a className="absolute top-0 flex h-full xl:scale-50 2xl:scale-100 group">
              <AMSLogo classes="navbar-banner" classNames="w-[82px] xl:w-[180px] my-auto" />
              <NavbarTooltip
                tooltip="Zum ArisCorp Management System"
              />
            </a>
          </Link> */}
        {/* </div> */}
        <div>
          <div className="">
            <ul className="flex items-center px-10 space-x-10 mt-[-14px] scale-50 xl:scale-75 2xl:scale-100 mb-0">
              <NavbarItem
                AnkerLink="our"
                tooltip="Unsere Member"
                ourTab={'0'}
                content={
                  <MemberIcon width="82" height="82" classes="navbar-icon" />
                }
              />
              <NavbarItem
                AnkerLink="our"
                tooltip="Unsere Flotte"
                ourTab={'1'}
                content={
                  <FleetIcon width="82" height="82" classes="navbar-icon" />
                }
              />
              <NavbarItem
                AnkerLink="our"
                tooltip="Unsere Aufgabenfelder"
                ourTab={'2'}
                content={
                  <GameplaysIcon width="82" height="82" classes="navbar-icon" />
                }
              />
              <NavbarItem
                AnkerLink="comm-links"
                tooltip="Comm-Links"
                content={
                  <CommLinksIcon width="82" height="82" classes="navbar-icon" />
                }
              />
              <NavbarItem
                AnkerLink="recruitment"
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
                AnkerLink="partners"
                tooltip="Unsere Partner"
                content={
                  <PartnerIcon width="82" height="82" classes="navbar-icon" />
                }
              />
              <NavbarItem
                link="/ShipExkurs"
                tooltip="ShipExkurs"
                content={
                  <ShipExkursBanner
                    width="120"
                    height="120"
                    classes="navbar-banner"
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
              <NavbarItem
                link="/internal"
                tooltip="Zum ArisCorp Management System"
                content={
                  <AMSLogo
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
            <Link legacyBehavior href="/">
              <a className="top-0 flex items-center px-2 ">
                <MainLogo width="64" height="64" />
                <span className="pl-5 text-xl font-bold text-white">
                  ArisCorp
                </span>
              </a>
            </Link>
          </div>
          <button
            type="button"
            aria-label="Expand Navbar"
            className="text-white"
            onClick={toggleMobile}
          >
            <FaBars />
          </button>

          <div className={mobileOpen ? 'flex w-full' : 'hidden'}>
            <div className="flex flex-wrap w-full">
              <ul className="flex flex-wrap w-full px-10 mb-0 list-none marker:text-transparent">
                <li className="block w-full pb-0">
                  <MobileNavbarItem
                    link="/internal"
                    content="ArisCorp Management System"
                  />
                </li>
                <li className="block w-full pb-0">
                  <MobileNavbarItem
                    AnkerLink="our"
                    ourTab={'0'}
                    content="Unsere Member"
                  />
                </li>
                <li className="block w-full">
                  <MobileNavbarItem
                    AnkerLink="our"
                    ourTab={'1'}
                    content="Unsere Flotte"
                  />
                </li>
                <li className="block w-full">
                  <MobileNavbarItem
                    AnkerLink="our"
                    ourTab={'2'}
                    content="Unsere Aufgabenfelder"
                  />
                </li>
                <li className="block w-full">
                  <MobileNavbarItem
                    AnkerLink="comm-links"
                    content="Comm-Link"
                  />
                </li>
                <li className="block w-full">
                  <MobileNavbarItem
                    AnkerLink="recruitment"
                    content="Rekrutierung"
                  />
                </li>
                <li className="block w-full mb-5">
                  <MobileNavbarItem
                    AnkerLink="partners"
                    content="Partner"
                  />
                </li>
                <li className="block w-full">
                  <MobileNavbarItem
                    link="/ShipExkurs"
                    content="ShipExkurs"
                  />
                </li>
                <li className="block w-full mb-5">
                  <MobileNavbarItem
                    link="/VerseExkurs"
                    content="VerseExkurs"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavbarItem ({ content, link, tooltip, ourTab, AnkerLink }) {
  const { pathname, push, replace, query } = useRouter()

  if (!ourTab) {
    return (
      <li className="pb-0 list-none">
        <a
          onClick={() =>
            link
              ? push({ pathname: link })
              : replace({ pathname: '/', hash: AnkerLink })
          }
          className="flex justify-center group"
        >
          {content}
          <NavbarTooltip tooltip={tooltip} />
        </a>
      </li>
    )
  }

  return (
    <li className="pb-0 list-none">
      <a
        onClick={() =>
          query.about != null && query.about != ''
            ? replace(
              {
                pathname: '/',
                hash: AnkerLink,
                query: { about: query.about, our: ourTab },
              },
              undefined,
              { shallow: true }
            )
            : replace(
              { pathname: '/', hash: AnkerLink, query: { our: ourTab } },
              undefined,
              { shallow: true }
            )
        }
        className="flex justify-center group"
      >
        {content}
        <NavbarTooltip tooltip={tooltip} />
      </a>
    </li>
  )
}

function MobileNavbarItem ({ content, link, ourTab, AnkerLink }) {
  const { pathname, push, replace, query } = useRouter()

  if (!ourTab) {
    return (
      <a
        onClick={() =>
          link
            ? push({ pathname: link })
            : replace({ pathname: '/', hash: AnkerLink })
        }
      >
        <span className="block px-3 pt-3 pb-1 text-white border-b-2 border-white hover:border-primary">
          {content}
        </span>
      </a>
    )
  }

  return (
    <a
      onClick={() =>
        query.about != null && query.about != ''
          ? replace(
            {
              pathname: '/',
              hash: AnkerLink,
              query: { about: query.about, our: ourTab },
            },
            undefined,
            { shallow: true }
          )
          : replace(
            { pathname: '/', hash: AnkerLink, query: { our: ourTab } },
            undefined,
            { shallow: true }
          )
      }
    >
      <span className="block px-3 pt-3 pb-1 text-white border-b-2 border-white hover:border-primary">
        {content}
      </span>
    </a>
  )
}

const NavbarTooltip = ({ tooltip }) => {
  return <span className="navbar-tooltip group-hover:scale-100">{tooltip}</span>
}

export default Navbar
