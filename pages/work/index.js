import Head from 'next/head'

import Section from '../../components/section/Section'

const Work = () => {
  return (
    <>
      <Head>
        <title>Nick McNeany - My work</title>
        <meta name="description" content="Checkout some of my recent work samples" />
      </Head>
      <Section>
        <div className="container">
          <h1 className="pb-sm">Work</h1>
          <p>I&apos;ll have a better organized page to show case recent work samples soon, but for now you can check out my <a href="https://github.com/Nickiam7" target="_blank" rel="noreferrer">GitHub page</a>.</p>
        </div>
      </Section>
    </>
  )
}

export default Work
