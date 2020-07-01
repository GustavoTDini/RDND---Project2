import { showLoading, hideLoading } from './loading'
import {
  RECEIVE_COMMENTS_BY_POST,
  ADD_COMMENT,
  GET_COMMENT_BY_ID,
  VOTE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT
} from '../actionsTypes'
import {
  _getCommentsByPost,
  _addNewComment,
  _getCommentById,
  _voteComment,
  _editComment,
  _deleteComment
} from '../../api/comments'


export function receivePostComments(postId) {
  return (dispatch) => {
    dispatch(showLoading())
    return _getCommentsByPost(postId)
      .then((comments) => {
        dispatch({
          type: RECEIVE_COMMENTS_BY_POST,
          postId,
          comments,
        })
      }).then(dispatch(hideLoading()))
  }
}

export function addComment(body, author, postId) {
  return (dispatch) => {
    dispatch(showLoading())
    return _addNewComment(body, author, postId)
      .then((newComment) => {
        dispatch({
          type: ADD_COMMENT,
          newComment,
        })
      }).then(dispatch(hideLoading()))
  }
}

export function getSingleComment(commentId) {
  return (dispatch) => {
    dispatch(showLoading())
    return _getCommentById(commentId)
      .then((comment) => {
        dispatch({
          type: GET_COMMENT_BY_ID,
          comment,
        })
      }).then(dispatch(hideLoading()))
  }
}

export function voteForComment(commentId, vote) {
  return (dispatch) => {
    return _voteComment(commentId, vote)
      .then((comment) => {
        dispatch({
          type: VOTE_COMMENT,
          comment,
        })
      })
  }
}

export function editPost(commentId, body) {
  return (dispatch) => {
    dispatch(showLoading())
    return _editComment({ commentId, body })
      .then((comment) => {
        dispatch({
          type: EDIT_COMMENT,
          comment,
        })
      }).then(dispatch(hideLoading()))
  }
}

export function deleteComment(commentId) {
  return (dispatch) => {
    dispatch(showLoading())
    return _deleteComment({ commentId })
      .then((comment) => {
        dispatch({
          type: DELETE_COMMENT,
          comment,
        })
      }).then(dispatch(hideLoading()))
  }
}
