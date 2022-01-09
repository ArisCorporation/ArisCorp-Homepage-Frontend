import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head>
          <link rel="manifest" href="/manifest.json" />

          <meta name="msapplication-TileColor" content="#00ffe8" />
          <meta name="theme-color" content="#000000" />

          <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;