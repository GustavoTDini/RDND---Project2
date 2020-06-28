import { SHOW_LOADING, HIDE_LOADING } from '../actionsTypes'

export default function loading(state = {}, action) {
  switch (action.type) {
    case SHOW_LOADING:
      return true
    case HIDE_LOADING:
      return false
    default:
      return state
  }
}