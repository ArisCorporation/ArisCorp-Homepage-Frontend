import Footer from 'components/Footer'
import Sidebar from 'components/VerseExkursSidebar'
import client from 'apollo/clients'
import { LocalApiClient } from 'apollo/clients'
import { ApolloProvider } from '@apollo/client'

export default function Layout({ children }) {
  return (
    <ApolloProvider client={LocalApiClient}>
      <div className="flex">
        <Sidebar />
        <div
          className="flex flex-col justify-between flex-1 h-full max-w-full pt-[env(safe-area-inset-top)] pr-[env(safe-area-inset-right)] pl-[env(safe-area-inset-left)] lg:pt-0 lg:pr-0 lg:pl-0"
          style={{ transition: 'left .5s ease,right .5s ease' }}
        >
          <main
            className="block w-full min-h-screen px-[15px] mx-auto 2xl:container relative"
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
