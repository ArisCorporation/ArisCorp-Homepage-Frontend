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
import { OurTabSelectionContext } from 'context/OurTabSelectionContext'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const router = useRouter()

  const [selectedOurIndex, setSelectedOurIndex] = useContext(
    OurTabSelectionContext
  )

  const toggleMobile = () => setMobileOpen((current) => !current)

  return (
    <nav className="fixed z-20 flex flex-wrap w-full bg-black lg:h-24 bg-opacity-30 print:hidden">
      {/* Desktop menu */}
      <div className="container flex-wrap items-center justify-between hidden w-full mx-auto lg:flex">
        <div>
          <Link
            href={
              router.pathname == '/'
                ? 'https://robertsspaceindustries.com/orgs/ARISCORP'
                : '/'
            }
          >
            <a className="absolute top-0 px-2 mt-[-16px] scale-75 xl:scale-100 group">
              <MainLogo width="128" height="128" />
              <NavbarTooltip
                tooltip={
                  router.pathname == '/'
                    ? 'Zur RSI-Homepage'
                    : 'Zurück zur Homepage'
                }
              />
            </a>
          </Link>
        </div>
        <div>
          <div className="">
            <ul className="flex items-center px-10 space-x-10 mt-[-14px] scale-75 xl:scale-100 mb-0">
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
                  <Link href="#our">
                    <a
                      onClick={() =>
                        selectedOurIndex != 0
                          ? setSelectedOurIndex(0)
                          : null
                      }
                    >
                      <span className="block px-3 pt-3 pb-1 text-white border-b-2 border-white hover:border-primary">
                        Unsere Member
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="block w-full">
                  <Link href="#our">
                    <a
                      onClick={() =>
                        selectedOurIndex != 1
                          ? setSelectedOurIndex(1)
                          : null
                      }>
                      <span className="block px-3 pt-3 pb-1 text-white border-b-2 border-white hover:border-primary">
                        Unsere Flotte
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="block w-full">
                  <Link href="#our">
                    <a
                      onClick={() =>
                        selectedOurIndex != 2
                          ? setSelectedOurIndex(2)
                          : null
                      }>
                      <span className="block px-3 pt-3 pb-1 text-white border-b-2 border-white hover:border-primary">
                        Unsere Arbeitsfelder
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="block w-full">
                  <Link href="#comm-links">
                    <a>
                      <span className="block px-3 pt-3 pb-1 text-white border-b-2 border-white hover:border-primary">
                        Comm-Links
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="block w-full">
                  <Link href="#recruitment">
                    <a>
                      <span className="block px-3 pt-3 pb-1 text-white border-b-2 border-white hover:border-primary">
                        Rekrutierung
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="block w-full mb-5">
                  <Link href="#partners">
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
  )
}

function NavbarItem({ content, link, tooltip, ourTab, AnkerLink }) {
  const [selectedOurIndex, setSelectedOurIndex] = useContext(
    OurTabSelectionContext
  )

  if (!ourTab) {
    return (
      <li className="pb-0 list-none">
        <Link href={link ? link : '#' + AnkerLink}>
          <a className="flex justify-center group">
            {content}
            <NavbarTooltip tooltip={tooltip} />
          </a>
        </Link>
      </li>
    )
  }

  return (
    <li className="pb-0 list-none">
      <Link href={link ? link : '#' + AnkerLink}>
        <a
          onClick={() =>
            selectedOurIndex != ourTab ? setSelectedOurIndex(ourTab) : null
          }
          className="flex justify-center group"
        >
          {content}
          <NavbarTooltip tooltip={tooltip} />
        </a>
      </Link>
    </li>
  )
}

const NavbarTooltip = ({ tooltip }) => {
  return <span className="navbar-tooltip group-hover:scale-100">{tooltip}</span>
}

export default Navbar
