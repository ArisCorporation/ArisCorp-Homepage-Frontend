import { BasicPanel } from "components/panels"
import Link from "next/link"

const Propulsion = ({ data, components, valid }) => {
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

  if(!data.hardpoints.filter((e) => e.type == 'hydrogenfuelintake' || e.type == 'jumpmodule' || e.type == 'quantumdrive' || e.type == 'quantumfueltank')[0]) {
    return valid(false)
  }
  
  return (
    <BasicPanel>
      <div className={"hardpointGroupInner"}>
        {data.hardpoints.filter((e) => e.type == 'hydrogenfuelintake')[0] && (
          <div className={"hardpointType"}>
            <div className={"hardpointTypeLabel"}>
              <svg xmlns="http://www.w3.org/2000/svg" className='hardpointTypeIcon' fill="#00ffe8" stroke="#00ffe8" viewBox="0 0 38.57 25.18">
                <path d="m38.57 10.23v4.69l-8.42 10.26h-17v-4l1.94-2v4h4.35l5.44-5.41v-10.38l-5.29-5.39h-4.49v4l-1.9-2v-4h17zm-38.57.93h11.36l-1-5.2 6.64 6.63-6.63 6.63 1-5.32h-11.37z" />
              </svg>
              <span> Treibstoff Einlass </span>
            </div>
            <div className={"hardpointItems"}>
              <div className={"hardpointItem"}>
                <div className={"hardpointItemQuantity"}>
                  <span> {data.hardpoints.filter((e) => e.type == 'hydrogenfuelintake').length} </span>
                  <span className='text-[#7c7c7c] lowercase'>x</span>
                </div>
                <div className={"hardpointItemSlots"}>
                  <div className={"hardpointItemSlot"}>
                    <div className={"hardpointItemInner"}>
                      <div className={"hardpointItemSize"}> Size {setSize(data.hardpoints.filter((e) => e.type == 'hydrogenfuelintake')[0].size)} ({(data.hardpoints.filter((e) => e.type == 'hydrogenfuelintake')[0].size)}) </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {data.hardpoints.filter((e) => e.type == 'hydrogenfueltank')[0] && (
          <div className={"hardpointType"}>
            <div className={"hardpointTypeLabel"}>
              <svg xmlns="http://www.w3.org/2000/svg" className='hardpointTypeIcon' fill="#00ffe8" stroke="#00ffe8" viewBox="0 0 29.74 34.76">
                <path d="m27.06 0h-15.23l-4.53 4.53h-1l-.37-.33v-.55l-1.41-1.42h-.52l-4 4v.56l1.42 1.37h.58l.33.33v1l-.76.76v21.83l2.68 2.68h22.81l2.68-2.68v-29.47zm-11.87 30.74a7.42 7.42 0 0 1 -6.19-11.55 7.43 7.43 0 0 1 .47-.62c3.19-3.66 3.38-7.68 6.73-10-1 3.9 2.09 7 4.63 10a7.44 7.44 0 0 1 .47.62 7.42 7.42 0 0 1 -6.15 11.56zm12-26.14h-17.27l2.81-2.81h13.08l1.36 1.36zm-12.41 11.18a14.6 14.6 0 0 0 2.71 3.81c.29.33.58.65.86 1a4.14 4.14 0 1 1 -6.33 0 16.13 16.13 0 0 0 2.62-4.49zm.41-2.78c-1.39 1.63-1.73 4.41-3.93 6.94a5.14 5.14 0 0 0 -.32.43 5.13 5.13 0 1 0 8.51 0 5.16 5.16 0 0 0 -.33-.43c-1.76-2.09-3.93-3.94-3.93-6.94z" />
              </svg>
              <span> Treibstoff Tanks </span>
            </div>
            <div className={"hardpointItems"}>
              <div className={"hardpointItem"}>
                <div className={"hardpointItemQuantity"}>
                  <span> {data.hardpoints.filter((e) => e.type == 'hydrogenfueltank').length} </span>
                  <span className='text-[#7c7c7c] lowercase'>x</span>
                </div>
                <div className={"hardpointItemSlots"}>
                  <div className={"hardpointItemSlot"}>
                    <div className={"hardpointItemInner"}>
                      <div className={"hardpointItemSize"}> Size {setSize(data.hardpoints.filter((e) => e.type == 'hydrogenfueltank')[0].size)} ({(data.hardpoints.filter((e) => e.type == 'hydrogenfueltank')[0].size)}) </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {data.hardpoints.filter((e) => e.type == 'jumpmodule')[0] && (
          <div className={"hardpointType"}>
            <div className={"hardpointTypeLabel"}>
              <svg xmlns="http://www.w3.org/2000/svg" className='hardpointTypeIcon' fill="#00ffe8" stroke="#00ffe8" viewBox="0 0 40.35 40.35">
                <path d="M15.84,7.56,14.23,5.95,20.18,0l5.95,5.95L24.51,7.56,20.18,3.23Zm-9.9,6.67L0,20.18l5.95,5.95,1.62-1.62L3.23,20.18l4.33-4.33ZM34.4,26.12l5.95-5.95L34.4,14.23l-1.62,1.62,4.33,4.33-4.33,4.33Zm-14.23,11-4.33-4.33L14.23,34.4l5.95,5.95,5.95-5.95-1.62-1.62Zm7.94-16.94L25,17,35.87,6.1,34.25,4.49,23.34,15.4l-3.16-3.16L17,15.4,6.1,4.49,4.49,6.1,15.4,17l-3.16,3.16,3.16,3.16L4.49,34.25,6.1,35.87,17,25l3.16,3.16L23.34,25,34.25,35.87l1.62-1.62L25,23.34Z" />
              </svg>
              <span> Jump Module </span>
            </div>
            <div className={"hardpointItems"}>
              <div className={"hardpointItem"}>
                <div className={"hardpointItemQuantity"}>
                  <span> {data.hardpoints.filter((e) => e.type == 'jumpmodule').length} </span>
                  <span className='text-[#7c7c7c] lowercase'>x</span>
                </div>
                <div className={"hardpointItemSlots"}>
                  <div className={"hardpointItemSlot"}>
                    <div className={"hardpointItemInner"}>
                      <div className={"hardpointItemSize"}> Size {setSize(data.hardpoints.filter((e) => e.type == 'jumpmodule')[0]?.size)} ({(data.hardpoints.filter((e) => e.type == 'jumpmodule')[0]?.size)}) </div>
                      {data.hardpoints.filter((e) => e.type == 'jumpmodule')[0].component && <div className={"hardpointItemComponent"}> {components.find((e) => e.id == data.hardpoints.filter((e) => e.type == 'jumpmodule')[0].component).name} </div>}
                      {data.hardpoints.filter((e) => e.type == 'jumpmodule')[0].component && <Link href={'/VerseExkurs/firmen/' + components.find((e) => e.id == data.hardpoints.filter((e) => e.type == 'jumpmodule')[0].component).manufacturer?.firmen_name} className={'hardpointItemComponentManufacturer text-inherit decoration-transparent hover:text-white transition-all duration-300 hover:duration-150 ' + (components.find((e) => e.id == data.hardpoints.filter((e) => e.type == 'jumpmodule')[0].component).manufacturer?.status != 'published' && 'pointer-events-none cursor-text')}>{components.find((e) => e.id == data.hardpoints.filter((e) => e.type == 'jumpmodule')[0].component).manufacturer?.firmen_name}</Link>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {data.hardpoints.filter((e) => e.type == 'quantumdrive')[0] && (
          <div className={"hardpointType"}>
            <div className={"hardpointTypeLabel"}>
              <svg xmlns="http://www.w3.org/2000/svg" className='hardpointTypeIcon' fill="#00ffe8" stroke="#00ffe8" viewBox="0 0 40.35 40.35">
                <path d="M40.35,20.18,20.18,40.35,0,20.18,20.18,0ZM20.18,37.12,37.12,20.18,20.18,3.23,3.23,20.18ZM19,24.79v6.86h2.28V24.79h3.47V21.32h6.86V19H24.79V15.56H21.32V8.7H19v6.86H15.56V19H8.7v2.28h6.86v3.47Z" />
              </svg>
              <span> Quantum Antriebe </span>
            </div>
            <div className={"hardpointItems"}>
              <div className={"hardpointItem"}>
                <div className={"hardpointItemQuantity"}>
                  <span> {data.hardpoints.filter((e) => e.type == 'quantumdrive').length} </span>
                  <span className='text-[#7c7c7c] lowercase'>x</span>
                </div>
                <div className={"hardpointItemSlots"}>
                  <div className={"hardpointItemSlot"}>
                    <div className={"hardpointItemInner hasComponent"}>
                      <div className={"hardpointItemSize"}> Size {(data.hardpoints.filter((e) => e.type == 'quantumdrive')[0]?.size)} </div>
                      {data.hardpoints.filter((e) => e.type == 'quantumdrive')[0].component && <div className={"hardpointItemComponent"}> {components.find((e) => e.id == data.hardpoints.filter((e) => e.type == 'quantumdrive')[0].component).name} </div>}
                      {data.hardpoints.filter((e) => e.type == 'quantumdrive')[0].component && <Link href={'/VerseExkurs/firmen/' + components.find((e) => e.id == data.hardpoints.filter((e) => e.type == 'quantumdrive')[0].component).manufacturer?.firmen_name} className={'hardpointItemComponentManufacturer text-inherit decoration-transparent hover:text-white transition-all duration-300 hover:duration-150 ' + (components.find((e) => e.id == data.hardpoints.filter((e) => e.type == 'quantumdrive')[0].component).manufacturer?.status != 'published' && 'pointer-events-none cursor-text')}>{components.find((e) => e.id == data.hardpoints.filter((e) => e.type == 'quantumdrive')[0].component).manufacturer?.firmen_name}</Link>}
                    </div>
                    {/* <div className={'hardpointItemLoadout'}>
                                    <div className={'hardpointItemLoadoutQuantity'}>
                                      <img src='https://cms.ariscorp.de/assets/6d9ff4de-ce17-46ac-b5ba-9b685f08ba8a' className='hardpointItemLoadoutQuantityIcon' />
                                      {' '}1{' '}
                                      <span className='text-[#7c7c7c] pr-[10px]'>x</span>
                                    </div>
                                    <div className={'hardpointItemInner'}>
                                      <div className={'hardpointItemComponent'}>TBD</div>
                                    </div>
                                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {data.hardpoints.filter((e) => e.type == 'quantumfueltank')[0] && (
          <div className={"hardpointType"}>
            <div className={"hardpointTypeLabel"}>
              <svg xmlns="http://www.w3.org/2000/svg" className='hardpointTypeIcon' fill="#00ffe8" stroke="#00ffe8" viewBox="0 0 29.74 34.76">
                <path d="M6.15,20.57l9.64,9.64,9.64-9.64-9.64-9.64Zm12.27-2.63v2h3.9v1.3h-3.9v2h-2v3.9h-1.3V23.2h-2v-2H9.26v-1.3h3.9v-2h2V14h1.3v3.9ZM27.06,0H11.83L7.3,4.53h-1L5.93,4.2V3.65L4.52,2.23H4l-4,4v.56L1.42,8.16H2l.33.33v1l-.76.76V32.08l2.68,2.68H27.06l2.68-2.68V2.61ZM12.74,1.79H25.81l1.36,1.36V4.61H9.92ZM15.79,33,3.31,20.57,15.79,8.09,28.27,20.57Z" />
              </svg>
              <span> Quantum Treibstoff Tanks </span>
            </div>
            <div className={"hardpointItems"}>
              <div className={"hardpointItem"}>
                <div className={"hardpointItemQuantity"}>
                  <span> {data.hardpoints.filter((e) => e.type == 'quantumfueltank').length} </span>
                  <span className='text-[#7c7c7c] lowercase'>x</span>
                </div>
                <div className={"hardpointItemSlots"}>
                  <div className={"hardpointItemSlot"}>
                    <div className={"hardpointItemInner"}>
                      <div className={"hardpointItemSize"}> Size {setSize(data.hardpoints.filter((e) => e.type == 'quantumfueltank')[0].size)} ({(data.hardpoints.filter((e) => e.type == 'quantumfueltank')[0].size)}) </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </BasicPanel>
  )
}

export default Propulsion