import Image  from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_main}>
          <Image className={styles.hero_main_item} src='/hero-main.jpg' fluid />
          <a href='/posts'><Button>Posts</Button></a>
          <h2 className="h4"><span>Find out what we're up to...</span></h2>
      </div>
      <div className={styles.hero_aside}>
        <div className={styles.hero_wrapper}>
          <Image className={styles.hero_aside_item} src='/hero-aside-1.jpeg' fluid />
          <a href='/people'><Button>People</Button></a>
        </div>
        <div className={styles.hero_wrapper}>
          <Image className={styles.hero_aside_item} src='/hero-aside-2.jpeg' fluid />
          <a href='/films'><Button>Films</Button></a>        
        </div>
        <div className={styles.hero_wrapper}>
          <Image className={styles.hero_aside_item} src='/hero-aside-3.jpg' fluid />
          <a href='/contact'><Button>Email</Button></a>   
        </div>
      </div>
    </div>
  )
}