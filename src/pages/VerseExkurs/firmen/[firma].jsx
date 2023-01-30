import Layout from 'pages/VerseExkurs/layout'
import { useRouter } from 'next/router'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { Disclosure, Transition } from '@headlessui/react'
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { SlArrowRight } from 'react-icons/si'


const { gql, useQuery } = require('@apollo/client')
import { GET_VERSEEXKURS_FIRMA } from 'graphql/queries'
import { BasicPanel } from 'components/panels'
import Head from 'next/head'
import client from 'apollo/clients'
import Link from 'next/link'

export async function getServerSideProps (context) {
  const { params } = context
  const { firma } = params

  let { data } = await client.query({
    query: GET_VERSEEXKURS_FIRMA,
    variables: { firma },
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  let attachments = null
  data = data.firmen[0]
  if (data.ships[0]) {
    data.ships = data.ships.sort((a, b) => a.name.localeCompare(b.name))
  }
  if (data.weapons[0]) {
    data.weapons = data.weapons.sort((a, b) => a.waffen_name.localeCompare(b.waffen_name))
  }
  if (data.optics[0] || data.barrels[0] || data.underbarrels[0]) {
    attachments = [
      ...data.optics,
      ...data.barrels,
      ...data.underbarrels
    ]
    attachments = attachments.sort((a, b) => a.name.localeCompare(b.name))
  }

  const siteTitle = data.firmen_name + " - Astro Research and Industrial Service Corporation"

  return {
    props: {
      data,
      attachments,
      siteTitle
    },
  }
}

export default function SystemDetailPage ({ data, attachments, siteTitle }) {
  const { replace, query, isReady, push } = useRouter()
  return (
    <div className="items-center max-w-6xl pt-10 mx-auto print:pt-5">
      <Head>
        <title>
          {siteTitle}
        </title>

        <meta
          property="twitter:title"
          content={siteTitle}
        />
        <meta
          property="og:title"
          content={siteTitle}
        />
        <meta
          name="title"
          content={siteTitle}
        />
      </Head>
      <div>
        <div className="items-center text-center">
          <h1 className="uppercase">
            Firma: <span className="text-primary">{data.firmen_name}</span>
          </h1>
          <hr />
          <div className="w-full">
            <Image
              src={'https://cms.ariscorp.de/assets/' + data.firmen_banner.id}
              alt={'Banner'}
              width={data.firmen_banner.width}
              height={data.firmen_banner.height}
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                data.firmen_banner.id +
                '?width=16&quality=1'
              }
            />
          </div>
        </div>
        <div className={'max-w-[' + data.firmen_banner.width + 'px] mx-auto'}>
          <h2 className="mt-3">VerseExkurs - Firma: {data.firmen_name}</h2>
          <hr className="max-w-[80px]" />
        </div>
        <div className="font-nasa article-font">
          <BasicPanel className="w-full mb-2 mr-12 lg:ml-8 lg:float-right lg:w-2/5">
            <div className="w-full h-full pb-2 text-xs italic uppercase xs:text-sm">
              <h3 className="pt-2 pl-3 m-0 text-secondary">Firmen Infobox</h3>
              <table className="w-full ml-5">
                <tr className={'border-b-0 border-transparent' + (data.headquarter == null && data.headquarter_system == null ? ' hidden' : null)}>
                  <th className="pr-2 text-left">Hauptsitz:</th>
                  <td className="text-left text-primary">
                    {data.headquarter && data.headquarter_system != null
                      ? data.headquarter + '(' + data.headquarter_system + ')'
                      : (data.headquarter != null ? data.headquarter : (data.headquarter_system != null ? data.headquarter_system : 'N/A'))}
                  </td>
                </tr>
                <tr className={'border-b-0 border-transparent' + (data.current_ceo == null ? ' hidden' : null)}>
                  <th className="pr-2 text-left">Aktueller C.E.O.:</th>
                  <td className="text-left text-primary">
                    {data.current_ceo != null ? data.current_ceo : 'N/A'}
                  </td>
                </tr>
                <tr className={'border-b-0 border-transparent' + (data.founding == null ? ' hidden' : null)}>
                  <th className="pr-2 text-left">Gründungsdatum:</th>
                  <td className="text-left text-primary">
                    {data.founding != null ? data.founding : 'N/A'}
                  </td>
                </tr>
                <tr className={'border-b-0 border-transparent' + (data.founder == null ? ' hidden' : null)}>
                  <th className="pr-2 text-left">Gründer:</th>
                  <td className="text-left break-words text-primary">
                    {data.founder != null ? data.founder : 'N/A'}
                  </td>
                </tr>
                <tr className={'border-b-0 border-transparent' + (data.firmenkategorie == null ? ' hidden' : null)}>
                  <th className="pr-2 text-left">Kategorie:</th>
                  <td className="text-left break-words text-primary">
                    {data.firmenkategorie != null
                      ? data.firmenkategorie == 'hersteller'
                        ? (data.firmenherstellerkategorie == 'Personenausruestungshersteller' ? 'Personenausrüstungs- Hersteller' : data.firmenherstellerkategorie)
                        : data.firmenkategorie
                      : 'N/A'}
                  </td>
                </tr>
                <tr>
                  <th className="pr-2 text-left">Bekannteste Waren:</th>
                  <td className="text-left text-primary">
                    {data.famous_goods != null ? data.famous_goods : 'N/A'}
                  </td>
                </tr>
              </table>
            </div>
          </BasicPanel>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            className="mx-auto prose prose-td:align-middle prose-invert xl:max-w-full"
          >
            {data.text}
          </ReactMarkdown>
          <hr />
          <div>
            <h1>Produkte von <span className='text-primary'>{data.firmen_name}</span></h1>
            <div>
              {data.ships[0] ? (
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="block py-2">
                        <h2>Schiffe von <span className="text-primary">{data.firmen_name}</span> <MdKeyboardArrowRight className={'inline-block ease transition-all duration-300' + (open ? ' rotate-90' : '')} /></h2>
                      </Disclosure.Button>
                      <Transition
                        enter="transition ease duration-500 transform"
                        enterFrom="opacity-0 -translate-y-2"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease duration-300 transform"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-2"
                      >
                        <Disclosure.Panel>
                          <div className='grid grid-cols-3'>
                            {data.ships.map((object, index) => (
                              <div key={object.id} className="px-2 pb-8">
                                <BasicPanel>
                                  <Link href={'/ShipExkurs/' + object.slug}>
                                    <a className='group'>
                                      <div className="overflow-hidden rounded-2xl">
                                        <div className="relative w-full aspect-[18/10]">
                                          <Image
                                            src={
                                              'https://cms.ariscorp.de/assets/' + object.storeImage?.id
                                            }
                                            alt={'Bild von ' + object.name}
                                            layout="fill"
                                            className="object-cover"
                                            placeholder="blur"
                                            blurDataURL={
                                              'https://cms.ariscorp.de/assets/' +
                                              object.storeImage?.id +
                                              '?width=16&quality=1'
                                            }
                                          />
                                          <div className="absolute bottom-0 w-full pl-4 bg-opacity-80 bg-bg-secondary">
                                            <p className="pb-0 text-lg leading-none transition-colors duration-200 text-secondary/90 group-hover:text-secondary group-hover:duration-300">
                                              {object.name}
                                            </p>
                                            <Link href={"/VerseExkurs/firmen/" + data.firmen_name}>
                                              <a className='decoration-transparent'>
                                                <p className="mb-1 text-xs leading-none transition-colors duration-200 text-white/50 hover:text-white/80 hover:cursor-pointer hover:duration-300">
                                                  {data.firmen_name}
                                                </p>
                                              </a>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </Link>
                                </BasicPanel>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              ) : null}
              {data.weapons[0] ? (
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="block py-2">
                        <h2 className=''>Waffen von <span className="text-primary">{data.firmen_name}</span> <MdKeyboardArrowRight className={'inline-block ease transition-all duration-300' + (open ? ' rotate-90' : '')} /></h2>
                      </Disclosure.Button>
                      <Transition
                        enter="transition ease duration-500 transform"
                        enterFrom="opacity-0 -translate-y-2"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease duration-300 transform"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-2"
                      >
                        <Disclosure.Panel>
                          <div className='grid grid-cols-3 px-2 gap-x-4 gap-y-8'>
                            {data.weapons.map((object, index) => (
                              <div key={object.id}>
                                <BasicPanel className={'hover:cursor-pointer'}>
                                  <div
                                    className="overflow-hidden h-44 rounded-3xl"
                                    onClick={() => push('/VerseExkurs/waffen/' + object.waffen_name)}
                                  >
                                    <div className="relative w-full h-full">
                                      <Image
                                        src={
                                          'https://cms.ariscorp.de/assets/' +
                                          object.waffen_bild.id
                                        }
                                        alt="Alle-Icon"
                                        layout="fill"
                                        objectFit="fill"
                                        placeholder="blur"
                                        blurDataURL={
                                          'https://cms.ariscorp.de/assets/' +
                                          object.waffen_bild.id +
                                          '?width=16&quality=1'
                                        }
                                      />
                                    </div>
                                    <p className="absolute left-0 right-0 text-lg text-center -bottom-1 text-secondary">
                                      {object.waffen_name}
                                    </p>
                                  </div>
                                </BasicPanel>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              ) : null}
              {attachments ? (
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="block py-2">
                        <h2>Waffenaufsätze von <span className="text-primary">{data.firmen_name}</span> <MdKeyboardArrowRight className={'inline-block ease transition-all duration-300' + (open ? ' rotate-90' : '')} /></h2>
                      </Disclosure.Button>
                      <Transition
                        enter="transition ease duration-500 transform"
                        enterFrom="opacity-0 -translate-y-2"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease duration-300 transform"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-2"
                      >
                        <Disclosure.Panel>
                          <div className='grid grid-cols-3 px-2 gap-x-4 gap-y-8'>
                            {attachments.map((object, index) => (
                              <div key={object.id}>
                                <BasicPanel className={'hover:cursor-pointer'}>
                                  <div
                                    className="overflow-hidden h-44 rounded-3xl"
                                    onClick={() => push('/VerseExkurs/attachments/' + object.name)}
                                  >
                                    <div className="relative w-full h-full">
                                      <Image
                                        src={
                                          'https://cms.ariscorp.de/assets/' +
                                          object.storeImage?.id
                                        }
                                        alt="Alle-Icon"
                                        layout="fill"
                                        objectFit="fill"
                                        placeholder="blur"
                                        blurDataURL={
                                          'https://cms.ariscorp.de/assets/' +
                                          object.storeImage?.id +
                                          '?width=16&quality=1'
                                        }
                                      />
                                    </div>
                                    <p className="absolute left-0 right-0 text-lg text-center -bottom-1 text-secondary">
                                      {object.name}
                                    </p>
                                  </div>
                                </BasicPanel>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SystemDetailPage.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
