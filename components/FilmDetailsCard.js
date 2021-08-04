import React from 'react'
import ReactPlayer from 'react-player'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Container, Row, Col, Card, Alert } from 'react-bootstrap'

import styles from './FilmDetailsCard.module.css'

const YOUTUBE_URL = 'https://www.youtube.com/watch?v='

export default function FilmDetailsCard({ film }) {
  const filmDetails =
    film
      ? (
        <Container className={styles.app_film_card_details}>
          <Row>
            <Col xs={12} sm={5} className='bg-white'>
              <Card>
                <Card.Body>
                  <Card.Title className={styles.app_film_card_details_title}>
                    {film.title} &nbsp;
                    <small>{film.runtime}</small>
                  </Card.Title>
                  <Card.Subtitle className={styles.app_film_card_details_subtitle}>{film.genre} / {film.year}</Card.Subtitle>{/* 
                  <Card.Text className={styles.app_filmcard_details_text}>
                    {documentToReactComponents(film.synopsis.content)}
                  </Card.Text>*/}
                </Card.Body>
              </Card>
            </Col>{/* 
            <Col xs={12} sm={7}>
              // asset check - Red Rose film is not on YouTube
              {film.youTubeId !== film.title.toLowerCase().replaceAll(' ', '-')
                ? (<ReactPlayer height='100%' width='100%' url={`${YOUTUBE_URL}${film.youTubeId}`} />)
                : (
                  <div className='d-flex justify-content-center align-content-center'>
                    <Alert variant='danger'>
                      <Alert.Heading className='d-flex align-self-center'>Sorry. This film is not available for viewing.</Alert.Heading>
                    </Alert>
                  </div>
                )
              }
            </Col>*/}
          </Row>
        </Container>
      )
      : null

  return filmDetails
}