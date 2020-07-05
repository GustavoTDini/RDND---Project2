import React, { useState } from 'react'
import PostCard from './PostCard'
import CommentList from './CommentList'
import AddComment from './AddComment'

export default function PostDetail(props) {

  const [addNewComment, setAddNewComment] = useState(false)

  return (
    <div>
      <PostCard
        handleAddComment={setAddNewComment}
        addNewComment={addNewComment} />
      {addNewComment ?
        <AddComment
          parentId ={props.postId}
          handleAddComment={setAddNewComment}/> :
        null}
        <CommentList />
    </div>
  )
}