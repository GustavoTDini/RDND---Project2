import React, { useState, useEffect } from 'react'
import { useLocation, Redirect } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import EditButton from './EditButton'

export default function EditPage() {

  // corrected the edit page, using location, it will not use the store to get the data, I was getting async errors as pointed
  const location = useLocation()
  const [input, setInput] = useState({
    body: '',
    title: ''
  })

  // this useEffect control the selecteditem on the store - it can be a post or a comment
  useEffect(() => {
    if (location.item) {
      setInput({
        body: location.item.body,
        title: location.item.title
      })
    }
  }, [location.item])

  // control the route, if this come from a unknow page, it will render a bad route
  if (!location.item) {
    return (
      <Redirect
        to={{ pathname: '/badRoute' }} />
    )
  }

  // function to hold the input change to make this a controlled component
  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  return (
    <div>
      <h3>Edit your {location.type}</h3>
      <Card border='primary'>
        <Card.Body>
          <Form>
            {/* This will only show if the selected item is a post - comments have no title*/}
            {(location.type === 'post') &&
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter a title for your post"
                  name='title'
                  value={input.title}
                  onChange={handleInputChange} />
              </Form.Group>}
            <Form.Group>
              <Form.Label>Post Message</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your post"
                name='body'
                value={input.body}
                onChange={handleInputChange} />
            </Form.Group>
            <div style={{ display: 'flex', alignContent: 'space-between', alignItems: 'center' }}>
              <div style={{ flex: 3 }} />
              <EditButton
                body={input.body}
                title={input.title}
                type={location.type}
                category={location.category}
                id={location.item.id}
                parentId={location.item.parentId}
                style={{ flex: 1 }}
                variant="primary">
                Edit
                </EditButton>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}