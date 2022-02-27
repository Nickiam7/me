import Head from 'next/head'

import Layout from '../components/layout/Layout'
import MainNavigation from '../components/layout/MainNavigation'
import Footer from '../components/layout/Footer'

import '../styles/app.css'

const Me = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainNavigation />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  )
}

export default Me
