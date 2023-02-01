import Footer from 'components/Footer'
import Sidebar from 'components/VerseExkursSidebar'
import client from 'apollo/clients'
import { ApolloProvider } from '@apollo/client'
import { ShipTechnologieModalProvider } from 'context/ShipTechnologieModalContext'
import { useRouter } from 'next/router'

export default function Layout ({ children }) {
  const router = useRouter()

  if (router.pathname == '/VerseExkurs/technologie') {
    return (
      <ApolloProvider client={client}>
        <ShipTechnologieModalProvider>
          <div className="flex">
            <Sidebar />
            <div
              className="flex flex-col justify-between flex-1 h-full max-w-full pt-[env(safe-area-inset-top)] pr-[env(safe-area-inset-right)] pl-[env(safe-area-inset-left)] lg:pt-0 lg:pr-0 lg:pl-0"
              style={{ transition: 'left .5s ease,right .5s ease' }}
            >
              <main
                className="block w-full min-h-screen px-[15px] mx-auto 2xl:max-w-6xl relative"
                style={{ transition: 'left .5s ease,right .5s ease' }}
              >

                {children}
              </main>
              <Footer />
            </div>
          </div>
        </ShipTechnologieModalProvider>
      </ApolloProvider>
    )
  }

  if (router.pathname.startsWith('/VerseExkurs/waffen') || router.pathname.startsWith('/VerseExkurs/attachments')) {
    return (
      <ApolloProvider client={client}>
        <div className="flex">
          <Sidebar />
          <div
            className="flex flex-col justify-between flex-1 h-full max-w-full pt-[env(safe-area-inset-top)] pr-[env(safe-area-inset-right)] pl-[env(safe-area-inset-left)] lg:pt-0 lg:pr-0 lg:pl-0"
            style={{ transition: 'left .5s ease,right .5s ease' }}
          >
            <main
              className="block w-full min-h-screen px-[15px] mx-auto relative"
              style={{ transition: 'left .5s ease,right .5s ease' }}
            >
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </ApolloProvider>
    )
  }

  return (
    <ApolloProvider client={client}>
      <div className="flex">
        <Sidebar />
        <div
          className="flex flex-col justify-between flex-1 h-full max-w-full pt-[env(safe-area-inset-top)] pr-[env(safe-area-inset-right)] pl-[env(safe-area-inset-left)] lg:pt-0 lg:pr-0 lg:pl-0"
          style={{ transition: 'left .5s ease,right .5s ease' }}
        >
          <main
            className="block w-full min-h-screen px-[15px] mx-auto container 2xl:max-w-6xl relative"
            style={{ transition: 'left .5s ease,right .5s ease' }}
          >
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </ApolloProvider>
  )
}
