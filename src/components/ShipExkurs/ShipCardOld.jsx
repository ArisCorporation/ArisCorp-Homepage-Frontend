import { BasicPanel } from "components/panels"
import Link from "next/link"
import Image from "next/image"

const ShipCard = ({data}) => (
  <BasicPanel>
    <Link href={'/ShipExkurs/' + data.slug}>
      <a className='group'>
        <div className="overflow-hidden rounded-2xl">
          <div className="relative w-full aspect-[18/10]">
            <Image
              src={
                'https://cms.ariscorp.de/assets/' + data.storeImage?.id
              }
              alt={'Bild von ' + data.name}
              layout="fill"
              className="data-cover"
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                data.storeImage?.id +
                '?width=16&quality=1'
              }
            />
            <div className="absolute bottom-0 w-full pl-4 bg-opacity-80 bg-bg-secondary">
              <p className="pb-0 text-lg leading-none transition-colors duration-200 text-secondary/90 group-hover:text-secondary group-hover:duration-300">
                {data.name}
              </p>
              <Link href={"/VerseExkurs/firmen/" + data.manufacturer.firmen_name}>
                <a className='decoration-transparent'>
                  <p className="mb-1 text-xs leading-none transition-colors duration-200 text-white/50 hover:text-white/80 hover:cursor-pointer hover:duration-300">
                    {data.manufacturer.firmen_name}
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </a>
    </Link>
  </BasicPanel>
)

export default ShipCard