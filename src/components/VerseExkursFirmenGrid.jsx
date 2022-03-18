import Image from 'next/image'
import Link from 'next/link'

const FirmenCard = ({ data }) => {
  return (
    <Link href={'/VerseExkurs/firmen/' + data.firmen_name}>
      <a>
        <div className="transition-opacity duration-150 hover:duration-300 hover:cursor-pointer aspect-square opacity-80 hover:opacity-100">
          <div className="relative w-full h-full">
            <Image
              src={
                'https://cms.ariscorp.de/assets/' + data.firmen_trans_logo.id
              }
              layout="fill"
              objectFit="cover"
              alt="test"
            />
          </div>
        </div>
      </a>
    </Link>
  )
}

export default FirmenCard
