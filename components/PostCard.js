import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Card from 'react-bootstrap/Card'
import Link from 'next/link'
import { useRouter } from 'next/router'
import moment from 'moment'

export default function PostCard({ post }) {
  const router = useRouter()

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
          {documentToReactComponents(post.message)}
        </Card.Text>
      </Card.Body>
      <div className='text-center'>
        <button
          className='app_post_card_btn app_post_card_submit'
          onClick={() => router.push(`/posts/${post.slug}`)}
        >
          full screen
        </button>
      </div>
    </Card>
  )
}