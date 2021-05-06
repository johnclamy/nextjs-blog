import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Banner.module.css'

export default function Banner() {
  return (
    <div>

      <div className={styles.main}>
          <Image src='/hero-main.jpg' width={640} height={480} />
      </div>

      <div>
        <div className={styles.aside}>
          <Image src='/hero-aside-1.jpeg' width={640} height={480} />
        </div>

        <div className={styles.aside}>
          <Image src='/hero-aside-2.jpeg' width={640} height={424} />
        </div>

        <div className={styles.aside}>
          <Image src='/hero-aside-3.jpg' width={640} height={480} />  
        </div>

      </div>
    </div>
  )
}