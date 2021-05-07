import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap'

import SocialIcons from '../SocialIcons'
import styles from './UpperNavbar.module.css'

export default function UpperNavbar () {
  return (
    <Navbar className={styles.app_navbar_top}>
      <Nav className="text-uppercase mr-auto">
        <Link href='/'><a><Nav.Link>home</Nav.Link></a></Link>
        <Link href='/about'><a><Nav.Link>about</Nav.Link></a></Link>
        <Link href='/contact'><a><Nav.Link>contact</Nav.Link></a></Link>        
      </Nav>
      <SocialIcons />
    </Navbar>
  )
}