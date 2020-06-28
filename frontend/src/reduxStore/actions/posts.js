import { formatPost } from '../../Utilities/APIHelpers'
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
        dispatch(hideLoading())
      })
  }
}

export function receivePostsByCategories(categorieName) {
  return (dispatch) => {
    dispatch(showLoading())
    _getPostsByCategories()
      .then((posts) => {
        dispatch({
          type: RECEIVE_POSTS_BY_CATEGORIES,
          posts,
        })
        dispatch(hideLoading())
      })
  }
}


export function addPost(title, body, author, category) {
  return (dispatch) => {
    dispatch(showLoading())
    const newPost = formatPost(
      title,
      body,
      author,
      category,
    )
    _addNewPost(newPost)
      .then(() => {
        dispatch({
          type: ADD_POST,
          newPost,
        })
        dispatch(hideLoading())
      })
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
        dispatch(hideLoading())
      })
  }
}

export function voteForPost(postId, vote) {
  return (dispatch) => {
    dispatch(showLoading())
    _votePost(postId, vote)
      .then((post) => {
        dispatch({
          type: VOTE_POST,
          post,
        })
        dispatch(hideLoading())
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
        dispatch(hideLoading())
      })
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
        dispatch(hideLoading())
      })
  }
}


