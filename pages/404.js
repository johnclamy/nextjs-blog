import Link from 'next/link'
import styles from '../styles/PageNotFound.module.css'

export default function PageNotFound() {
  return (
    <section className={styles.container}>
      <header>
        <h1 className={styles.title}>
          <strong>Oops;</strong>&nbsp;
          Sorry, but the page you were trying<br />to view does not exist.
        </h1>
      </header>
      <main>
        <p className={styles.info}>404</p>
      </main>
      <footer>
        <Link href='/'>
          <a className={styles.homelink}>Back to Home</a>
        </Link>
      </footer>
    </section>
  )
}