import React, {useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { receivePostComments } from '../reduxStore/actions/comments'
import CommentCard from './CommentCard'
import EmptyList from './EmptyList'
import { createPostList, sortPostList, returnSearchedArray } from '../Utilities/helperFunctions'

export default function CommentList(props) {

  const selectedItem = useSelector(state => state.selectedItem)

  // Receive the comments for the current post
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(receivePostComments(selectedItem.id))
  }, [dispatch, selectedItem.id])

  // Sorting and Search variables to order the comment list
  const sortingType = useSelector(state => state.sorting.sortBy)
  const descending = useSelector(state => state.sorting.direction)
  const searchString = useSelector(state => state.search)

  // get the list acording to the sorting and selector - once it is already in the store
  const comments = useSelector(state => returnSearchedArray(sortPostList(createPostList(state.comments[selectedItem.id]), sortingType, descending), searchString))

  // Check if the List is empty to show the empty list warning
  if (comments.length === 0 && !props.addingComment){
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