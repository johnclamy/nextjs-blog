import { Row, Col } from 'react-bootstrap'

import PostList from '../../components/PostList'
import client from '../api/contentful'

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: 'post' })
  return {
    props: {
      posts: res.items
    }
  }
}

export default function Posts({ posts }) {
  return (
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <PostList posts={posts} />
      </Col>
    </Row>
  )
}