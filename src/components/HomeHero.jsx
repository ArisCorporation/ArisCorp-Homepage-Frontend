import Image from "next/image";
import dynamic from 'next/dynamic';

const Trailer = dynamic(() => import('./HomeHeroTrailer'), {
})

const HeroSection = () => {
  return (
    <div className="relative mb-32 drop-shadow-2xl">
      <div className="absolute top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center">
      <div className="absolute w-full h-full bg-black opacity-60"></div>
        <div className="relative items-center justify-center">
          <h1 className="flex items-center justify-center text-lg font-bold text-white mt-20 mb-[-40px] sm:mt-10 sm:mb-[-50px] sm:text-2xl md:mt-10 md:mb-[-30px] md:text-4xl lg:mt-0 lg:mb-0 lg:text-5xl xl:mb-10 xl:text-6xl">
            Willkommen
            <span className="ml-2 tracking-widest text-secondary">bei der</span>
          </h1>
          <div className="flex items-center justify-center scale-[.4] sm:scale-50 md:scale-[.6] lg:scale-75 xl:scale-100">
            <Image
              src="https://cms.ariscorp.de/assets/62eb0e48-6a0e-432f-b90d-fbd6aca6eaac"
              alt="ArisCorp Banner"
              width={600}
              height={230}
              placeholder="blur"
              blurDataURL={`/_next/image?url=https://cms.ariscorp.de/assets/62eb0e48-6a0e-432f-b90d-fbd6aca6eaac&w=16&q=1`}
              priority
            />
          </div>
        </div>
      </div>
        <Trailer />
    </div>
  );
};

export default HeroSection;
