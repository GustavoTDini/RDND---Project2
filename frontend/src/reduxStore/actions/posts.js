import { RECEIVE_POSTS } from '../actionsTypes'

export function receivePosts (posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  }
}
