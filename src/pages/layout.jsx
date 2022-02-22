import Footer from 'components/Footer'
import HeroSection from 'components/HomeHero'
import Navbar from 'components/HomeNavbar'
import client from 'apollo/clients'
import { useRouter } from 'next/router'
import { ApolloProvider } from '@apollo/client'

export default function Layout({ children }) {
  const router = useRouter()

  return (
    <ApolloProvider client={client}>
      <Navbar />

      {router.pathname == '/' ? <HeroSection /> : ''}

      <div className="min-h-screen px-4 md:container md:mx-auto">
        {children}
      </div>

      <Footer />
    </ApolloProvider>
  )
}
