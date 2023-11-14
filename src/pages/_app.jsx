import 'styles/global.css'
import dynamic from 'next/dynamic'
import { SessionProvider } from "next-auth/react"
import client from 'apollo/clients'
import { ApolloProvider } from '@apollo/client'
import { useRouter } from 'next/router'

const NextNProgress = dynamic(() => import('nextjs-progressbar'))

function MyApp ({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page)
  const router = useRouter()

  return getLayout(
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        {!router.pathname.startsWith("/registration") && (<NextNProgress color="#00ffe8" height={2} />)}
        <Component {...pageProps} />
      </SessionProvider>
    </ApolloProvider>
  )
}

export default MyApp
