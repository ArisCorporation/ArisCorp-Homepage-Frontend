import Layout from './layout'
import Link from 'next/link'

export default function ShipExkursIndex({ ships }) {
  return (
    <div className="max-w-6xl mx-auto text-center print:pt-5">
      <h2 className='text-primary'>Link to Carrack:</h2>
      <Link legacyBehavior href={"/ShipExkurs/ships/carrack"}><a>Hier</a></Link>
    </div>
  )
}

ShipExkursIndex.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
