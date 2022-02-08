const Row = ({ children, classes }) => {
  return (
    <div className={`row ${classes ? classes : ''}`.trim()}>
      {children}
    </div>
  )
}

export default Row
