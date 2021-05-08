import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap'

import SocialIcons from '../SocialIcons'
import styles from './UpperNavbar.module.css'

export default function UpperNavbar() {
  return (
    <Navbar className={styles.nav_navbar}>
      <Nav>
        <Link href='/'>
          <a className={styles.nav_link}>home</a>
        </Link>
        <Link href='/about'>
          <a className={styles.nav_link}>about</a>
        </Link>
        <Link href='/contact'>
          <a className={styles.nav_link}>contact</a>
        </Link>        
      </Nav>
      <SocialIcons />
    </Navbar>
  )
}