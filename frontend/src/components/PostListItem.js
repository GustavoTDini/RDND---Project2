import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { getSinglePost } from '../reduxStore/actions/posts'
import { clearSearch } from '../reduxStore/actions/search'
import { Link } from "react-router-dom"
import VoteButton from './VoteButton'
import Card from 'react-bootstrap/Card'
import { formatTime } from '../Utilities/helperFunctions'

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

  // react highlight - a library used to highlight the searched string
  var Highlight = require('react-highlighter');

  return (
    <Card border='primary' style={{ marginBottom: 30, marginTop: 30 }}>
      <Card.Header>
        <Link
          onClick={()=>handleGoToDetails()}
          to={`/post/${post.id}`}
          style={{ textDecoration: 'none' }}>
          <Card.Title style={{ flex: 1 }}>
            <h4>
              <Highlight
                search={searchString}
                matchElement='span'
                matchStyle={{ textDecoration: "underline", background:'yellow' }}>
                {post.title}
              </Highlight>
            </h4>
          </Card.Title>
          <p style={{ fontSize: 12 }}>{"Posted by "}
          <Highlight
                search={searchString}
                matchElement='span'
                matchStyle={{ textDecoration: "underline", background:'yellow' }}
                >
                {post.author}
              </Highlight> 
              {" in "}{formatTime(post.timestamp)}</p>
        </Link>
      </Card.Header>
      <Card.Body>
        <div style={{ display: 'flex', alignContent: 'space-between', alignItems: 'baseline' }}>
          <p>Vote Score: {post.voteScore}</p>
          <div style={{ flex: 1 }} />
          <VoteButton
            id={post.id}
            type={'post'} />
        </div>
      </Card.Body>
    </Card>

  )
}