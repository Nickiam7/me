import Head from 'next/head'
import Section from '../components/section/Section'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Nick McNeany - Contact me</title>
        <meta name="description" content="Feel free to reach out to me!" />
      </Head>
      <Section>
        <div className="container">
          <h1 className="pb-sm">Contact</h1>
          <p>I&apos;m always excited to hear from people. Please feel free to reach out to talk about new opportunities, cool projects, questions, to chat or just to say hi! <a href="mailto:nmcneany@gmail.com">NMcNeany @ gmail.com</a></p>
        </div>
      </Section>
    </>
  )
}

export default Contact
