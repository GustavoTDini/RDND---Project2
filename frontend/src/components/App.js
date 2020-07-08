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
import BadRoute from './BadRoute'

export default function App() {
  const dispatch = useDispatch()

  // at start get the categories from the server - to populate the nav and set the category lists
  useEffect(() => {
    dispatch(receiveCategories())
  }, [dispatch])

  const categories = useSelector(state => state.categories)
  const loading = useSelector(state => state.loading)

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
                      exact
                      default
                      render={() => {
                        setSortable(true)
                        return <PostList />
                      }
                      } />
                    <Route
                      path='/newPost'
                      exact
                      render={() => {
                        setSortable(false)
                        return <AddPost />
                      }} />
                    <Route
                      path='/edit/'
                      render={() => {
                        setSortable(false)
                        return <EditPage />
                      }} />

                    {Array.isArray(categories) && categories.map((category) => (
                      <Route
                        path={`/${category.path}/post/`}
                        key={`${category.path}post`}
                        render={() => {
                          setSortable(true)
                          return <PostDetail />
                        }} />
                    ))}
                    {Array.isArray(categories) && categories.map((category) => (
                      <Route
                        path={`/${category.path}`}
                        exact
                        key={category.name}
                        render={() => {
                          setSortable(true);
                          return <PostList category={category.name} />
                        }} />
                    ))}
                    {/* added badRoute Components to render when a page it´s not found */}
                    <Route
                      path='/badRoute'
                      exact
                      render={() => {
                        setSortable(false)
                        return <BadRoute />
                      }} />
                    <Route
                      render={() => {
                        setSortable(false)
                        return <BadRoute />
                      }} />
                  </Switch>
                </Col>}
            </Row>
          </Container>
        </Fragment>
      </Router>
    </div>
  )
}


