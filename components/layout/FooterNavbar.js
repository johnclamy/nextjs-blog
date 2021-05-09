import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap'

export default function FooterNavbar() {
  return (
    <Navbar>
      <Nav className="text-capitalize">
        <Link href='/'>
          <a style={{color: 'white', marginRight: '1.5em'}} title='Home'>home</a>
        </Link>

        <Link href='/about'>
          <a style={{color: 'white', marginRight: '1.5em'}} title='About Me'>about</a>
        </Link>

        <Link href='/contact'>
          <a style={{color: 'white', marginRight: '0'}} title='Contact Me'>contact</a>
        </Link>
      </Nav>
    </Navbar>
  )
}