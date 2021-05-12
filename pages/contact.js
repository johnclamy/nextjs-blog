import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Content from '../components/layout/Content'

export default function Contact() {                                                                                                                 
  return (
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <Content>
          <section className='bg-white mt-3 py-4 px-3'>
            <Row>
              <Col>
                <header>
                  <h1 className='display-4'>Contact Me</h1>
                  <hr />
                </header>
              </Col>
            </Row>
          </section>
        </Content>
      </Col>
    </Row>
  )
}