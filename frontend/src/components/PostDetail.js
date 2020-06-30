import React, {useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getSinglePost } from '../reduxStore/actions/posts'
import { PostCard } from './PostCard'
import { CommentList } from './CommentList'

export function PostDetail(props) {

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getSinglePost(props.location.postId))
  }, [dispatch, props.location.postId])


  return (
    <div>
      <PostCard/>
      <CommentList/>
    </div>
  )
}