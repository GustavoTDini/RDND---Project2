import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addComment } from '../reduxStore/actions/comments'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import AlertInputModal from './AlertInputModal'

export default function AddComment(props) {
  //const for the modal to show
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()
  const [input, setInput] = useState({})

  // handlechange method for the inputs
  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  // submit method, it tests if any input is blank, otherwise call a dispatch
  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.body === '' || input.body === undefined || input.author === '' || input.author === undefined){
      handleShow()
    } else{
      dispatch(addComment(input.body, input.author, props.parentId))
      props.handleAddComment(false)
    }
  }

  return (
    // modal for prevente submiting a blank comment
    <div style={{ paddingBottom: 20 }}>
      <AlertInputModal
      show={show}
      handleClose={handleClose}
      handleShow={handleShow}
      />

      <h3>Enter a comment for this post</h3>

      <Card border='primary'>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>Author</Form.Label>
              <Form.Control 
              type="text" 
              placeholder="Enter your name"
              name='author'
              onChange={handleInputChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Comment</Form.Label>
              <Form.Control 
              type="text" 
              placeholder="Your comment"
              name='body'
              onChange={handleInputChange} />
            </Form.Group>
            <div style={{ display: 'flex', alignContent: 'space-between' }}>
              <Button 
                style={{ flex: 1 }} 
                variant="primary"
                onClick={handleSubmit}>
                Submit
                </Button>
              <div style={{ flex: 3 }} />
              <Button 
                style={{ flex: 1 }} 
                variant="success"
                onClick={() => props.handleAddComment(false)}>
                Cancel
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}