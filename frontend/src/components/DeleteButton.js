import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePost } from '../reduxStore/actions/posts'
import { deleteComment } from '../reduxStore/actions/comments'
import { TiTrash } from "react-icons/ti"
import Button from 'react-bootstrap/Button'


export function DeleteButton(props) {

  const dispatch = useDispatch()

  const handleDelete = () => {
    if (props.type === 'post') {
      dispatch(deletePost(props.id))
    } else if (props.type === 'comment') {
      dispatch(deleteComment(props.id))
    }
  }

  return (
      <Button
      variant='danger'
        onClick={() => handleDelete()}>
          Delete
        <TiTrash style={{marginLeft:20}}/>
      </Button>
  )
}