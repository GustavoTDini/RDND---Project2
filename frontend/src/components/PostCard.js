import React from 'react'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Media from 'react-bootstrap/Media'
import Button from 'react-bootstrap/Button'
import VoteButton from './VoteButton'
import DeleteButton from './DeleteButton'
import { formatTime } from '../Utilities/helperFunctions'
import EditPageButton from './EditPageButton'

export default function PostCard(props) {

  const post = useSelector(state => state.selectedItem)

  return (
    <div style={{ paddingBottom: 20 }}>
      <Card border='primary'>
        <Card.Header style={{ backgroundColor: '#0177F7', color: 'white' }}>
          <Card.Title><h3>{post.title}</h3></Card.Title>
          <div style={{ display: 'flex', flexFlow: 'row' }}>
            <div>
            <p style={{ fontSize: 14 }} >Posted by {post.author} in {formatTime(post.timestamp)}</p>
            <h4 style={{ fontSize: 20 }} >Total Comments: {post.commentCount}</h4>
            </div>
            <div style={{flex:1}}/>
            <div style={{ flexFlow: 'row'}}>
              <p style={{ fontSize: 20 }} >Vote Score: {post.voteScore}</p>
              <VoteButton
                light
                id={post.id}
                type={'post'} />
            </div>
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
            <EditPageButton
              item = {post}
              type = 'post'
              category = {post.category}/>
            <div style={{ flex: 2 }} />
            <DeleteButton
              id={post.id}
              type={'post'} />
          </div>
        </Card.Footer>
      </Card>

      {!props.addNewComment ?
        <div style={{ display: 'flex', marginTop: 20 }}>
          <Button
            style={{ margin: 'auto' }}
            onClick={() => props.handleAddComment(true)}>New Comment
          </Button>
        </div>
        : null
      }

    </div>

  )
}