import React from 'react'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import { TiThumbsUp } from "react-icons/ti"
import { TiThumbsDown } from "react-icons/ti"

export function PostListItem(props) {

  const post = useSelector(state => state.posts.find((post) => post.id === props.postId))

  return (
    <Card border='primary' style={{ marginBottom: 30, marginTop: 30 }}>
      <Card.Header>
        <Link to={`/post/${post.id}`}>
          <Card.Title style={{ flex: 1 }}><h4>{post.title}</h4></Card.Title>
        </Link>
      </Card.Header>
      <Card.Body>
        <p>Posted by {post.author} in {post.timestamp}</p>
        <div style={{ display: 'flex', alignContent: 'space-between', alignItems: 'baseline', marginTop: 20 }}>
          <div style={{ flex: 1 }} />
          <p>{post.score}</p>
          <Button style={{ marginLeft: 10 }}><TiThumbsUp /></Button>
          <Button style={{ marginLeft: 10 }}><TiThumbsDown /></Button>
        </div>
      </Card.Body>
    </Card>

  )
}