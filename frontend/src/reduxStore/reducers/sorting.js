import {
  SET_SORTING_TYPE,
  SET_SORTING_DIRECTION
} from '../actionsTypes'

export default function posts(state = {}, action) {
  switch (action.type) {
    case SET_SORTING_TYPE:
      return {
        ...state,
        [state.sortBy]: action.sortBy
      }
    case SET_SORTING_DIRECTION:
      return {
        ...state,
        [state.direction]: action.ascending
      }
    default:
      return state
  }
}