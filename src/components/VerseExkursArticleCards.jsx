import Link from 'next/link'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const ArticleCards = (link, title, desc, image, seperator) => {
  return (
    <div
      className="w-full h-24 transition-all duration-300 ease-in-out sm:h-32 lg:h-40 xl:h-48 my-14 hover:shadow-2xl hover:shadow-secondary"
    >
      <Link href={'/VerseExkurs/' + link}>
        <a className="pr-0 text-white decoration-transparent">
          <div className="flex items-center w-full h-full px-8">
            <div className={'relative h-3/4 w-1/3'}>
              <Image
                src={'https://cms.ariscorp.de/assets/' + image}
                layout="fill"
                alt={'Banner von ' + title}
                placeholder="blur"
                blurDataURL={
                  'https://cms.ariscorp.de/assets/' +
                  image +
                  '?width=16&quality=1'
                }
                objectFit="cover"
              />
            </div>
            <div className="w-2/3 px-10 text-xs sm:text-base">
              <h1 className="text-base text-primary sm:text-2xl md:text-3xl">
                {title}
              </h1>
            </div>
          </div>
        </a>
      </Link>
      <hr />
    </div>
  )
}

export default ArticleCards;