import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap'

import styles from './HeaderNavbar.module.css'

export default function NavbarHeader() {
  return (
    <Navbar className='pb-0' bg='no-bg'>
        <Nav className={styles.header_nav}>
          <Link href='/posts'>
            <a title='Blog Posts'>posts</a>
          </Link>

          <Link href='/films'>
            <a title='Short Films'>films</a>
          </Link>

          <Link href='/people'>
            <a title='Cast and Crew'>people</a>
          </Link> 
          <Link href='/work'>
            <a title='Cast and Crew'>work</a>
          </Link>       
        </Nav>
    </Navbar>
  )
}