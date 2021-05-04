import Link from 'next/link'
import styles from '../../styles/UpperNavLinks.module.css'

export default function UpperNavLinks() {
  return (
    <nav className={styles.container}>
      <ul className={styles.links}>
        <Link href='/'><a className={styles.link}>home</a></Link>
        <Link href='/about'><a className={styles.link}>about</a></Link>
        <Link href='/contact'><a className={styles.link}>contact</a></Link>
      </ul>
    </nav>
  )
}