import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'
import UpperNavbar from './UpperNavbar'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Jemsea Films | Tyrone J Stewart short films and work blog</title>
        <meta property="og:title" content="Jemsea Films title" key="title" />
        <meta name='keywords' content='Tyrone J Stewart short films film editing work blog' />
      </Head>
      <Container fluid>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <UpperNavbar />
            <Header />
          </Col>
        </Row>
        {children}
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  )
}