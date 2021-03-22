import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='pt-br'>

        <Head>
          <meta name="description"content="Kderno" />
          <meta property="og:title" content="Kderno"  />
          <meta property="og:description" content="Teste project" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html >
    )
  }
}

export default MyDocument