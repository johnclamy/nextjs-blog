import { Row, Col } from 'react-bootstrap'
import { Card, ListGroup, ListGroupItem, Link } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const YOUTUBE_URL = 'https://www.youtube.com/watch?v='

export default function WorkCard({ workItem }) {
  return (
    <Row className='d-flex justify-content-center '>
      <Col  xs={{span: 12}} sm={{span: 12}} md={{span: 12}} lg={{ span: 8, offset: 2 }}>
        <Card>
          <Card.Body className='d-flex justify-content-center work-card'>
            <ReactPlayer
              height='100%'
              width='100%'
              url={`${YOUTUBE_URL}${workItem.youTubeId}`}
            />
          </Card.Body>
          <Card.Body>
            <Card.Title>{workItem.title}</Card.Title>
            <Card.Text>{documentToReactComponents(workItem.description)}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}