import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { addPost } from '../reduxStore/actions/posts'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { capitalizeString } from '../Utilities/helperFunctions'
import { Redirect } from 'react-router-dom'
import { AlertInputModal } from './AlertInputModal'

export function AddPost() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addedNewPost, setAddedNewPost] = useState(false);

  const dispatch = useDispatch()
  const [input, setInput] = useState({})
  const [category, setCategory] = useState('react')
  const categories = useSelector(state => state.categories)

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.title === '' || input.title === undefined || input.body === '' || input.body === undefined || input.author === '' || input.author === undefined){
      handleShow()
    } else{
      dispatch(addPost(input.title, input.body, input.author, category))
      setAddedNewPost(true)
    }
  }

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
                variant="primary"
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