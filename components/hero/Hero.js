import Image from 'next/image'
import Section from '../section/Section'

const Hero = () => {
  return (
    <>
      <Section
        styles={"section--extra-padding"}
      >
        <div className="row">
          <div className="col">
            <p className="lead">Hi, I&apos;m</p>
            <p className="h1">Nick Mcneany</p>
            <p className="lead">A FullStack Web and Software Developer</p>
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
      </Section>
    </>
  )
}

export default Hero
