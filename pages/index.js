import Head from 'next/head'

import Hero from '../components/hero/Hero'
import Section from '../components/section/Section'
import Container from '../components/grid/Container'
import Row from '../components/grid/Row'
import Col from '../components/grid/Col'
import Card from '../components/card/Card'

import { principles } from '../data/data'

const Home = () => {
  return (
    <>
      <Hero />
      <Section
        classes="section--dark pt-0"
      >
        <Container>
          <Row>
            <Col
              classes="col--1-3 justify-content-start"
            >
              <Row>
                <h2 className="text-xl mb-sm">Principles</h2>
              </Row>
            </Col>
            <Col
              classes="col--2-3"
            >
              {principles.map((p, i) => (
                <Card
                  header={p.header}
                  blue={true}
                  key={i}
                >
                  {p.body}
                </Card>
              ))}
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default Home

