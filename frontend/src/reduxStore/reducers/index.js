import { combineReducers } from 'redux'
import categories from './categories'
import comments from './comments'
import posts from './posts'
import sorting from './sorting'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
    posts,
    categories,
    comments,
    sorting,
    loadingBar: loadingBarReducer
});
