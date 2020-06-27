import { SET_SORTING_TYPE, SET_SORTING_DIRECTION } from './posts'

export function setSortingType (sortBy){
  return{
    type: SET_SORTING_TYPE,
    sortBy,
  }
}

export function setSortingDirection (ascending){
  return{
    type: SET_SORTING_DIRECTION,
    ascending,
  }
}