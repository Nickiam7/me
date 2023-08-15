import Head from 'next/head'

import Card from '../components/card/Card'
import Section from '../components/section/Section'
import Container from '../components/grid/Container'
import Row from '../components/grid/Row'
import Col from '../components/grid/Col'

import ContactForm from '../components/contact-form/ContactForm'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Nick McNeany - Contact me</title>
        <meta name="description" content="Feel free to reach out to me!" />
      </Head>
      <Section>
        <Container>
          <h1 className="pb-sm">Contact</h1>
          <Row>
            <Col>
              <p>I&apos;m always excited to hear from people. Please feel free to reach out to talk about new opportunities, cool projects, questions, to chat or just to say hi!</p>
            </Col>
            <Col>
              <Card>
                <ContactForm />
              </Card>
            </Col>
          </Row>

        </Container>
      </Section>
    </>
  )
}

export default Contact
