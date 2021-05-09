import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Hero from '../components/layout/Hero'

export default function Home() {                                                                                                                 
  return (
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <Hero />
      </Col>
    </Row>
  )
}
