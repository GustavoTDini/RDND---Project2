import React  from 'react'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom"
import { formatTime } from '../Utilities/helperFunctions'
import { VoteButton } from './VoteButton'


export function PostListItem(props) {

  const post = useSelector(state => state.posts.find((post) => post.id === props.postId))

  return (
    <Card border='primary' style={{ marginBottom: 30, marginTop: 30 }}>
      <Card.Header>
        <Link 
          to={{
            pathname:`/post/${post.id}`, 
            postId: post.id
          }} 
          style={{ textDecoration: 'none' }}>
          <Card.Title style={{ flex: 1 }}><h4>{post.title}</h4></Card.Title>
          <p style={{ fontSize: 12 }}>Posted by {post.author} in {formatTime(post.timestamp)}</p>
        </Link>
      </Card.Header>
      <Card.Body>
        <div style={{ display: 'flex', alignContent: 'space-between', alignItems: 'baseline' }}>
          <p>Vote Score: {post.voteScore}</p>
          <div style={{ flex: 1 }} />
          <VoteButton
            id={post.id}
            type={'post'}/>
        </div>
      </Card.Body>
    </Card>

  )
}