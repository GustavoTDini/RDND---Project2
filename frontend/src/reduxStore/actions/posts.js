import { showLoading, hideLoading } from './loading'
import {
  RECEIVE_POSTS,
  RECEIVE_POSTS_BY_CATEGORIES,
  ADD_POST,
  GET_POST_BY_ID,
  VOTE_POST,
  EDIT_POST,
  DELETE_POST
} from '../actionsTypes'
import {
  _getAllPosts,
  _getPostsByCategories,
  _addNewPost,
  _getPostsById,
  _votePost,
  _editPost,
  _deletePost
} from '../../api/posts'


export function receivePosts() {
  return (dispatch) => {
    dispatch(showLoading())
    _getAllPosts()
      .then((posts) => {
        dispatch({
          type: RECEIVE_POSTS,
          posts,
        })
      }).then(dispatch(hideLoading()))
  }
}

export function receivePostsByCategories(categoryName) {
  console.log(categoryName)
  return (dispatch) => {
    dispatch(showLoading())
    _getPostsByCategories(categoryName)
      .then((posts) => {
        dispatch({
          type: RECEIVE_POSTS_BY_CATEGORIES,
          posts,
        })
      }).then(dispatch(hideLoading()))
  }
}


export function addPost(title, body, author, category) {
  console.log(title, body, author, category )
  return (dispatch) => {
    dispatch(showLoading())
    _addNewPost(title, body, author, category)
      .then((newPost) => {
        dispatch({
          type: ADD_POST,
          newPost,
        })
      }).then(dispatch(hideLoading()))
  }
}

export function getSinglePost(postId) {
  return (dispatch) => {
    dispatch(showLoading())
    _getPostsById(postId)
      .then((post) => {
        dispatch({
          type: GET_POST_BY_ID,
          post,
        })
      }).then(dispatch(hideLoading()))
  }
}

export function voteForPost(postId, vote) {
  return (dispatch) => {
    _votePost(postId, vote)
      .then((post) => {
        dispatch({
          type: VOTE_POST,
          post,
        })
      })
  }
}

export function editPost(postId, title, body) {
  return (dispatch) => {
    dispatch(showLoading())
    _editPost({ postId, title, body })
      .then((post) => {
        dispatch({
          type: EDIT_POST,
          post,
        })
      }).then(dispatch(hideLoading()))
  }
}

export function deletePost(postId) {
  return (dispatch) => {
    dispatch(showLoading())
    _deletePost({ postId })
      .then((post) => {
        dispatch({
          type: DELETE_POST,
          post,
        })
      }).then(dispatch(hideLoading()))
  }
}


