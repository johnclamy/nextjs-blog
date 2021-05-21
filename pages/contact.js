import { Row, Col } from 'react-bootstrap'

import Content from '../components/layout/Content'
import HeaderPage from '../components/layout/HeaderPage'
import ContactDetailsCard from '../components/ContactDetailsCard'

export default function Contact() {                                                                                                                 
  return (
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <Content>
          <section className='contact-page-container'>
            <Row>
              <Col>
                <HeaderPage>contact me</HeaderPage>
              </Col>
            </Row>
            <Row>
              <Col>
                <ContactDetailsCard />
              </Col>
            </Row>
          </section>
        </Content>
      </Col>
    </Row>
  )
}