import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { NavBar } from './NavBar'
import { PostCard } from './PostCard'
import { AddPost } from './AddPost'
import { PostList } from './PostList'

export function App() {

  return (
    <div>
      <Router>
        <Fragment>
          <NavBar />
          <Container fluid>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <Route path='/home' component={PostList} />
                <Route path='/newPost' component={AddPost} />
                <Route path='/post' component={PostCard} />
              </Col>
            </Row>
          </Container>
        </Fragment>
      </Router>
    </div>
  )
}
