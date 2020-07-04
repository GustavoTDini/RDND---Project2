import {
  ADD_POST,
  GET_POST_BY_ID,
  EDIT_POST
} from '../actionsTypes'

import {
  GET_COMMENT_BY_ID,
  EDIT_COMMENT
} from '../actionsTypes'


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
    default:
      return state
  }
}