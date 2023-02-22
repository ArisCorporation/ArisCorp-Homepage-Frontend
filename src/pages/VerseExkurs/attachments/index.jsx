import Layout from 'pages/VerseExkurs/layout'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import {
  GET_VERSEEXKURS_ATTACHMENTS,
  GET_VERSEEXKURS_ATTACHMENTUTILS,
} from 'graphql/queries'
import { SquareLoader } from 'react-spinners'
import { useQuery } from '@apollo/client'
import Image from 'next/image'
import { BasicPanel } from 'components/panels'
import client from 'apollo/clients'
import Head from 'next/head'
import AttachmentCard from 'components/AttachmentCard'

export async function getServerSideProps () {
  const { data } = await client.query({ query: GET_VERSEEXKURS_ATTACHMENTUTILS })

  let utils = { categorys: ["optics", "barrels", "underbarrels"], sizes: ["1", "2", "3"], manufacturers: [] }
  const manufacturers = data.firmen

  data.firmen.forEach((object, index) => {
    utils.manufacturers.push(object.firmen_name)
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      utils,
      manufacturers
    },
  }
}

export default function Attachments ({ utils, manufacturers }) {
  const { replace, query, isReady, push } = useRouter()
  const isMounted = useRef(false)
  const [search, setSearch] = useState()
  const [attachmentCategory, setAttachmentCategory] = useState([])
  const [attachmentSize, setAttachmentSize] = useState([])
  const [manufacturerMenu, setManufacturerMenu] = useState(false)
  const [manufacturer, setManufacturer] = useState([])
  const [data, setData] = useState([])
  const squery = query.q
  const categoryquery = query.category
  const sizequery = query.size
  const manuquery = query.manufactr
  const salequery = query.sale
  let { loading, error, data: Data, refetch } = useQuery(GET_VERSEEXKURS_ATTACHMENTS, {
    variables: { squery, sizequery: sizequery ? sizequery : utils.sizes, manuquery: manuquery ? manuquery : utils.manufacturers },
  })

  function arrayToString (array) { array.map((e) => toString(e)) }
  function toString (e) { return e.toString() }

  function handleClick (name) {
    push('/VerseExkurs/attachments/' + name)
  }

  useEffect(() => {
    if (isMounted.current) {
      let category
      let size
      let manufactr

      if (attachmentCategory) {
        category = attachmentCategory
      }

      if (attachmentSize) {
        size = attachmentSize
      }

      if (manufacturer) {
        manufactr = manufacturer
      }

      let timer = setTimeout(() => {
        let queries = {}
        if (search) {
          queries = {
            ...queries,
            q: search
          }
        }
        if (category) {
          queries = {
            ...queries,
            category: category
          }
        }
        if (size) {
          queries = {
            ...queries,
            size: size
          }
        }
        if (manufactr) {
          queries = {
            ...queries,
            manufactr: manufactr
          }
        }

        replace(
          {
            query: queries
          },
          undefined,
          {
            scroll: false,
          }
        )
      }, 500)

      return () => clearTimeout(timer)
    } else {
      isMounted.current = true
      setSearch(squery)
      setAttachmentCategory(categoryquery)
      setAttachmentSize(sizequery)
      setManufacturer(manuquery)
    }
  }, [search, attachmentCategory, attachmentSize, manufacturer])

  useEffect(() => {
    if (isReady) setSearch(squery)
  }, [isReady])

  useEffect(() => {
    if (Data && categoryquery) {
      let array = []
      if (categoryquery.includes("optics")) {
        array = [
          ...array,
          ...Data.optics
        ]
      }
      if (categoryquery.includes("barrels")) {
        array = [
          ...array,
          ...Data.barrel
        ]
      }
      if (categoryquery.includes("underbarrels")) {
        array = [
          ...array,
          ...Data.underbarrel
        ]
      }

      setData(array)
    } else if (Data && !categoryquery) {
      let array = [
        ...Data.optics,
        ...Data.barrel,
        ...Data.underbarrel,
      ]
      setData(array)
    }
  }, [Data, categoryquery])



  const siteTitle = "Attachmentindex - Astro Research and Industrial Service Corporation"

  return (
    <div className="items-center pt-10 mx-auto">
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
        <div className="w-full">
          <Image
            src={
              'https://cms.ariscorp.de/assets/' +
              'fbd2c23c-74bc-4142-a145-f2f43dbfdc77'
            }
            alt="WeaponExkurs Banner"
            width={1118}
            height={351}
            placeholder="blur"
            blurDataURL={
              'https://cms.ariscorp.de/assets/fbd2c23c-74bc-4142-a145-f2f43dbfdc77?width=16&quality=1'
            }
          />
        </div>
        <h1 className="text-center uppercase text-primary">
          VerseExkurs - Waffen Index - Aufsätze
        </h1>
        <hr />
        <div>
          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Suche..."
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-bg-secondary/30 bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none "
              />
            </div>
          </div>
          <div className='flex'>
            <div className="flex mx-auto">
              <div
                className="w-24 hover:cursor-pointer group"
                onClick={() => {
                  setAttachmentCategory(), setAttachmentSize(), setManufacturer()
                }}
              >
                <div className="relative w-24 mx-auto aspect-square">
                  <Image
                    src={
                      'https://cms.ariscorp.de/assets/' +
                      '1638095c-c0f3-49bf-b8c9-6e1a52a44333'
                    }
                    alt="Alle-Icon"
                    fill
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={
                      'https://cms.ariscorp.de/assets/1638095c-c0f3-49bf-b8c9-6e1a52a44333?width=16&quality=1'
                    }
                  />
                </div>
                <p
                  className={
                    'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                    ((Array.isArray(categoryquery)
                      ? categoryquery.every(
                        (val, index) =>
                          val ===
                          [
                            'optics',
                            'barrels',
                            'underbarrels',
                          ][index]
                      )
                      : null) &&
                      (Array.isArray(sizequery)
                        ? sizequery.every(
                          (val, index) =>
                            val ===
                            [
                              "1",
                              "2",
                              "3"
                            ][index]
                        )
                        : null) &&
                      manuquery == ' '
                      ? ' text-secondary'
                      : ' group-hover:text-white')
                  }
                >
                  Alle Anzeigen
                </p>
              </div>

              <div className="flex ml-8 space-x-2">
                <div
                  className="w-24 hover:cursor-pointer group"
                  onClick={() => setAttachmentCategory(['optics'])}
                >
                  <div className="relative w-24 mx-auto aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        'df440c84-f2d7-4c16-9f4e-352dcf4b1170'
                      }
                      alt="Optics-Icon"
                      fill
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/df440c84-f2d7-4c16-9f4e-352dcf4b1170?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                      (categoryquery == "optics"
                        ? ' text-secondary'
                        : ' group-hover:text-white')
                    }
                  >
                    Optik Aufsätze
                  </p>
                </div>
                <div
                  className="w-24 hover:cursor-pointer group"
                  onClick={() => setAttachmentCategory(['barrels'])}
                >
                  <div className="relative w-24 mx-auto aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        '61233634-b820-4805-8213-304b524c5c3f'
                      }
                      alt="Barrels-Icon"
                      fill
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/61233634-b820-4805-8213-304b524c5c3f?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                      (categoryquery == "barrels"
                        ? ' text-secondary'
                        : ' group-hover:text-white')
                    }
                  >
                    Lauf Aufsätze
                  </p>
                </div>
                <div
                  className="w-24 hover:cursor-pointer group"
                  onClick={() => setAttachmentCategory(['underbarrels'])}
                >
                  <div className="relative w-24 mx-auto aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        'e3c26a21-2e95-49ff-80ba-0ecf814b34ba'
                      }
                      alt="Underbarrels-Icon"
                      fill
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/e3c26a21-2e95-49ff-80ba-0ecf814b34ba?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                      (categoryquery == "underbarrels"
                        ? ' text-secondary'
                        : ' group-hover:text-white')
                    }
                  >
                    Unterlauf Aufsätze
                  </p>
                </div>
              </div>

              <div className="flex ml-4 space-x-2">
                <div
                  className="w-24 hover:cursor-pointer group"
                  onClick={() => setAttachmentSize(['1'])}
                >
                  <div className="relative w-24 mx-auto aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        '5c1bf1df-956f-45dd-af99-2163d1018153'
                      }
                      alt="S1-Icon"
                      fill
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/5c1bf1df-956f-45dd-af99-2163d1018153?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                      (sizequery == 1
                        ? ' text-secondary'
                        : ' group-hover:text-white')
                    }
                  >
                    Größe 1
                  </p>
                </div>
                <div
                  className="w-24 hover:cursor-pointer group"
                  onClick={() => setAttachmentSize(["2"])}
                >
                  <div className="relative w-24 mx-auto aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        '7027368d-f856-4c47-afb6-300b63fb32d2'
                      }
                      alt="S2-Icon"
                      fill
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/7027368d-f856-4c47-afb6-300b63fb32d2?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                      (sizequery == 2
                        ? ' text-secondary'
                        : ' group-hover:text-white')
                    }
                  >
                    Größe 2
                  </p>
                </div>
                <div
                  className="w-24 hover:cursor-pointer group"
                  onClick={() => setAttachmentSize(["3"])}
                >
                  <div className="relative w-24 mx-auto aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        '6d01f3b8-3b03-4e39-832b-b52d4a59933f'
                      }
                      alt="S3-Icon"
                      fill
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/6d01f3b8-3b03-4e39-832b-b52d4a59933f?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                      (sizequery == 3
                        ? ' text-secondary'
                        : ' group-hover:text-white')
                    }
                  >
                    Größe 3
                  </p>
                </div>
              </div>

              <div onClick={() => setManufacturerMenu(!manufacturerMenu)} className="w-24 ml-8 hover:cursor-pointer">
                <div className="relative w-24 mx-auto aspect-square">
                  <Image
                    src={
                      'https://cms.ariscorp.de/assets/' +
                      '314cc998-245d-4487-97cd-fb86342eaf8d'
                    }
                    alt="Alle-Icon"
                    fill
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={
                      'https://cms.ariscorp.de/assets/314cc998-245d-4487-97cd-fb86342eaf8d?width=16&quality=1'
                    }
                  />
                </div>
                <p className={"p-0 mx-auto text-xs text-center transition-colors duration-150 ease-out group-hover:duration-200" +
                  (manuquery
                    ? ' text-secondary'
                    : ' group-hover:text-white')
                }>
                  Hersteller
                </p>
              </div>
            </div>
          </div>
          <hr />
          {!manufacturerMenu ? '' : (
            <div className="flex">
              <div className="flex mx-auto">
                <div
                  className="w-24 hover:cursor-pointer group"
                  onClick={() => {
                    setManufacturer()
                  }}
                >
                  <div className="relative w-24 mx-auto aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        '1638095c-c0f3-49bf-b8c9-6e1a52a44333'
                      }
                      alt="Alle-Icon"
                      fill
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/1638095c-c0f3-49bf-b8c9-6e1a52a44333?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors'
                    }
                  >
                    Alle Hersteller
                  </p>
                </div>
                <div className="flex ml-8 space-x-2">
                  {manufacturers.map((obj) => (
                    <div
                      key={obj.firmen_name}
                      className="w-24 hover:cursor-pointer group"
                      onClick={() => setManufacturer([obj.firmen_name])}
                    >
                      <div className="relative w-24 mx-auto aspect-square">
                        <Image
                          src={
                            'https://cms.ariscorp.de/assets/' +
                            obj.firmen_trans_logo?.id
                          }
                          alt="Energie-Icon"
                          fill
                          objectFit="cover"
                          placeholder="blur"
                          blurDataURL={
                            'https://cms.ariscorp.de/assets/' + obj.firmen_trans_logo?.id + '?width=16&quality=1'
                          }
                        />
                      </div>
                      <p
                        className={
                          'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors ' +
                          (manuquery == [obj.firmen_name] ? 'text-secondary' : 'group-hover:text-white')
                        }
                      >
                        {obj.firmen_name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {!manufacturerMenu ? '' : <hr />}
          <div>
            {loading ? (
              <div className="flex items-center justify-center pt-32 mx-auto my-auto text-center">
                <SquareLoader
                  color="#00ffe8"
                  speedMultiplier="0.8"
                  loading={loading}
                />
              </div>
            ) : (
              <div className='grid grid-cols-1 px-2 lg:grid-cols-2 1.5xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 5xl:grid-cols-6 gap-x-6 gap-y-4'>
                {data.map((object, index) => (
                  <AttachmentCard key={object.id} data={object} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

Attachments.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
