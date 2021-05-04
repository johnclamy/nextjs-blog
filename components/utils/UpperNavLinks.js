import Link from 'next/link'
import styles from '../../styles/UpperNavLinks.module.css'

export default function UpperNavLinks() {
  return (
    <nav className={styles.container}>
      <ul className={styles.links}>
        <Link className={styles.link} href='/'><a>home</a></Link>
        <Link className={styles.link} href='/about'><a>about</a></Link>
        <Link className={styles.link} href='/contact'><a>contact</a></Link>
      </ul>
    </nav>
  )
}