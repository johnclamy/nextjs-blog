import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Content from '../components/layout/Content'

export default function Home() {                                                                                                                 
  return (
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <Content>
          contact info here...
        </Content>
      </Col>
    </Row>
  )
}