import { RECEIVE_CATEGORIES } from '../actionsTypes'

export default function categories ( state = {}, action){
    switch (action.type){
        case RECEIVE_CATEGORIES :
            return{
                ...state,
                ...action.categories.categories
            }
        default:
            return state
    }
}
