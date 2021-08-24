import { Row, Col } from 'react-bootstrap'

import FilmList from '../../components/FilmList'
import client from '../api/contentful'

export async function getStaticProps() {
  const rslt = await client.getEntries({ content_type: 'film' })

  return {
    props: { films: rslt.items },
    revalidate: 1,
  }
}

export default function Films({ films }) {
  return (
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <FilmList films={films} />
      </Col>
    </Row>
  )
}