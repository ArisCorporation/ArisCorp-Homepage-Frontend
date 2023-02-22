import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="de" className="scroll-smooth">
        <Head>
          <link rel="manifest" href="/manifest.json" />

          <meta name="theme-color" content="#121212" />

          <link
            rel="icon"
            type="image/png"
            sizes="196x196"
            href="/icons/favicon-196.png"
          />

          <meta
            name="msapplication-square70x70logo"
            content="/icons/mstile-icon-128.png"
          />
          <meta
            name="msapplication-square150x150logo"
            content="/icons/mstile-icon-270.png"
          />
          <meta
            name="msapplication-square310x310logo"
            content="/icons/mstile-icon-558.png"
          />
          <meta
            name="msapplication-wide310x150logo"
            content="/icons/mstile-icon-558-270.png"
          />

          <link rel="apple-touch-icon" href="/icons/apple-icon-180.png" />

          <meta name="apple-mobile-web-app-capable" content="yes" />

          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-dark-2048-2732.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-dark-2732-2048.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-dark-1668-2388.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-dark-2388-1668.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-dark-1536-2048.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-dark-2048-1536.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-dark-1668-2224.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-dark-2224-1668.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-dark-1620-2160.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-dark-2160-1620.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-dark-1284-2778.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-dark-2778-1284.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-dark-1170-2532.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-dark-2532-1170.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-dark-1125-2436.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-dark-2436-1125.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-dark-1242-2688.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-dark-2688-1242.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-dark-828-1792.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-dark-1792-828.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-dark-1242-2208.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-dark-2208-1242.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-dark-750-1334.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-dark-1334-750.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-dark-640-1136.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-dark-1136-640.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />

          <meta
            name="description"
            content="Die Website der Star Citizen Organisation ArisCorp bietet euch eine Übersicht der Orga und allen Informationen die über das Verse verfügbar sind."
          />

          <meta name="copyright" content="ArisCorp" />

          <meta
            name="keywords"
            content="ariscorp,ariscorporation,astroresearchandindustrialservicecorporation,versexkurs,shipexkurs,starcitizen,sc,rsi"
          />

          <meta property="og:type" content="website" />

          <meta property="og:url" content="https://ariscorp.de" />


          <meta
            property="og:description"
            content="Die Website der Star Citizen Organisation ArisCorp bietet euch eine Übersicht der Orga und allen Informationen die über das Verse verfügbar sind."
          />

          <meta
            property="og:image"
            content="https://cms.ariscorp.de/assets/61f8ed26-978a-4d66-a59d-92e8db4fdcb5"
          />

          <meta property="twitter:card" content="summary_large_image" />

          <meta property="twitter:url" content="https://ariscorp.de" />

          <meta
            property="twitter:description"
            content="Die Website der Star Citizen Organisation ArisCorp bietet euch eine Übersicht der Orga und allen Informationen die über das Verse verfügbar sind."
          />

          <meta
            property="twitter:image"
            content="https://cms.ariscorp.de/assets/61f8ed26-978a-4d66-a59d-92e8db4fdcb5"
          />

          {/* <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/nasalization-2" /> */}
        </Head>
        <body className="font-nasa bg-[#111] min-h-screen selection:bg-primary selection:text-bg-secondary">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
