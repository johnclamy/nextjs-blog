import ListGroup from 'react-bootstrap/ListGroup'
import PostCard from './PostCard'

export default function PostList({ posts }) {
  console.log(posts)
  const postList = (
    <ListGroup>
      {posts.length && posts.map(post =>
        <PostCard key={post.sys.id} post={post.fields} />
      )}
    </ListGroup>
  )

  return postList
}