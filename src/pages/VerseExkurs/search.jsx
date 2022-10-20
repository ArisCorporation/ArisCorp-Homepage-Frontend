import Layout from './layout'

export default function VerseExkursSearch() {
  return (
    <div>
      <h1 className='mt-4 text-center text-primary'>Comming Soon</h1>
    </div>
  )
}

VerseExkursSearch.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
