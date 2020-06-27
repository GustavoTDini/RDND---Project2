import React from 'react'
import Card from 'react-bootstrap/Card'
import Media from 'react-bootstrap/Media'
import Button from 'react-bootstrap/Button'
import { TiThumbsUp } from "react-icons/ti"
import { TiThumbsDown } from "react-icons/ti"

export function PostCard() {
  return (
    <div style={{ paddingBottom: 20 }}>
      <Card border='primary'>
        <Card.Header>
          <div style={{ display: 'flex', alignContent: 'space-between' }}>
            <Card.Title style={{ flex: 1 }}><h3>Title</h3></Card.Title>
            <div style={{ flexFlow: 'column', textAlign:'end' }}>
              <p>Timestamp</p>
              <p>score</p>
              <div style={{ display: 'flex', alignContent: 'space-between' }}>
                <Button><TiThumbsUp /></Button>
                <Button style={{ marginLeft: 10 }}><TiThumbsDown /></Button>
              </div>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Media style={{ marginTop: 10}}>
            <Media.Body>
              <h4>Author</h4>
              <p>body</p>
            </Media.Body>
          </Media>
        </Card.Body>
        <Card.Footer>
          <div style={{ display: 'flex', alignContent: 'space-between' }}>
            <Button >Edit</Button>
            <div style={{ flex: 1 }} />
            <Button >New Comment</Button>
            <div style={{ flex: 1 }} />
            <Button variant='danger'>Delete</Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  )
}