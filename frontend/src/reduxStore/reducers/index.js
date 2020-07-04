import { combineReducers } from 'redux'
import categories from './categories'
import comments from './comments'
import posts from './posts'
import sorting from './sorting'
import selectedItem from './selectedItem'
import loading from './loading'

export default combineReducers({
    loading,
    posts,
    selectedItem,
    categories,
    comments,
    sorting,
});
