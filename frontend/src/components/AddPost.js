import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../reduxStore/actions/posts'
import { Redirect } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import AlertInputModal from './AlertInputModal'
import { capitalizeString } from '../Utilities/helperFunctions'

export default function AddPost() {

 //const for the modal to show
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addedNewPost, setAddedNewPost] = useState(false);

  const dispatch = useDispatch()
  const [input, setInput] = useState({})
  const [category, setCategory] = useState('react')
  const categories = useSelector(state => state.categories)

  // handlechange method for the inputs
  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  // submit method, it tests if any input is blank, otherwise call a dispatch
  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.title === '' || input.title === undefined || input.body === '' || input.body === undefined || input.author === '' || input.author === undefined){
      handleShow()
    } else{
      dispatch(addPost(input.title, input.body, input.author, category))
      setAddedNewPost(true)
    }
  }

  // when added a new post - return to home
  if (addedNewPost) {
    return (
      <Redirect
        to={{
          pathname:'/home' 
        }}
      />
    )
  }


  return (
    // modal for prevente submiting a blank comment
    <div>
      <AlertInputModal
      show={show}
      handleClose={handleClose}
      handleShow={handleShow}
      />

      <h3>Enter a new post</h3>

      <Card border='primary'>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a title for your post"
                name='title'
                onChange={handleInputChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name='author'
                onChange={handleInputChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Post Message</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your post"
                name='body'
                onChange={handleInputChange} />
            </Form.Group>
            <div style={{ display: 'flex', alignContent: 'space-between', alignItems: 'center'}}>
            <Form.Label>Category</Form.Label>
            <DropdownButton style={{ flex: 1, marginLeft: 10 }} title={capitalizeString(category)}>
                {Array.isArray(categories) && categories.map((category) => (
                  <Dropdown.Item
                    key={category.path}
                    onClick={() => setCategory(category.name)}
                  >{capitalizeString(category.name)}</Dropdown.Item>
                ))}
              </DropdownButton> 
              <div style={{ flex: 1 }} />
              <Button
                style={{ flex: 1 }}
                variant="success"
                onClick={handleSubmit}>
                Submit
                </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}