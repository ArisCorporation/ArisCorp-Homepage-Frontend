import Layout from 'pages/VerseExkurs/layout'
import { SquareLoader } from 'react-spinners'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_VERSEEXKURS_LITERATUR_REIHE } from 'graphql/queries'

export default function LiteraturReihenPage() {
  const router = useRouter()
  const { rid } = router.query
  const rId = parseFloat(rid)
  const { loading, error, data } = useQuery(GET_VERSEEXKURS_LITERATUR_REIHE, {
    variables: { rId },
  })

  if (loading)
    return (
      <div className="flex justify-center pt-32">
        <SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} />
      </div>
    )

  if (error) return <p>Error :(</p>

  const Data = data.literatur

  const reihe = Data[0].literatur_reihe

  return (
    <div className="pt-3 print:pt-0">
      <div className="flex flex-wrap w-full aspect-[40/21] scale-90">
        <div className="relative w-full">
          <Image
            src={'https://cms.ariscorp.de/assets/' + reihe.reihen_cover?.id}
            layout="fill"
            alt={'Banner von der Kategorie: ' + reihe.reihen_titel}
            placeholder="blur"
            blurDataURL={
              'https://cms.ariscorp.de/assets/' +
              reihe.reihen_cover?.id +
              '?width=16&quality=1'
            }
            objectFit="cover"
          />
        </div>
      </div>
      <div className="-mt-5 scale-95">
        <hr />
      </div>
      <div>
        {Data.filter((data) => data.literatur_reihe.id == rid).map((data) => (
          <div
            key={data.id}
            className="w-full h-48 transition-all duration-300 ease-in-out my-14 hover:shadow-2xl hover:shadow-secondary"
          >
            <Link
              href={
                '/VerseExkurs/literatur/' +
                reihe.id +
                '/' +
                data.literatur_kapitel
              }
            >
              <a className="pr-0 text-white decoration-transparent">
                <div className="flex items-center w-full h-full px-8">
                  <div className={'relative h-3/4 w-1/3'}>
                    <Image
                      src={
                        'https://cms.ariscorp.de/assets/' +
                        reihe.reihen_cover?.id
                      }
                      layout="fill"
                      alt={
                        'Banner von der Literatur Reihe ' + reihe.reihen_titel
                      }
                      placeholder="blur"
                      blurDataURL={
                        'https://cms.ariscorp.de/assets/' +
                        reihe.reihen_cover?.id +
                        '?width=16&quality=1'
                      }
                      objectFit="cover"
                    />
                  </div>
                  <div className="w-2/3 px-10 text-xs sm:text-base">
                    <h1 className="text-primary">
                      {reihe.reihen_titel} - Kapitel: {data.literatur_kapitel}
                    </h1>
                  </div>
                </div>
              </a>
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}

LiteraturReihenPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
