import Link from 'next/link'
import styles from '../../styles/MainNavLinks.module.css'

export default function MainNavLinks() {
  return (
    <nav className={styles.container}>
      <ul className={styles.links}>
        <Link href='/posts'><a className={styles.link}>Posts</a></Link>
        <Link href='/films'><a className={styles.link}>Films</a></Link>
        <Link href='/people'><a className={styles.link}>People</a></Link>
      </ul>
    </nav>
  )
}