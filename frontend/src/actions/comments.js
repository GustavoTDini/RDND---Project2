import { RECEIVE_COMMENTS } from '../Utilities/actionsTypes'

export function receiveComments (comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments,
  }
}
