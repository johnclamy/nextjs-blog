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
        <Container className={styles.container}>
          <Row style={{ minHeight: '350px'}}>
            <Col xs={12} sm={5} md={6}>
              <div className='p-1'>
                <Card style={{ minHeight: '350px'}}>
                  <Card.Body>
                    <Card.Title className='text-center mb-0'>
                      <span className={styles.title}>{film.title}</span> &nbsp;
                      <small>{film.runtime}</small>
                    </Card.Title>
                    <Card.Subtitle className={styles.subtitle}>
                      {film.genre} / {film.yearOfProduction}
                    </Card.Subtitle>
                    <Card.Text className='mt-3'>{documentToReactComponents(film.synopsis)}</Card.Text>
                  </Card.Body>
                </Card>
              </div>              
            </Col>
            <Col xs={12} sm={7} md={6}>
              {/* asset check - Red Rose film is not on YouTube */}
              {film.slug !== film.youTubeId
                ? (<ReactPlayer height='100%' width='100%' url={`${YOUTUBE_URL}${film.youTubeId}`} />)
                : (
                  <div className='d-flex justify-content-center align-content-center'>
                    <Alert variant='danger'>
                      <Alert.Heading className='d-flex align-self-center'>Sorry. This film is not available for viewing.</Alert.Heading>
                    </Alert>
                  </div>
                )
              }
            </Col>
          </Row>
        </Container>
      )
      : null

  return filmDetails
}