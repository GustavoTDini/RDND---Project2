import { RECEIVE_CATEGORIES } from '../actionsTypes'
import { _getAllCategories } from '../../api/categories'

export function receiveCategories() {
  return (dispatch) => {
    _getAllCategories()
      .then((categories) => {
        dispatch({
          type: RECEIVE_CATEGORIES,
          categories,
        })
      })
  }
}