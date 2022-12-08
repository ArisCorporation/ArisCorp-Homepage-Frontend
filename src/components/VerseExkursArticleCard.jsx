import Link from 'next/link'
import Image from 'next/legacy/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const ArticleCard = ({ link, title, desc, image, seperator, alt }) => {
  return (
    <div className="w-full h-24 transition-all duration-300 ease-in-out sm:h-32 lg:h-40 xl:h-48 my-14 hover:shadow-2xl hover:shadow-secondary">
      <Link legacyBehavior href={'/VerseExkurs/' + link}>
        <a className="pr-0 text-white decoration-transparent">
          <div className="flex items-center w-full h-full px-8">
            <div className={'relative h-3/4 w-1/3'}>
              <Image
                src={'https://cms.ariscorp.de/assets/' + image}
                layout="fill"
                alt={'Banner von ' + alt}
                placeholder="blur"
                blurDataURL={
                  'https://cms.ariscorp.de/assets/' +
                  image +
                  '?width=16&quality=1'
                }
                objectFit="cover"
              />
            </div>
            <div className="w-2/3 px-10 text-[0.6rem] md:text-xs xl:text-base">
              <h1 className="text-base text-primary sm:text-2xl md:text-3xl">
                {title}
              </h1>
              {desc !== null ? (
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  className="pt-3 desc-truncate"
                >
                  {desc}
                </ReactMarkdown>
              ) : null}
            </div>
          </div>
        </a>
      </Link>
      {seperator == true ? <hr /> : null}
    </div>
  )
}

export default ArticleCard
