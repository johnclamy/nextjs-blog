import Card from 'react-bootstrap/Card'
import Link from 'next/link'
import { useRouter } from 'next/router'
import moment from 'moment'

import PostCardButtom from './PostCardButton'

export default function PostCardShort({ post }) {
  const router = useRouter()
  const handleClick = () => router.push(`/posts/${post.slug}`)

  return (
    <Card className='app_post_card'>
      <Card.Img variant='top' src={`https:${post.image.fields.file.url}`} alt={post.title} />
      <Card.Body className='app_post_card_body'>
        <Card.Text className='app_post_card_topic'>{post.topic}</Card.Text>
        <Card.Title className='app_post_card_title'>
          <Link href={`/posts/${post.slug}`}><a>{post.title}</a></Link>
        </Card.Title>
        <Card.Subtitle className='app_post_card_subtitle'>
          <span className='app_post_card_subtitle_prefix'>posted on</span> {moment(post.createdAt).format('LL')}
          <span className='app_post_card_subtitle_postfix'> by</span> {post.author}
        </Card.Subtitle>
        <Card.Text className='app_post_card_text'>
          {`${subPostString(post.message.content[0].content.map(text => text.value).join(' '))} ...`}
        </Card.Text>
      </Card.Body>
      <div className='text-center'>
        <PostCardButtom onClick={handleClick}>read more</PostCardButtom>
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