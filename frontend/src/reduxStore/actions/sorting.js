import { SET_SORTING_TYPE, SET_SORTING_DIRECTION } from '../actionsTypes'

export function setSortingType(sortBy) {
  return {
    type: SET_SORTING_TYPE,
    sortBy,
  }
}

export function setSortingDirection() {
  return {
    type: SET_SORTING_DIRECTION,
  }
}