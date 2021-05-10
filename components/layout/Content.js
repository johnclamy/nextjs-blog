import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Aside from './Aside'

export default function Content({ children }) {                                                                                                               
  return (
    <Row>
      <Col md={7} lg={8}>
        {children}
      </Col>
      <Col md={5} lg={4}>
        <Row>
          <Col>
            <Aside />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}