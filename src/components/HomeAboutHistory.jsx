import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export default function ArisCorpHistory({ data }) {
  return (
    <div className="flex items-center justify-center justify-items-center">
      <ReactMarkdown rehypePlugins={[rehypeRaw]} className="text-center">
        {data}
      </ReactMarkdown>
    </div>
  )
}
