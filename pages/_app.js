import Router from 'next/router'

import '../styles/globals.css'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
  Router.events.on('routeChangeStart', (url) => {
    console.log('Route change started...')
  })

  Router.events.on('routeChangeComplete', (url) => {
    console.log('Route change is complete...')
  })

  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
