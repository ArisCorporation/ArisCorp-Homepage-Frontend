import ReactTooltip from 'react-tooltip'
import ReactDOMServer from 'react-dom/server'
import Link from 'next/link'
import Image from 'next/image'

const ueeIcon =
  'https://cms.ariscorp.de/assets/ab6330a8-40b6-40fd-ab8f-fac1d11741a3'
const unclIcon =
  'https://cms.ariscorp.de/assets/a3523e87-8346-4d3a-942d-46fbac42038a'
const devIcon =
  'https://cms.ariscorp.de/assets/8676440b-64b6-4d71-bcc0-e1ce3c88b88d'
const banuIcon =
  'https://cms.ariscorp.de/assets/38589a86-d9de-4f33-87c5-1305165ea851'
const vnclIcon =
  'https://cms.ariscorp.de/assets/bd011c4c-f292-4117-ba90-e8f9183380d3'
const xianIcon =
  'https://cms.ariscorp.de/assets/654272b0-6bfa-4e4c-87e7-cb690476dec5'

export default function Starmap() {
  return (
    <div className="relative w-[1200px] h-[841px]">
      <div
        id="branaugh"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[26.47%] top-[0.28777%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Branaugh</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/93a6280a-7ff9-4083-90d8-e544089a5eb4'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">1 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">
                    Nicht beansprucht
                  </p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={unclIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={unclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="chronos"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[27.77%] top-[5.9%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Chronos</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/72304396-e46c-4484-817c-961dbd704b5b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">1 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      {/*
            ! Vanduul Systems
          */}
      <div
        id="volt"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[14.45%] top-[3.5%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Volt</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/72304396-e46c-4484-817c-961dbd704b5b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">0 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Vanduul</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={vnclIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={vnclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="veritas"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[9.1%] top-[8.1%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Veritas</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/72304396-e46c-4484-817c-961dbd704b5b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">0 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Vanduul</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={vnclIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={vnclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="vermilion"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[5.8%] top-[12.1%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Vermilion</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/72304396-e46c-4484-817c-961dbd704b5b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">0 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Vanduul</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={vnclIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={vnclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="virgo"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[3.088%] top-[16.9%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Vulture</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/72304396-e46c-4484-817c-961dbd704b5b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">7 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Vanduul</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={vnclIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={vnclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="vulture"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[1.27%] top-[22.3%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Chronos</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/72304396-e46c-4484-817c-961dbd704b5b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">0 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Vanduul</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={vnclIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={vnclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="vagabond"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[0.4%] top-[27.98%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Vagabond</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/72304396-e46c-4484-817c-961dbd704b5b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">0 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Vanduul</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={vnclIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={vnclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="vanguard"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[0.4%] top-[33.27%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Vanguard</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/72304396-e46c-4484-817c-961dbd704b5b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">1 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Vanduul</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={vnclIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={vnclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="voodoo"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[1.27%] top-[38.77%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Voodoo</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/72304396-e46c-4484-817c-961dbd704b5b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">0 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Vanduul</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={vnclIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={vnclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="vendetta"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[3.2%] top-[44.8%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Vendetta</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/72304396-e46c-4484-817c-961dbd704b5b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">0 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Vanduul</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={vnclIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={vnclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="vesper"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[5.8337%] top-[49.4%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Vesper</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/72304396-e46c-4484-817c-961dbd704b5b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">0 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Vanduul</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={vnclIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={vnclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="vector"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[21.36%] top-[-16.8%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Vector</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/72304396-e46c-4484-817c-961dbd704b5b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">1 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Vanduul</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={vnclIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={vnclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="tiber"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[16.2%] top-[-14.3%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Tiber</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/810fabfb-ff91-4eb0-8c52-2bc124c91d8c'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">1 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Vanduul</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={vnclIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={vnclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="orion"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[12.13%] top-[-10.43%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Orion</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/a4cb72c5-e65d-4d4f-ac37-afd88d1459eb'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">5 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Vanduul</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={vnclIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={vnclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="viking"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[8.9%] top-[-5.3%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Viking</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/72304396-e46c-4484-817c-961dbd704b5b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">1 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Vanduul</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={vnclIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={vnclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="virgil"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[19%] top-[-16.5%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Virgil</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/a4741cec-c3f5-4c4e-af7b-9c5a61124fda'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">16 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Vanduul</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={vnclIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={vnclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="caliban"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[13.8%] top-[-6.6%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Caliban</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/609c4bdf-da44-48ae-96fe-80d2b3ed160a'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">6 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Vanduul</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={vnclIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={vnclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      {/*
            ! Xi'An Systems
          */}
      <div
        id="el-sin"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[80.55%] top-[-42.2%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">El{"'"}Sin</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/72304396-e46c-4484-817c-961dbd704b5b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">0 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Xi{"'"}An</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={xianIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={xianIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="khabari"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[89.27%] top-[-38.87%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Khabari</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/72304396-e46c-4484-817c-961dbd704b5b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">0 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Xi{"'"}An</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={xianIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={xianIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="markahil"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[96.6%] top-[-32.47%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Markahil</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/72304396-e46c-4484-817c-961dbd704b5b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">0 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Xi{"'"}An</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={xianIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={xianIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="kayfa"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[79%] top-[-41.3%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Kayfa</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/3e76c029-a4bd-42f2-a560-d7398b350c75'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">12 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Xi{"'"}An</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={xianIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={xianIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="rihlah"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[67.48%] top-[-44.81%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Rihlah</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/00740cb8-f204-4083-81ff-0a8eac10fc39'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">36 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Xi{"'"}An</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={xianIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={xianIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="eealus"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[60.66%] top-[-44.6999%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Eealus</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/00740cb8-f204-4083-81ff-0a8eac10fc39'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">3 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Xi{"'"}An</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={xianIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={xianIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="virtus"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[54.7%] top-[-42.5%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">La{"'"}Uo (Virtus)</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/72304396-e46c-4484-817c-961dbd704b5b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">98 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Xi{"'"}An</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={xianIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={xianIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="tal"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[88.17%] top-[-33.17%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Tal</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/70a14032-20fd-4bba-a3af-5459b2946d7d'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">12 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Xi{"'"}An</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={xianIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={xianIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="pallas"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[82.78%] top-[-28.5%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Th.Us{"'"}Ūng (Pallas)</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/83c18dd7-58cf-464c-b0c4-780124206cf2'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">40 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Xi{"'"}An</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={xianIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={xianIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="hadur"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[86.8%] top-[-15.78%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Yā{"'"}mon (Hadur)</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/03692dd3-eabf-4808-b5c0-d68e1d37711e'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">15 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Xi{"'"}An</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={xianIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={xianIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="ayr-ka"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[85.3%] top-[-8.32%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">
              Ail{"'"}ka (Ayr{"'"}ka)
            </h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/6db8d285-c55d-49b1-8a3e-4ba481f911b4'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">199 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Xi{"'"}An</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={xianIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={xianIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="indra"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[81.47%] top-[-3.6%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Kyuk{"'"}ya (Indra)</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/72304396-e46c-4484-817c-961dbd704b5b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Doppelstern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">13 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Xi{"'"}An</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={xianIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={xianIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      {/*
            ! Banu Systems
          */}
      <div
        id="kins"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[86.27%] top-[1.9%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Kins</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/72304396-e46c-4484-817c-961dbd704b5b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">11 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Banu</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={banuIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={banuIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="geddon"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[34.6212%] top-[8%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Geddon</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/2a43ff5d-e879-4beb-a2d3-c46d5921a87a'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">128 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Banu</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={banuIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={banuIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="bacchus"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[29.3%] top-[4.8%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Bacchus</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/72304396-e46c-4484-817c-961dbd704b5b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Doppelstern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">6 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Banu</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={banuIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={banuIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="gliese"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[34.6212%] top-[11.39%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Gliese</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/5c5ea017-33d5-48c5-bc8c-caf2fe21f817'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">13 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Banu</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={banuIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={banuIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="yulin"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[13.1%] top-[6.3%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Yulin</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/b3571b52-7bee-4113-b67e-9d22a8b1885a'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">30 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Banu</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={banuIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={banuIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      {/*
          ! UEE Systems
          */}
      <div
        id="odin"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[44.1%] top-[-73.8%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Odin</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/ab5e7a6b-04fd-4fff-acfc-45c1f1140d2a'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">21 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="tohil"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[50.3%] top-[-65.5%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Tohil</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/393778fa-4fcb-48e3-9d45-662174ca5753'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">11 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="bremen"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[29.8484%] top-[-67.73%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Bremen</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/3dc2bcce-ef90-4ec9-a3d2-188acc39cc25'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">6 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="vega"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[25.3%] top-[-67.9%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Vega</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/6223549a-3109-4008-a751-571d6fbd02b9'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">8 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="castra"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[58.4%] top-[-70.755%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Castra</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/5578cc6e-f89b-4795-8552-d49704b6c349'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">22 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="oya"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[64.3%] top-[-67.1%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Oya</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/72304396-e46c-4484-817c-961dbd704b5b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">44 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="gurzil"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[69.1%] top-[-71.50797%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Gurzil</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/56f3f28f-2a20-4857-8eda-8d36bebbad45'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">4 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="horus"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[75.4%] top-[-73.27%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Horus</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/961f88c8-6723-4b6b-af9b-5cfb9af6b9cd'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">4 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="kiel"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[72.7%] top-[-61.7%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Kiel</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/ed28d073-a848-4efe-a20b-89945dbaa51d'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">28 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="hadrian"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[67.85%] top-[-62.969%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Hadrian</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/ba70df5f-941f-43b1-91ec-82ed6e18cb06'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">65 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="cano"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[44.4%] top-[-65.5%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Cano</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/a904ac5c-f1e4-4ef4-9c1e-357128941b71'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">4 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="sol"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[34.6%] top-[-69.23%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Sol</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/ea79291d-3266-4bf2-b471-51308aefb23b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">51 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="centauri"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[11.89%] top-[-68.3%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Centauri</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/e8770b8b-ce8d-4ba4-a8f9-4c0004a8b5bd'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">10 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="baker"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[76.74%] top-[-65.89%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Baker</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/3328e2b7-bdd6-40b6-8797-8dd6287430b5'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Doppelstern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">8 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="terra"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[65.38%] top-[-68.1%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Terra</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/20fb3546-c28b-4dc3-b7cf-a44d932eddb4'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">12 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="stanton"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[59.63%] top-[-70.4%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Stanton</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/8041eebd-99f5-4559-834d-b6743fbe072b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">5 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="magnus"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[53.9398%] top-[-72.9%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Magnus</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/dd005eb1-25b0-4ee6-8531-f62735d2dcac'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">14 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="ellis"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[50.3%] top-[-75.19%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Ellis</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/44eaa042-1be7-46c4-8649-5406d781332d'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">101 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="kilian"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[45.4%] top-[-77.6%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Kilian</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/3f96b8ff-e5e5-4412-b911-69ed28d59fb3'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">194 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="davien"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[40.3%] top-[-80.07%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Davien</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/a23a5ad0-a893-4055-9f6e-94dcd0901630'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">17 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="croshaw"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[28.93%] top-[-82.4%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Croshaw</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/c25e0c3c-e480-4e76-afd9-10fe95ec085f'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">8 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="rhetor"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[23.77%] top-[-84.7%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Rhetor</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/643736c6-a922-4ca7-9080-042d02745c8b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">4 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="idris"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[19%] top-[-87%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Idris</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/d8562614-d518-4b9c-8ea1-9cddc13d58a0'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">9 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="elysium"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[11.6%] top-[-89.5%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Elysium</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/72304396-e46c-4484-817c-961dbd704b5b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">9 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="tayac"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[67.35%] top-[-85.77%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Tayac</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/9aab8d14-c9c3-45e4-ac51-19a76d14ad21'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">3 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="goss"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[71.1364%] top-[-85.9%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Goss</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/3cca4555-46ec-4e41-9311-333d1c4bf2a8'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Doppelstern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">6 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="ferron"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[34.62%] top-[-88.3%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Ferron</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/cc34de9a-3bce-457a-aadf-0c9aad8f55d6'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">18 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="oretani"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[34.63%] top-[-83.2%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Markahil</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/6843a1d1-63c3-4eff-9b9e-2260396c4303'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">37 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="nexus"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[48%] top-[-89.5%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Nexus</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/8f6256f2-493d-439c-af0d-c30bbf06f1c6'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">11 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="banshee"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[24.78%] top-[-86.1%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Banshee</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/2813eb71-a28c-4eac-916c-b0b7de2a2f81'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">56 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="helios"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[60.682%] top-[-89.236%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Helios</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/0876509d-ea09-42d8-8414-899f786b777c'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">237 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="kabal"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[15.35%] top-[-90.317%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Kabal</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/c1886326-5933-4c7f-800c-4bc68143f078'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">4 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="nemo"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[39.78%] top-[-89.57%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Nemo</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/9dccfdcc-e054-4fe3-a0ef-e1656b2bdc4c'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">2 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="fora"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[34.57%] top-[-90.6%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Fora</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/72304396-e46c-4484-817c-961dbd704b5b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">14 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="charon"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[57.65%] top-[-93.8%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Charon</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/d454ee21-e28d-4b2f-9424-11d2b5f1021a'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">6 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="corel"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[42.28%] top-[-86.645%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Corel</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/186998f4-327b-4008-a709-6242a816d100'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">9 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="tamsa"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[21.1%] top-[-83.9%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Tamsa</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/2813eb71-a28c-4eac-916c-b0b7de2a2f81'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">304 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={ueeIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={ueeIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      {/*
          ! Developing Systems
        */}
      <div
        id="kellog"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[34.6212%] top-[-164.1%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Kellog</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/29bf8d1c-a5f6-4a81-95f8-24ce060d072b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">33 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={devIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={devIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="kallis"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[30.9%] top-[-147.0589%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Kallis</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/350afc90-4e4a-49b4-8c59-130ad5752595'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">23 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={devIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={devIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="oso"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[32%] top-[-142.9%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Oso</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/9f4aa16f-2d87-4040-8af1-1289772dce29'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">16 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={devIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={devIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="osiris"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[74.92%] top-[-123.7%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Osiris</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/081a22d1-993b-4f79-b9ef-4a695492ba63'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">2 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={devIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={devIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="garron"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[19.65%] top-[-125.3%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Garron</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/4735cfe7-6301-40dd-8ff6-a7e3939c6010'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">6 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={devIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={devIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="genesis"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[49.1%] top-[-108.7%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Genesis</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/72304396-e46c-4484-817c-961dbd704b5b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">25 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={devIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={devIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      {/*
          ! Unclaimed Systems
        */}
      <div
        id="tanga"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[34.62%] top-[-172.3%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Tanga</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/72304396-e46c-4484-817c-961dbd704b5b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">83 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={
              'https://cms.ariscorp.de/assets/a3523e87-8346-4d3a-942d-46fbac42038a'
            }
            layout="fill"
            placeholder="blur"
            blurDataURL={unclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="nyx"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[41.26%] top-[-166.9%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Nyx</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/bc470d99-66e6-4daa-8b49-dc9dfd99571d'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">11 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={
              'https://cms.ariscorp.de/assets/a3523e87-8346-4d3a-942d-46fbac42038a'
            }
            layout="fill"
            placeholder="blur"
            blurDataURL={unclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="oberon"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[21.8%] top-[-164%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Oberon</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/03ffedd1-d17a-4fa1-8afb-eebb98d6fda8'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">18 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={
              'https://cms.ariscorp.de/assets/a3523e87-8346-4d3a-942d-46fbac42038a'
            }
            layout="fill"
            placeholder="blur"
            blurDataURL={unclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="pyro"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[53.1%] top-[-157.4%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Pyro</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/578e2c12-5ebf-4a57-b7db-30f45217e2b6'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">13 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={
              'https://cms.ariscorp.de/assets/a3523e87-8346-4d3a-942d-46fbac42038a'
            }
            layout="fill"
            placeholder="blur"
            blurDataURL={unclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="nul"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[19.65%] top-[-153.3%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Nul</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/ff770ef8-08b0-474c-ae22-2dd547541b7a'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">120 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={
              'https://cms.ariscorp.de/assets/a3523e87-8346-4d3a-942d-46fbac42038a'
            }
            layout="fill"
            placeholder="blur"
            blurDataURL={unclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="cathcard"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[44.02%] top-[-141%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Cathcard</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/643e7e25-d2d1-465c-ad7d-3e2e35445c00'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">22 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={
              'https://cms.ariscorp.de/assets/a3523e87-8346-4d3a-942d-46fbac42038a'
            }
            layout="fill"
            placeholder="blur"
            blurDataURL={unclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="taranis"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[56.742423%] top-[-142.4%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Taranis</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/4de287b7-e9dc-4e2e-9d4b-ad1d7c77eda3'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">18 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={
              'https://cms.ariscorp.de/assets/a3523e87-8346-4d3a-942d-46fbac42038a'
            }
            layout="fill"
            placeholder="blur"
            blurDataURL={unclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="min"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[51.6%] top-[-138.6%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Taranis</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/4a409816-ca6e-4688-b88c-8bbc3af6e429'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">1 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={
              'https://cms.ariscorp.de/assets/a3523e87-8346-4d3a-942d-46fbac42038a'
            }
            layout="fill"
            placeholder="blur"
            blurDataURL={unclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="hades"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[44.5%] top-[-138.5%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Hades</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/23d4f010-dcb8-45fd-b3ba-52e8b079a344'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">22 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={
              'https://cms.ariscorp.de/assets/a3523e87-8346-4d3a-942d-46fbac42038a'
            }
            layout="fill"
            placeholder="blur"
            blurDataURL={unclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="tyrol"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[71.1%] top-[-129.3%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div className="">
            <h3 className="p-0 m-0">Tyrol</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/87c159ed-ddd4-440e-9bf4-ee93bacde547'
              }
              className="object-cover w-32 h-16 rounded"
            />

            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Doppelstern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">56 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={
              'https://cms.ariscorp.de/assets/a3523e87-8346-4d3a-942d-46fbac42038a'
            }
            layout="fill"
            placeholder="blur"
            blurDataURL={unclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <div
        id="leir"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[16.6666%] top-[-128.6%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Leir</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/17f1c6ef-8d07-41ef-994a-d97b558d4f9b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">11 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={
              'https://cms.ariscorp.de/assets/a3523e87-8346-4d3a-942d-46fbac42038a'
            }
            layout="fill"
            placeholder="blur"
            blurDataURL={unclIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      {/*
          ! All added Systems
        */}
      <div
        id="trise"
        className="relative z-10 w-[1.667%] h-[2.3789%] left-[51.4%] top-[-203.9%] group hover:cursor-pointer"
        data-html={true}
        data-tip={ReactDOMServer.renderToString(
          <div>
            <h3 className="p-0 m-0">Trise</h3>
            <img
              src={
                'https://cms.ariscorp.de/assets/72304396-e46c-4484-817c-961dbd704b5b'
              }
              className="object-cover w-32 h-16 rounded"
            />
            <div>
              <h4>Starsystem:</h4>
              <ul className="pl-0 list-none no-marker">
                <li>
                  <p className="p-0 m-0 text-base">System Typ</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">Einzelner Stern</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Größe</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">11 AE</p>
                </li>
                <li>
                  <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                  <p className="p-0 m-0 [font-size:0.6rem]">UEE</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      >
        <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
        <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
          <Image
            src={banuIcon}
            layout="fill"
            placeholder="blur"
            blurDataURL={banuIcon + '?width=16&quality=1'}
            draggable="false"
          />
        </div>
      </div>

      <ReactTooltip
        place="right"
        effect="solid"
        arrowColor="transparent"
        type="dark"
        padding="8px"
      />

      <Image
        src={
          'https://cms.ariscorp.de/assets/59e8771b-d5a2-468e-971d-7594da3c113e'
        }
        layout="fill"
        placeholder="blur"
        blurDataURL="https://cms.ariscorp.de/assets/59e8771b-d5a2-468e-971d-7594da3c113e?width=16&quality=1"
        draggable="false"
      />
    </div>
  )
}
