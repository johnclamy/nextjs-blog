import { useRouter } from 'next/router'
import { Row, Col, Badge, Button } from 'react-bootstrap'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'

import { LINKED_IN } from '../components/SocialIcons'
import styles from './ContactDetailsCard.module.css'

export default function ContactDetailsCard() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <Row>
        <Col>
          <header>
            <h1 className={styles.title}>
              <Badge className={styles.badge}>available for hire</Badge>
            </h1>
            <h2 className='my-4 text-capitalize text-center'>
              editing & post production jobs
            </h2>
          </header>
        </Col>
      </Row>
      <Row className={styles.links}>
        <Col md={12} lg={4}>
          <section className='contact-page-links-item'>
            <a className='text-white' href={LINKED_IN}>
              <div className='mb-2 text-center'>
                <FaLinkedin style={{width: '60px', height: '60px'}} />
              </div>
              <h1 className='h3 text-center'>LinkedIn</h1>
              <p className='lead text-center'>Official contact page</p>
            </a>
          </section>
        </Col>
        <Col md={12} lg={4}>
          <section classsName='contact-page-links-item'>
            <div className='mb-2 text-center'>
              <FaEnvelope style={{width: '60px', height: '60px'}} />
            </div>
            <h1 className='h3 text-center'>Email</h1>
            <p className='lead text-center'>tyronejstewart@yahoo.co.uk</p>
          </section>
        </Col>
      </Row>
      <Row>
        <Col className={styles.button}>
          <Button block
            size='lg'
            type='button'
            variant='warning'
            className='text-capitalize font-weight-bold'
            onClick={() => router.push('/work')}
          >
            recent work page
          </Button>
        </Col>
      </Row>
    </div>
  )
}