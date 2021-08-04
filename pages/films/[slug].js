import React from 'react'
import { Row, Col } from 'react-bootstrap'

import FilmDetailsCard from '../../components/FilmDetailsCard'
import client from '../api/contentful'

export const getStaticPaths = async () => {
  const rslt = await client.getEntries({ content_type: 'film' })
  const paths = rslt.items.map(item => {
    return {
      params: { slug: item.fields.youTubeId }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'film',
    'fields.youTubeId': params.slug
  })

  return {
    props: { film: items[0] }
  }
}

export default function FilmDetailsPage({ film }) {
  console.log(film)
  return (
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        {/* <FilmDetailsCard film={film.fields} /> */}
        <h2>Film details card goes here...</h2>
      </Col>
    </Row>
  )
}