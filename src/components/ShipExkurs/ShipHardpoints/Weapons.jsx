import { BasicPanel } from "components/panels"

const Weapons = ({ data, components, valid }) => {
  function setSize (size) {
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

  return (
    <BasicPanel>
      <div className={"hardpointGroupInner"}>
        <div className={"hardpointType"}>
          <div className={"hardpointTypeLabel"}>
            <svg xmlns="http://www.w3.org/2000/svg" className='hardpointTypeIcon' fill="#00ffe8" stroke="#00ffe8" viewBox="0 0 32.91 29.38">
              <path d="m17.83 28.74-.65.65h4l-7.65-7.65a2.29 2.29 0 0 0 0-3.16l-3.9 1a2.29 2.29 0 0 0 .55 2.14l-7.65 7.66h4l-.66-.66 6-6zm15.08-19.45-.59.64-3.71 1-.67-.3-10.81 2.9.12.44-1.83 2.59-11.48 3.07-1.13-.63-1-3.69.65-1.13 13.26-3.55.71.29.12.44 10.81-2.91.43-.59 3.65-1 .83.27zm-1.81-6.88-.59.59-3.71 1-.67-.3-10.81 2.94.12.44-1.82 2.75-11.48 3.08-1.14-.66-1-3.83.65-1.13 13.26-3.55.71.29.12.44 10.81-2.89.45-.58 3.65-1 .83.27z" />
            </svg>
            <span> Turrets </span>
          </div>
          <div className={"hardpointItems"}>
            <div className={"hardpointItem"}>
              <div className={"hardpointItemQuantity"}>
                <span> 3 </span>
                <span className='text-[#7c7c7c] lowercase'>x</span>
              </div>
              <div className={"hardpointItemSlots"}>
                <div className={"hardpointItemSlot"}>
                  <div className={"hardpointItemInner hasComponent"}>
                    <div className={"hardpointItemSize"}> Size 4 </div>
                    <div className={"hardpointItemComponent"}> Bemannte Türme </div>
                    <div className={"hardpointItemComponentManufacturer"}>Anvil Aerospace</div>
                  </div>
                  <div className={'hardpointItemLoadout'}>
                    <div className={'hardpointItemLoadoutQuantity'}>
                      <img src='https://cms.ariscorp.de/assets/6d9ff4de-ce17-46ac-b5ba-9b685f08ba8a' className='hardpointItemLoadoutQuantityIcon' />
                      {' '}2{' '}
                      <span className='text-[#7c7c7c] pr-[10px]'>x</span>
                    </div>
                    <div className={'hardpointItemInner'}>
                      <div className={"hardpointItemSize"}> Size 4 </div>
                      <div className={'hardpointItemComponent'}>CF-447 Rhino Repeater</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"hardpointItem"}>
              <div className={"hardpointItemQuantity"}>
                <span> 3 </span>
                <span className='text-[#7c7c7c] lowercase'>x</span>
              </div>
              <div className={"hardpointItemSlots"}>
                <div className={"hardpointItemSlot"}>
                  <div className={"hardpointItemInner hasComponent"}>
                    <div className={"hardpointItemSize"}> Size 4 </div>
                    <div className={"hardpointItemComponent"}> Remote Türme </div>
                    <div className={"hardpointItemComponentManufacturer"}>Anvil Aerospace</div>
                  </div>
                  <div className={'hardpointItemLoadout'}>
                    <div className={'hardpointItemLoadoutQuantity'}>
                      <img src='https://cms.ariscorp.de/assets/6d9ff4de-ce17-46ac-b5ba-9b685f08ba8a' className='hardpointItemLoadoutQuantityIcon' />
                      {' '}1{' '}
                      <span className='text-[#7c7c7c] pr-[10px]'>x</span>
                    </div>
                    <div className={'hardpointItemInner'}>
                      <div className={"hardpointItemSize"}> Size 4 </div>
                      <div className={'hardpointItemComponent'}>CF-447 Rhino Repeater</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BasicPanel>
  )
}

export default Weapons