import React from 'react'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import { TiThumbsUp } from "react-icons/ti"
import { TiThumbsDown } from "react-icons/ti"

export function PostListItem(postId) {
  const post = useSelector(state => state.posts.filter((post) => post.id === postId))
  console.log(post)

  return (
    <Link style={{ paddingBottom: 20 }} to={`/post/${postId}`}>
      <Card border='primary'>
        <Card.Body>
          <Card.Title style={{ flex: 1 }}><h3>{post.title}</h3></Card.Title>
          <h4>{post.author}</h4>
          <div style={{ display: 'flex', alignContent: 'space-between', alignItems: 'baseline', marginTop:20}}>
            <div style={{ flex: 1 }} />
            <p>{post.score}</p>
            <Button style={{ marginLeft: 10 }}><TiThumbsUp /></Button>
            <Button style={{ marginLeft: 10 }}><TiThumbsDown /></Button>
          </div>
        </Card.Body>
      </Card>
    </Link>
  )
}