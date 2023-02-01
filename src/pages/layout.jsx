import Footer from 'components/Footer'
import HeroSection from 'components/HomeHero'
import Navbar from 'components/HomeNavbar'
import client from 'apollo/clients'
import { useRouter } from 'next/router'
import { ApolloProvider } from '@apollo/client'
import { useState } from 'react'
import Head from 'next/head'

export default function Layout ({ children, ourIndex, onOurIndexChange }) {
  const router = useRouter()
  return (
    <ApolloProvider client={client}>
      <Navbar ourIndexChange={onOurIndexChange} />

      {router.pathname == '/' ? <HeroSection /> : ''}

      <div className="min-h-screen px-4 container mx-auto 2xl:max-w-[1536px]">
        {children}
      </div>

      <Footer />
    </ApolloProvider>
  )
}
