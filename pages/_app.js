import GlobalStyles from 'styles/_GlobalStyles'
import Head from 'next/head'
import Header from 'components/Header'
import { SessionProvider } from 'next-auth/react'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider } from 'react-redux'
import { store } from 'redux/store'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const queryClient = new QueryClient()

  if (Component.getLayout) {
    return Component.getLayout(
      <Provider store={store}>
        <SessionProvider session={session}>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <Header />
              <Component {...pageProps} />
              <ReactQueryDevtools initialIsOpen />
            </Hydrate>
          </QueryClientProvider>
        </SessionProvider>
      </Provider>,
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
      <Provider store={store}>
        <SessionProvider session={session}>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <Header />
              <Component {...pageProps} />
              <ReactQueryDevtools initialIsOpen />
            </Hydrate>
          </QueryClientProvider>
        </SessionProvider>
      </Provider>
    </>
  )
}

export default MyApp
