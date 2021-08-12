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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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