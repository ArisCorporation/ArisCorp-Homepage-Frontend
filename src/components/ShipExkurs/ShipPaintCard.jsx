import { BasicPanel } from "components/panels"
import Link from "next/link"
import Image from "next/image"

const ShipCard = ({ data }) => (
  <BasicPanel>
    <div className="h-[200px] relative transition-all duration-500 ease">
      <div className='relative block w-full h-full overflow-hidden bg-center bg-no-repeat bg-cover focus:outline-none group bg-white/5 rounded-2xl' style={{ backgroundImage: `url(https://cms.ariscorp.de/assets/${data.storeImage.id || data.storeImage})` }}>
        <div className="absolute bottom-0 w-full pl-4 bg-opacity-80 bg-bg-secondary">
          <p className="py-2 my-auto text-lg leading-none transition-colors duration-200 text-secondary/90 group-hover:text-secondary group-hover:duration-300">
            {data.name}
          </p>
        </div>
      </div>
    </div>
  </BasicPanel >
)

export default ShipCard