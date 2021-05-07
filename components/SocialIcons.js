import { Navbar, Nav } from 'react-bootstrap'
import {
  FaFacebook,
  FaImdb,
  FaLinkedin,
  FaYoutube
} from 'react-icons/fa'

import styles from './SocialIcons.module.css'

export const FACEBOOK = 'https://www.facebook.com/tyrone.j.stewart'
export const IMDB = 'https://www.imdb.com/name/nm3723511/'
export const LINKED_IN = 'https://www.linkedin.com/in/tyrone-james-stewart-2a282930/'
export const YOUTUBE = 'https://www.youtube.com/channel/UC4x2dKiILZWI2JVGS6y1hQA'

export default function SocialIcons() {
  return (
    <Navbar className='pr-0 social-icons-container'>
      <Nav>
        <Nav.Link className={styles.social_icon} href={FACEBOOK}>
          <FaFacebook title='Facebook' />
        </Nav.Link>
        <Nav.Link className={styles.social_icon} href={SOCIAL.IMDB}>
          <FaImdb title='Internet Movie Database' />
        </Nav.Link>
        <Nav.Link className={styles.social_icon} href={SOCIAL.LINKED_IN}>
          <FaLinkedin title='LinkedIn' />
        </Nav.Link>
        <Nav.Link className={styles.social_icon} href={SOCIAL.YOUTUBE}>
          <FaYoutube title='YouTube' />
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}