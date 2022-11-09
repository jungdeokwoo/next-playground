import Footer from '../components/Footer'
import Header from '../components/Header'
import GlobalStyles from '../styles/_GlobalStyles'

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  // const getLayout = Component.getLayout ?? (page => page)

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
