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

  const [show, setShow] = useState(false);

  const [returnHome, setReturnHome] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()

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