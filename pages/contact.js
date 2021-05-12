import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Content from '../components/layout/Content'
import HeaderPage from '../components/layout/HeaderPage'

export default function Contact() {                                                                                                                 
  return (
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <Content>
          <section className='bg-white mt-3 py-4 px-3'>
            <Row>
              <Col>
                <HeaderPage>contact me</HeaderPage>
              </Col>
            </Row>
            <Row >
              <Col>LinkedIn page</Col>
              <Col>Facebook page</Col>
              <Col>Email address</Col>
            </Row>
          </section>
        </Content>
      </Col>
    </Row>
  )
}