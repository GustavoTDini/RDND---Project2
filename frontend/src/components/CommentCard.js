import React from 'react'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Media from 'react-bootstrap/Media'
import { TiThumbsUp } from "react-icons/ti"
import { TiThumbsDown } from "react-icons/ti"
import Button from 'react-bootstrap/Button'
import { formatTime } from '../Utilities/helperFunctions'

export function CommentCard(props) {
  const selectedPost = useSelector(state => state.selectedPost)
  const comment = useSelector(state => state.comments[selectedPost.id].find((comment) => comment.id === props.commentId))
  
  console.log(comment)

  return (
    <div style={{ paddingBottom: 20 }}>
      <Card border='primary'>
        <Card.Body>
          <div style={{ display: 'flex', alignContent: 'space-between' }}>
            <Card.Title style={{ flex: 1 }}><h4>{comment.author}</h4></Card.Title>
            <div style={{ flexFlow: 'column', textAlign:'end' }}>
              <p>Commented in {formatTime(comment.timestamp)}</p>
              <p>Vote Score: {comment.voteScore}</p>
              <div style={{ display: 'flex', alignContent: 'space-between' }}>
                <Button><TiThumbsUp /></Button>
                <Button style={{ marginLeft: 10 }}><TiThumbsDown /></Button>
              </div>
            </div>
          </div>
          <Media style={{ marginTop: 10}}>
            <Media.Body>
              <p>{comment.body}</p>
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