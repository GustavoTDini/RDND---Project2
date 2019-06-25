import { RECEIVE_CATEGORIES } from '../Utilities/actionsTypes'

export function receiveCategories (categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories,
  }
}
