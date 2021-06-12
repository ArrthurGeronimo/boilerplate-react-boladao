import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate Boladão</title>
        <link rel="shortcut icon" href="/favicon.icon" />
        <link rel="apple-touch-icon" href="/favicon.icon" />
        <meta name="description" content="O Boilerplate Boladão" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
