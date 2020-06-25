import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { TiThumbsUp } from "react-icons/ti"

export function PostListItem() {
  return (
    <div style={{ paddingBottom: 20 }}>
      <Card border='primary'>
        <Card.Body>
          <Card.Title style={{ flex: 1 }}><h3>Title</h3></Card.Title>
          <h4>Author</h4>
          <div style={{ display: 'flex', alignContent: 'space-between' }}>
            <div style={{ flex: 4 }} />
            <Button shadow-none ><TiThumbsUp /></Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}