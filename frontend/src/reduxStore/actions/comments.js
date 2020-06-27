import { formatComment } from '../../Utilities/APIHelpers'
import { RECEIVE_COMMENTS_BY_POST, 
         ADD_COMMENT,
         GET_COMMENT_BY_ID,
         VOTE_COMMENT,
         EDIT_COMMENT,
         DELETE_COMMENT} from '../actionsTypes'
import { _getCommentsByPost, 
         _addNewComment,
         _getCommentById,
         _voteComment,
         _editComment, 
         _deleteComment } from '../../api/posts'


export function receivePostComments(postId) {
  return (dispatch) => {
    _getCommentsByPost(postId)
      .then((comments) => {
        dispatch({
          type: RECEIVE_COMMENTS_BY_POST,
          comments,
        })
      })
  }
}

export function addComment(body, author, postId) {
  return (dispatch) => {
    const newPost = formatComment(
      body,
      author,
      postId,
    )
    _addNewComment(newPost)
      .then(() => {
        dispatch({
          type: ADD_COMMENT,
          newPost,
        })
      })
  }
}

export function getSingleComment(commentId) {
  return (dispatch) => {
    _getCommentById(commentId)
      .then((comment) => {
        dispatch({
          type: GET_COMMENT_BY_ID,
          comment,
        })
      })
  }
}

export function voteForComment(commentId, vote) {
  return (dispatch) => {
    _voteComment(commentId, vote)
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
    _editComment({ commentId, body })
      .then((comment) => {
        dispatch({
          type: EDIT_COMMENT,
          comment,
        })
      })
  }
}

export function deleteComment(commentId) {
  return (dispatch) => {
    _deleteComment({ commentId })
      .then((comment) => {
        dispatch({
          type: DELETE_COMMENT,
          comment,
        })
      })
  }
}
