import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function ArisCorpManifest({data}) {
  return (
      <ReactMarkdown rehypePlugins={[rehypeRaw]} className="flex flex-wrap justify-center text-center">
        {data}
      </ReactMarkdown>
  );
}
