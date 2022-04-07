import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es-ES">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;500;700&family=Open+Sans:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#6366F1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
