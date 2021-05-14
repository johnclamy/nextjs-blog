import Link from 'next/link'
import { Row, Col, Jumbotron, Button } from 'react-bootstrap'

export default function NotFound() {
  return (
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <Jumbotron className='not-found-page bg-dark'>
          <h1 className='display-1'>404</h1>
          <h2>Page or file not found</h2>
          <p className='lead'>
            We're sorry but the page of file you're looking for is unavailable, was
            renamed or no longer exists. Also, please be sure that you're using the
            correct URL.
          </p>
          <Button size='lg' variant='primary'>Home</Button>
        </Jumbotron>
      </Col>
    </Row>
  )
}