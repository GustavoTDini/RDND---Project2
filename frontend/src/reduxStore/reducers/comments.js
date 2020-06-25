import { RECEIVE_COMMENTS } from '../actionsTypes'

export default function comments ( state = {}, action){
    switch (action.type){
        case RECEIVE_COMMENTS :
            return{
                ...state,
                ...state, ...action.comments
            }
        default:
            return state
    }
}
