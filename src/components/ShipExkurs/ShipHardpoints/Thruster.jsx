import { BasicPanel } from 'components/panels'
import Link from 'next/link'

const Thruster = ({ data, components }) => {
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

  if (
    !data.hardpoints.filter(
      (e) =>
        e.type == 'mainthruster' ||
        e.type == 'retrothruster' ||
        e.type == 'vtolthruster' ||
        e.type == 'fixedmaneuveringthruster' ||
        e.type == 'gimbaledmaneuveringthruster'
    )[0] &&
    valid
  ) {
    return valid(false)
  } else if (
    !data.hardpoints.filter(
      (e) =>
        e.type == 'mainthruster' ||
        e.type == 'retrothruster' ||
        e.type == 'vtolthruster' ||
        e.type == 'fixedmaneuveringthruster' ||
        e.type == 'gimbaledmaneuveringthruster'
    )[0] &&
    !valid
  ) {
    return
  }

  return (
    <BasicPanel>
      <div className={'hardpointGroupInner'}>
        <div className={'hardpointType'}>
          <div className={'hardpointTypeLabel'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hardpointTypeIcon"
              fill="#00ffe8"
              stroke="#00ffe8"
              viewBox="0 0 27.6 37"
            >
              <path d="m21.8 2.3 5.8 8.3-1.4 2.6-3.9-3.8a7.3 7.3 0 0 0 -5.1-2.1h-6.8a7.3 7.3 0 0 0 -5.1 2.1l-4 3.9-1.3-2.7 5.8-8.3a5.5 5.5 0 0 1 4.5-2.3h7.1a5.5 5.5 0 0 1 4.4 2.3zm-8 28.4 6.8-16.6 6.8 7.1-5.1-.6-8.5 16.4-8.6-16.4-5 .6 6.8-7.1zm-2.5-19.6h5.1a1.1 1.1 0 0 1 1 1.5l-3.6 8-3.5-7.9a1.1 1.1 0 0 1 1-1.5z" />
            </svg>
            <span> Haupt Triebwerke </span>
          </div>
          <div className={'hardpointItems'}>
            {data.hardpoints.filter((e) => e.type == 'mainthruster')[0] && (
              <div className={'hardpointItem'}>
                <div className={'hardpointItemQuantity'}>
                  <span>
                    {' '}
                    {
                      data.hardpoints.filter((e) => e.type == 'mainthruster')
                        .length
                    }{' '}
                  </span>
                  <span className="text-[#7c7c7c] lowercase">x</span>
                </div>
                <div className={'hardpointItemSlots'}>
                  <div className={'hardpointItemSlot'}>
                    <div className={'hardpointItemInner'}>
                      <div className={'hardpointItemSize'}>
                        {' '}
                        Size{' '}
                        {
                          data.hardpoints.filter(
                            (e) => e.type == 'mainthruster'
                          )[0].size
                        }{' '}
                      </div>
                      <div className={'hardpointItemComponent'}>
                        Main Thruster
                      </div>
                      <Link
                        href={
                          '/VerseExkurs/firmen/' + data.manufacturer.firmen_name
                        }
                        className={
                          'hardpointItemComponentManufacturer text-inherit decoration-transparent hover:text-white transition-all duration-300 hover:duration-150'
                        }
                      >
                        {data.manufacturer.firmen_name}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {data.hardpoints.filter((e) => e.type == 'retrothruster')[0] && (
              <div className={'hardpointItem'}>
                <div className={'hardpointItemQuantity'}>
                  <span>
                    {' '}
                    {
                      data.hardpoints.filter((e) => e.type == 'retrothruster')
                        .length
                    }{' '}
                  </span>
                  <span className="text-[#7c7c7c] lowercase">x</span>
                </div>
                <div className={'hardpointItemSlots'}>
                  <div className={'hardpointItemSlot'}>
                    <div className={'hardpointItemInner'}>
                      <div className={'hardpointItemSize'}>
                        {' '}
                        Size{' '}
                        {
                          data.hardpoints.filter(
                            (e) => e.type == 'retrothruster'
                          )[0].size
                        }{' '}
                      </div>
                      <div className={'hardpointItemComponent'}>
                        Retro Thruster
                      </div>
                      <Link
                        href={
                          '/VerseExkurs/firmen/' + data.manufacturer.firmen_name
                        }
                        className={
                          'hardpointItemComponentManufacturer text-inherit decoration-transparent hover:text-white transition-all duration-300 hover:duration-150'
                        }
                      >
                        {data.manufacturer.firmen_name}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {data.hardpoints.filter((e) => e.type == 'vtolthruster')[0] && (
              <div className={'hardpointItem'}>
                <div className={'hardpointItemQuantity'}>
                  <span>
                    {' '}
                    {
                      data.hardpoints.filter((e) => e.type == 'vtolthruster')
                        .length
                    }{' '}
                  </span>
                  <span className="text-[#7c7c7c] lowercase">x</span>
                </div>
                <div className={'hardpointItemSlots'}>
                  <div className={'hardpointItemSlot'}>
                    <div className={'hardpointItemInner'}>
                      <div className={'hardpointItemSize'}>
                        {' '}
                        Size{' '}
                        {
                          data.hardpoints.filter(
                            (e) => e.type == 'vtolthruster'
                          )[0].size
                        }{' '}
                      </div>
                      <div className={'hardpointItemComponent'}>
                        VTOL Thruster
                      </div>
                      <Link
                        href={
                          '/VerseExkurs/firmen/' + data.manufacturer.firmen_name
                        }
                        className={
                          'hardpointItemComponentManufacturer text-inherit decoration-transparent hover:text-white transition-all duration-300 hover:duration-150'
                        }
                      >
                        {data.manufacturer.firmen_name}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={'hardpointType'}>
          <div className={'hardpointTypeLabel'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hardpointTypeIcon"
              fill="#00ffe0"
              stroke="#00ffe8"
              viewBox="0 0 45.89 29.54"
            >
              <path d="m20.12 18.42-1 5.89-1.68.51v-3.23a4.29 4.29 0 0 0 -1.26-3l-2.84-2.84a4.29 4.29 0 0 0 -3-1.26h-3.3l.57-1.68 5.9-1a3.22 3.22 0 0 1 2.84.89l2.95 2.95a3.22 3.22 0 0 1 .82 2.77zm-15 8.28 9.55-3.84-.1 5.8-1.88-2.37-10.39 3.25 3.26-10.42-2.33-1.83 5.77-.12zm6.88-9 2.13 2.13a.64.64 0 0 1 -.23 1.05l-4.76 1.83 1.86-4.78a.64.64 0 0 1 1-.22zm14.64-2.13 2.95-2.95a3.22 3.22 0 0 1 2.84-.89l5.9 1 .57 1.68h-3.3a4.29 4.29 0 0 0 -3 1.26l-2.81 2.93a4.29 4.29 0 0 0 -1.26 3v3.23l-1.68-.51-1-5.89a3.22 3.22 0 0 1 .82-2.85zm10.21 1.59 5.78.12-2.33 1.84 3.26 10.42-10.39-3.25-1.88 2.37-.1-5.8 9.55 3.84zm-2 .76 1.84 4.77-4.69-1.8a.64.64 0 0 1 -.23-1.05l2.13-2.13a.64.64 0 0 1 1.01.22zm-16.48-12c-5.45-3.44-13.21-3.29-13.21-3.29v-2.63a32.91 32.91 0 0 0 -5.16 4.17 21 21 0 0 1 5.16 3.27v-2.67s4.6-.77 13.27 1.14zm22.35-1.15v2.67a21 21 0 0 1 5.16-3.26 32.91 32.91 0 0 0 -5.16-4.18v2.63s-7.72-.15-13.26 3.28c8.66-1.91 13.26-1.14 13.26-1.14z" />
            </svg>
            <span> Manöver Triebwerke </span>
          </div>
          <div className={'hardpointItems'}>
            {data.hardpoints.filter(
              (e) => e.type == 'fixedmaneuveringthruster'
            )[0] && (
              <div className={'hardpointItem'}>
                <div className={'hardpointItemQuantity'}>
                  <span>
                    {' '}
                    {data.hardpoints.filter(
                      (e) => e.type == 'fixedmaneuveringthruster'
                    ).length +
                      data.hardpoints.filter(
                        (e) => e.type == 'gimbaledmaneuveringthruster'
                      ).length}{' '}
                  </span>
                  <span className="text-[#7c7c7c] lowercase">x</span>
                </div>
                <div className={'hardpointItemSlots'}>
                  <div className={'hardpointItemSlot'}>
                    <div className={'hardpointItemInner'}>
                      <div className={'hardpointItemSize'}>
                        {' '}
                        Size{' '}
                        {
                          data.hardpoints.filter(
                            (e) => e.type == 'fixedmaneuveringthruster'
                          )[0].size
                        }{' '}
                      </div>
                      <div className={'hardpointItemComponent text-sm'}>
                        Fixed Manöver Triebwerke
                      </div>
                      <Link
                        href={
                          '/VerseExkurs/firmen/' + data.manufacturer.firmen_name
                        }
                        className={
                          'hardpointItemComponentManufacturer text-inherit decoration-transparent hover:text-white transition-all duration-300 hover:duration-150'
                        }
                      >
                        {data.manufacturer.firmen_name}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {data.hardpoints.filter(
              (e) => e.type == 'gimbaledmaneuveringthruster'
            )[0] && (
              <div className={'hardpointItem'}>
                <div className={'hardpointItemQuantity'}>
                  <span>
                    {' '}
                    {data.hardpoints.filter(
                      (e) => e.type == 'gimbaledmaneuveringthruster'
                    ).length +
                      data.hardpoints.filter(
                        (e) => e.type == 'gimbaledmaneuveringthruster'
                      ).length}{' '}
                  </span>
                  <span className="text-[#7c7c7c] lowercase">x</span>
                </div>
                <div className={'hardpointItemSlots'}>
                  <div className={'hardpointItemSlot'}>
                    <div className={'hardpointItemInner'}>
                      <div className={'hardpointItemSize'}>
                        {' '}
                        Size{' '}
                        {
                          data.hardpoints.filter(
                            (e) => e.type == 'gimbaledmaneuveringthruster'
                          )[0].size
                        }{' '}
                      </div>
                      <div className={'hardpointItemComponent text-sm'}>
                        Gimbaled Manöver Triebwerke
                      </div>
                      <Link
                        href={
                          '/VerseExkurs/firmen/' + data.manufacturer.firmen_name
                        }
                        className={
                          'hardpointItemComponentManufacturer text-inherit decoration-transparent hover:text-white transition-all duration-300 hover:duration-150'
                        }
                      >
                        {data.manufacturer.firmen_name}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </BasicPanel>
  )
}

export default Thruster
