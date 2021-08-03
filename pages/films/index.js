import { Row, Col } from 'react-bootstrap'

import FilmList from '../../components/FilmList'
import client from '../api/contentful'

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: 'film' })

  return {
    props: { films: res.items }
  }
}

export default function Films({ films }) {
  console.log(films)
  return (
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <FilmList films={films} />
      </Col>
    </Row>
  )
}