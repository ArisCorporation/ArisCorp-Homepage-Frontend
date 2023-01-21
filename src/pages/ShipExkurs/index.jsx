import Layout from './layout'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { GET_SHIPEXKURS_SHIPS, GET_SHIPEXKURS_SHIPUTILS } from 'graphql/queries'
import { SquareLoader } from 'react-spinners'
import { useQuery } from '@apollo/client'
import Image from 'next/image'
import { BasicPanel } from 'components/panels'
import client from 'apollo/clients'
import Link from 'next/link'

export async function getServerSideProps() {
  const { data } = await client.query({ query: GET_SHIPEXKURS_SHIPUTILS })

  let utils = { classes: [], focuses: [], sizes: [], manufacturers: [] }

  data.ships.forEach((object, index) => {
    var classification = object.class
    var focus = object.focus
    var size = object.size

    var aclassification = utils.classes.find((i) => i === classification)
    var afocus = utils.focuses.find((i) => i === classification)
    var asize = utils.sizes.find((i) => i === classification)

    if (aclassification == null && classification != null) {
      utils.classes.push(classification)
    }
    // if (afocus == null && focus != null){
    utils.focuses.push(focus)
    // }
    if (asize == null && size != null) {
      utils.classes.push(size)
    }
  })

  // data.waffen_klassen.forEach((object, index) => {
  //   utils.classes.push(object.waffenklasse)
  // })

  // data.waffen_schadenstyp.forEach((object, index) => {
  //   utils.dmgtype.push(object.schadenstyp)
  // })

  // data.firmen.forEach((object, index) => {
  //   utils.manufacturers.push(object.firmen_name)
  // })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      utils: await utils,
    },
  }
}

export default function Ships({ utils }) {
  const { replace, query, isReady, push } = useRouter()
  const isMounted = useRef(false)
  const [search, setSearch] = useState()
  const [weaponClass, setWeaponClass] = useState([])
  const [damageType, setDamageType] = useState([])
  const [manufacturer, setManufacturer] = useState([])
  const squery = query.q
  const classquery = query.class
  const dmgquery = query.dmg
  const manuquery = query.manuf
  const { loading, error, data } = useQuery(GET_SHIPEXKURS_SHIPS)

  function handleClick(name) {
    push('/ShipExkurs/' + name)
  }

  (utils.classes)

  // useEffect(() => {
  //   if (isMounted.current) {
  //     let clsName
  //     let dmgType
  //     let manufactr

  //     if (weaponClass == null || weaponClass == '' || weaponClass == []) {
  //       clsName = utils.classes
  //     } else {
  //       clsName = weaponClass
  //     }

  //     if (damageType == null || damageType == '' || weaponClass == []) {
  //       dmgType = utils.dmgtype
  //     } else {
  //       dmgType = damageType
  //     }

  //     if (manufacturer == null || manufacturer == '' || weaponClass == []) {
  //       manufactr = utils.manufacturers
  //     } else {
  //       manufactr = manufacturer
  //     }

  //     let timer = setTimeout(() => {
  //       replace(
  //         {
  //           query: {
  //             q: search,
  //             class: clsName,
  //             dmg: dmgType,
  //             manuf: manufactr,
  //           },
  //         },
  //         undefined,
  //         {
  //           scroll: false,
  //         }
  //       )
  //     }, 500)

  //     return () => clearTimeout(timer)
  //   } else {
  //     isMounted.current = true
  //     setSearch(squery)
  //     setWeaponClass(classquery)
  //     setDamageType(dmgquery)
  //     setManufacturer(manuquery)
  //   }
  // }, [search, weaponClass, damageType, manufacturer])

  // useEffect(() => {
  //   if (isReady) setSearch(squery)
  // }, [isReady])

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto">
      <div>
        <div className="w-full">
          <Image
            src={'https://cms.ariscorp.de/assets/' + ''}
            alt="ShipExkurs Banner"
            width={1118}
            height={351}
            placeholder="blur"
            blurDataURL={'https://cms.ariscorp.de/assets/?width=16&quality=1'}
          />
        </div>
        <h1 className="text-center uppercase text-primary">ShipExkurs</h1>
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
          <hr />
          <div className="flex flex-wrap px-2">
            {loading
              ? ''
              : data?.ships.map((object, index) => (
                  <div key={object.id} className="w-1/3 px-2 pb-8">
                    <BasicPanel>
                      <div className="overflow-hidden rounded-2xl">
                        <p className="absolute">{object.name}</p>
                        <div className="relative w-full aspect-[18/9]">
                          <Image
                            src={
                              'https://cms.ariscorp.de/assets/' +
                              object.storeImage?.id
                            }
                            alt={'Bild von ' + object.name}
                            fill
                            className="object-cover"
                            placeholder="blur"
                            blurDataURL={
                              'https://cms.ariscorp.de/assets/' +
                              object.storeImage?.id +
                              '?width=16&quality=1'
                            }
                          />
                          <div className="absolute bottom-0 w-full pl-4 bg-opacity-80 bg-bg-secondary">
                            <p className="pb-0 mb-0 leading-none transition-colors duration-200 hover:cursor-pointer text-secondary/90 hover:text-secondary hover:duration-300">
                              {object.name}
                            </p>
                            <Link to={"/VerseExkurs/firmen/" + object.manufacturer.firmen_name}>
                              <a className="mt-0 text-[8px] leading-none text-white/50 hover:text-white/80 transition-colors hover:cursor-pointer duration-200 hover:duration-300">
                                {object.manufacturer.firmen_name}
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </BasicPanel>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  )
}

Ships.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
