const Button = ({ title, ...props }) => {
  return (
    <button
      {...props}
      className="btn btn--primary"
    >
      {title}
    </button>
  )
}

export default Button
