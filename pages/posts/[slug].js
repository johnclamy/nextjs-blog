import React from 'react'
import { Row, Col } from 'react-bootstrap'

import PostCardDetails from '../../components/PostCardDetails'
import client from '../api/contentful'

export async function getStaticPaths() {
  const rslt = await client.getEntries({
    content_type: 'post'
  })

  const paths = rslt.items.map(i => {
    return {
      params: { slug: i.fields.slug }
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
    'fields.slug': params.slug,
  })

  return {
    props: { post: items[0] },
    revalidate: 1,
  }
}

export default function PostDetailsPage({ post }) {
  return (
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <PostCardDetails post={post} />
      </Col>
    </Row>
  )
}