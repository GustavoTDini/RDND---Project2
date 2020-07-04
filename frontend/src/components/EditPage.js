import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import { getSinglePost } from '../reduxStore/actions/posts'
import { getSingleComment } from '../reduxStore/actions/comments'
import { Redirect } from 'react-router-dom'
import { EditButton } from './EditButton'

export function EditPage(props) {

  const dispatch = useDispatch()
  const item = useSelector(state => state.selectedItem)

  const [input, setInput] = useState({
    body: item.body,
    title: item.title
  })

  useEffect(() => {
    if (props.location.type === 'post') {
      dispatch(getSinglePost(props.location.id))
    } else if (props.location.type === 'comment'){
      dispatch(getSingleComment(props.location.id))
    }
  }, [dispatch, props.location.id, props.location.type])

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  if (!props.location.id) {
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
      <h3>Edit your {props.location.type}</h3>
      <Card border='primary'>
        <Card.Body>
          <Form>
            {(props.location.type === 'post') &&
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter a title for your post"
                  name='title'
                  value = {input.title}
                  onChange={handleInputChange} />
              </Form.Group>}
            <Form.Group>
              <Form.Label>Post Message</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your post"
                name='body'
                value = {input.body}
                onChange={handleInputChange} />
            </Form.Group>
            <div style={{ display: 'flex', alignContent: 'space-between', alignItems: 'center' }}>
              <div style={{ flex: 3 }} />
              <EditButton
                body = {input.body}
                title = {input.title}
                type = {props.location.type}
                id = {props.location.id}
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