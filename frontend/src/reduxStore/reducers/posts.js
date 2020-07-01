import {
    RECEIVE_POSTS,
    RECEIVE_POSTS_BY_CATEGORIES,
    VOTE_POST
} from '../actionsTypes'

export default function posts(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts
        case RECEIVE_POSTS_BY_CATEGORIES:
            return action.posts
        case VOTE_POST:
            var otherPosts = state.filter((post) =>  post.id !== action.post.id)
              return [action.post, ...otherPosts]
        default:
            return state
    }
}
