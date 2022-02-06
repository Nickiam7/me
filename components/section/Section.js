const Section = ({ children, classes }) => {
  return (
    <section className={`section ${classes ? classes : ''}`.trim()}>
      {children}
    </section>
  )
}

export default Section
