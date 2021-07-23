import { Row, Col, Image } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import ReactPlayer from 'react-player'

import HeaderPage from '../components/layout/HeaderPage'

const YOUTUBE_URL = 'https://www.youtube.com/watch?v='
const SHOWREEL_ID = 'ScMzIvxBSi4'

export default function Work () {
  return (
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <div className='app_page_header'>
          <HeaderPage>my work</HeaderPage>
        </div>
        <Row>
          <Col md={6}>
            <div className='app_pages_work_container'>
              <Card style={{ height: '21rem' }}>
                <Card.Body>
                  <ReactPlayer
                    height='100%'
                    width='100%'
                    url={`${YOUTUBE_URL}${SHOWREEL_ID}`}
                  />
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={6}>
            <div className='app_pages_work_container'>
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.Some quick example text to build on the card title and make up the bulk of
                    the card's content.Some quick example text to build on the card title and make up the bulk of
                    the card's content.Some quick example text to build on the card title and make up the bulk of
                    the card's content.Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Card.Link>Card Link</Card.Link>
                  <Card.Link>Another Link</Card.Link>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>      
      </Col>
    </Row>
  )
}