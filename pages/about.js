import Head from 'next/head'

import Section from '../components/section/Section'

const About = () => {
  return (
    <>
      <Head>
        <title>Nick McNeany - About me</title>
        <meta name="description" content="All about me Nick McNeany" />
      </Head>
      <Section>
        <div className="container">
          <h1 className="pb-sm">Welcome!</h1>
          <p className="h1">Allow myself to introduce... myself.</p>
          <p>My name is Nick McNeany and I&apos;m a Full-Stack Web and Software Developer.</p>
          <p>I&apos;ll be updating this page soon, but for now here&apos;s a quick run-down about me.</p>
          <ul>
            <li>I love my family more than anything</li>
            <li>I have a strong passion for web and software development</li>
            <li>I love cooking with my wife</li>
            <li>I love chasing and jumping of the couch with my daughter (no serious injuries... yet)</li>
            <li>My son and I love watching Monster Jam together</li>
            <li>I like to draw</li>
            <li>I really enjoy mowing my lawn</li>
          </ul>
        </div>
      </Section>
    </>
  )
}

export default About
