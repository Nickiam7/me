import Image from 'next/image'

import Section from '../section/Section'
import Container from '../grid/Container'
import Row from '../grid/Row'
import Col from '../grid/Col'
import CardGrid from '../card-grid/CardGrid'
import Card from '../card/Card'

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
        <Container>
          <Row
            classes={"py-lg"}
          >
            <h2 className="text-center">My Stack</h2>
          </Row>
          <Row>
            <CardGrid
              gridCount={"auto-fit"}
              minMax={"210px"}
              classes={"pb-lg"}
            >
              <Card
                header={"Front-End"}
              >
                <p>Expertise in HTML, CSS and Javascript. Years of experience working with popular frameworks like React and Vue along with their ecosystems including Redux, Hooks and Vuex. Jest and Vue Test Utils for testing.</p>
                <p>Additionally, I have extensive knowledge of UI librarys such as Vuetify, Marterial UI, styled components and of course Bootstrap.</p>
                <p>Finally, I have st</p>
              </Card>

              <Card
                header={"Full-Stack"}
              >
                <p>Years of experience working with Ruby and Ruby on Rails, PHP and WordPress. Full-Stack Javascript frameworks I work with are NextJS and NuxtJS.</p>
                <p>I also have experience working with Go, Terraform and cloud platforms such as AWS and Googe Firebase.</p>
                <p>I have experience working with testing suites such as Rspec, Capybara, Jest and Vue Test Utils.</p>
              </Card>

              <Card
                header={"Mobile"}
              >
                <p>Excited about growing my mobile experience with React Native. My background with React makes React Native and an easy choice for mobile developmenet. I am comfortable with related tools/libraries like Expo and React Navigation, XCode, Simulator and Android Stuido.</p>
                <p>I have some working knowledge of iOS development with Swift and Xcode.</p>
              </Card>
            </CardGrid>
          </Row>
        </Container>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 220"
          style={{ marginBottom: -15 }}
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
