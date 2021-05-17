import { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

import PostCard from './PostCard'
import data from '../data/'

export default function PostList() {
  const [ posts, setPosts ] = useState([])
  const postList = (
    <ListGroup>
      {posts && posts.map(post =>
        <PostCard key={post.id} post={post} />
      )}
    </ListGroup>
  )

  useEffect(() => setPosts(data.posts), [posts])

  return postList
}