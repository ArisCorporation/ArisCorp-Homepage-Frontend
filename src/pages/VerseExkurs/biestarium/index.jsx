import Layout from 'pages/VerseExkurs/layout'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Link from 'next/link'
import client from 'apollo/clients'
import { GET_VERSEEXKURS_BIESTARIUM } from 'graphql/queries'

export async function getServerSideProps() {
  const { data } = await client.query({ query: GET_VERSEEXKURS_BIESTARIUM })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: await data.alienrassen[0],
    },
  }
}

export default function BiestariumPage(data) {
  const Data = data.data
  // console.log((encodeURIComponent(Data.sections)))

  return (
    <div className="items-center max-w-6xl pt-10 mx-auto">
      <div>
        <div className="items-center text-center">
          <h1 className="uppercase">
            Alienrasse:{' '}
            <span className="text-primary">{Data.alienrassen_name}</span>
          </h1>
          <hr />
          <div className="w-full">
            <Image
              src={
                'https://cms.ariscorp.de/assets/' + Data.alienrassen_banner.id
              }
              alt={'Banner'}
              width={Data.alienrassen_banner.width}
              height={Data.alienrassen_banner.height}
              placeholder="blur"
              blurDataURL={
                'https://cms.ariscorp.de/assets/' +
                Data.alienrassen_banner.id +
                '?width=16&quality=1'
              }
            />
          </div>
        </div>
        <div
          className={'max-w-[' + Data.alienrassen_banner.width + 'px] mx-auto'}
        >
          <h2 className="mt-3">
            VerseExkurs - Alienrassen: {Data.alienrassen_name}
          </h2>
          <hr className="max-w-[80px]" />
        </div>
        <div className="font-nasa article-font">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            className="mx-auto prose prose-td:align-middle prose-invert xl:max-w-full"
          >
            {Data.text}
          </ReactMarkdown>
          <hr />
          <div className="flex flex-wrap items-center justify-between text-center">
            {Data.sections.map((data) => (
              <Link
                href={
                  '/VerseExkurs/biestarium/' + encodeURIComponent(data.title)
                }
                key={data.title}
              >
                <a className="mx-1 mt-10 text-white children-square hover:text-secondary decoration-transparent">
                  <div className="text-center">
                    <div>
                      <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        className="mx-auto prose prose-td:align-middle prose-invert xl:max-w-[90%]"
                      >
                        {data.image}
                      </ReactMarkdown>
                      <div>{data.title}</div>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

BiestariumPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
