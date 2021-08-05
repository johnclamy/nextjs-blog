import {
  Col, 
  Card,
  Badge,
  Alert,
  Button
 } from 'react-bootstrap'
 import { useRouter } from 'next/router'

export default function FilmCard({ film }) {
  const router = useRouter()
  const poster = ( 
    film.poster.fields.file.url
      ? film.poster.fields.file.url
      : 'https://via.placeholder.com/300x600.png'
  )

  return (
    <Col sm={6} md={4} lg={3}>
      <Card className='app_film_card'>
        <Card.Img
          variant="top"
          className='app_film_card_img'
          src={poster}
        />
        <Card.Body>
          <Alert className='d-flex justify-content-sm-between bg-primary'>
            <Badge pill variant='secondary'>{film.yearOfProduction}</Badge>
            <Badge pill className='text-capitalize' variant='warning'>{film.genre}</Badge>
          </Alert>
          <Card.Footer>
            <Card.Text className='text-center'>{film.runtime}</Card.Text>
            <Button
              size='lg'
              variant='dark'
              className='text-capitalize w-100'
              onClick={() => router.push(`/films/${film.slug}`)}
            >
              show more
            </Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  )
}