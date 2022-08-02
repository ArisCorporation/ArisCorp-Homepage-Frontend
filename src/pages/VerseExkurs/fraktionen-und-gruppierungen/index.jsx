import Layout from 'pages/VerseExkurs/layout'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import client from 'apollo/clients'
import { GET_VERSEEXKURS_FRAKTIONEN_UND_GRUPPIERUNGEN } from 'graphql/queries'
import { Tab } from '@headlessui/react'
import FirmenCard from 'components/VerseExkursFirmenGrid'

export async function getServerSideProps() {
  const { data } = await client.query({ query: GET_VERSEEXKURS_FRAKTIONEN_UND_GRUPPIERUNGEN })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: await data,
    },
  }
}

export default function FraktionenUndGruppierungen({ data }) {
  const [activeTab, setActiveTab] = useState(0)
  const [activeSecondaryTab, setActiveSecondaryTab] = useState(0)
  console.log(data)
  const imglink = 'https://cms.ariscorp.de/assets/'

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto">
      {/* <h1>FRAKTIONEN UND GRUPPIERUNGEN</h1>
      <hr />
        {data.map((data) => (
            <>
              <div>{data.name}</div>
            </>
        ))} */}
    </div>
  )
}

FraktionenUndGruppierungen.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
