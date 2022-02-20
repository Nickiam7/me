import Row from '../../components/grid/Row'
import Col from '../../components/grid/Col'
import TextInput from '../../components/input/TextInput'
import TextArea from '../../components/input/TextArea'
import Button from '../../components/button/Button'


const ContactForm = () => {
  return (
    <form>
      <Row>
        <Col>
          <TextInput
            id="email"
            label="Email"
            type="email"
            required={true}
          />
        </Col>
        <Col>
          <TextInput
            id="name"
            label="Name"
            type="text"
            required={true}
          />
        </Col>
      </Row>
      <Row
        classes="py-sm"
      >
        <Col>
          <TextArea
            id="message"
            label="Message"
            type="text"
            rows={5}
            required={true}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            title="Submit"
            onClick={() => alert("hellllooooo")}
          />
        </Col>
      </Row>
    </form>
  )
}

export default ContactForm
