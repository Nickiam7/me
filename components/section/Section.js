import React from 'react'

const Section = ({ children, styles }) => {
  return (
    <section className={`section ${styles}`}>
      {children}
    </section>
  )
}

export default Section
