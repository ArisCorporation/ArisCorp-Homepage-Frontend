import Image from 'next/image'

const FirmenCard = ({data}) => {
  return (
    <div className="transition-opacity duration-150 hover:duration-300 hover:cursor-pointer aspect-square opacity-80 hover:opacity-100">
      <div className="relative w-full h-full">
        <Image
          src={'https://cms.ariscorp.de/assets/' + data.firmen_trans_logo.id}
          layout="fill"
          objectFit="cover"
          alt="test"
        />
      </div>
    </div>
  )
}

export default FirmenCard
