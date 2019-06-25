import { RECEIVE_CATEGORIES } from '../Utilities/actionsTypes'

export default function categories ( state = {}, action){
    switch (action.type){
        case RECEIVE_CATEGORIES :
            return{
                ...state,
                ...action.categories
            }
        default:
            return state
    }
}
