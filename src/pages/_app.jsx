import 'styles/global.css'
import dynamic from 'next/dynamic'

const NextNProgress = dynamic(() => import('nextjs-progressbar'))

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <>
      <NextNProgress color="#00ffe8" height={2} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
