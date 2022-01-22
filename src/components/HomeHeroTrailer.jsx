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
        controlslist="nofullscreen nodownload"
        className="w-full h-full"
        src="https://cms.ariscorp.de/assets/2fe8455b-d879-4703-b81f-2c9485794d93"
      />
    </>
  )
}

export default HeroTrailer;