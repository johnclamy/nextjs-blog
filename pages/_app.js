import Router from 'next/router'
import NProgress from 'nprogress'

import '../styles/globals.css'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
  Router.events.on('routeChangeStart', (url) => NProgress.start())
  Router.events.on('routeChangeComplete', (url) => NProgress.done())

  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
