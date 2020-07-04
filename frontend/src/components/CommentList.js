import React, {useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createPostList, sortPostList } from '../Utilities/helperFunctions'
import { receivePostComments } from '../reduxStore/actions/comments'
import { CommentCard } from './CommentCard'

export function CommentList() {

  const selectedItem = useSelector(state => state.selectedItem)

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(receivePostComments(selectedItem.id))
  }, [dispatch, selectedItem.id])

  const sortingType = useSelector(state => state.sorting.sortBy)
  const descending = useSelector(state => state.sorting.direction)

  const comments = useSelector(state => sortPostList(createPostList(state.comments[selectedItem.id]), sortingType, descending))

  return (
    <div>
      {comments.map((comment) => (
        <CommentCard key={comment.id} commentId={comment.id}/>
      ))}
    </div>
  )
}