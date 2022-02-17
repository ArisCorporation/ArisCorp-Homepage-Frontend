import Layout from './layout'

export default function test2() {
  return <div className="bg-green-600">test</div>
}

test2.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
