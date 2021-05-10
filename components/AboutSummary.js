import Card from 'react-bootstrap/Card'
import Link from 'next/link'

import styles from  './AboutSummary.module.css'

export default function AboutSummary() {
  return (
    <Card className={styles.about_summary_card}>
      <Card.Body>
        <Card.Title className={styles.about_summary_card_title}>about me</Card.Title>
        <Card.Img src='/aside.jpg' />
        <Card.Text className={styles.about_summary_card_text}>
          <Link href='/about'><a>Tyrone</a></Link> has 15+ years of experience as a film production assistant 
          having worked on a part time basis in different capacities on short films, corporate videos,
          television ads and media related projects for Markettiers4dc, Spear Media, Quintessentially 
          Lifestyle, Keen City Productions, Barclays Bank, BEN TV UK and has also worked independently 
          by creating his own <Link href='/films'><a>short films</a></Link> from pre-production through to post production.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
