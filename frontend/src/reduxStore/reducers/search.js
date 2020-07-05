import {
  SET_SEARCH,
  CLEAR_SEARCH
} from '../actionsTypes'

export default function sorting(state = '', action) {
  switch (action.type) {
    case SET_SEARCH:
      return action.searchString
    case CLEAR_SEARCH:
      return ''
    default:
      return state
  }
}