import '../styles/app.css'

import Layout from '../components/layout/Layout'
import MainNavigation from '../components/layout/MainNavigation'

function Me({ Component, pageProps }) {
  return (
    <Layout>
      <MainNavigation />
      <Component {...pageProps} />
    </Layout>
  )
}

export default Me
