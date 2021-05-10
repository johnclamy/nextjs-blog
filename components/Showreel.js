import Card from 'react-bootstrap/Card'
import ReactPlayer from 'react-player'

import styles from './Showreel.module.css'

const YOUTUBE_URL = 'https://www.youtube.com/watch?v='
const SHOWREEL_ID = 'Q2fUhJ-ZIXY'

export default function Showreel () {
  return (
    <Card className={styles.show_reel_card}>
      <Card.Body>
        <Card.Title className={styles.show_reel_card_title}>my showreel</Card.Title>
        <div className={styles.show_reel_card_link}>
          <ReactPlayer
            height='100%'
            width='100%'
            className={styles.showreel_player}
            url={`${YOUTUBE_URL}${SHOWREEL_ID}`}
          />
        </div>
      </Card.Body>
    </Card>
  )
}