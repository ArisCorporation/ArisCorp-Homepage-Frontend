import Head from 'next/head'
import Image from 'next/image'

export default function Alienrassen ({ data }) {
  const siteTitle = "Aliens - Astro Research and Industrial Service Corporation"
  return (
    <div className="flex items-center justify-center w-full h-full pt-5">
      <Head>
        <title>
          {siteTitle}
        </title>

        <meta
          property="twitter:title"
          content={siteTitle}
        />
        <meta
          property="og:title"
          content={siteTitle}
        />
        <meta
          name="title"
          content={siteTitle}
        />
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
