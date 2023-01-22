import Head from 'next/head'
import Image from 'next/image'

export default function Alienrassen ({ data }) {
  return (
    <div className="flex items-center justify-center w-full h-full pt-5">
      <Head>
        <title>
          Aliens - Astro Research and Industrial Service Corporation
        </title>
      </Head>
      <div className="my-auto">
        <Image
          src={
            'https://i.pinimg.com/originals/ad/eb/0c/adeb0c4689f6cdfb1ba811422efc3bf2.jpg'
          }
          alt="aliens"
          width="384"
          height="360"
        />
      </div>
    </div>
  )
}
