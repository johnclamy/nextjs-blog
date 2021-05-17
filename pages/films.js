import { Row, Col } from 'react-bootstrap'
import FilmList from '../components/FilmList'

export default function Films() {
  return (
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <FilmList />
      </Col>
    </Row>
  )
}