const TextArea = ({ label, type, id, rows, required }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea className="form-control" rows={rows} type={type} id={id} required={required} ></textarea>
    </>
  )
}

export default TextArea
