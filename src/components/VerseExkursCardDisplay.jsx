import Image from 'next/legacy/image'
import Link from 'next/link'

const CardDisplay = ({link, image, alt}) => {
  return (
    <Link legacyBehavior href={link}>
      <a>
        <div className="transition-opacity duration-150 hover:duration-300 hover:cursor-pointer aspect-square opacity-80 hover:opacity-100">
          <div className="relative w-full h-full">
            <Image
              src={
                'https://cms.ariscorp.de/assets/' + image
              }
              layout="fill"
              objectFit="cover"
              alt={alt}
            />
          </div>
        </div>
      </a>
    </Link>
  )
}

export default CardDisplay
