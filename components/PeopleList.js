import { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

import PeopleCard from './PeopleCard'
import data from '../data'

export default function PeopleList() {
  const [ people, setPeople] = useState([])
  const peopleList = people.map(person =>
    <PeopleCard key={person.id} person={person} />  
  )

  useEffect(() => setPeople(data.people), [people])

  return (
    <ListGroup className='mt-3'>
      {peopleList}
    </ListGroup>
  )
}