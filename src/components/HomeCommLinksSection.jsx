import Link from 'next/link'
import { useEffect, useState } from 'react'
import { OneThird, ThreeThirds } from './CommLinkCards'

const CommLinksSection = ({ data }) => {
  const [children, setChildren] = useState([])

  useEffect(() => {
    const layout = []

    for (let i = 0; i < data.length; i += 10) {
      layout.push(
        <div key={i} className="flex justify-center">
          <ThreeThirds
            typeicon="type-post"
            typename="post"
            title={data[i].comm_link_titel}
            channel={data[i].comm_link_channel?.channel}
            posted="1 day ago"
            description={data[i].comm_link_channel?.beschreibung}
            image={data[i].comm_link_banner.id}
            id={data[i].id}
          />
        </div>
      )

      // Break out of the loop if we've
      // already reached the end of data
      if (i + 1 >= data.length) {
        break
      }

      layout.push(
        <div key={i + 1} className="flex flex-wrap justify-center">
          <OneThird
            typeicon="type-post"
            typename="post"
            image={data[i + 1].comm_link_banner.id}
            title={data[i + 1].comm_link_titel}
            channel={data[i + 1].comm_link_channel.channel}
            posted="1 day ago"
            description={data[i + 1].comm_link_channel?.beschreibung}
            id={data[i + 1].id}
          />
          {/* The boolean expression helps to avoid creating empty cells if the end of data is reached mid-row */}
          {data[i + 2] && (
            <OneThird
              typeicon="type-post"
              typename="post"
              image={data[i + 2].comm_link_banner.id}
              title={data[i + 2].comm_link_titel}
              channel={data[i + 2].comm_link_channel.channel}
              posted="1 day ago"
              description={data[i + 2].comm_link_channel?.beschreibung}
              id={data[i + 2].id}
            />
          )}
          {data[i + 3] && (
            <OneThird
              typeicon="type-post"
              typename="post"
              image={data[i + 3].comm_link_banner.id}
              title={data[i + 3].comm_link_titel}
              channel={data[i + 3].comm_link_channel.channel}
              posted="1 day ago"
              description={data[i + 3].comm_link_channel?.beschreibung}
              id={data[i + 3].id}
            />
          )}
        </div>
      )
    }

    setChildren(layout)
  }, [data])

  return (
    <div id="comm-links" className="px-4 mb-24">
      <h1 className="inline-block w-full text-lg sm:text-3xl md:text-4xl">
        ARISCORP <span className="text-primary">COMM-LINKS</span>
        <span>
          <Link href="/comm-link">
            <a
              className="inline-block float-right text-base text-right text-white transition-colors duration-300 decoration-transparent hover:decoration-transparent hover:cursor-pointer font-nasa hover:text-secondary"
              aria-label="Alle Comm-Links"
            >
              Hier findest du alle Comm-Links!
            </a>
          </Link>
        </span>
      </h1>
      <hr />
      <div className="flex flex-wrap justify-center px-4 mx-auto">
        <div className="mx-auto scale-[.77] xs:scale-100">{children}</div>
      </div>
    </div>
  )
}

export default CommLinksSection
