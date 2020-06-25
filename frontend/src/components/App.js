import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../reduxStore/actions/shared'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { NavBar } from './NavBar'
import { PostCard } from './PostCard'
import { CommentCard } from './CommentCard'
import { AddComment } from './AddComment'
import { AddPost } from './AddPost'
import { PostListItem } from './PostListItem'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <NavBar />
        <Container fluid>  
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <PostCard/>
              <CommentCard/>
              <AddComment/>
              <AddPost/>
              <PostListItem/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default connect()(App)