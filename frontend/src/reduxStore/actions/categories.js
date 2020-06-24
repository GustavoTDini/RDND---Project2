import { RECEIVE_CATEGORIES } from '../actionsTypes'

export function receiveCategories (categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories,
  }
}
