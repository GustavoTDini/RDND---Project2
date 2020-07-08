import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export default function EditPageButton(props) {
  const [goToEdit, setToEdit] = useState(false)
  // created this component to control the props sended to editPage
  if (goToEdit) {
    return (
      <Redirect
        to={{
          pathname: `/edit/${props.type}/${props.item.id}`,
          item: props.item,
          type: props.type,
          category: props.category
        }}
      />)
  }

  return (
    <div
      style={{ marginRight: 10 }}>
      <Button
        onClick={() => setToEdit(true)}>Edit</Button>
    </div>
  )
}