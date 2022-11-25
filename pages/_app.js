import GlobalStyles from 'styles/_GlobalStyles'
import Head from 'next/head'
import Header from 'components/Header'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>,
    )
  }

  // const getLayout = Component.getLayout ?? (page => page)

  return (
    <>
      <Head>
        <title>넥스트 연습</title>
        <meta name="description" content="넥스트 연습해보기" />
      </Head>
      <GlobalStyles />
      <Header />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}

export default MyApp
