import {
    RECEIVE_COMMENTS_BY_POST,
    ADD_COMMENT,
    GET_COMMENT_BY_ID,
    VOTE_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT
} from '../actionsTypes'

export default function comments(state = {}, action) {
    switch (action.type) {
        case RECEIVE_COMMENTS_BY_POST:
            return {
                [action.postId]: action.comments
            }
        case ADD_COMMENT:
            return {
                [action.newComment.parentId]: [
                    action.newComment, ...state[action.newComment.parentId]
                ]
            }
        case GET_COMMENT_BY_ID:
            return action.comment
        case VOTE_COMMENT:
            var otherComments = state[action.comment.parentId].filter((comment) => comment.id !== action.comment.id)
            return {
                [action.comment.parentId]: [action.comment, ...otherComments]
            }
        case EDIT_COMMENT:
            return action.comment
        case DELETE_COMMENT:
            return {
                [action.comment.parentId]: state[action.comment.parentId].filter((comment) => comment.id !== action.comment.id)
            }
        default:
            return state
    }
}

