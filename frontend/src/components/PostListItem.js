import React from 'react'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import { TiThumbsUp } from "react-icons/ti"
import { TiThumbsDown } from "react-icons/ti"
import { formatTime } from '../Utilities/helperFunctions'

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
          <Card.Title style={{ flex: 1 }}><h5>{post.title}</h5></Card.Title>
          <p style={{ fontSize: 10 }}>Posted by {post.author} in {formatTime(post.timestamp)}</p>
        </Link>
      </Card.Header>
      <Card.Body>
        <div style={{ display: 'flex', alignContent: 'space-between', alignItems: 'baseline' }}>
          <p>Vote Score: {post.voteScore}</p>
          <div style={{ flex: 1 }} />
          <Button style={{ marginLeft: 10 }}><TiThumbsUp /></Button>
          <Button style={{ marginLeft: 10 }}><TiThumbsDown /></Button>
        </div>
      </Card.Body>
    </Card>

  )
}