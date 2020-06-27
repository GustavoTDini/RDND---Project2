import {
  GET_POST_BY_ID,
  VOTE_POST,
  EDIT_POST,
  DELETE_POST
} from '../actionsTypes'

export default function posts(state = {}, action) {
  switch (action.type) {
    case GET_POST_BY_ID:
      return action.post
    case VOTE_POST:
      return action.post
    case EDIT_POST:
      return action.post
    case DELETE_POST:
      return action.post
    default:
      return state
  }
}