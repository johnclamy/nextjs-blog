import Image from 'next/link'
import styles from '../../styles/Logo.module.css'

export default function Logo() {
  return (
    <div className='container'>
      <Image className={styles.logo} src='/logo.jpg' width={64} height={54} alt='Jemsea ruby logo' />
      <Image src='/logo-wave.png' width={50} height={18} alt='Jemsea wave logo' />
      <a href='/'><h1 className={styles.text}>Jemsea</h1></a>
    </div>
  )
}