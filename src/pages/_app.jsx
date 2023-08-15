import 'styles/global.css'
import dynamic from 'next/dynamic'
import { SessionProvider } from "next-auth/react"

const NextNProgress = dynamic(() => import('nextjs-progressbar'))

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <SessionProvider session={session}>
      <NextNProgress color="#00ffe8" height={2} />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
