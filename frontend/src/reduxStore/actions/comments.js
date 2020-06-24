import { RECEIVE_COMMENTS } from '../actionsTypes'

export function receiveComments (comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments,
  }
}
