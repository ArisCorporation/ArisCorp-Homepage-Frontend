import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function ArisCorpCharta({data}) {
  return (
      <ReactMarkdown rehypePlugins={[rehypeRaw]} className="flex flex-wrap justify-center text-sm text-center xs:text-base">
        {data}
      </ReactMarkdown>
  );
}
