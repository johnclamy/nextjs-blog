import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Logo.module.css'

export default function Logo() {
  return (
    <section className={styles.container}>
      <Image className={styles.logo} src='/logo.jpg' width={64} height={54} />
      <Image src='/logo-wave.png' width={50} height={18} />
      <Link href='/'><a><h1 className={styles.text}>Jemsea</h1></a></Link>
    </section>
  )
}