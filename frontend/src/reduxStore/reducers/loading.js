import {
  RECEIVE_CATEGORIES,
  RECEIVE_POSTS,
  RECEIVE_POSTS_BY_CATEGORIES,
  ADD_POST,
  GET_POST_BY_ID,
  VOTE_POST,
  EDIT_POST,
  DELETE_POST,
  RECEIVE_COMMENTS_BY_POST,
  ADD_COMMENT,
  GET_COMMENT_BY_ID,
  VOTE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT
} from '../actionsTypes'

export default function loading(state = true, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return false
    case RECEIVE_POSTS:
      return false
    case RECEIVE_POSTS_BY_CATEGORIES:
      return false
    case ADD_POST:
      return false
    case GET_POST_BY_ID:
      return false
    case VOTE_POST:
      return false
    case EDIT_POST:
      return false
    case DELETE_POST:
      return false
    case RECEIVE_COMMENTS_BY_POST:
      return false
    case ADD_COMMENT:
      return false
    case GET_COMMENT_BY_ID:
      return false
    case VOTE_COMMENT:
      return false
    case EDIT_COMMENT:
      return false
    case DELETE_COMMENT:
      return false
    default:
      return state
  }
}