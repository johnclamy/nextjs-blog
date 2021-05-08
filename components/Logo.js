import Link from 'next/link'
import styles from './Logo.module.css'

export default function Logo() {
  return (
    <div className={styles.app_logo}>
      <Link href='/'>
        <a><img src='/logo.jpg' /></a>
      </Link>
      <Link href='/'>
        <a><img src='/logo-wave.png' /></a>
      </Link>
      <Link href='/'>
        <a><h1 className={styles.logo_text}>Jemsea</h1></a>
      </Link>
    </div>
  )
}