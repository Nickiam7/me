const Section = ({ children, styles }) => {
  return (
    <section className={`section ${styles ? styles : ''}`.trim()}>
      {children}
    </section>
  )
}

export default Section
