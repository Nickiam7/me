import Image from 'next/image'
import Section from '../section/Section'

const Hero = () => {
  return (
    <>
      <Section
        styles={"section--extra-padding section--gradient"}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="lead">Hello! I&apos;m,</p>
              <p className="h1">Nick McNeany</p>
              <p className="lead">A Full-Stack Web and Software Developer <br />specializing in Front-End development</p>
            </div>
            <div className="col">
              <Image
                src="/images/site/me.png"
                alt="Nick McNeany"
                width={450}
                height={450}
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Hero
