import { RECEIVE_COMMENTS_BY_POST, 
         ADD_COMMENT,
         GET_COMMENT_BY_ID,
         VOTE_COMMENT,
         EDIT_COMMENT,
         DELETE_COMMENT} from '../actionsTypes'

export default function comments(state = {}, action) {
    switch (action.type) {
        case RECEIVE_COMMENTS_BY_POST:
            return {
                ...state,
                [action.parentId]: action.comments
            }
        case ADD_COMMENT:
            return {
                ...state,
                ...state[action.parentId].concat(action.comment)
            }
        case GET_COMMENT_BY_ID:
            return action.comment
        case VOTE_COMMENT:
            return action.comment
        case EDIT_COMMENT:
            return action.comment
        case DELETE_COMMENT:
            return action.comment
        default:
            return state
    }
}
