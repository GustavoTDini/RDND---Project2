import React from 'react'
import Card from 'react-bootstrap/Card'
import Media from 'react-bootstrap/Media'
import { TiThumbsUp } from "react-icons/ti"
import { TiThumbsDown } from "react-icons/ti"
import Button from 'react-bootstrap/Button'

export function CommentCard() {
  return (
    <div style={{ paddingBottom: 20 }}>
      <Card border='primary'>
        <Card.Body>
          <div style={{ display: 'flex', alignContent: 'space-between' }}>
            <Card.Title style={{ flex: 1 }}><h4>Author</h4></Card.Title>
            <div style={{ flexFlow: 'column', textAlign:'end' }}>
              <p>Timestamp</p>
              <p>score</p>
              <div style={{ display: 'flex', alignContent: 'space-between' }}>
                <Button shadow-none><TiThumbsUp /></Button>
                <Button shadow-none style={{ marginLeft: 10 }}><TiThumbsDown /></Button>
              </div>
            </div>
          </div>
          <Media style={{ marginTop: 10}}>
            <Media.Body>
              <p>body</p>
            </Media.Body>
          </Media>
        </Card.Body>
        <Card.Footer>
          <div style={{ display: 'flex', alignContent: 'space-between' }}>

            <Button style={{ marginRight: 10 }}>Edit</Button>
            <div style={{ flex: 1 }} />
            <Button variant='danger'>Delete</Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  )
}