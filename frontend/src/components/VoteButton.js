import React from 'react'
import { useDispatch } from 'react-redux'
import { voteForPost } from '../reduxStore/actions/posts'
import { voteForComment } from '../reduxStore/actions/comments'
import { TiThumbsUp, TiThumbsDown } from "react-icons/ti"
import Button from 'react-bootstrap/Button'
import { UP_VOTE, DOWN_VOTE } from '../Utilities/constants'

export default function VoteButton(props) {

  const dispatch = useDispatch()

  const handleVote = (vote) => {
    if (props.type === 'post') {
      dispatch(voteForPost(props.id, vote))
    } else if (props.type === 'comment') {
      dispatch(voteForComment(props.id, vote))
    }
  }

  return (
    <div>
      <Button
        variant={props.light? 'light' : 'primary'}
        style={{ marginLeft: 10 }}
        onClick={() => handleVote(UP_VOTE)}>
        <TiThumbsUp 
          style={props.light? { color:'#017BFF' }: { color:'primary' }}/>
      </Button>
      <Button
        variant={props.light? 'light': 'primary'}
        style={{ marginLeft: 10 }}
        onClick={() => handleVote(DOWN_VOTE)}>
          <TiThumbsDown 
          style={props.light? { color:'#017BFF' }: { color:'primary' }}/>
      </Button>
    </div>
  )
}


