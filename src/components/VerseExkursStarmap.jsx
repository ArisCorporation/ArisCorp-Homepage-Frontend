import ReactTooltip from 'react-tooltip'
import ReactDOMServer from 'react-dom/server'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

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

export default function Starmap({ data }) {
  const router = useRouter()
  return (
    <div className="lg:w-full max-w-[1200px] aspect-[1200/841]">
      <div className="z-50">
        <ReactTooltip
          place="right"
          effect="solid"
          arrowColor="transparent"
          type="dark"
          padding="8px"
        />
      </div>

      <div className="relative w-full h-full mx-auto">
        <div
          id="branaugh"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[26.47%] top-[0.28777%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Branaugh')[0]
              ? ''
              : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/branaugh')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Branaugh</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Branaugh')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Branaugh')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Branaugh')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Branaugh')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Branaugh')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Branaugh')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Branaugh')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Branaugh')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Branaugh')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Branaugh')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={unclIcon}
              fill
              placeholder="blur"
              blurDataURL={unclIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="chronos"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[27.77%] top-[5.9%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Chronos')[0]
              ? ''
              : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/chronos')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Chronos</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Chronos')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Chronos')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Chronos')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Chronos')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Chronos')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Chronos')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Chronos')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Chronos')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Chronos')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Chronos')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
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
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[14.45%] top-[3.5%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Volt')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/volt')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Volt</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Volt')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Volt')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Volt')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Volt')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Volt')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Volt')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Volt')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Volt')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Volt')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Volt')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={vnclIcon}
              fill
              placeholder="blur"
              blurDataURL={vnclIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="veritas"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[9.1%] top-[8.1%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Veritas')[0]
              ? ''
              : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/veritas')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Veritas</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Veritas')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Veritas')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Veritas')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Veritas')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Veritas')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Veritas')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Veritas')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Veritas')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Veritas')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Veritas')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={vnclIcon}
              fill
              placeholder="blur"
              blurDataURL={vnclIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="vermilion"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[5.8%] top-[12.1%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Vermilion')[0]
              ? ''
              : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/vermilion')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Vermilion</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Vermilion')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Vermilion')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Vermilion')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Vermilion')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Vermilion')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Vermilion')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Vermilion')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Vermilion')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Vermilion')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Vermilion')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={vnclIcon}
              fill
              placeholder="blur"
              blurDataURL={vnclIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="virgo"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[3.088%] top-[16.9%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Virgo')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/virgo')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Vulture</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Virgo')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Virgo')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Virgo')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Virgo')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Virgo')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Virgo')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Virgo')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Virgo')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Virgo')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Virgo')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={vnclIcon}
              fill
              placeholder="blur"
              blurDataURL={vnclIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="vulture"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[1.27%] top-[22.3%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Vulture')[0]
              ? ''
              : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/vulture')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Chronos</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Vulture')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Vulture')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Vulture')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Vulture')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Vulture')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Vulture')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Vulture')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Vulture')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Vulture')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Vulture')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={vnclIcon}
              fill
              placeholder="blur"
              blurDataURL={vnclIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="vagabond"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[0.4%] top-[27.98%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Vagabond')[0]
              ? ''
              : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/vagabond')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Vagabond</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Vagabond')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Vagabond')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Vagabond')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Vagabond')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Vagabond')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Vagabond')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Vagabond')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Vagabond')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Vagabond')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Vagabond')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={vnclIcon}
              fill
              placeholder="blur"
              blurDataURL={vnclIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="vanguard"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[0.4%] top-[33.27%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Vanguard')[0]
              ? ''
              : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/vanguard')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Vanguard</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Vanguard')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Vanguard')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Vanguard')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Vanguard')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Vanguard')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Vanguard')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Vanguard')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Vanguard')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Vanguard')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Vanguard')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={vnclIcon}
              fill
              placeholder="blur"
              blurDataURL={vnclIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="voodoo"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[1.27%] top-[38.77%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Voodoo')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/voodoo')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Voodoo</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Voodoo')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Voodoo')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Voodoo')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Voodoo')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Voodoo')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Voodoo')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Voodoo')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Voodoo')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Voodoo')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Voodoo')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={vnclIcon}
              fill
              placeholder="blur"
              blurDataURL={vnclIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="vendetta"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[3.2%] top-[44.8%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Vendetta')[0]
              ? ''
              : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/vendetta')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Vendetta</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Vendetta')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Vendetta')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Vendetta')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Vendetta')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Vendetta')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Vendetta')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Vendetta')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Vendetta')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Vendetta')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Vendetta')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={vnclIcon}
              fill
              placeholder="blur"
              blurDataURL={vnclIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="vesper"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[5.8337%] top-[49.4%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Vesper')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/vesper')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Vesper</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Vesper')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Vesper')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Vesper')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Vesper')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Vesper')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Vesper')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Vesper')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Vesper')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Vesper')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Vesper')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={vnclIcon}
              fill
              placeholder="blur"
              blurDataURL={vnclIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="vector"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[21.36%] top-[-16.8%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Vector')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/vector')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Vector</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Vector')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Vector')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Vector')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Vector')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Vector')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Vector')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Vector')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Vector')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Vector')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Vector')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={vnclIcon}
              fill
              placeholder="blur"
              blurDataURL={vnclIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="tiber"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[16.2%] top-[-14.3%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Tiber')[0]
              ? ''
              : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/tiber')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Tiber</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Tiber')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Tiber')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Tiber')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Tiber')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Tiber')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Tiber')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Tiber')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Tiber')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Tiber')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Tiber')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={vnclIcon}
              fill
              placeholder="blur"
              blurDataURL={vnclIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="orion"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[12.13%] top-[-10.43%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Orion')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/orion')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Orion</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Orion')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Orion')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Orion')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Orion')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Orion')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Orion')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Orion')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Orion')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Orion')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Orion')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={vnclIcon}
              fill
              placeholder="blur"
              blurDataURL={vnclIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="viking"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[8.9%] top-[-5.3%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Viking')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/viking')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Viking</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Viking')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Viking')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Viking')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Viking')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Viking')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Viking')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Viking')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Viking')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Viking')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Viking')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={vnclIcon}
              fill
              placeholder="blur"
              blurDataURL={vnclIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="virgil"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[19%] top-[-16.5%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Virgil')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/virgil')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Virgil</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Virgil')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Virgil')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Virgil')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Virgil')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Virgil')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Virgil')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Virgil')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Virgil')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Virgil')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Virgil')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={vnclIcon}
              fill
              placeholder="blur"
              blurDataURL={vnclIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="caliban"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[13.8%] top-[-6.6%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Caliban')[0]
              ? ''
              : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/caliban')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Caliban</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Caliban')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Caliban')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Caliban')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Caliban')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Caliban')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Caliban')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Caliban')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Caliban')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Caliban')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Caliban')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={vnclIcon}
              fill
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
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[80.55%] top-[-42.2%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'El-sin')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/el-sin')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">El{"'"}Sin</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'El-sin')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'El-sin')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'El-sin')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'El-sin')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'El-sin')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'El-sin')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'El-sin')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'El-sin')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'El-sin')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'El-sin')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={xianIcon}
              fill
              placeholder="blur"
              blurDataURL={xianIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="khabari"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[89.27%] top-[-38.87%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Khabari')[0]
              ? ''
              : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/khabari')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Khabari</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Khabari')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Khabari')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Khabari')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Khabari')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Khabari')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Khabari')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Khabari')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Khabari')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Khabari')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Khabari')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={xianIcon}
              fill
              placeholder="blur"
              blurDataURL={xianIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="markahil"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[96.6%] top-[-32.47%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Markahil')[0]
              ? ''
              : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/markahil')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Markahil</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Markahil')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Markahil')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Markahil')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Markahil')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Markahil')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Markahil')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Markahil')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Markahil')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Markahil')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Markahil')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={xianIcon}
              fill
              placeholder="blur"
              blurDataURL={xianIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="kayfa"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[79%] top-[-41.3%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Kayfa')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/kayfa')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Kayfa</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Kayfa')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Kayfa')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Kayfa')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Kayfa')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Kayfa')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Kayfa')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Kayfa')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Kayfa')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Kayfa')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Kayfa')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={xianIcon}
              fill
              placeholder="blur"
              blurDataURL={xianIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="rihlah"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[67.48%] top-[-44.81%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Rihlah')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/rhilah')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Rihlah</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Rihlah')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Rihlah')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Rihlah')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Rihlah')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Rihlah')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Rihlah')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Rihlah')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Rihlah')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Rihlah')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Rihlah')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={xianIcon}
              fill
              placeholder="blur"
              blurDataURL={xianIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="eealus"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[60.66%] top-[-44.6999%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Eealus')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/eealus')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Eealus</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Eealus')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Eealus')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Eealus')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Eealus')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Eealus')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Eealus')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Eealus')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Eealus')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Eealus')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Eealus')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={xianIcon}
              fill
              placeholder="blur"
              blurDataURL={xianIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="virtus"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[54.7%] top-[-42.5%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Virtus')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/virtus')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">La{"'"}Uo (Virtus)</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Virtus')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Virtus')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Virtus')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Virtus')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Virtus')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Virtus')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Virtus')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Virtus')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Virtus')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Virtus')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={xianIcon}
              fill
              placeholder="blur"
              blurDataURL={xianIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="tal"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[88.17%] top-[-33.17%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Tal')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/tal')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Tal</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Tal')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Tal')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Tal')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Tal')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Tal')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Tal')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Tal')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Tal')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Tal')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Tal')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={xianIcon}
              fill
              placeholder="blur"
              blurDataURL={xianIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="pallas"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[82.78%] top-[-28.5%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Pallas')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/pallas')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Th.Us{"'"}Ūng (Pallas)</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Pallas')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Pallas')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Pallas')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Pallas')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Pallas')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Pallas')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Pallas')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Pallas')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Pallas')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Pallas')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={xianIcon}
              fill
              placeholder="blur"
              blurDataURL={xianIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="hadur"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[86.8%] top-[-15.78%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Hadur')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/hadur')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Yā{"'"}mon (Hadur)</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Hadur')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Hadur')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Hadur')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Hadur')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Hadur')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Hadur')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Hadur')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Hadur')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Hadur')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Hadur')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={xianIcon}
              fill
              placeholder="blur"
              blurDataURL={xianIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="ayr-ka"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[85.3%] top-[-8.32%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Ayrka')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/ayrka')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">
                Ail{"'"}ka (Ayr{"'"}ka)
              </h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Ayrka')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Ayrka')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Ayrka')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Ayrka')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Ayrka')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Ayrka')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Ayrka')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Ayrka')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Ayrka')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Ayrka')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={xianIcon}
              fill
              placeholder="blur"
              blurDataURL={xianIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="indra"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[81.47%] top-[-3.6%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Indra')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/indra')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Kyuk{"'"}ya (Indra)</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Indra')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Indra')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Indra')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Indra')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Indra')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Indra')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Indra')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Indra')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Indra')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Indra')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={xianIcon}
              fill
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
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[86.27%] top-[1.9%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Kins')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/kins')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Kins</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Kins')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Kins')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Kins')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Kins')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Kins')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Kins')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Kins')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Kins')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Kins')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Kins')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={banuIcon}
              fill
              placeholder="blur"
              blurDataURL={banuIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="geddon"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[34.6212%] top-[8%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Geddon')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/geddon')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Geddon</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Geddon')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Geddon')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Geddon')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Geddon')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Geddon')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Geddon')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Geddon')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Geddon')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Geddon')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Geddon')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={banuIcon}
              fill
              placeholder="blur"
              blurDataURL={banuIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="bacchus"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[29.3%] top-[4.8%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Bacchus')[0]
              ? ''
              : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/bacchus')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Bacchus</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Bacchus')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Bacchus')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Bacchus')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Bacchus')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Bacchus')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Bacchus')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Bacchus')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Bacchus')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Bacchus')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Bacchus')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={banuIcon}
              fill
              placeholder="blur"
              blurDataURL={banuIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="gliese"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[34.6212%] top-[11.39%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Gliese')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/gliese')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Gliese</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Gliese')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Gliese')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Gliese')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Gliese')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Gliese')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Gliese')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Gliese')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Gliese')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Gliese')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Gliese')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={banuIcon}
              fill
              placeholder="blur"
              blurDataURL={banuIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="yulin"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[13.1%] top-[6.3%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Yulin')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/yulin')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Yulin</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Yulin')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Yulin')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Yulin')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Yulin')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Yulin')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Yulin')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Yulin')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Yulin')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Yulin')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Yulin')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={banuIcon}
              fill
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
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[44.1%] top-[-73.8%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Odin')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/odin')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Odin</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Odin')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Odin')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Odin')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Odin')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Odin')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Odin')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Odin')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Odin')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Odin')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Odin')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="tohil"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[50.3%] top-[-65.5%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Tohil')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/tohil')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Tohil</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Tohil')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Tohil')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Tohil')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Tohil')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Tohil')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Tohil')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Tohil')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Tohil')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Tohil')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Tohil')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="bremen"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[29.8484%] top-[-67.73%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Bremen')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/bremen')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Bremen</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Bremen')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Bremen')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Bremen')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Bremen')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Bremen')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Bremen')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Bremen')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Bremen')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Bremen')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Bremen')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="vega"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[25.3%] top-[-67.9%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Vega')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/vega')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Vega</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Vega')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Vega')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Vega')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Vega')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Vega')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Vega')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Vega')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Vega')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Vega')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Vega')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="castra"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[58.4%] top-[-70.755%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Castra')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/castra')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Castra</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Castra')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Castra')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Castra')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Castra')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Castra')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Castra')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Castra')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Castra')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Castra')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Castra')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="oya"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[64.3%] top-[-67.1%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Oya')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/oya')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Oya</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Oya')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Oya')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Oya')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Oya')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Oya')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Oya')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Oya')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Oya')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Oya')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Oya')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="gurzil"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[69.1%] top-[-71.50797%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Gurzil')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/gurzil')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Gurzil</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Gurzil')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Gurzil')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Gurzil')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Gurzil')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Gurzil')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Gurzil')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Gurzil')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Gurzil')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Gurzil')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Gurzil')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="horus"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[75.4%] top-[-73.27%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Horus')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/horus')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Horus</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Horus')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Horus')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Horus')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Horus')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Horus')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Horus')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Horus')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Horus')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Horus')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Horus')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="kiel"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[72.7%] top-[-61.7%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Kiel')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/kiel')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Kiel</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Kiel')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Kiel')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Kiel')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Kiel')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Kiel')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Kiel')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Kiel')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Kiel')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Kiel')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Kiel')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="hadrian"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[67.85%] top-[-62.969%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Hadrian')[0]
              ? ''
              : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/hadrian')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Hadrian</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Hadrian')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Hadrian')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Hadrian')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Hadrian')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Hadrian')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Hadrian')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Hadrian')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Hadrian')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Hadrian')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Hadrian')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="cano"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[44.4%] top-[-65.5%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Cano')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/cano')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Cano</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Cano')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Cano')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Cano')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Cano')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Cano')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Cano')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Cano')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Cano')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Cano')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Cano')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="sol"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[34.6%] top-[-69.23%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Sol')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/sol')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Sol</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Sol')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Sol')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Sol')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Sol')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Sol')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Sol')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Sol')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Sol')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Sol')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Sol')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="centauri"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[11.89%] top-[-68.3%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Centauri')[0]
              ? ''
              : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/centauri')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Centauri</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Centauri')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Centauri')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Centauri')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Centauri')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Centauri')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Centauri')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Centauri')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Centauri')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Centauri')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Centauri')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="baker"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[76.74%] top-[-65.89%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Baker')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/baker')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Baker</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Baker')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Baker')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Baker')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Baker')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Baker')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Baker')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Baker')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Baker')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Baker')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Baker')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="terra"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[65.38%] top-[-68.1%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Terra')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/terra')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Terra</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Terra')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Terra')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Terra')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Terra')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Terra')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Terra')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Terra')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Terra')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Terra')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Terra')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="stanton"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[59.63%] top-[-70.4%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Stanton')[0]
              ? ''
              : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/stanton')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Stanton</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Stanton')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Stanton')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Stanton')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Stanton')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Stanton')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Stanton')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Stanton')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Stanton')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Stanton')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Stanton')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="magnus"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[53.9398%] top-[-72.9%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Magnus')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/magnus')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Magnus</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Magnus')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Magnus')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Magnus')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Magnus')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Magnus')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Magnus')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Magnus')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Magnus')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Magnus')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Magnus')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="ellis"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[50.3%] top-[-75.19%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Ellis')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/ellis')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Ellis</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Ellis')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Ellis')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Ellis')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Ellis')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Ellis')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Ellis')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Ellis')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Ellis')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Ellis')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Ellis')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="kilian"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[45.4%] top-[-77.6%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Kilian')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/kilian')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Kilian</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Kilian')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Kilian')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Kilian')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Kilian')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Kilian')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Kilian')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Kilian')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Kilian')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Kilian')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Kilian')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="davien"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[40.3%] top-[-80.07%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Davien')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/davien')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Davien</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Davien')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Kilian')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Kilian')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Kilian')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Kilian')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Kilian')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Kilian')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Kilian')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Kilian')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Kilian')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="croshaw"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[28.93%] top-[-82.4%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Croshaw')[0]
              ? ''
              : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/croshaw')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Croshaw</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Croshaw')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Croshaw')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Croshaw')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Croshaw')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Croshaw')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Croshaw')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Croshaw')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Croshaw')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Croshaw')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Croshaw')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="rhetor"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[23.77%] top-[-84.7%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Rhetor')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/rhetor')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Rhetor</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Rhetor')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Rhetor')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Rhetor')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Rhetor')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Rhetor')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Rhetor')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Rhetor')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Rhetor')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Rhetor')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Rhetor')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="idris"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[19%] top-[-87%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Idris')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/idris')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Idris</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Idris')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Idris')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Idris')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Idris')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Idris')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Idris')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Idris')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Idris')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Idris')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Idris')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="elysium"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[11.6%] top-[-89.5%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Elysium')[0]
              ? ''
              : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/elysium')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Elysium</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Elysium')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Elysium')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Elysium')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Elysium')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Elysium')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Elysium')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Elysium')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Elysium')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Elysium')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Elysium')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="tayac"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[67.35%] top-[-85.77%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Tayac')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/tayac')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Tayac</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Tayac')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Tayac')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Tayac')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Tayac')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Tayac')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Tayac')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Tayac')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Tayac')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Tayac')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Tayac')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="goss"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[71.1364%] top-[-85.9%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Goss')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/goss')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Goss</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Goss')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Goss')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Goss')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Goss')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Goss')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Goss')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Goss')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Goss')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Goss')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Goss')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="ferron"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[34.62%] top-[-88.3%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Ferron')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/ferron')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Ferron</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Ferron')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Ferron')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Ferron')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Ferron')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Ferron')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Ferron')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Ferron')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Ferron')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Ferron')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Ferron')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="oretani"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[34.63%] top-[-83.2%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Oretani')[0]
              ? ''
              : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/oretani')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Oretani</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Oretani')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Oretani')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Oretani')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Oretani')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Oretani')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Oretani')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Oretani')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Oretani')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Oretani')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Oretani')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="nexus"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[48%] top-[-89.5%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Nexus')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/nexus')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Nexus</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Nexus')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Nexus')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Nexus')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Nexus')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Nexus')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Nexus')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Nexus')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Nexus')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Nexus')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Nexus')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="banshee"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[24.78%] top-[-86.1%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Banshee')[0]
              ? ''
              : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/banshee')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Banshee</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Banshee')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Banshee')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Banshee')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Banshee')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Banshee')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Banshee')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Banshee')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Banshee')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Banshee')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Banshee')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="helios"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[60.682%] top-[-89.236%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Helios')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/helios')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Helios</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Helios')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Helios')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Helios')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Helios')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Helios')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Helios')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Helios')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Helios')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Helios')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Helios')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="kabal"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[15.35%] top-[-90.317%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Kabal')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/kabal')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Kabal</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Kabal')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Kabal')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Kabal')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Kabal')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Kabal')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Kabal')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Kabal')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Kabal')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Kabal')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Kabal')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="nemo"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[39.78%] top-[-89.57%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Nemo')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/nemo')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Nemo</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Nemo')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Nemo')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Nemo')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Nemo')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Nemo')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Nemo')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Nemo')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Nemo')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Nemo')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Nemo')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="fora"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[34.57%] top-[-90.6%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Fora')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/fora')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Fora</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Fora')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Fora')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Fora')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Fora')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Fora')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Fora')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Fora')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Fora')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Fora')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Fora')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="charon"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[57.65%] top-[-93.8%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Charon')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/charon')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Charon</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Charon')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Charon')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Charon')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Charon')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Charon')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Charon')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Charon')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Charon')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Charon')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Charon')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="corel"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[42.28%] top-[-86.645%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Corel')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/corel')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Corel</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Corel')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Corel')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Corel')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Corel')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Corel')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Corel')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Corel')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Corel')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Corel')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Corel')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
              placeholder="blur"
              blurDataURL={ueeIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="tamsa"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[21.1%] top-[-83.9%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Tamsa')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/tamsa')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Tamsa</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Tamsa')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Tamsa')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Tamsa')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'BranTamsaaugh')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Tamsa')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Tamsa')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Tamsa')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Tamsa')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Tamsa')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Tamsa')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={ueeIcon}
              fill
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
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[34.6212%] top-[-164.1%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Kellog')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/kellog')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Kellog</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Kellog')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Kellog')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Kellog')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Kellog')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Kellog')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Kellog')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Kellog')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Kellog')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Kellog')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Kellog')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={devIcon}
              fill
              placeholder="blur"
              blurDataURL={devIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="kallis"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[30.9%] top-[-147.0589%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Kallis')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/kallis')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Kallis</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Kallis')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Kallis')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Kallis')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Kallis')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Kallis')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Kallis')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Kallis')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Kallis')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Kallis')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Kallis')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={devIcon}
              fill
              placeholder="blur"
              blurDataURL={devIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="oso"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[32%] top-[-142.9%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Oso')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/oso')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Oso</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Oso')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Oso')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Oso')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Oso')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Oso')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Oso')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Oso')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Oso')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Oso')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Oso')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={devIcon}
              fill
              placeholder="blur"
              blurDataURL={devIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="osiris"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[74.92%] top-[-123.7%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Osiris')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/osiris')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Osiris</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Osiris')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Osiris')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Osiris')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Osiris')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Osiris')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Osiris')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Osiris')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Osiris')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Osiris')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Osiris')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={devIcon}
              fill
              placeholder="blur"
              blurDataURL={devIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="garron"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[19.65%] top-[-125.3%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Garron')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/garron')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Garron</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Garron')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Garron')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Garron')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Garron')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Garron')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Garron')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Garron')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Garron')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Garron')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Garron')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={devIcon}
              fill
              placeholder="blur"
              blurDataURL={devIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="genesis"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[49.1%] top-[-108.7%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Genesis')[0]
              ? ''
              : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/genisis')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Genesis</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Genesis')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Genesis')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Genesis')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Genesis')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Genesis')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Genesis')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Genesis')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Genesis')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Genesis')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Genesis')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={devIcon}
              fill
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
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[34.62%] top-[-172.3%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Tanga')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/tanga')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Tanga</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Tanga')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Tanga')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Tanga')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Tanga')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Tanga')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Tanga')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Tanga')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Tanga')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Tanga')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Tanga')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={unclIcon}
              fill
              placeholder="blur"
              blurDataURL={unclIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="nyx"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[41.26%] top-[-166.9%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Nyx')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/nyx')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Nyx</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Nyx')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Nyx')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Nyx')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Nyx')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Nyx')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Nyx')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Nyx')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Nyx')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Nyx')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Nyx')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={unclIcon}
              fill
              placeholder="blur"
              blurDataURL={unclIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="oberon"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[21.8%] top-[-164%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Oberon')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/oberon')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Oberon</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Oberon')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Oberon')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Oberon')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Oberon')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Oberon')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Oberon')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Oberon')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Oberon')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Oberon')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Oberon')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={unclIcon}
              fill
              placeholder="blur"
              blurDataURL={unclIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="pyro"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[53.1%] top-[-157.4%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Pyro')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/pyro')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Pyro</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Pyro')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Pyro')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Pyro')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Pyro')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Pyro')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Pyro')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Pyro')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Pyro')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Pyro')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Pyro')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={unclIcon}
              fill
              placeholder="blur"
              blurDataURL={unclIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="nul"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[19.65%] top-[-153.3%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Nul')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/nul')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Nul</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Nul')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Nul')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Nul')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Nul')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Nul')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Nul')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Nul')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Nul')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Nul')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Nul')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={unclIcon}
              fill
              placeholder="blur"
              blurDataURL={unclIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="cathcart"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[44.02%] top-[-141%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Cathcart')[0]
              ? ''
              : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/cathcart')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Cathcart</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Cathcart')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Cathcart')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Cathcart')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Cathcart')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Cathcart')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Cathcart')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Cathcart')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Cathcart')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Cathcart')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Cathcart')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={unclIcon}
              fill
              placeholder="blur"
              blurDataURL={unclIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="taranis"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[56.742423%] top-[-142.4%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Taranis')[0]
              ? ''
              : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/taranis')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Taranis</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Taranis')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Taranis')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Taranis')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Taranis')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Taranis')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Taranis')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Taranis')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Taranis')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Taranis')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Taranis')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={unclIcon}
              fill
              placeholder="blur"
              blurDataURL={unclIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="min"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[51.6%] top-[-138.6%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Min')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/min')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Taranis</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Min')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Min')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Min')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Min')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Min')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Min')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Min')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Min')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Min')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Min')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={unclIcon}
              fill
              placeholder="blur"
              blurDataURL={unclIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="hades"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[44.5%] top-[-138.5%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Hades')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/hades')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Hades</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Hades')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Hades')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Hades')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Hades')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Hades')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Hades')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Hades')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Hades')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Hades')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Hades')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={unclIcon}
              fill
              placeholder="blur"
              blurDataURL={unclIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="tyrol"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[71.1%] top-[-129.3%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Tyrol')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/tyrol')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div className="">
              <h3 className="p-0 m-0">Tyrol</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Tyrol')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />

              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Tyrol')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Tyrol')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Tyrol')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Tyrol')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Tyrol')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Tyrol')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Tyrol')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Tyrol')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Tyrol')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={unclIcon}
              fill
              placeholder="blur"
              blurDataURL={unclIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <div
          id="leir"
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[16.6666%] top-[-128.6%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Leir')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/leir')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Leir</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Leir')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Leir')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Leir')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Leir')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Leir')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Leir')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Leir')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Leir')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Leir')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Leir')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={unclIcon}
              fill
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
          className={
            'relative z-10 w-[1.667%] h-[2.3789%] left-[51.4%] top-[-203.9%] group hover:cursor-pointer' +
            (data.filter((data) => data.name === 'Trise')[0] ? '' : ' scale-0')
          }
          onClick={() => router.push('/VerseExkurs/starmap/trise')}
          data-html={true}
          data-tip={ReactDOMServer.renderToString(
            <div>
              <h3 className="p-0 m-0">Trise</h3>
              <img
                src={
                  'https://cms.ariscorp.de/assets/' +
                  data.filter((data) => data.name === 'Trise')[0]?.banner?.id
                }
                className="object-cover w-32 h-16 rounded"
              />
              <div className='-mt-6'>
                <h4 className='p-0 m-0'>Starsystem:</h4>
                <ul className="pl-0 list-none no-marker">
                  <li>
                    <p className="p-0 m-0 text-base">Sternen Typ</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data
                        .filter((data) => data.name === 'Trise')[0]
                        ?.star_type?.charAt(0)
                        .toUpperCase() +
                        data
                          .filter((data) => data.name === 'Trise')[0]
                          ?.star_type?.slice(1)}
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Größe</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Trise')[0]?.size}{' '}
                      AE
                    </p>
                  </li>
                  <li>
                    <p className="p-0 m-0 text-base">Zugehörigkeit</p>
                    <p className="p-0 m-0 [font-size:0.6rem]">
                      {data.filter((data) => data.name === 'Trise')[0]
                        ?.affiliation == 'uee'
                        ? 'UEE'
                        : data.filter((data) => data.name === 'Trise')[0]
                            ?.affiliation == 'indevelopment'
                        ? 'In Entwicklung'
                        : data.filter((data) => data.name === 'Trise')[0]
                            ?.affiliation == 'unclaimed'
                        ? 'Nicht Beansprucht'
                        : data.filter((data) => data.name === 'Trise')[0]
                            ?.affiliation == 'banu'
                        ? 'Banu'
                        : data.filter((data) => data.name === 'Trise')[0]
                            ?.affiliation == 'xian'
                        ? "Xi'An"
                        : data.filter((data) => data.name === 'Trise')[0]
                            ?.affiliation == 'vanduul'
                        ? 'Vanduul'
                        : null}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-400 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200 group-hover:animate-ping-slow animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={banuIcon}
              fill
              placeholder="blur"
              blurDataURL={banuIcon + '?width=16&quality=1'}
              draggable="false"
            />
          </div>
        </div>

        <Image
          src={
            'https://cms.ariscorp.de/assets/59e8771b-d5a2-468e-971d-7594da3c113e'
          }
          fill
          placeholder="blur"
          blurDataURL="https://cms.ariscorp.de/assets/167ca435-c126-41da-b9b2-884f40444c0c?width=16&quality=1"
          draggable="false"
        />
      </div>
    </div>
  )
}
