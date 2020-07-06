import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { editPost } from '../reduxStore/actions/posts'
import { editComment } from '../reduxStore/actions/comments'
import { Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default function EditButton(props) {

  const dispatch = useDispatch()

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [show, setShow] = useState(false)
  
  // const to control the return to home
  const [done, setDone] = useState(false)


  //function to handle the confirmation of the editing
  const handleEdit = () => {
    if (props.type === 'post') {
      dispatch(editPost(props.id, props.title, props.body))
    } else
      dispatch(editComment(props.id, props.body))
      setDone(true)
  }

  if (done) {
    return (
      <Redirect
        to={{
          pathname: '/home'
        }}
      />
    )
  }

  return (
    <div>
      <Button
        variant='primary'
        onClick={() => handleShow()}>
        Edit
      </Button>

      {/* modal to control the confirmation of editing - cancel returns to home without editing, 
      no return to editing and confirm handle the dispatch to edit the item */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Have you done editing this {props.type}</Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={() => setDone(true)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleClose()}>
            No
          </Button>
          <Button variant="success" onClick={() => handleEdit()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

    </div>

  )
}