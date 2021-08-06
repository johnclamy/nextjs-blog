import ListGroup from 'react-bootstrap/ListGroup'
import PeopleCard from './PeopleCard'

export default function PeopleList({ people }) {
  const peopleList = people.map(person =>
    <PeopleCard key={person.sys.id} person={person.fields} />  
  )

  return (
    <ListGroup className='mt-3'>
      {peopleList}
    </ListGroup>
  )
}