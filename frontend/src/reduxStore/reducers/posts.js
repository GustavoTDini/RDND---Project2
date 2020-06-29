import {
    RECEIVE_POSTS,
    RECEIVE_POSTS_BY_CATEGORIES,
} from '../actionsTypes'

export default function posts(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts
        case RECEIVE_POSTS_BY_CATEGORIES:
            return action.posts
        default:
            return state
    }
}
