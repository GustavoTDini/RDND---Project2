import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, Redirect } from "react-router-dom"
import PostCard from './PostCard'
import CommentList from './CommentList'
import AddComment from './AddComment'

export default function PostDetail() {
  const [addNewComment, setAddNewComment] = useState(false)
  const post = useSelector(state => state.selectedItem)
  const location = useLocation()

  // control the route, if this come from a unknow page, it will render a bad route
  if (!location.goodRoute){
    return (
      <Redirect
        to={{pathname: '/badRoute'}}/>
    )
  }

  return (
    <div>
      <PostCard
        handleAddComment={setAddNewComment}
        addNewComment={addNewComment} />
      {addNewComment ?
        <AddComment
          parentId ={post.id}
          handleAddComment={setAddNewComment}/> :
        null}
        <CommentList 
         addingComment = {addNewComment}/>
    </div>
  )
}