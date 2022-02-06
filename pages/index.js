import Head from 'next/head'

import Hero from '../components/hero/Hero'
import Section from '../components/section/Section'
import Container from '../components/grid/Container'
import Row from '../components/grid/Row'

const Home = () => {
  return (
    <>
      <Hero />
      <Section
        classes="section--dark pt-0"
      >
        <Container>
          <Row>
            <h2>PRINCIPLES</h2>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default Home

