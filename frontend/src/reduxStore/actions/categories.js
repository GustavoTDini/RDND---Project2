import { RECEIVE_CATEGORIES } from '../actionsTypes'
import { _getAllCategories } from '../../api/categories'
import { showLoading, hideLoading } from './loading'

export function receiveCategories() {
  return (dispatch) => {
    dispatch(showLoading())
    return _getAllCategories()
      .then((categories) => {
        dispatch({
          type: RECEIVE_CATEGORIES,
          categories,
        })
      })        
      .then(dispatch(hideLoading()))
  }
}