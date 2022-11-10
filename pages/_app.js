import GlobalStyles from '../styles/_GlobalStyles'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  // const getLayout = Component.getLayout ?? (page => page)

  return (
    <>
      <Head>
        <title>넥스트 연습</title>
        <meta name="description" content="넥스트 연습해보기" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
