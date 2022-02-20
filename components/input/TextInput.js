const TextInput = ({ label, type, id, required }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input className="form-control" type={type} id={id} required={required} />
    </>
  )
}

export default TextInput
