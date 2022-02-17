import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export default function ArisCorpCharta({ data }) {
  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]} className="">
      {data}
    </ReactMarkdown>
  )
}
