import React from 'react'
import Card from 'react-bootstrap/Card'
import Media from 'react-bootstrap/Media'
import Button from 'react-bootstrap/Button'
import { TiThumbsUp } from "react-icons/ti"

export function PostCard() {
  return (
    <div style={{ paddingBottom: 20 }}>
      <Card border='primary'>
        <Card.Header>
          <div style={{ display: 'flex', alignContent: 'space-between' }}>
            <Card.Title style={{ flex: 1 }}><h3>Title</h3></Card.Title>
            <p>Timestamp</p>
          </div>
        </Card.Header>
        <Card.Body>
          <Media>
            <Media.Body>
              <h4>Author</h4>
              <p>body</p>
            </Media.Body>
          </Media>
        </Card.Body>
        <Card.Footer>
          <div style={{ display: 'flex', alignContent: 'space-between' }}>
            <Button href="#">New Comment</Button>
            <div style={{ flex: 3 }} />
            <Button shadow-none ><TiThumbsUp /></Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  )
}