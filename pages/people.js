import { Row, Col } from 'react-bootstrap'
import PeopleList from '../components/PeopleList'

export default function People() {
  return (
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <PeopleList />
      </Col>
    </Row>
  )
}