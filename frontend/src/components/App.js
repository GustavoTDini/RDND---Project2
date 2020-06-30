import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { receiveCategories } from '../reduxStore/actions/categories'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { NavBar } from './NavBar'
import { PostCard } from './PostCard'
import { AddPost } from './AddPost'
import { PostList } from './PostList'
import Spinner from 'react-bootstrap/Spinner'

export function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(receiveCategories())
  }, [dispatch])

  const loading = useSelector(state => state.loading)
  const categories = useSelector(state => state.categories)


  return (
    <div>
      <Router>
        <Fragment>
          <NavBar />
          <Container fluid>
            <Row>
              {loading ?
                <div style={{ display: 'flex-col', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
                  <div style={{ margin: 'auto', display: 'table' }}>
                    <Spinner animation="border" variant="primary" style={{ flex: 1, alignSelf: 'center' }} />
                  </div>
                  <h4>Loading...</h4>
                </div> :
                <Col md={{ span: 6, offset: 3 }}>
                  <Switch>
                    <Route path='/home' component={PostList} />
                    <Route path='/newPost' exact component={AddPost} />
                    <Route path='/post' component={PostCard} />
                    {Array.isArray(categories) && categories.map((category) => (
                      <Route path={`/${category.path}`} exact key={category.name}>
                        <PostList category={category.name} />
                      </Route>
                    ))}

                  </Switch>

                </Col>}
            </Row>
          </Container>
        </Fragment>
      </Router>
    </div>
  )
}
