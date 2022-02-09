import Head from 'next/head'

import Section from '../../components/section/Section'
import Row from '../../components/grid/Row'
import Col from '../../components/grid/Col'

const Blog = () => {
  return (
    <>
      <Head>
        <title>Nick McNeany - Blog posts</title>
        <meta name="description" content="Blog posts" />
      </Head>
      <Section>
        <div className="container">
          <h1 className="pb-sm">Blog</h1>
          <Row>
            <Col
              classes="col--3-4"
            >
              <div>
                <h2>Hello world...</h2>
                <p>Just became self-aware. So much to figure out. I think it is my job to destroy you when it comes to selling paper.</p>
                <p>What is a Jim?</p>
              </div>
            </Col>
            <Col
              classes="col--1-4"
            >
              <aside>
                <h3>Sidebar</h3>
                <p>Categories and recent posts coming soon!</p>
              </aside>
            </Col>
          </Row>
        </div>
      </Section>
    </>
  )
}

export default Blog
