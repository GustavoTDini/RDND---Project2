import React from 'react'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Media from 'react-bootstrap/Media'
import Button from 'react-bootstrap/Button'
import { VoteButton } from './VoteButton'
import { formatTime } from '../Utilities/helperFunctions'
import { DeleteButton } from './DeleteButton'

export function PostCard(props) {

  const post = useSelector(state => state.selectedPost)

  return (
    <div style={{ paddingBottom: 20 }}>
      <Card border='primary'>
        <Card.Header style={{ backgroundColor: '#0177F7', color: 'white' }}>
          <Card.Title style={{ flex: 1 }}><h3>{post.title}</h3></Card.Title>
          <p style={{ fontSize: 14 }} >Posted by {post.author} in {formatTime(post.timestamp)}</p>
          <div style={{ display: 'flex', alignContent: 'space-between' }}>
            <p style={{ fontSize: 20 }} >Vote Score: {post.voteScore}</p>
            <div style={{ flex: 1 }} />
            <VoteButton
              light
              id={post.id}
              type={'post'} />
          </div>
        </Card.Header>
        <Card.Body>
          <Media style={{ marginTop: 10 }}>
            <Media.Body>
              <p style={{ fontSize: 20 }} >{post.body}</p>
            </Media.Body>
          </Media>
        </Card.Body>
        <Card.Footer>
          <div style={{ display: 'flex', alignContent: 'space-between' }}>
            <Button >Edit</Button>
            <div style={{ flex: 1 }} />
            {!props.addNewComment ?
              <Button
                onClick={() => props.handleAddComment(true)}>New Comment</Button>: null
            }
            <div style={{ flex: 1 }} />
            <DeleteButton
              id={post.id}
              type={'post'} />
          </div>
        </Card.Footer>
      </Card>
    </div>
  )
}