import Head from 'next/head'
import Layout from './layout'

export default function VerseExkursSearch () {

  const siteTitle = "Search - Astro Research and Industrial Service Corporation"
  return (
    <div>
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
      <h1 className='mt-4 text-center text-primary'>Comming Soon</h1>
    </div>
  )
}

VerseExkursSearch.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
