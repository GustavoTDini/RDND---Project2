import { RECEIVE_POSTS } from '../Utilities/actionsTypes'

export function receivePosts (posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  }
}
