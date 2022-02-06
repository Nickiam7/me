const Container = ({ children, classes }) => {
  return (
    <div className={`container ${classes ? classes : ''}`.trim()}>
      {children}
    </div >
  )
}

export default Container
