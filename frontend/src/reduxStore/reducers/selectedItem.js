import {
  ADD_POST,
  GET_POST_BY_ID,
  EDIT_POST,
  GET_COMMENT_BY_ID,
  EDIT_COMMENT,
  ADD_COMMENT,
  VOTE_POST,
  DELETE_COMMENT
} from '../actionsTypes'

// this store has mixed actions of posts and comments to handle the item that is now used
export default function posts(state = {}, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        ...action.newPost
      }
    case EDIT_COMMENT:
      return action.comment
    case GET_COMMENT_BY_ID:
      return action.comment
    case GET_POST_BY_ID:
      return action.post
    case EDIT_POST:
      return action.post
    case ADD_COMMENT:
      return {
        ...state,
        commentCount: state.commentCount + 1
      }
    case DELETE_COMMENT:
      return {
        ...state,
        commentCount: state.commentCount - 1
      }
    case VOTE_POST:
      return action.post
    default:
      return state
  }
}