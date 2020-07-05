import React from 'react'
import { useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import DeleteButton from './DeleteButton'
import VoteButton from './VoteButton'
import { formatTime } from '../Utilities/helperFunctions'

export default function CommentCard(props) {
  // component to show data of the comment, has options to edit or delete

  // get all the necessary elements - the current selected post / all the comments and the search string to highlight
  const selectedItem = useSelector(state => state.selectedItem)
  const comment = useSelector(state => state.comments[selectedItem.id].find((comment) => comment.id === props.commentId))
  const searchString = useSelector(state => state.search)

  // react highlight - a library used to highlight the searched string
  var Highlight = require('react-highlighter');

  return (
    <div style={{ paddingBottom: 20 }}>
      <Card border='primary'>
        <Card.Body style={{ marginTop: 10 }}>
          <div style={{ flexFlow: 'column' }}>
            <h5>
              <Highlight
                search={searchString}
                matchElement='span'
                matchStyle={{ textDecoration: "underline", background: 'yellow' }}>
                {comment.body}
              </Highlight>
            </h5>
            <p style={{ fontSize: 14 }}>{"Posted by "}
              <Highlight
                search={searchString}
                matchElement='span'
                matchStyle={{ textDecoration: "underline", background: 'yellow' }}>
                {comment.author}
              </Highlight>
              {" in "}{formatTime(comment.timestamp)}</p>
            <div style={{ display: 'flex', alignContent: 'space-between', marginTop: 10 }}>
              <p style={{ fontSize: 18 }}>Vote Score: {comment.voteScore}</p>
              <div style={{ flex: 1 }} />
              <VoteButton
                id={comment.id}
                type={'comment'} />
            </div>
          </div>
        </Card.Body>
        <Card.Footer>
          <div style={{ display: 'flex', alignContent: 'space-between' }}>
            <LinkContainer
              style={{ marginRight: 10 }}
              to={`/editComment/${comment.id}`}>
              <Button >Edit</Button>
            </LinkContainer>
            <div style={{ flex: 1 }} />
            <DeleteButton
              id={comment.id}
              type={'comment'} />
          </div>
        </Card.Footer>
      </Card>
    </div>
  )
}