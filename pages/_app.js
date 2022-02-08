import '../styles/app.css'

import Layout from '../components/layout/Layout'
import MainNavigation from '../components/layout/MainNavigation'
import Footer from '../components/layout/Footer'

function Me({ Component, pageProps }) {
  return (
    <Layout>
      <MainNavigation />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  )
}

export default Me
