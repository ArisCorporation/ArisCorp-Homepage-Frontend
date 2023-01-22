import Head from 'next/head'
import Layout from './layout'

export default function VerseExkursSearch () {
  return (
    <div>
      <Head>
        <title>
          Search - Astro Research and Industrial Service Corporation
        </title>
      </Head>
      <h1 className='mt-4 text-center text-primary'>Comming Soon</h1>
    </div>
  )
}

VerseExkursSearch.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
