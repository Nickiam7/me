const TextArea = ({ label, type, id, rows, required, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea {...props} className="form-control" rows={rows} type={type} id={id} required={required} ></textarea>
    </>
  )
}

export default TextArea
