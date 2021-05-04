import styles from '../../styles/UpperNavIcons.module.css'
import {
  FaFacebook,
  FaImdb,
  FaLinkedin,
  FaYoutube
} from 'react-icons/fa'
import * as SOCIAL from '../../constants/'

export default function UpperNavIcons() {
  return (
    <ul className={styles.icons}>
      <li className={styles.iconItem}><a className={styles.icon} href={SOCIAL.FACEBOOK}>
        <FaFacebook title='Facebook' />
      </a></li>
      <li className={styles.iconItem}><a className={styles.icon} href={SOCIAL.IMDB}>
        <FaImdb title='Internet Movie Database' />  
      </a></li>
      <li className={styles.iconItem}><a className={styles.icon} href={SOCIAL.LINKED_IN}>
        <FaLinkedin title='LinkedIn' />
      </a></li>
      <li className={styles.iconItem}><a className={styles.icon} href={SOCIAL.YOUTUBE}>
        <FaYoutube title='YouTube' />
      </a></li>
    </ul>
  )
}