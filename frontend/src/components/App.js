import React, { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { receiveCategories } from '../reduxStore/actions/categories'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { NavBar } from './NavBar'
import { AddPost } from './AddPost'
import { PostList } from './PostList'
import Spinner from 'react-bootstrap/Spinner'
import { PostDetail } from './PostDetail';
import { EditPage } from './EditPage';

export function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(receiveCategories())
  }, [dispatch])

  const categories = useSelector(state => state.categories)
  const loading = useSelector(state => state.loading)
  const selected = useSelector(state => state.selectedItem)
  const [sortable, setSortable] = useState(true);

  return (
    <div>
      <Router>
        <Fragment>
          <NavBar
            sortable={sortable} />
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
                    <Route
                      path='/home'
                      render={() => {
                        setSortable(true)
                        return <PostList />
                      }
                      } />
                    <Route
                      path='/newPost' exact
                      render={() => {
                        setSortable(false)
                        return <AddPost />
                      }}/>
                    <Route
                      path='/post'
                      component={() => {
                        setSortable(true)
                        return <PostDetail postId={selected.id}/>
                      }}/>
                    <Route
                      path='/editPost'
                      render={() => {
                        setSortable(false)
                        return <EditPage id={selected.id} type='post'/>
                      }}/>
                    <Route
                      path='/editComment'
                      render={() => {
                        setSortable(false)
                        return <EditPage id={selected.id} type='comment'/>
                      }}/>
                    {Array.isArray(categories) && categories.map((category) => (
                      <Route
                        path={`/${category.path}`} exact
                        key={category.name}
                        render={() => {
                          setSortable(true);
                          return <PostList category={category.name} />
                        }}/>
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


