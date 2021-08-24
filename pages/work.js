import { Row, Col } from 'react-bootstrap'

import WorkList from '../components/WorkList'
import HeaderPage from '../components/layout/HeaderPage'
import client from './api/contentful'

export async function getStaticProps() {
  const rslt = await client.getEntries({ content_type: 'work' })

  return {
    props: { work: rslt.items },
    revalidate: 1,
  }
}

export default function Work({ work }) {
  return (
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <div className='app_page_header'>
          <HeaderPage>my work</HeaderPage>
        </div>
        <WorkList work={work} />   
      </Col>
    </Row>
  )
}