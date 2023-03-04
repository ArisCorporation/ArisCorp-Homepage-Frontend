import { BasicPanel, BasicPanelButton } from "components/panels"
import Link from "next/link"
import Image from "next/image"
import Avionics from './Avionics'
import Systems from './Systems'
import Propulsion from './Propulsion'
import Thruster from './Thruster'
import Weapons from './Weapons'
import { useState } from "react"

const ShipCard = ({ data, components }) => {
  const [avionicsValid, setAvionicsValid] = useState(true)
  const [systemsValid, setSystemsValid] = useState(true)
  const [propulsionValid, setPropulsionValid] = useState(true)
  const [thrusterValid, setThrusterValid] = useState(true)
  const [weaponsValid, setWeaponsValid] = useState(true)
  console.log(avionicsValid);

  // const changeAvionicState = () => {
  //   setAvionicsValid(false)
  // }

  return (
    <>
      <div className="flex w-full mb-4">
        <div className='mx-auto'>
          <BasicPanelButton a external href={'https://www.erkul.games/ship/' + data.erkulIdentifier}>
            <small className='transition-all duration-500 ease-linear text-[#959595]'>Tryout Loadouts with</small>
            <i style={{ backgroundImage: `url(https://cms.ariscorp.de/assets/6932c306-ba7f-423f-b84b-82b957053df9)` }} className='inline-block w-[18px] h-[18px] bg-no-repeat bg-center bg-contain transition-all ease-linear duration-500'></i>
            <span> Erkul&apos;s DPS Calculator </span>
          </BasicPanelButton>
        </div>
      </div>
      <div className='flex flex-row flex-wrap'>
        <div className='basis-full max-w-[100%] lg:basis-1/2 lg:max-w-[50%] 1.5xl:basis-1/3 1.5xl:max-w-[33.333333%]'>
          {avionicsValid && (
            <div className={"hardpointGroup"}>
              <h2 className={"hardpointGroupLabel"}>
                Avionik
              </h2>
              <Avionics data={data} components={components} valid={setAvionicsValid} />
            </div>
          )}
          {systemsValid && (
            <div className={"hardpointGroup"}>
              <h2 className={"hardpointGroupLabel"}>
                Systeme
              </h2>
              <Systems data={data} components={components} valid={setSystemsValid} />
            </div>
          )}
        </div>
        <div className='basis-full max-w-[100%] lg:basis-1/2 lg:max-w-[50%] 1.5xl:basis-1/3 1.5xl:max-w-[33.333333%]'>
          {propulsionValid && (<div className={"hardpointGroup"}>
            <h2 className={"hardpointGroupLabel"}>
              Antrieb
            </h2>
            <Propulsion data={data} components={components} valid={setPropulsionValid} />
          </div>)}
          {thrusterValid && (
            <div className={"hardpointGroup"}>
              <h2 className={"hardpointGroupLabel"}>
                Triebwerke
              </h2>
              <Thruster data={data} components={components} valid={setThrusterValid} />
            </div>
          )}
        </div>
        <div className='basis-full max-w-[100%] lg:basis-1/2 lg:max-w-[50%] 1.5xl:basis-1/3 1.5xl:max-w-[33.333333%]'>
          {weaponsValid && (
            <div className={"hardpointGroup"}>
              <h2 className={"hardpointGroupLabel"}>
                Waffen
              </h2>
              <Weapons data={data} components={components} valid={setWeaponsValid} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ShipCard