import {
    RECEIVE_POSTS,
    RECEIVE_POSTS_BY_CATEGORIES,
    ADD_POST
} from '../actionsTypes'

export default function posts(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts
        case RECEIVE_POSTS_BY_CATEGORIES:
            return action.posts
        case ADD_POST:
            return {
                ...state,
                ...action.post,
            }
        default:
            return state
    }
}
