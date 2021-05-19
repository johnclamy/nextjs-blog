import { createClient } from 'contentful'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Hero from '../components/layout/Hero'
import Content from '../components/layout/Content'
import PostList from '../components/PostList'

// export async function getStaticProps() {}

export default function Home() {                                                                                                                 
  return (
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <Hero />
        <Content>
          <PostList />
        </Content>
      </Col>
    </Row>
  )
}
