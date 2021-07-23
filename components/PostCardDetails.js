import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Card from 'react-bootstrap/Card'
import moment from 'moment'

export default function PostCardDetails({ post }) {
  return (
    <Card className='app_post_card'>
      <Card.Img variant='top' src={`https:${post.fields.image.fields.file.url}`} alt={post.fields.title} />
      <Card.Body className='app_post_card_body'>
        <Card.Text className='app_post_card_topic'>{post.fields.topic}</Card.Text>
        <Card.Title className='app_post_card_title'>{post.fields.title}</Card.Title>
        <Card.Subtitle className='app_post_card_subtitle'>
          <span className='app_post_card_subtitle_prefix'>posted on</span> {moment(post.sys.createdAt).format('LL')}
          <span className='app_post_card_subtitle_postfix'> by</span> {post.fields.author}
        </Card.Subtitle>
        <Card.Text className='app_post_card_text'>{documentToReactComponents(post.fields.message)}</Card.Text>
      </Card.Body>
    </Card>
  )
}