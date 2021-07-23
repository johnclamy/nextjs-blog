import ListGroup from 'react-bootstrap/ListGroup'
import PostCardShort from './PostCardShort'

export default function PostListShort({ posts }) {
  const postListShort = (
    <ListGroup>
      {posts.length && posts.map(post =>
        <PostCardShort key={post.sys.id} post={post.fields} />
      )}
    </ListGroup>
  )

  return postListShort
}