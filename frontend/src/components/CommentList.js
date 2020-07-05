import React, {useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createPostList, sortPostList, returnSearchedArray } from '../Utilities/helperFunctions'
import { receivePostComments } from '../reduxStore/actions/comments'
import { CommentCard } from './CommentCard'
import EmptyList from './EmptyList'

export function CommentList() {

  const selectedItem = useSelector(state => state.selectedItem)

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(receivePostComments(selectedItem.id))
  }, [dispatch, selectedItem.id])

  const sortingType = useSelector(state => state.sorting.sortBy)
  const descending = useSelector(state => state.sorting.direction)
  const searchString = useSelector(state => state.search)

  let comments = useSelector(state => sortPostList(createPostList(state.comments[selectedItem.id]), sortingType, descending))

  if (searchString !== ''){
    comments = returnSearchedArray(comments, searchString)
  }

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