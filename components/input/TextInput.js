const TextInput = ({ label, type, id, required, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input {...props} className="form-control" type={type} id={id} required={required} />
    </>
  )
}

export default TextInput
