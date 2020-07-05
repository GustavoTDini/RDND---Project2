import React, {useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { receivePostComments } from '../reduxStore/actions/comments'
import CommentCard from './CommentCard'
import EmptyList from './EmptyList'
import { createPostList, sortPostList, returnSearchedArray } from '../Utilities/helperFunctions'

export default function CommentList() {

  const selectedItem = useSelector(state => state.selectedItem)

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(receivePostComments(selectedItem.id))
  }, [dispatch, selectedItem.id])

  const sortingType = useSelector(state => state.sorting.sortBy)
  const descending = useSelector(state => state.sorting.direction)
  const searchString = useSelector(state => state.search)

  const comments = useSelector(state => returnSearchedArray(sortPostList(createPostList(state.comments[selectedItem.id]), sortingType, descending), searchString))

  if (comments.length === 0){
    if (searchString !== ''){
          return(
      <EmptyList 
        type="comments"/>
    )} else {
      return(
        <EmptyList 
          type="emptyComments"/>
      )
    }
  }

  return (
    <div>
      {comments.map((comment) => (
        <CommentCard key={comment.id} commentId={comment.id}/>
      ))}
    </div>
  )
}