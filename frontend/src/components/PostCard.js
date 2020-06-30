import React from 'react'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Media from 'react-bootstrap/Media'
import Button from 'react-bootstrap/Button'
import { TiThumbsUp } from "react-icons/ti"
import { TiThumbsDown } from "react-icons/ti"
import { formatTime } from '../Utilities/helperFunctions'

export function PostCard() {

  const post = useSelector(state => state.selectedPost)

  return (
    <div style={{ paddingBottom: 20 }}>
      <Card border='primary'>
        <Card.Header>
          <div style={{ display: 'flex', alignContent: 'space-between' }}>
            <Card.Title style={{ flex: 1 }}><h3>{post.title}</h3></Card.Title>
            <div style={{ flexFlow: 'column', textAlign:'end' }}>
              <p>Posted in {formatTime(post.timestamp)}</p>
              <p>Vote Score: {post.voteScore}</p>
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
              <h4>{post.author}</h4>
              <p>{post.body}</p>
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