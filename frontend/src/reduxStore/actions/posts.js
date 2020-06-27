import { formatPost } from '../../Utilities/APIHelpers'
import { RECEIVE_POSTS, 
         RECEIVE_POSTS_BY_CATEGORIES,
         ADD_POST,
         GET_POST_BY_ID,
         VOTE_POST,
         EDIT_POST,
         DELETE_POST } from '../actionsTypes'
import { _getAllPosts, 
         _getPostsByCategories,
         _addNewPost,
         _getPostsById,
         _votePost, 
         _editPost,
         _deletePost } from '../../api/posts'


export function receivePosts() {
  return (dispatch) => {
    _getAllPosts()
      .then((posts) => {
        dispatch({
          type: RECEIVE_POSTS,
          posts,
        })
      })
  }
}

export function receivePostsByCategories(categorieName) {
  return (dispatch) => {
    _getPostsByCategories()
      .then((posts) => {
        dispatch({
          type: RECEIVE_POSTS_BY_CATEGORIES,
          posts,
        })
      })
  }
}


export function addPost (title, body, author, category) {
  return (dispatch) => {
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
      })
  }
}

export function getSinglePost(postId) {
  return (dispatch) => {
    _getPostsById(postId)
      .then((post) => {
        dispatch({
          type: GET_POST_BY_ID,
          post,
        })
      })
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

export function editPost( postId, title, body ) {
  return (dispatch) => {
    _editPost({ postId, title, body })
      .then((post) => {
        dispatch({
          type: EDIT_POST,
          post,
        })
      })
  }
}

export function deletePost( postId) {
  return (dispatch) => {
    _deletePost({ postId })
      .then((post) => {
        dispatch({
          type: DELETE_POST,
          post,
        })
      })
  }
}


