import React, {useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createPostList } from '../Utilities/helperFunctions'
import { PostListItem } from './PostListItem'
import { receivePosts } from '../reduxStore/actions/posts'

export function PostList() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(receivePosts())
  }, [dispatch])

  const posts = useSelector(state => createPostList(state.posts))

  return (
    <div>
      {posts.map((post) => (
        <PostListItem key={post.id} postId={post.id}/>
      ))}
    </div>
  )
}
