import { BasicPanel } from "components/panels"
import Link from "next/link"
import Image from "next/image"

const ShipCard = ({ data, manufacturer }) => (
  <BasicPanel>
    <div className="h-[200px] relative transition-all duration-500 ease">
      <Link legacyBehavior href={"/VerseExkurs/firmen/" + data.manufacturer?.slug || manufacturer.slug}>
        <a className='absolute bottom-0 h-[22px] z-10 pl-4 decoration-transparent'>
          <p className="top-0 bottom-0 py-0 mb-1 text-xs leading-none transition-colors duration-200 text-white/50 hover:text-white/80 hover:cursor-pointer hover:duration-300">
            {data.manufacturer?.firmen_name || manufacturer.firmen_name}
          </p>
        </a>
      </Link>
      <Link legacyBehavior href={'/ShipExkurs/' + data.slug}>
        <a className='relative block w-full h-full overflow-hidden bg-center bg-no-repeat bg-cover focus:outline-none group bg-white/5 rounded-2xl' style={{ backgroundImage: `url(https://cms.ariscorp.de/assets/${data.storeImage?.id}?height=400)` }}>
          <div className="absolute bottom-0 w-full h-[49px] pl-4 bg-opacity-80 bg-bg-secondary">
            <p className="pb-0 text-lg leading-none transition-colors duration-200 text-secondary/90 group-hover:text-secondary group-hover:duration-300">
              {data.name}
            </p>
          </div>
        </a>
      </Link>
    </div>
  </BasicPanel >
)

export default ShipCard