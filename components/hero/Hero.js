import Image from 'next/image'
import Section from '../section/Section'
import Container from '../grid/Container'
import Row from '../grid/Row'
import Col from '../grid/Col'

const Hero = () => {
  return (
    <>
      <Section
        classes={"section--extra-padding section--gradient pb-0"}
      >
        <Container
          classes="container--sm"
        >
          <Row>
            <Col>
              <p className="lead">Hello! I&apos;m,</p>
              <p className="h1">Nick McNeany</p>
              <p className="lead">A Full-Stack Web and Software Developer <br className="d-none--mobile" />specializing in Front-End development</p>
            </Col>
            <Col>
              <Image
                src="/images/site/me.png"
                alt="Nick McNeany"
                width={450}
                height={450}
              />
            </Col>
          </Row>
        </Container>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 220"
          style={{ marginBottom: -5 }}
        >
          <path
            fill="#040d21"
            fillOpacity="1"
            d="M0,64L80,58.7C160,53,320,43,480,53.3C640,64,800,96,960,106.7C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
          </path>
        </svg>
      </Section>
    </>
  )
}

export default Hero
