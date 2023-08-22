import { BasicPanel } from 'components/panels'
import Link from 'next/link'

const Weapons = ({ data, components, valid, companies }) => {
  function setSize(size) {
    let label
    size == 0
      ? (label = 'XS')
      : size == 1
      ? (label = 'S')
      : size == 2
      ? (label = 'M')
      : size == 3
      ? (label = 'L')
      : size == 4
      ? (label = 'XL')
      : size == 5
      ? (label = 'C')
      : null

    return label
  }

  const pilotWeapons = []
  const turrets = []
  const missileRacks = []
  const utilities = []

  data.weaponHardpoints
    .filter((e) => e.category == 'pilotWeapon')
    .map((obj) => {
      const index = pilotWeapons.findIndex(
        (e) => JSON.stringify(e.weapon) == JSON.stringify(obj)
      )

      if (index > -1) {
        pilotWeapons[index].count++
      } else {
        pilotWeapons.push({ count: 1, weapon: obj })
      }
    })

  data.weaponHardpoints
    .filter((e) => e.category == 'turret')
    .map((obj) => {
      const index = turrets.findIndex(
        (e) => JSON.stringify(e.weapon) == JSON.stringify(obj)
      )

      if (index > -1) {
        turrets[index].count++
      } else {
        turrets.push({ count: 1, weapon: obj })
      }
    })

  data.weaponHardpoints
    .filter((e) => e.category == 'missileRack')
    .map((obj) => {
      const index = missileRacks.findIndex(
        (e) => JSON.stringify(e.weapon) == JSON.stringify(obj)
      )

      if (index > -1) {
        missileRacks[index].count++
      } else {
        missileRacks.push({ count: 1, weapon: obj })
      }
    })

  data.weaponHardpoints
    .filter((e) => e.category == 'utility')
    .map((obj) => {
      const index = utilities.findIndex(
        (e) => JSON.stringify(e.weapon) == JSON.stringify(obj)
      )

      if (index > -1) {
        utilities[index].count++
      } else {
        utilities.push({ count: 1, weapon: obj })
      }
    })

  if (!data.weaponHardpoints[0] && valid) {
    return valid(false)
  } else if (!data.weaponHardpoints[0] && !valid) {
    return
  }

  return (
    <BasicPanel>
      <div className={'hardpointGroupInner'}>
        {pilotWeapons[0] && (
          <div className={'hardpointType'}>
            <div className={'hardpointTypeLabel'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hardpointTypeIcon"
                fill="#00ffe8"
                stroke="#00ffe8"
                viewBox="0 0 38.87 38.87"
              >
                <path d="m15.89 14.42-10.89 10.87h-1.29l-3.71-3.71v-1.3l10.87-10.87 3.07-1 4.72-4.72 6.63-3.69-3.68 6.63-4.72 4.72zm7.8 3.72 4.72-4.72 3.69-6.63-6.63 3.69-4.72 4.72-3.07 1-10.89 10.87v1.3l3.71 3.71h1.3l10.88-10.87zm8.56-.87-4.73 4.73-3.07 1-10.87 10.86v1.3l3.71 3.71h1.3l10.88-10.87 1-3.07 4.72-4.72 3.69-6.63z" />
              </svg>
              <span> Waffen </span>
            </div>
            <div className={'hardpointItems'}>
              {pilotWeapons &&
                pilotWeapons.map((hardpoint) => {
                  const count = hardpoint.count
                  hardpoint = hardpoint.weapon
                  const hardpointManufacturer = companies.find(
                    (e) => e.id == hardpoint.manufacturer
                  )
                  const port = hardpoint.ports ? hardpoint.ports[0] : null
                  const portManufacturer = companies.find(
                    (e) => e.id == port?.manufacturer
                  )

                  return (
                    <div key={hardpoint} className={'hardpointItem'}>
                      <div className={'hardpointItemQuantity'}>
                        <span> {count} </span>
                        <span className="text-[#7c7c7c] lowercase">x</span>
                      </div>
                      <div className={'hardpointItemSlots'}>
                        <div className={'hardpointItemSlot'}>
                          <div className={'hardpointItemInner hasComponent'}>
                            <div className={'hardpointItemSize'}>
                              {' '}
                              Size {hardpoint.size}{' '}
                            </div>
                            <div className={'hardpointItemComponent'}>
                              {' '}
                              {hardpoint.name}{' '}
                            </div>
                            {hardpointManufacturer &&
                              (hardpointManufacturer.status == 'published' ? (
                                <Link
                                  href={
                                    '/VerseExkurs/firmen/' +
                                    hardpointManufacturer.firmen_name
                                  }
                                  className="transition-all duration-300 hardpointItemComponentManufacturer text-inherit decoration-transparent hover:text-white hover:duration-150"
                                >
                                  {hardpointManufacturer.firmen_name}
                                </Link>
                              ) : (
                                <div className="hardpointItemComponentManufacturer text-inherit">
                                  {hardpointManufacturer.firmen_name}
                                </div>
                              ))}
                          </div>
                          {port && (
                            <div className={'hardpointItemLoadout'}>
                              <div className={'hardpointItemLoadoutQuantity'}>
                                <img
                                  src="https://cms.ariscorp.de/assets/6d9ff4de-ce17-46ac-b5ba-9b685f08ba8a"
                                  className="hardpointItemLoadoutQuantityIcon"
                                />{' '}
                                {hardpoint.ports.length}{' '}
                                <span className="text-[#7c7c7c] pr-[10px]">
                                  x
                                </span>
                              </div>
                              <div className={'hardpointItemInner'}>
                                <div className={'hardpointItemSize'}>
                                  {' '}
                                  Size {port.size}{' '}
                                </div>
                                <div className={'hardpointItemComponent'}>
                                  {port.name}
                                </div>
                                {portManufacturer &&
                                  (portManufacturer.status == 'published' ? (
                                    <Link
                                      href={
                                        '/VerseExkurs/firmen/' +
                                        portManufacturer.firmen_name
                                      }
                                      className="transition-all duration-300 hardpointItemComponentManufacturer text-inherit decoration-transparent hover:text-white hover:duration-150"
                                    >
                                      {portManufacturer.firmen_name}
                                    </Link>
                                  ) : (
                                    <div className="hardpointItemComponentManufacturer text-inherit">
                                      {portManufacturer.firmen_name}
                                    </div>
                                  ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        )}
        {turrets[0] && (
          <div className={'hardpointType'}>
            <div className={'hardpointTypeLabel'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hardpointTypeIcon"
                fill="#00ffe8"
                stroke="#00ffe8"
                viewBox="0 0 32.91 29.38"
              >
                <path d="m17.83 28.74-.65.65h4l-7.65-7.65a2.29 2.29 0 0 0 0-3.16l-3.9 1a2.29 2.29 0 0 0 .55 2.14l-7.65 7.66h4l-.66-.66 6-6zm15.08-19.45-.59.64-3.71 1-.67-.3-10.81 2.9.12.44-1.83 2.59-11.48 3.07-1.13-.63-1-3.69.65-1.13 13.26-3.55.71.29.12.44 10.81-2.91.43-.59 3.65-1 .83.27zm-1.81-6.88-.59.59-3.71 1-.67-.3-10.81 2.94.12.44-1.82 2.75-11.48 3.08-1.14-.66-1-3.83.65-1.13 13.26-3.55.71.29.12.44 10.81-2.89.45-.58 3.65-1 .83.27z" />
              </svg>
              <span> Türme </span>
            </div>
            <div className={'hardpointItems'}>
              {turrets &&
                turrets.map((hardpoint) => {
                  const count = hardpoint.count
                  hardpoint = hardpoint.weapon
                  const hardpointManufacturer = companies.find(
                    (e) => e.id == hardpoint.manufacturer
                  )
                  const port = hardpoint.ports ? hardpoint.ports[0] : null
                  const portManufacturer = companies.find(
                    (e) => e.id == port?.manufacturer
                  )

                  return (
                    <div key={hardpoint} className={'hardpointItem'}>
                      <div className={'hardpointItemQuantity'}>
                        <span> {count} </span>
                        <span className="text-[#7c7c7c] lowercase">x</span>
                      </div>
                      <div className={'hardpointItemSlots'}>
                        <div className={'hardpointItemSlot'}>
                          <div className={'hardpointItemInner hasComponent'}>
                            <div className={'hardpointItemSize'}>
                              {' '}
                              Size {hardpoint.size}{' '}
                            </div>
                            <div className={'hardpointItemComponent'}>
                              {' '}
                              {hardpoint.name}{' '}
                            </div>
                            {hardpointManufacturer &&
                              (hardpointManufacturer.status == 'published' ? (
                                <Link
                                  href={
                                    '/VerseExkurs/firmen/' +
                                    hardpointManufacturer.firmen_name
                                  }
                                  className="transition-all duration-300 hardpointItemComponentManufacturer text-inherit decoration-transparent hover:text-white hover:duration-150"
                                >
                                  {hardpointManufacturer.firmen_name}
                                </Link>
                              ) : (
                                <div className="hardpointItemComponentManufacturer text-inherit">
                                  {hardpointManufacturer.firmen_name}
                                </div>
                              ))}
                          </div>
                          {port && (
                            <div className={'hardpointItemLoadout'}>
                              <div className={'hardpointItemLoadoutQuantity'}>
                                <img
                                  src="https://cms.ariscorp.de/assets/6d9ff4de-ce17-46ac-b5ba-9b685f08ba8a"
                                  className="hardpointItemLoadoutQuantityIcon"
                                />{' '}
                                {hardpoint.ports.length}{' '}
                                <span className="text-[#7c7c7c] pr-[10px]">
                                  x
                                </span>
                              </div>
                              <div className={'hardpointItemInner'}>
                                <div className={'hardpointItemSize'}>
                                  {' '}
                                  Size {port.size}{' '}
                                </div>
                                <div className={'hardpointItemComponent'}>
                                  {port.name}
                                </div>
                                {portManufacturer &&
                                  (portManufacturer.status == 'published' ? (
                                    <Link
                                      href={
                                        '/VerseExkurs/firmen/' +
                                        portManufacturer.firmen_name
                                      }
                                      className="transition-all duration-300 hardpointItemComponentManufacturer text-inherit decoration-transparent hover:text-white hover:duration-150"
                                    >
                                      {portManufacturer.firmen_name}
                                    </Link>
                                  ) : (
                                    <div className="hardpointItemComponentManufacturer text-inherit">
                                      {portManufacturer.firmen_name}
                                    </div>
                                  ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        )}
        {missileRacks[0] && (
          <div className={'hardpointType'}>
            <div className={'hardpointTypeLabel'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hardpointTypeIcon"
                fill="#00ffe8"
                stroke="#00ffe8"
                viewBox="0 0 39.99 39.99"
              >
                <path d="m20.15 36.17-1.42-8.49 3.96-3.95 1-3.07 5.21-5.21 3.53 3.53 1.18-1.83-.71-5.7 4.82-4.82 2.27-6.63-6.63 2.27-4.82 4.82-5.7-.71-1.83 1.18 3.53 3.53-5.21 5.21-3.07 1.01-3.95 3.95-8.49-1.42-3.82 2.71 7.21 3.8-1 2.3 5.13 5.13 2.3-1 3.8 7.21z" />
              </svg>
              <span> Missile Racks </span>
            </div>
            <div className={'hardpointItems'}>
              {missileRacks &&
                missileRacks.map((hardpoint) => {
                  const count = hardpoint.count
                  hardpoint = hardpoint.weapon
                  const hardpointManufacturer = companies.find(
                    (e) => e.id == hardpoint.manufacturer
                  )
                  const port = hardpoint.ports ? hardpoint.ports[0] : null
                  const portManufacturer = companies.find(
                    (e) => e.id == port?.manufacturer
                  )

                  return (
                    <div key={hardpoint} className={'hardpointItem'}>
                      <div className={'hardpointItemQuantity'}>
                        <span> {count} </span>
                        <span className="text-[#7c7c7c] lowercase">x</span>
                      </div>
                      <div className={'hardpointItemSlots'}>
                        <div className={'hardpointItemSlot'}>
                          <div className={'hardpointItemInner hasComponent'}>
                            <div className={'hardpointItemSize'}>
                              {' '}
                              Size {hardpoint.size}{' '}
                            </div>
                            <div className={'hardpointItemComponent'}>
                              {' '}
                              {hardpoint.name}{' '}
                            </div>
                            {hardpointManufacturer &&
                              (hardpointManufacturer.status == 'published' ? (
                                <Link
                                  href={
                                    '/VerseExkurs/firmen/' +
                                    hardpointManufacturer.firmen_name
                                  }
                                  className="transition-all duration-300 hardpointItemComponentManufacturer text-inherit decoration-transparent hover:text-white hover:duration-150"
                                >
                                  {hardpointManufacturer.firmen_name}
                                </Link>
                              ) : (
                                <div className="hardpointItemComponentManufacturer text-inherit">
                                  {hardpointManufacturer.firmen_name}
                                </div>
                              ))}
                          </div>
                          {port && (
                            <div className={'hardpointItemLoadout'}>
                              <div className={'hardpointItemLoadoutQuantity'}>
                                <img
                                  src="https://cms.ariscorp.de/assets/6d9ff4de-ce17-46ac-b5ba-9b685f08ba8a"
                                  className="hardpointItemLoadoutQuantityIcon"
                                />{' '}
                                {hardpoint.ports.length}{' '}
                                <span className="text-[#7c7c7c] pr-[10px]">
                                  x
                                </span>
                              </div>
                              <div className={'hardpointItemInner'}>
                                <div className={'hardpointItemSize'}>
                                  {' '}
                                  Size {port.size}{' '}
                                </div>
                                <div className={'hardpointItemComponent'}>
                                  {port.name}
                                </div>
                                {portManufacturer &&
                                  (portManufacturer.status == 'published' ? (
                                    <Link
                                      href={
                                        '/VerseExkurs/firmen/' +
                                        portManufacturer.firmen_name
                                      }
                                      className="transition-all duration-300 hardpointItemComponentManufacturer text-inherit decoration-transparent hover:text-white hover:duration-150"
                                    >
                                      {portManufacturer.firmen_name}
                                    </Link>
                                  ) : (
                                    <div className="hardpointItemComponentManufacturer text-inherit">
                                      {portManufacturer.firmen_name}
                                    </div>
                                  ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        )}
        {utilities[0] && (
          <div className={'hardpointType'}>
            <div className={'hardpointTypeLabel'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hardpointTypeIcon"
                fill="#00ffe8"
                stroke="#00ffe8"
                viewBox="0 0 40.51 38.54"
              >
                <path d="M27.19,1.91H38.58L40.51,0H0L1.91,1.91H13.64V3.73L15,5.13H5.12L7,7h9.13v9l-1.29,1.28v7.64l1.29,1.32h2c.11,2.22.35,3.43,2.07,5a3.17,3.17,0,0,1,1.3,2.22,2.53,2.53,0,0,1-5.05.07.48.48,0,0,0-.49-.45.55.55,0,0,0-.51.5s0,.12,0,.13A4.79,4.79,0,1,0,23.21,30a4.65,4.65,0,0,1-1.46-3.72h2.69l1.29-1.32V21.39l-.85-.87V7h8.56l1.94-1.91H25.77l1.42-1.42ZM22.87,18.53,20.37,16H18.16V7h4.71Z" />
              </svg>
              <span> Utility Items </span>
            </div>
            <div className={'hardpointItems'}>
              {utilities &&
                utilities.map((hardpoint) => {
                  const count = hardpoint.count
                  hardpoint = hardpoint.weapon
                  const hardpointManufacturer = companies.find(
                    (e) => e.id == hardpoint.manufacturer
                  )
                  const port = hardpoint.ports ? hardpoint.ports[0] : null
                  const portManufacturer = companies.find(
                    (e) => e.id == port?.manufacturer
                  )

                  return (
                    <div key={hardpoint} className={'hardpointItem'}>
                      <div className={'hardpointItemQuantity'}>
                        <span> {count} </span>
                        <span className="text-[#7c7c7c] lowercase">x</span>
                      </div>
                      <div className={'hardpointItemSlots'}>
                        <div className={'hardpointItemSlot'}>
                          <div className={'hardpointItemInner hasComponent'}>
                            <div className={'hardpointItemSize'}>
                              {' '}
                              Size {hardpoint.size}{' '}
                            </div>
                            <div className={'hardpointItemComponent'}>
                              {' '}
                              {hardpoint.name}{' '}
                            </div>
                            {hardpointManufacturer &&
                              (hardpointManufacturer.status == 'published' ? (
                                <Link
                                  href={
                                    '/VerseExkurs/firmen/' +
                                    hardpointManufacturer.firmen_name
                                  }
                                  className="transition-all duration-300 hardpointItemComponentManufacturer text-inherit decoration-transparent hover:text-white hover:duration-150"
                                >
                                  {hardpointManufacturer.firmen_name}
                                </Link>
                              ) : (
                                <div className="hardpointItemComponentManufacturer text-inherit">
                                  {hardpointManufacturer.firmen_name}
                                </div>
                              ))}
                          </div>
                          {port && (
                            <div className={'hardpointItemLoadout'}>
                              <div className={'hardpointItemLoadoutQuantity'}>
                                <img
                                  src="https://cms.ariscorp.de/assets/6d9ff4de-ce17-46ac-b5ba-9b685f08ba8a"
                                  className="hardpointItemLoadoutQuantityIcon"
                                />{' '}
                                {hardpoint.ports.length}{' '}
                                <span className="text-[#7c7c7c] pr-[10px]">
                                  x
                                </span>
                              </div>
                              <div className={'hardpointItemInner'}>
                                <div className={'hardpointItemSize'}>
                                  {' '}
                                  Size {port.size}{' '}
                                </div>
                                <div className={'hardpointItemComponent'}>
                                  {port.name}
                                </div>
                                {portManufacturer &&
                                  (portManufacturer.status == 'published' ? (
                                    <Link
                                      href={
                                        '/VerseExkurs/firmen/' +
                                        portManufacturer.firmen_name
                                      }
                                      className="transition-all duration-300 hardpointItemComponentManufacturer text-inherit decoration-transparent hover:text-white hover:duration-150"
                                    >
                                      {portManufacturer.firmen_name}
                                    </Link>
                                  ) : (
                                    <div className="hardpointItemComponentManufacturer text-inherit">
                                      {portManufacturer.firmen_name}
                                    </div>
                                  ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        )}
      </div>
    </BasicPanel>
  )
}

export default Weapons
