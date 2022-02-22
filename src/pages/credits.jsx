import ReactMarkdown from 'react-markdown'
import { SquareLoader } from 'react-spinners'
import rehypeRaw from 'rehype-raw'
import Layout from './layout'
import { GET_CREDITS } from 'graphql/queries'
import client from 'apollo/clients'

export async function getServerSideProps() {
  const { data } = await client.query({ query: GET_CREDITS })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: await data.credits.credits,
    },
  }
}

export default function CreditsPage(data) {
  return (
    <div className="pt-32">
      <ReactMarkdown rehypePlugins={[rehypeRaw]} className="justify-center">
        {data.data}
      </ReactMarkdown>
    </div>
  )
}

CreditsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
