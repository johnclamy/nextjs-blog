import Card from 'react-bootstrap/Card'
import {
  FaFacebook,
  FaImdb,
  FaLinkedin,
  FaYoutube
} from 'react-icons/fa'

import * as SOCIAL from './SocialIcons'
import styles from './SocialIconsSummary.module.css'

export default function SocialIconsSummary () {
  return (
    <Card className={styles.social_icons_summary}>
      <Card.Body>
        <Card.Title className={styles.social_icons_summary_title}>social networks</Card.Title>
        <Card.Text className={styles.social_icons_summary_icons}>
          <a href={SOCIAL.FACEBOOK}>
            <FaFacebook title='Facebook' />
          </a>
          <a href={SOCIAL.IMDB}>
            <FaImdb title='Internet Movie Database' />
          </a>
          <a href={SOCIAL.LINKED_IN}>
            <FaLinkedin title='LinkedIn' />
          </a>
          <a href={SOCIAL.YOUTUBE}>
            <FaYoutube title='YouTube' />
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}