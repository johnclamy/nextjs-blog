import { Row, Col } from 'react-bootstrap'
import PostList from '../../components/PostList'

export default function Posts() {
  return (
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <PostList />
      </Col>
    </Row>
  )
}