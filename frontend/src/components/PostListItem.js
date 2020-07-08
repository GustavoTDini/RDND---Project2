import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSinglePost } from '../reduxStore/actions/posts'
import { clearSearch } from '../reduxStore/actions/search'
import { Link } from "react-router-dom"
import VoteButton from './VoteButton'
import Card from 'react-bootstrap/Card'
import DeleteButton from './DeleteButton'
import EditPageButton from './EditPageButton'
import { formatTime } from '../Utilities/helperFunctions'

<<<<<<< HEAD
var Highlight = require('react-highlighter');

=======
>>>>>>> d97b23d5c96c6ce7271286fc551cb31f8428e6a6
export default function PostListItem(props) {

  const dispatch = useDispatch()

  // get the current post from the store  
  const post = useSelector(state => state.posts.find((post) => post.id === props.postId))
  // get the search string from the store
  const searchString = useSelector(state => state.search)

  // when selecting a post - set it to selected item and clear the search
  const handleGoToDetails = () => {
    dispatch(clearSearch())
    dispatch(getSinglePost(post.id))
  }
<<<<<<< HEAD
  
=======

  // react highlight - a library used to highlight the searched string
  var Highlight = require('react-highlighter');

>>>>>>> d97b23d5c96c6ce7271286fc551cb31f8428e6a6
  return (
    <Card border='primary' style={{ marginBottom: 30, marginTop: 30 }}>
      <Link to={{
        pathname: `/${post.category}/post/${post.id}`,
        goodRoute: true
        }}
        onClick={() => handleGoToDetails()}
        style={{textDecoration:'none'}}>
      <Card.Header
        >
        <Card.Title style={{ flex: 1 }}>
          <h4>
            <Highlight
              search={searchString}
              matchElement='span'
              matchStyle={{ textDecoration: "underline", background: 'yellow' }}>
              {post.title}
            </Highlight>
          </h4>
        </Card.Title>
        <p style={{ fontSize: 12 }}>{"Posted by "}
          <Highlight
            search={searchString}
            matchElement='span'
            matchStyle={{ textDecoration: "underline", background: 'yellow' }}>
            {post.author}
          </Highlight>
          {" in "}{formatTime(post.timestamp)}</p>

      </Card.Header>
      </Link>
    <Card.Body>
      <div style={{ display: 'flex', alignContent: 'space-between', alignItems: 'baseline' }}>
        <div style={{ flexFlow: 'column', alignContent: 'center' }}>
          <p>Total Comments: {post.commentCount}</p>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 2 }} />
            <EditPageButton
              style={{ marginRight: 10 }}
              item={post}
              type='post'
              category={post.category} />
            <DeleteButton
              id={post.id}
              type={'post'} />
          </div>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ flexFlow: 'column', alignContent: 'center' }}>
          <p>Vote Score: {post.voteScore}</p>
          <VoteButton
            id={post.id}
            type={'post'} />
        </div>
      </div>
    </Card.Body>
    </Card >

  )
}