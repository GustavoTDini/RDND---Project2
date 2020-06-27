import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { addPost } from '../reduxStore/actions/posts'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export function AddPost() {
  const dispatch = useDispatch()
  const [input, setInput] = useState({})
  const [category, setCategory] = useState('React')
  const categories = useSelector(state => state.categories)

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addPost(input.title, input.body, input.author, category))
  }

  return (
    <div style={{ paddingBottom: 20 }}>
      <Card border='primary'>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title your post"
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
            <div style={{ display: 'flex', alignContent: 'space-between' }}>
            <DropdownButton style={{ flex: 1 }} title={category}>
                {Array.isArray(categories) && categories.map((category) => (
                  <Dropdown.Item
                    key={category.path}
                    onClick={() => setCategory(category.name)}
                  >{category.name}</Dropdown.Item>
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