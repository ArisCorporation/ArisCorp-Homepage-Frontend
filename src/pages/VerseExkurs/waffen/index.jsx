import Layout from 'pages/VerseExkurs/layout'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import client from 'apollo/clients'
import { GET_VERSEEXKURS_WEAPONS } from 'graphql/queries'
import { Tab } from '@headlessui/react'
import CardDisplay from 'components/VerseExkursCardDisplay'
import { SquareLoader } from 'react-spinners'
import { useQuery } from '@apollo/client'
import Image from 'next/image'
import { BasicPanel } from 'components/panels'
import { push } from 'next-pwa/cache'

export default function Weapons() {
  const { replace, query, isReady, push } = useRouter()
  const isMounted = useRef(false)
  const [search, setSearch] = useState()
  const [weaponClass, setWeaponClass] = useState(' ')
  const [damageType, setDamageType] = useState()
  const [manufacturer, setManufacturer] = useState()
  const squery = query.q
  const classquery = query.class
  const dmgquery = query.dmg
  const manuquery = query.manuf
  const { loading, error, data } = useQuery(GET_VERSEEXKURS_WEAPONS, {
    variables: { squery, classquery, dmgquery, manuquery },
  })

  function handleClick(name){
    push("/VerseExkurs/waffen/" + name)
  }

  useEffect(() => {
    if (isMounted.current) {
      let clsName
      let dmgType
      let manufactr

      if (weaponClass == null || weaponClass == '') {
        clsName = ' '
      } else {
        clsName = weaponClass
      }

      if (damageType == null || damageType == '') {
        dmgType = ['Elektronen', 'Ballistisch', 'Laser', 'Plasma', 'Explosiv']
      } else {
        dmgType = damageType
      }

      if (manufacturer == null || manufacturer == '') {
        manufactr = ' '
      } else {
        manufactr = manufacturer
      }

      let timer = setTimeout(() => {
        replace(
          {
            query: {
              q: search,
              class: clsName,
              dmg: dmgType,
              manuf: manufactr,
            },
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

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto">
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
          <div className="flex">
            <div
              className="w-24 hover:cursor-pointer"
              onClick={() => {setWeaponClass(), setDamageType(), setManufacturer()}}
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
              <p className="p-0 mx-auto text-xs text-center">Alle Anzeigen</p>
            </div>
            <div className="flex ml-4 space-x-2">
              <div
                className="w-24 hover:cursor-pointer"
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
                <p className="p-0 mx-auto text-xs text-center">Energie</p>
              </div>
              <div
                className="w-24 hover:cursor-pointer"
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
                <p className="p-0 mx-auto text-xs text-center">Ballistisch</p>
              </div>
            </div>
            <div className="flex ml-5 space-x-2">
              <div
                className="w-24 hover:cursor-pointer"
                onClick={() => setWeaponClass('Pistole')}
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
                <p className="p-0 mx-auto text-xs text-center">Pistolen</p>
              </div>
              <div
                className="w-24 hover:cursor-pointer"
                onClick={() => setWeaponClass('SMG')}
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
                <p className="p-0 mx-auto text-xs text-center">
                  Maschinen Pistolen
                </p>
              </div>
              <div
                className="w-24 hover:cursor-pointer"
                onClick={() => setWeaponClass('Sturmgewehr')}
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
                <p className="p-0 mx-auto text-xs text-center">Sturmgewehre</p>
              </div>
              <div
                className="w-24 hover:cursor-pointer"
                onClick={() => setWeaponClass('Schrotgewehr')}
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
                <p className="p-0 mx-auto text-xs text-center">Schrotgewehre</p>
              </div>
              <div
                className="w-24 hover:cursor-pointer"
                onClick={() => setWeaponClass('LMG')}
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
                <p className="p-0 mx-auto text-xs text-center">
                  Leichtmaschienen Gewehre
                </p>
              </div>
              <div
                className="w-24 hover:cursor-pointer"
                onClick={() => setWeaponClass('Scharfschützen Gewehr')}
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
                <p className="p-0 mx-auto text-xs text-center">
                  Scharfschützen Gewehre
                </p>
              </div>
              <div
                className="w-24 hover:cursor-pointer"
                onClick={() => setWeaponClass('Schwer')}
              >
                <div className="relative w-24 mx-auto aspect-square">
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
                <p className="p-0 mx-auto text-xs text-center">
                  Schwere Waffen
                </p>
              </div>
            </div>
            <div className="w-24 ml-4">
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
              <p className="p-0 mx-auto text-xs text-center">Hersteller</p>
            </div>
          </div>
          <hr />
          <div className="flex flex-wrap px-2">
            {loading ? (
              <div className="flex items-center justify-center pt-32 mx-auto my-auto text-center">
                <SquareLoader
                  color="#00ffe8"
                  speedMultiplier="0.8"
                  loading={loading}
                />
              </div>
            ) : (
              data?.technologien.map((object, index) => (
                <div key={object.id} className="w-1/3 px-2 pb-8">
                  <BasicPanel className={'hover:cursor-pointer'}>
                    <div className="overflow-hidden h-44 rounded-3xl" onClick={() => handleClick(object.waffen_name)}>
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
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

Weapons.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
