import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Hero from '../components/layout/Hero'
import Content from '../components/layout/Content'
import PostList from '../components/PostList'
import client from './api/contentful'

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: 'post' })
  return {
    props: {
      posts: res.items
    }
  }
}

export default function Home({ posts }) {
  console.log(posts)                                                                                                             
  return (
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <Hero />
        <Content>
          <PostList posts={posts} />
        </Content>
      </Col>
    </Row>
  )
}
