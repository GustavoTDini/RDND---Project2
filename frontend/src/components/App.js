import React, { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { receiveCategories } from '../reduxStore/actions/categories'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import NavBar from './NavBar'
import AddPost from './AddPost'
import PostList from './PostList'
import PostDetail from './PostDetail';
import EditPage from './EditPage';

export default function App() {
  const dispatch = useDispatch()

  // at start get the categories from the server - to populate the nav and set the category lists
  useEffect(() => {
    dispatch(receiveCategories())
  }, [dispatch])

  const categories = useSelector(state => state.categories)
  const loading = useSelector(state => state.loading)

  // check if there´s a selected item to render the details or editing
  const selected = useSelector(state => state.selectedItem)

  // const to prevente sorting and search to render in edit or newPost pages
  const [sortable, setSortable] = useState(true);

  return (
    <div>
      <Router>
        <Fragment>
          <NavBar
            sortable={sortable} />
          <Container fluid>
            <Row>
              {/*test if the loading in the store is true - to show a loading spinner*/}
              {loading ?
                <div style={{ display: 'flex-col', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
                  <div style={{ margin: 'auto', display: 'table' }}>
                    <Spinner animation="border" variant="primary" style={{ flex: 1, alignSelf: 'center' }} />
                  </div>
                  <h4>Loading...</h4>
                </div> :
                <Col md={{ span: 6, offset: 3 }}>
                  <Switch>
                    <Route exact path="/">
                      <Redirect to="/home" />
                    </Route>
                    <Route
                      path='/home'
                      default
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
                      }} />
                    <Route
                      path='/post'
                      component={() => {
                        setSortable(true)
                        return <PostDetail postId={selected.id} />
                      }} />
                    <Route
                      path='/editPost'
                      render={() => {
                        setSortable(false)
                        return <EditPage id={selected.id} type='post' />
                      }} />
                    <Route
                      path='/editComment'
                      render={() => {
                        setSortable(false)
                        return <EditPage id={selected.id} type='comment' />
                      }} />
                    {Array.isArray(categories) && categories.map((category) => (
                      <Route
                        path={`/${category.path}`} exact
                        key={category.name}
                        render={() => {
                          setSortable(true);
                          return <PostList category={category.name} />
                        }} />
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


