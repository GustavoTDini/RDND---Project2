import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { deletePost } from '../reduxStore/actions/posts'
import { receivePosts } from '../reduxStore/actions/posts'
import { deleteComment } from '../reduxStore/actions/comments'
import { Redirect } from 'react-router-dom'
import { TiTrash } from "react-icons/ti"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { clearSearch } from '../reduxStore/actions/search'

export default function DeleteButton(props) {

  const dispatch = useDispatch()

  //const for the modal to show that confirm the deletion
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // variable to control the return to home only if deleting a post
  const [returnHome, setReturnHome] = useState(false)

  // function to control the deletion of a post or comment
  const handleDelete = () => {
    if (props.type === 'post') {
      dispatch(clearSearch())
      dispatch(deletePost(props.id))
      setReturnHome(true)
    } else if (props.type === 'comment') {
      dispatch(deleteComment(props.id))
    }
    handleClose()
  }

  // check if return home is true to redirect to home
  if(returnHome){
    dispatch(receivePosts())
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
      <Button
        variant='danger'
        onClick={() => handleShow()}>
        Delete
        <TiTrash style={{ marginLeft: 20 }} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Are you sure you want to delete this {props.type}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => handleClose()}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => handleDelete()}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

    </div>

  )
}