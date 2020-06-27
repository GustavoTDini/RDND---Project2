import React from 'react'
import { useSelector } from 'react-redux'
import { createPostList } from '../Utilities/helperFunctions'
import { PostListItem } from './PostListItem'

export function PostList() {
  const posts = useSelector(state => createPostList(state.posts))
  console.log(posts[0])

  return (
    <div>
      {posts.map((post) => (
        <PostListItem key={post.id} postId={post.id}/>
      ))}
    </div>
  )
}
