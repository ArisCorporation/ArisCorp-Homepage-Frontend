import { BasicPanel } from "components/panels"
import Link from "next/link"
import Image from "next/image"

const WeaponCard = ({ data, manufacturer, height }) => (
  <BasicPanel>
    <div className="h-[200px] relative transition-all duration-500 ease">
      <Link legacyBehavior href={'/VerseExkurs/waffen/' + data.waffen_name}>
        <a className='relative block w-full h-full overflow-hidden bg-center bg-no-repeat bg-cover group bg-white/5 rounded-2xl' style={{ backgroundImage: `url(https://cms.ariscorp.de/assets/${data.waffen_bild?.id}?height=200)` }}>
          <div className="absolute bottom-0 w-full pl-4 bg-opacity-80 bg-bg-secondary">
            <p className="pb-0 text-lg leading-none transition-colors duration-200 text-secondary/90 group-hover:text-secondary group-hover:duration-300">
              {data.waffen_name}
            </p>
            <Link legacyBehavior href={"/VerseExkurs/firmen/" + data.waffenhersteller?.firmen_name || manufacturer.firmen_name}>
              <a className='decoration-transparent'>
                <p className="mb-1 text-xs leading-none transition-colors duration-200 text-white/50 hover:text-white/80 hover:cursor-pointer hover:duration-300">
                  {data.waffenhersteller?.firmen_name || manufacturer.firmen_name}
                </p>
              </a>
            </Link>
          </div>
        </a>
      </Link>
    </div>
  </BasicPanel >
)

export default WeaponCard