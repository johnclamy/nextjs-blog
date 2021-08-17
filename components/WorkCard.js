import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import ReactPlayer from 'react-player'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import styles from './WorkCard.module.css'

const YOUTUBE_URL = 'https://www.youtube.com/watch?v='

export default function WorkCard({ workItem }) {
  return (
    <Row>
      <Col md={6}>
        <div className='app_pages_work_container'>
          <Card style={{ height: '21rem' }}>
            <Card.Body>
              <ReactPlayer
                height='100%'
                width='100%'
                url={`${YOUTUBE_URL}${workItem.youTubeId}`}
              />
            </Card.Body>
          </Card>
        </div>
      </Col>
      <Col md={6}>
        <div className='app_pages_work_container'>
          <Card className={styles.content_card}>
            <Card.Body>
              <Card.Title>{workItem.title}</Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
              <Card.Text>{documentToReactComponents(workItem.description)}</Card.Text>
              {/* <Card.Link>Card Link</Card.Link>
              <Card.Link>Another Link</Card.Link> */}
            </Card.Body>
          </Card>
        </div>
      </Col>
    </Row>
  )
}