import { Container, Row, Col } from 'react-bootstrap'
import UpperNavbar from './UpperNavbar'

export default function Layout({ children }) {
  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <UpperNavbar />
        </Col>
      </Row>
      {children}
    </Container>
  )
}