import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html prefix="og: https://ogp.me/ns#">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
          <meta
            name="keywords"
            content="learning, code posts, notes, tutorials, web development, mobile development"
          />
          <meta name="theme-color" content="#6366F1" />
          <meta name="google" content="notranslate" />
          <meta name="robots" content="all" />
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;500;700&family=Open+Sans:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="manifest" href="/manifest.json" />
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
