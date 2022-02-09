const Section = ({ children, classes, id }) => {
  return (
    <section
      className={`section ${classes ? classes : ''}`.trim()}
      id={id}
    >
      {children}
    </section>
  )
}

export default Section
