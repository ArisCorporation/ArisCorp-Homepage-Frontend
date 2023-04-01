import Layout from 'pages/VerseExkurs/layout'
import { useRouter } from 'next/router'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { Disclosure, Transition } from '@headlessui/react'
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md'
import { SlArrowRight } from 'react-icons/si'

const { gql, useQuery } = require('@apollo/client')
import { GET_VERSEEXKURS_FIRMA } from 'graphql/queries'
import { BasicPanel } from 'components/panels'
import Head from 'next/head'
import client from 'apollo/clients'
import Link from 'next/link'
import ShipCard from 'components/ShipExkurs/ShipCard'
import WeaponCard from 'components/WeaponCard'
import AttachmentCard from 'components/AttachmentCard'

export async function getServerSideProps(context) {
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
    data.weapons = data.weapons.sort((a, b) =>
      a.waffen_name.localeCompare(b.waffen_name)
    )
  }
  if (data.optics[0] || data.barrels[0] || data.underbarrels[0]) {
    attachments = [...data.optics, ...data.barrels, ...data.underbarrels]
    attachments = attachments.sort((a, b) => a.name.localeCompare(b.name))
  }

  const siteTitle =
    data.firmen_name + ' - Astro Research and Industrial Service Corporation'

  return {
    props: {
      data,
      attachments,
      siteTitle,
    },
  }
}

// console.log(data);

export default function SystemDetailPage({ data, attachments, siteTitle }) {
  const { replace, query, isReady, push } = useRouter()
  return (
    <div className="items-center pt-10 mx-auto print:pt-5">
      <Head>
        <title>{siteTitle}</title>

        <meta property="twitter:title" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
        <meta name="title" content={siteTitle} />
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
          <div className="w-full mb-2 xl:mr-12 2xl:ml-8 lg:float-right xl:w-1/2 2xl:w-5/12">
            <BasicPanel className="">
              <div className="w-full h-full pb-2 pr-2 text-xs italic uppercase xs:text-sm">
                <h3 className="pt-2 pl-3 m-0 text-secondary">Firmen Infobox</h3>
                <table className="w-full ml-5">
                  <tbody>
                    {data.headquarter && (
                      <tr className="border-b-0 border-transparent">
                        <td className="pr-2 text-left">Hauptsitz:</td>
                        <td className="text-left text-primary">
                          <span>{data.headquarter + ' '}</span>
                          {data.headquarter_system && (
                            <Link
                              href={
                                '/VerseExkurs/starmap/' +
                                data.headquarter_system.name
                              }
                            >
                              {data.headquarter_system.name}
                            </Link>
                          )}
                        </td>
                      </tr>
                    )}
                    {data.current_ceo && (
                      <tr className="border-b-0 border-transparent">
                        <th className="pr-2 text-left">Aktueller C.E.O.:</th>
                        <td className="text-left text-primary">
                          {data.current_ceo}
                        </td>
                      </tr>
                    )}
                    {data.founding && (
                      <tr className="border-b-0 border-transparent">
                        <th className="pr-2 text-left">Gründungsdatum:</th>
                        <td className="text-left text-primary">
                          {data.founding}
                        </td>
                      </tr>
                    )}
                    {data.founder && (
                      <tr className="border-b-0 border-transparent">
                        <th className="pr-2 text-left">Gründer:</th>
                        <td className="text-left break-words text-primary">
                          {data.founder != null ? data.founder : 'N/A'}
                        </td>
                      </tr>
                    )}
                    {data.firmenkategorie && (
                      <tr className="border-b-0 border-transparent">
                        <th className="pr-2 text-left">Kategorie:</th>
                        <td className="text-left break-words text-primary">
                          {data.firmenkategorie != null
                            ? data.firmenkategorie == 'hersteller'
                              ? data.firmenherstellerkategorie ==
                                'Personenausruestungshersteller'
                                ? 'Personenausrüstungs- Hersteller'
                                : data.firmenherstellerkategorie
                              : data.firmenkategorie
                            : 'N/A'}
                        </td>
                      </tr>
                    )}
                    {data.famous_goods && (
                      <tr>
                        <th className="pr-2 text-left">Bekannteste Waren:</th>
                        <td className="text-left text-primary">
                          {data.famous_goods}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </BasicPanel>
          </div>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            className="mx-auto prose prose-td:align-middle prose-invert xl:max-w-full"
          >
            {data.text}
          </ReactMarkdown>
          <hr />
          <div>
            <h1 id="products">
              Produkte von{' '}
              <span className="text-primary">{data.firmen_name}</span>
            </h1>
            <div>
              {data.ships[0] ? (
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="block py-2">
                        <h2>
                          Schiffe von{' '}
                          <span className="text-primary">
                            {data.firmen_name}
                          </span>{' '}
                          <MdKeyboardArrowRight
                            className={
                              'inline-block ease transition-all duration-300' +
                              (open ? ' rotate-90' : '')
                            }
                          />
                        </h2>
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
                          <div className="grid grid-cols-1 px-2 lg:grid-cols-2 2xl:grid-cols-3 gap-x-6 gap-y-4">
                            {data.ships.map((object, index) => (
                              <ShipCard
                                key={object.id}
                                data={object}
                                manufacturer={data}
                              />
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
                        <h2 className="">
                          Waffen von{' '}
                          <span className="text-primary">
                            {data.firmen_name}
                          </span>{' '}
                          <MdKeyboardArrowRight
                            className={
                              'inline-block ease transition-all duration-300' +
                              (open ? ' rotate-90' : '')
                            }
                          />
                        </h2>
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
                          <div className="grid grid-cols-1 px-2 lg:grid-cols-2 2xl:grid-cols-3 gap-x-6 gap-y-4">
                            {data.weapons.map((object, index) => (
                              <WeaponCard
                                key={object.id}
                                data={object}
                                manufacturer={data}
                              />
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
                        <h2>
                          Waffenaufsätze von{' '}
                          <span className="text-primary">
                            {data.firmen_name}
                          </span>{' '}
                          <MdKeyboardArrowRight
                            className={
                              'inline-block ease transition-all duration-300' +
                              (open ? ' rotate-90' : '')
                            }
                          />
                        </h2>
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
                          <div className="grid grid-cols-1 px-2 lg:grid-cols-2 2xl:grid-cols-3 gap-x-6 gap-y-4">
                            {attachments.map((object, index) => (
                              <AttachmentCard
                                key={object.id}
                                data={object}
                                manufacturer={data}
                              />
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              ) : null}
              {!data.ships[0] && !data.weapons[0] && !attachments ? (
                <h2 className="mt-4 text-center">
                  Wir führen aktuell noch keine Produkte dieser Firma
                </h2>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SystemDetailPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
