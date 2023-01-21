import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Error404 () {
  const router = useRouter()

  return (
    <div className="flex flex-wrap items-center justify-center">
      <Head>
        <title>
          Astro Research and Industrial Service Corporation - 404
        </title>
      </Head>
      <div className="mx-auto">
        <div className="pt-16 mx-auto">
          <h1 className="uppercase text-primary">Status Code: 404</h1>
          <h2 className="uppercase text-secondary">Lost in Verse</h2>
        </div>
        <div className="pt-12 mx-auto text-center">
          <div
            onClick={() => router.back()}
            className="p-2 text-gray-300 transition-all duration-150 rounded-full hover:cursor-pointer hover:bg-white hover:text-gray-800 hover:duration-300 hover:no-underline bg-secondary"
          >
            Take me Back on Course!
          </div>
        </div>
      </div>
    </div>
  )
}
