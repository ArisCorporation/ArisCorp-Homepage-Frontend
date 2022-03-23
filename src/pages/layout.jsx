import Footer from 'components/Footer'
import HeroSection from 'components/HomeHero'
import Navbar from 'components/HomeNavbar'
import client from 'apollo/clients'
import { useRouter } from 'next/router'
import { ApolloProvider } from '@apollo/client'
import {useState} from 'react'

export default function Layout({ children, ourIndex, onOurIndexChange }) {
  const router = useRouter()
  return (
    <ApolloProvider client={client}>
      <Navbar ourIndexChange={onOurIndexChange} />

      {router.pathname == '/' ? <HeroSection /> : ''}

      <div className="min-h-screen px-4 md:container md:mx-auto">
        {children}
      </div>

      <Footer />
    </ApolloProvider>
  )
}
