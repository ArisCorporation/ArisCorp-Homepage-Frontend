import { BasicPanel } from "components/panels"
import Link from "next/link"

const Systems = ({ data, components, valid }) => {
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

  if(!data.hardpoints.filter((e) => e.type == 'cooler' || e.type == 'powerplant' || e.type == 'shield' || e.type == 'shieldgenerator')[0]) {
    return valid(false)
  }
  
  return (
    <BasicPanel>
      <div className={"hardpointGroupInner"}>
        <div className={"hardpointType"}>
          <div className={"hardpointTypeLabel"}>
            <svg xmlns="http://www.w3.org/2000/svg" className={'hardpointTypeIcon'} fill="#00ffe8" stroke="#00ffe8" viewBox="0 0 39.366 39.366">
              <path d="M19.683 0c-4.44 0-8.527 1.495-11.823 3.984h-.004l-.003.005C3.093 7.584 0 13.27 0 19.682c0 10.854 8.83 19.683 19.683 19.683 4.44 0 8.527-1.495 11.823-3.984h.004l.004-.006c4.758-3.596 7.852-9.283 7.852-15.693C39.366 8.83 30.536 0 19.683 0zm10.453 29.12c-2.71-.188-5.183-1.615-6.7-3.868l-.7-1.04-2.927.99.26 1.757c.527 3.556 3.162 6.436 6.66 7.276l2.157.52c-2.685 1.645-5.83 2.612-9.204 2.612-.358 0-.708-.033-1.06-.054l-1.885-3.86c-1.193-2.44-1.193-5.295 0-7.737l.55-1.126-2.32-2.038-1.39 1.103c-2.818 2.236-3.994 5.958-2.973 9.406l.638 2.158c-3.168-1.728-5.736-4.405-7.358-7.637l2.4-3.562c1.518-2.254 3.99-3.68 6.7-3.87l1.252-.086.606-3.03-1.65-.65C9.847 15.06 6.035 15.9 3.56 18.51l-1.536 1.618c-.005-.15-.024-.295-.024-.445 0-3.595 1.085-6.94 2.935-9.734l4.295.296c2.71.188 5.183 1.615 6.7 3.868l.7 1.04 2.927-.99-.26-1.756c-.528-3.557-3.163-6.437-6.66-7.277l-2.16-.518C13.165 2.967 16.31 2 19.684 2c.358 0 .708.033 1.06.054l1.886 3.86c1.192 2.44 1.192 5.295 0 7.737l-.55 1.127 2.32 2.04 1.39-1.104c2.817-2.236 3.993-5.958 2.972-9.406l-.64-2.157c3.17 1.728 5.737 4.405 7.36 7.637l-2.4 3.563c-1.52 2.253-3.99 3.68-6.702 3.87l-1.25.086-.606 3.03 1.65.65c3.345 1.323 7.157.48 9.633-2.128l1.536-1.618c.004.15.022.294.022.444 0 3.595-1.085 6.94-2.935 9.734l-4.294-.298z" />
            </svg>
            <span> Kühler </span>
          </div>
          <div className={"hardpointItems"}>
            <div className={"hardpointItem"}>
              <div className={"hardpointItemQuantity"}>
                <span> {data.hardpoints.filter((e) => e.type == 'cooler').length} </span>
                <span className='text-[#7c7c7c] lowercase'>x</span>
              </div>
              <div className={"hardpointItemSlots"}>
                <div className={"hardpointItemSlot"}>
                  <div className={"hardpointItemInner"}>
                    <div className={"hardpointItemSize"}> Size {(data.hardpoints.filter((e) => e.type == 'cooler')[0].size)} </div>
                    {data.hardpoints.filter((e) => e.type == 'cooler')[0].component && <div className={"hardpointItemComponent"}> {components.find((e) => e.id == data.hardpoints.filter((e) => e.type == 'cooler')[0].component).name} </div>}
                    {data.hardpoints.filter((e) => e.type == 'cooler')[0].component && <Link href={'/VerseExkurs/firmen/' + components.find((e) => e.id == data.hardpoints.filter((e) => e.type == 'cooler')[0].component).manufacturer?.firmen_name} className={'hardpointItemComponentManufacturer text-inherit decoration-transparent hover:text-white transition-all duration-300 hover:duration-150 ' + (components.find((e) => e.id == data.hardpoints.filter((e) => e.type == 'cooler')[0].component).manufacturer?.status != 'published' && 'pointer-events-none cursor-text')}>{components.find((e) => e.id == data.hardpoints.filter((e) => e.type == 'cooler')[0].component).manufacturer?.firmen_name}</Link>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"hardpointType"}>
          <div className={"hardpointTypeLabel"}>
            <svg xmlns="http://www.w3.org/2000/svg" className='hardpointTypeIcon' fill="#00ffe8" stroke="#00ffe8" viewBox="0 0 39.87 39.87">
              <path d="M34.29,39.87H28.8v-3H33L36.87,33V6.82L33,3H28.8V0h5.49l5.58,5.58V34.29Zm-23.23,0H5.58L0,34.29V5.58L5.58,0h5.49V3H6.82L3,6.82V33l3.82,3.82h4.25Zm3.75-5.63L25.88,18.81l-5.55-.46L25,6.94H16.18L14,20.36l3.54.44Z" />
            </svg>
            <span> Energie Generatoren </span>
          </div>
          <div className={"hardpointItems"}>
            <div className={"hardpointItem"}>
              <div className={"hardpointItemQuantity"}>
                <span> {data.hardpoints.filter((e) => e.type == 'powerplant').length} </span>
                <span className='text-[#7c7c7c] lowercase'>x</span>
              </div>
              <div className={"hardpointItemSlots"}>
                <div className={"hardpointItemSlot"}>
                  <div className={"hardpointItemInner"}>
                    <div className={"hardpointItemSize"}> Size {(data.hardpoints.filter((e) => e.type == 'powerplant')[0].size)} </div>
                    {data.hardpoints.filter((e) => e.type == 'powerplant')[0].component && <div className={"hardpointItemComponent"}> {components.find((e) => e.id == data.hardpoints.filter((e) => e.type == 'powerplant')[0].component).name} </div>}
                    {data.hardpoints.filter((e) => e.type == 'powerplant')[0].component && <Link href={'/VerseExkurs/firmen/' + components.find((e) => e.id == data.hardpoints.filter((e) => e.type == 'powerplant')[0].component).manufacturer?.firmen_name} className={'hardpointItemComponentManufacturer text-inherit decoration-transparent hover:text-white transition-all duration-300 hover:duration-150 ' + (components.find((e) => e.id == data.hardpoints.filter((e) => e.type == 'powerplant')[0].component).manufacturer?.status != 'published' && 'pointer-events-none cursor-text')}>{components.find((e) => e.id == data.hardpoints.filter((e) => e.type == 'powerplant')[0].component).manufacturer?.firmen_name}</Link>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"hardpointType"}>
          <div className={"hardpointTypeLabel"}>
            <svg xmlns="http://www.w3.org/2000/svg" className='hardpointTypeIcon' fill="#00ffe8" stroke="#00ffe0" viewBox="0 0 37.83 32.76">
              <path d="m35.17 21 2.65-4.59-2.65-4.59h-3.56l-2.37-4.14 1.76-3.09-2.63-4.59h-5.3l-1.79 3.09h-4.74l-1.78-3.09h-5.3l-2.65 4.59 1.78 3.09-2.37 4.11h-3.57l-2.65 4.59 2.65 4.62h3.57l2.37 4.11-1.78 3.06 2.65 4.59h5.3l1.78-3.09h4.74l1.78 3.09h5.3l2.64-4.59-1.78-3.09 2.39-4.08zm-12.1 2.58-1.78 3.09h-4.75l-1.78-3.09h-3.57l-2.37-4.11 1.78-3.09-1.78-3.09 2.37-4.11h3.57l1.78-3.09h4.74l1.78 3.09h3.57l2.37 4.11-1.78 3.09 1.78 3.09-2.37 4.11z" />
            </svg>
            <span> Shild Generatoren </span>
          </div>
          <div className={"hardpointItems"}>
            <div className={"hardpointItem"}>
              <div className={"hardpointItemQuantity"}>
                <span> {data.hardpoints.filter((e) => e.type == 'shield' || e.type == 'shieldgenerator').length} </span>
                <span className='text-[#7c7c7c] lowercase'>x</span>
              </div>
              <div className={"hardpointItemSlots"}>
                <div className={"hardpointItemSlot"}>
                  <div className={"hardpointItemInner"}>
                    <div className={"hardpointItemSize"}> Size {(data.hardpoints.filter((e) => e.type == 'shield' || e.type == 'shieldgenerator')[0].size)} </div>
                    {data.hardpoints.filter((e) => e.type == 'shield' || e.type == 'shieldgenerator')[0].component && <div className={"hardpointItemComponent"}> {components.find((e) => e.id == data.hardpoints.filter((e) => e.type == 'shield' || e.type == 'shieldgenerator')[0].component).name} </div>}
                    {data.hardpoints.filter((e) => e.type == 'shield' || e.type == 'shieldgenerator')[0].component && <Link href={'/VerseExkurs/firmen/' + components.find((e) => e.id == data.hardpoints.filter((e) => e.type == 'shield' || e.type == 'shieldgenerator')[0].component).manufacturer?.firmen_name} className={'hardpointItemComponentManufacturer text-inherit decoration-transparent hover:text-white transition-all duration-300 hover:duration-150 ' + (components.find((e) => e.id == data.hardpoints.filter((e) => e.type == 'shield' || e.type == 'shieldgenerator')[0].component).manufacturer?.status != 'published' && 'pointer-events-none cursor-text')}>{components.find((e) => e.id == data.hardpoints.filter((e) => e.type == 'shield' || e.type == 'shieldgenerator')[0].component).manufacturer?.firmen_name}</Link>}
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

export default Systems