import React, {useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createPostList } from '../Utilities/helperFunctions'
import { receivePostComments } from '../reduxStore/actions/comments'
import { CommentCard } from './CommentCard'

export function CommentList() {

  const selectedPost = useSelector(state => state.selectedPost)

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(receivePostComments(selectedPost.id))
  }, [dispatch, selectedPost.id])


  const comments = useSelector(state => createPostList(state.comments[selectedPost.id]))
  console.log(comments)

  return (
    <div>
      {comments.map((comment) => (
        <CommentCard key={comment.id} commentId={comment.id}/>
      ))}
    </div>
  )
}