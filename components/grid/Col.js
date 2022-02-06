const Col = ({ children, classes }) => {
  return (
    <div className={`col ${classes ? classes : ''}`.trim()}>
      {children}
    </div>
  )
}

export default Col
