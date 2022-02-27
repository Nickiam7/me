import { useState } from 'react'

import Row from '../../components/grid/Row'
import Col from '../../components/grid/Col'
import TextInput from '../../components/input/TextInput'
import TextArea from '../../components/input/TextArea'
import Button from '../../components/button/Button'


const ContactForm = () => {
  const [form, setForm] = useState({
    email: '',
    fullname: '',
    message: '',
  })

  const setFormInput = (key, value) => {
    setForm({ ...form, [key]: value })
  }

  const sendMessageHandler = async (e) => {
    e.preventDefault()
    const { email, fullname, message } = form

    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        email,
        fullname,
        message,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
    console.log(response)
  }
  return (
    <form onSubmit={sendMessageHandler}>
      <Row>
        <Col>
          <TextInput
            id="email"
            name="email"
            label="Email"
            type="email"
            required={true}
            value={form.email}
            onChange={(e) => setFormInput('email', e.target.value)}
          />
        </Col>
        <Col>
          <TextInput
            id="fullname"
            name="fullname"
            label="Full Name"
            type="text"
            required={true}
            value={form.fullname}
            onChange={(e) => setFormInput('fullname', e.target.value)}
          />
        </Col>
      </Row>
      <Row
        classes="py-sm"
      >
        <Col>
          <TextArea
            id="message"
            name="message"
            label="Message"
            type="text"
            rows={5}
            required={true}
            value={form.message}
            onChange={(e) => setFormInput('message', e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            title="Submit"
          />
        </Col>
      </Row>
    </form>
  )
}

export default ContactForm
