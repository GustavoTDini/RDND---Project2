import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getSinglePost } from '../reduxStore/actions/posts'
import { PostCard } from './PostCard'
import { CommentList } from './CommentList'
import { Redirect } from 'react-router-dom'
import { AddComment } from './AddComment'

export function PostDetail(props) {

  const [addNewComment, setAddNewComment] = useState(false);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSinglePost(props.location.postId))
  }, [dispatch, props.location.postId])

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
      <PostCard
        handleAddComment={setAddNewComment}
        addNewComment={addNewComment} />
      {addNewComment ?
        <AddComment
          parentId ={props.location.postId}
          handleAddComment={setAddNewComment}/> :
        null}
      <CommentList />
    </div>
  )
}