import Head from 'next/head'

import Layout from '../components/layout/Layout'
import MainNavigation from '../components/layout/MainNavigation'
import Footer from '../components/layout/Footer'

import '../styles/app.css'

function Me({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
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
