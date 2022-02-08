import Link from 'next/link'
import Container from '../grid/Container'
import Row from '../grid/Row'
import Col from '../grid/Col'

const Footer = () => {
  return (
    <footer className="section">
      <Container>
        <Row>
          <Col
            classses="text-center"
          >
            <p>&copy; {new Date().getFullYear()} <Link href="/">Nick McNeany</Link></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
