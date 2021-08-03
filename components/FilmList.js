import Row from 'react-bootstrap/Row'
import FilmCard from './FilmCard'

export default function FilmList({ films }) {
  const filmList = films.map(film =>
    <FilmCard key={film.sys.id} film={film.fields} />  
  )

  return <Row>{filmList}</Row>
}