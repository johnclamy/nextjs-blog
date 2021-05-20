import Card from 'react-bootstrap/Card'
import Link from 'next/link'
import moment from 'moment'

export default function PostCard({ post }) {
  return (
    <Card className='app_post_card'>
      <Card.Img variant='top' src={`https:${post.image.fields.file.url}`} alt={post.title} />
      <Card.Body className='app_post_card_body'>
        <Card.Text className='app_post_card_topic'>{post.topic}</Card.Text>
        <Card.Title className='app_post_card_title'>{post.title}</Card.Title>
        <Card.Subtitle className='app_post_card_subtitle'>
          <span className='app_post_card_subtitle_prefix'>posted on</span> {moment(post.createdAt).format('LL')}
          <span className='app_post_card_subtitle_postfix'> by</span> {post.author}
        </Card.Subtitle>
        <Card.Text className='app_post_card_text'>{subPostString(post.message)}...</Card.Text>
      </Card.Body>
      <div className='text-center'>
        <Link href={`/posts/${post.slug}`} passHref>
          <button className='app_post_card_btn app_post_card_submit'>read more</button>
        </Link>
      </div>
    </Card>
  )
}

function subPostString (text, MAX_LENGTH = 250) {
  let subText = ''
  
  if (text && text.length > subText.length) {
    subText = text.substring(0, MAX_LENGTH)
    subText = subText.substring(0,
    Math.min(subText.length, subText.lastIndexOf(' '))
    )
  }
    
  return subText
}