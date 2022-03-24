import Image from 'next/image'
import Layout from './layout'
import TechCarrack from 'components/VerseExkursTechCarrack'
import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import client from 'apollo/clients'
import { GET_VERSEEXKURS_TECHNOLOGYS } from 'graphql/queries'
import { ShipTechnologieModalContext } from 'context/ShipTechnologieModalContext'

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_VERSEEXKURS_TECHNOLOGYS,
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: await data.technologien,
    },
  }
}

export default function Technologie({ data }) {
  const [selectedTech, setSelectedTech] = useContext(
    ShipTechnologieModalContext
  )
  console.log((data.filter((data) => data.id == selectedTech)))
  return (
    <>
      <div className="pt-10 mx-auto print:pt-5 prose prose-td:align-middle prose-invert xl:max-w-[90%]">
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

          {selectedTech
            ? selectedTech != 'grav' && selectedTech != 'powerplant'
              ? data
                  .filter((data) => data.id == selectedTech)
                  .map((data) => (
                    <div
                      key={data.id}
                      className="absolute w-full h-28 lg:right-0 top-40 sm:top-48 md:top-56 lg:top-52 xl:top-0 2xl:h-32 lg:w-60 xl:w-60 2xl:w-64 md:bg-gray-800/50 propulsion-popup"
                    >
                      <div className="md:w-full mx-auto h-full w-[80%] md:bg-transparent bg-gray-800/50">
                        <div className="flex flex-wrap justify-center text-center">
                          <h5>{data.technologie_name}</h5>
                          <div className="relative sm:w-64 md:w-72 lg:w-52 2xl:w-56 sm:h-[4.6rem] 2xl:h-[5.5rem] mx-auto">
                            <Image
                              src={"https://cms.ariscorp.de/assets/" + data.technologie_banner?.id}
                              layout="fill"
                              objectFit="cover"
                              placeholder="blur"
                              blurDataURL={"https://cms.ariscorp.de/assets/" + data.technologie_banner?.id + "?width=16&quality=1"}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
              : null
            : null}
        </div>
      </div>
    </>
  )
}

Technologie.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
