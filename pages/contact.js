import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  FaEnvelope,
  FaLinkedin
} from 'react-icons/fa'

import Content from '../components/layout/Content'
import HeaderPage from '../components/layout/HeaderPage'
import { LINKED_IN } from '../components/SocialIcons'


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
            <Row className='contact-page-links'>
              <Col md={12} lg={4}>
                <section classsName='contact-page-links-item'>
                  <a className='text-white' href={LINKED_IN}>
                    <div className='text-center'><FaLinkedin /></div>
                    <h1 className='h3 text-center'>LinkedIn</h1>
                    <p className='lead text-center'>Official contact page</p>
                  </a>
                </section>
              </Col>
              <Col md={12} lg={4}>
                <section classsName='contact-page-links-item'>
                  <div className='text-center'><FaEnvelope /></div>
                  <h1 className='h3 text-center'>Email</h1>
                  <p className='lead text-center'>tyronejstewart@yahoo.co.uk</p>
                </section>
              </Col>
            </Row>
          </section>
        </Content>
      </Col>
    </Row>
  )
}