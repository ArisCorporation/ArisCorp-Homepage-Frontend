import Image from 'next/image'
import Link from 'next/link'
import ReactTooltip from 'react-tooltip'
import Layout from './layout'
import ReactDOMServer from 'react-dom/server'
import Starmap from 'components/VerseExkursStarmap'

export default function test() {
  return (
    <div className="">
      <Starmap />
    </div>
  )
}

test.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
