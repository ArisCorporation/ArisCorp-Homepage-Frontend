import Image from 'next/image'
import Layout from './layout'
import TechCarrack from 'components/VerseExkursTechCarrack'
// import TechHuman from 'components/VerseExkursTechHuman'

export default function VerseExkursIndex(data) {
  return (
    <>
      <div className="pt-10 mx-auto print:pt-5 prose prose-td:align-middle prose-invert xl:max-w-[90%]">
        <p className="propulsion">test</p>
        <div className="relative w-full aspect-[1825/635] hidden sm:block">
          <Image
            src={
              'https://cms.ariscorp.de/assets/60ca623f-7a9b-4696-9839-97f9cde6e11d'
            }
            alt="test"
            layout="fill"
            objectFit="cover"
          />
          <div className="relative">
            <TechCarrack />
          </div>
          <div className="absolute w-full h-28 lg:right-0 top-40 sm:top-48 md:top-56 lg:top-52 xl:top-0 2xl:h-32 lg:w-60 xl:w-60 2xl:w-64 md:bg-gray-800/50 propulsion-popup">
            <div className="md:w-full mx-auto h-full w-[80%] md:bg-transparent bg-gray-800/50">
              <div className="flex flex-wrap justify-center text-center">
                <h5>Triebwerke</h5>
                <div className="bg-red-500 relative sm:w-64 md:w-72 lg:w-52 2xl:w-56 sm:h-[4.6rem] 2xl:h-[5.5rem] mx-auto">
                  <Image
                    src="https://cms.ariscorp.de/assets/7adcb514-3e52-4c06-a912-866be5ae0fb2"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

VerseExkursIndex.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
