import { SET_SEARCH, CLEAR_SEARCH } from '../actionsTypes'

export function setSearch(searchString) {
  return {
    type: SET_SEARCH,
    searchString,
  }
}

export function clearSearch() {
  return {
    type: CLEAR_SEARCH,
  }
}