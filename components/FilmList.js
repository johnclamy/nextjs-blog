import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'

import FilmCard from './FilmCard'
import data from '../data'

export default function FilmList() {
  const [ films, setFilms ] = useState([])
  const filmList = films.map(film =>
    <FilmCard key={film.id} film={film} />  
  )

  useEffect(() => setFilms(data.films), [films])

  return <Row>{filmList}</Row>
}