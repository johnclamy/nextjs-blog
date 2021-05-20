import { Row, Col } from 'react-bootstrap'

import PostCardDetails from '../../components/PostCardDetails'
import client from '../api/contentful'

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: 'post' })
  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'post',
    'fields.slug': params.slug
  })

  return {
    props: { post: items[0] }
  }
}

export default function PostSlug({ post }) {
  return (
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <PostCardDetails post={post.fields} />
      </Col>
    </Row>
  )
}