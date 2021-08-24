import { Row, Col } from 'react-bootstrap'

import PeopleList from '../components/PeopleList'
import client from './api/contentful'

export async function getStaticProps() {
  const rslt = await client.getEntries({ content_type: 'people' })

  return {
    props: { people: rslt.items },
    revalidate: 1,
  }
}

export default function People({ people }) {
  return (
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <PeopleList people={people} />
      </Col>
    </Row>
  )
}