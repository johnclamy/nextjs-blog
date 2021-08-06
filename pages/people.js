import { getFontDefinitionFromManifest } from 'next/dist/next-server/server/font-utils'
import { Row, Col } from 'react-bootstrap'

import PeopleList from '../components/PeopleList'
import client from './api/contentful'

export async function getStaticProps() {
  const rslt = await client.getEntries({ content_type: 'people' })

  return {
    props: { people: rslt.items }
  }
}

export default function People({ people }) {
  console.log(people)
  return (
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <PeopleList people={people} />
      </Col>
    </Row>
  )
}