import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getSinglePost } from '../reduxStore/actions/posts'
import { PostCard } from './PostCard'
import { CommentList } from './CommentList'
import { Redirect } from 'react-router-dom'

export function EditPage(props) {



  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSinglePost(props.location.id))
  }, [dispatch, props.location.id])

  if (!props.location.postId) {
    return (
      <Redirect
        to={{
          pathname: "/home"
        }}
      />
    )
  }


  return (
    <div>
      <PostCard />
      <CommentList />
    </div>
  )
}