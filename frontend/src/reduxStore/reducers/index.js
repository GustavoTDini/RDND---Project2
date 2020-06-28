import { combineReducers } from 'redux'
import categories from './categories'
import comments from './comments'
import posts from './posts'
import sorting from './sorting'
import selectedPost from './selectedPost'
import loading from './loading'

export default combineReducers({
    loading,
    posts,
    selectedPost,
    categories,
    comments,
    sorting,
});
