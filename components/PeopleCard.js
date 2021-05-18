import { Card, Media, Image, ListGroup } from 'react-bootstrap'

export default function PeopleCard({ person }) {
  const imdb = person.imdb ? person.imdb : ''
  const initial = person.middleName ? person.middleName : ''
  const name = `${person.firstName} ${(initial ? initial : '')} ${person.lastName}`
  const title = imdb ? (<Card.Link href={imdb}>{name}</Card.Link>) : name
  const image = person.profilePic ? person.profilePic : '/images/people/placeholder.gif'
  const imageComponent = (
    imdb
      ? <a href={imdb}>
          <Image rounded
            className='app-people-card-img'
            src={image}
            alt='Profile picture'
          />
        </a>
      : <Image rounded
          className='app-people-card-img'
          src={image}
          alt='Profile picture'
        />
  )

  return (
    <ListGroup.Item className='app-people-card-item'>
      <Media>
        {imageComponent}
        <Media.Body>
          <Card>
            <Card.Body>
              <Card.Title>
                <span className='app-people-card-name'>{title}</span>&nbsp;
                <span className='app-people-card-role'>
                  ({person.mainRole})
                </span>
              </Card.Title>
              <Card.Text>{person.bio}</Card.Text>
            </Card.Body>
          </Card>
        </Media.Body>
      </Media>
    </ListGroup.Item>
  )
}