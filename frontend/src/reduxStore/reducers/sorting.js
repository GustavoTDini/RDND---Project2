import {
  SET_SORTING_TYPE,
  SET_SORTING_DIRECTION
} from '../actionsTypes'

// the sorting store has 2 elements, type and direction stored in a json
export default function sorting(state = {}, action) {
  switch (action.type) {
    case SET_SORTING_TYPE:
      return {
        ...state,
        sortBy: action.sortBy
      }
    case SET_SORTING_DIRECTION:
      return {
        ...state,
        direction: !state.direction
      }
    default:
      return state
  }
}