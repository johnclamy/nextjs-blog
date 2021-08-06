import { Card, Image, ListGroup } from 'react-bootstrap'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function PeopleCard({ person }) {
  const { url } = person.profilePicture.fields.file
  const imdb = person.imDbUrl ? person.imDbUrl : ''
  const title = imdb ? (<Card.Link href={imdb}>{person.name}</Card.Link>) : person.name
  const imageComponent = (
    imdb
      ? <a href={imdb}>
          <Image rounded
            className='app-people-card-img'
            src={`https:${url}`}
            alt='Profile picture'
          />
        </a>
      : <Image rounded
          className='app-people-card-img'
          src={`https:${url}`}
          alt='Profile picture'
        />
  )

  return (
    <ListGroup.Item className='app-people-card-item'>
      <Card>
        <Card.Header>{imageComponent}</Card.Header>
          <Card.Body>
            <Card.Title>
              <span className='app-people-card-name'>{title}</span>&nbsp;
              <span className='app-people-card-role'>
                ({person.mainRole})
              </span>
            </Card.Title>
            <Card.Text>{documentToReactComponents(person.bio)}</Card.Text>
          </Card.Body>
      </Card>
    </ListGroup.Item>
  )
}