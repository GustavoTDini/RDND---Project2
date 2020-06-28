import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { NavBar } from './NavBar'
import { PostCard } from './PostCard'
import { AddPost } from './AddPost'
import { PostList } from './PostList'
import Spinner from 'react-bootstrap/Spinner'

export function App() {

  const loading = useSelector(state => state.loading)


  return (
    <div>
      <Router>
        <Fragment>
          <NavBar />
          <Container fluid>
            <Row>
              {loading ?
                <div style={{display: 'flex-col', justifyContent: 'center', alignItems:'center', margin:'auto'}}>
                  <div style={{margin:'auto', display:'table'}}>
                    <Spinner animation="border" variant="primary" style={{flex:1, alignSelf:'center'}}/>
                  </div>
                  <h4>Loading...</h4>
                </div> :
                <Col md={{ span: 6, offset: 3 }}>
                  <Route path='/home' component={PostList} />
                  <Route path='/newPost' component={AddPost} />
                  <Route path='/post' component={PostCard} />
                </Col>}
            </Row>
          </Container>
        </Fragment>
      </Router>
    </div>
  )
}
