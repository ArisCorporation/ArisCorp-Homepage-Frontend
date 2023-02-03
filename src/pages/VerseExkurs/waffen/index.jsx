import Layout from 'pages/VerseExkurs/layout'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import {
  GET_VERSEEXKURS_WEAPONS,
  GET_VERSEEXKURS_WEAPONUTILS,
} from 'graphql/queries'
import { SquareLoader } from 'react-spinners'
import { useQuery } from '@apollo/client'
import Image from 'next/image'
import { BasicPanel } from 'components/panels'
import client from 'apollo/clients'
import Head from 'next/head'
import WeaponCard from 'components/WeaponCard'

export async function getServerSideProps () {
  const { data } = await client.query({ query: GET_VERSEEXKURS_WEAPONUTILS })

  let utils = { classes: [], dmgtype: [], manufacturers: [] }
  const manufacturers = data.firmen

  data.waffen_klassen.forEach((object, index) => {
    utils.classes.push(object.waffenklasse)
  })

  data.waffen_schadenstyp.forEach((object, index) => {
    utils.dmgtype.push(object.schadenstyp)
  })

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

export default function Weapons ({ utils, manufacturers }) {
  const { replace, query, isReady, push } = useRouter()
  const isMounted = useRef(false)
  const [search, setSearch] = useState()
  const [weaponClass, setWeaponClass] = useState([])
  const [damageType, setDamageType] = useState([])
  const [manufacturerMenu, setManufacturerMenu] = useState(false)
  const [manufacturer, setManufacturer] = useState([])
  const squery = query.q
  const classquery = query.classes
  const dmgquery = query.dmg
  const manuquery = query.manufactr
  const { loading, error, data } = useQuery(GET_VERSEEXKURS_WEAPONS, {
    variables: { squery, classquery: classquery ? classquery : utils.classes, dmgquery: dmgquery ? dmgquery : utils.dmgtype, manuquery: manuquery ? manuquery : utils.manufacturers },
  })

  function handleClick (name) {
    push('/VerseExkurs/waffen/' + name)
  }

  useEffect(() => {
    if (isMounted.current) {
      let clsName
      let dmgType
      let manufactr

      if (weaponClass) {
        clsName = weaponClass
      }

      if (damageType) {
        dmgType = damageType
      }

      if (manufacturer) {
        manufactr = manufacturer
      }

      let timer = setTimeout(() => {
        let queries = {}
        if(search){
          queries = {
            ...queries,
            q: search
          }
        }
        if(clsName){
          queries = {
            ...queries,
            classes: clsName
          }
        }
        if(dmgType){
          queries = {
            ...queries,
            dmg: dmgType
          }
        }
        if(manufactr){
          queries = {
            ...queries,
            manufactr: manufactr
          }
        }

        replace(
          {
            query: queries,
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
      setWeaponClass(classquery)
      setDamageType(dmgquery)
      setManufacturer(manuquery)
    }
  }, [search, weaponClass, damageType, manufacturer])

  useEffect(() => {
    if (isReady) setSearch(squery)
  }, [isReady])


  const siteTitle = "Waffenindex - Astro Research and Industrial Service Corporation"

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
          VerseExkurs - Waffen Index
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
                  setWeaponClass(), setDamageType(), setManufacturer()
                }}
              >
                <div className="relative w-24 mx-auto aspect-square">
                  <Image
                    src={
                      'https://cms.ariscorp.de/assets/' +
                      '1638095c-c0f3-49bf-b8c9-6e1a52a44333'
                    }
                    alt="Alle-Icon"
                    layout="fill"
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
                    ((Array.isArray(classquery)
                      ? classquery.every(
                        (val, index) =>
                          val ===
                          [
                            'Taser',
                            'Pistole',
                            'SMG',
                            'Sturmgewehr',
                            'Schrotgewehr',
                            'LMG',
                            'Scharfschützen Gewehr',
                            'HMG',
                            'Armbrust',
                            'Granatwerfer',
                            'Raketenwerfer',
                            'Railgun',
                          ][index]
                      )
                      : null) &&
                      (Array.isArray(dmgquery)
                        ? dmgquery.every(
                          (val, index) =>
                            val ===
                            [
                              'Elektronen',
                              'Ballistisch',
                              'Laser',
                              'Plasma',
                              'Explosiv',
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
                  onClick={() => setDamageType(['Elektronen', 'Laser', 'Plasma'])}
                >
                  <div className="relative w-24 mx-auto aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        '47d884d9-e7ce-4a2e-ab52-9670668a0349'
                      }
                      alt="Energie-Icon"
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/47d884d9-e7ce-4a2e-ab52-9670668a0349?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                      ((
                        Array.isArray(dmgquery)
                          ? dmgquery.every(
                            (val, index) =>
                              val === ['Elektronen', 'Laser', 'Plasma'][index]
                          )
                          : null
                      )
                        ? ' text-secondary'
                        : ' group-hover:text-white')
                    }
                  >
                    Energie
                  </p>
                </div>
                <div
                  className="w-24 hover:cursor-pointer group"
                  onClick={() => setDamageType(['Ballistisch', 'Explosiv'])}
                >
                  <div className="relative w-24 mx-auto aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        '7cc59886-ff69-412a-8e72-e5e73a6511f6'
                      }
                      alt="Ballistisch-Icon"
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/7cc59886-ff69-412a-8e72-e5e73a6511f6?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                      ((
                        Array.isArray(dmgquery)
                          ? dmgquery.every(
                            (val, index) =>
                              val === ['Ballistisch', 'Explosiv'][index]
                          )
                          : null
                      )
                        ? ' text-secondary'
                        : ' group-hover:text-white')
                    }
                  >
                    Ballistisch
                  </p>
                </div>
              </div>
              <div className="flex ml-4 space-x-2">
                <div
                  className="w-24 hover:cursor-pointer group"
                  onClick={() => setWeaponClass(['Pistole'])}
                >
                  <div className="relative w-24 mx-auto aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        'dece2f20-e9c5-4932-89ca-664d3c5487e1'
                      }
                      alt="Pistolen-Icon"
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/dece2f20-e9c5-4932-89ca-664d3c5487e1?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                      (classquery == 'Pistole'
                        ? ' text-secondary'
                        : ' group-hover:text-white')
                    }
                  >
                    Pistolen
                  </p>
                </div>
                <div
                  className="w-24 hover:cursor-pointer group"
                  onClick={() => setWeaponClass(['SMG'])}
                >
                  <div className="relative w-24 mx-auto aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        '7dd32e63-2919-45ec-bc22-d54fdaba861a'
                      }
                      alt="Alle-Icon"
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/7dd32e63-2919-45ec-bc22-d54fdaba861a?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                      (classquery == 'SMG'
                        ? ' text-secondary'
                        : ' group-hover:text-white')
                    }
                  >
                    Maschinen Pistolen
                  </p>
                </div>
                <div
                  className="w-24 hover:cursor-pointer group"
                  onClick={() => setWeaponClass(['Sturmgewehr'])}
                >
                  <div className="relative w-24 mx-auto aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        '22a23dba-8eea-42c4-9a29-fccb6c035b26'
                      }
                      alt="Alle-Icon"
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/22a23dba-8eea-42c4-9a29-fccb6c035b26?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                      (classquery == 'Sturmgewehr'
                        ? ' text-secondary'
                        : ' group-hover:text-white')
                    }
                  >
                    Sturmgewehre
                  </p>
                </div>
                <div
                  className="w-24 hover:cursor-pointer group"
                  onClick={() => setWeaponClass(['Schrotgewehr'])}
                >
                  <div className="relative w-24 mx-auto aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        'c8e91660-072a-446c-9832-a35c0d107287'
                      }
                      alt="Alle-Icon"
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/c8e91660-072a-446c-9832-a35c0d107287?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                      (classquery == 'Schrotgewehr'
                        ? ' text-secondary'
                        : ' group-hover:text-white')
                    }
                  >
                    Schrotgewehre
                  </p>
                </div>
                <div
                  className="w-24 hover:cursor-pointer group"
                  onClick={() => setWeaponClass(['LMG'])}
                >
                  <div className="relative w-24 mx-auto aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        'b78454ac-fbfe-4b4b-bf91-cab69f1f2a6a'
                      }
                      alt="Alle-Icon"
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/b78454ac-fbfe-4b4b-bf91-cab69f1f2a6a?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                      (classquery == 'LMG'
                        ? ' text-secondary'
                        : ' group-hover:text-white')
                    }
                  >
                    Leichtmaschienen Gewehre
                  </p>
                </div>
                <div
                  className="w-24 hover:cursor-pointer group"
                  onClick={() => setWeaponClass(['Scharfschützen Gewehr'])}
                >
                  <div className="relative w-24 mx-auto aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        '56c1a446-85c7-4400-84b4-9a02a54d395a'
                      }
                      alt="Alle-Icon"
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/56c1a446-85c7-4400-84b4-9a02a54d395a?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                      (classquery == 'Scharfschützen Gewehr'
                        ? ' text-secondary'
                        : ' group-hover:text-white')
                    }
                  >
                    Scharfschützen Gewehre
                  </p>
                </div>
                <div
                  className="w-24 hover:cursor-pointer group"
                  onClick={() =>
                    setWeaponClass([
                      'HMG',
                      'Granatwerfer',
                      'Raketenwerfer',
                      'Railgun',
                    ])
                  }
                >
                  <div className="relative w-24 mx-auto group aspect-square">
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        'f32ea524-6423-4a0b-a3d0-92e78acfd516'
                      }
                      alt="Alle-Icon"
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/f32ea524-6423-4a0b-a3d0-92e78acfd516?width=16&quality=1'
                      }
                    />
                  </div>
                  <p
                    className={
                      'p-0 mx-auto text-xs text-center duration-150 group-hover:duration-200 ease-out transition-colors' +
                      ((
                        Array.isArray(classquery)
                          ? classquery.every(
                            (val, index) =>
                              val ===
                              [
                                'HMG',
                                'Granatwerfer',
                                'Raketenwerfer',
                                'Railgun',
                              ][index]
                          )
                          : null
                      )
                        ? ' text-secondary'
                        : ' group-hover:text-white')
                    }
                  >
                    Schwere Waffen
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
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={
                      'https://cms.ariscorp.de/assets/314cc998-245d-4487-97cd-fb86342eaf8d?width=16&quality=1'
                    }
                  />
                </div>
                <p className="p-0 mx-auto text-xs text-center transition-colors duration-150 ease-out group-hover:duration-200">
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
                      layout="fill"
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
                <div className="flex ml-4 space-x-2">
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
                          layout="fill"
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
          {!manufacturerMenu ? null : <hr />}
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
              <div className='grid grid-cols-1 px-2 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 5xl:grid-cols-6 gap-x-6 gap-y-4'>
                {data?.technologien.map((object, index) => (
                  <WeaponCard key={object.id} data={object} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

Weapons.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
