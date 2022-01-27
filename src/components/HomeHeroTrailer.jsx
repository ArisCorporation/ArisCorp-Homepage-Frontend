import { useState } from 'react';
import Image from 'next/image';

const HeroTrailer = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  
  return (
    <>
      <video
        autoPlay
        loop
        muted
        controlsList="nofullscreen nodownload"
        className="w-full h-full"
        src="https://cms.ariscorp.de/assets/893966c7-3541-4605-a00f-633f5234ddd4"
      />
    </>
  )
}

export default HeroTrailer;