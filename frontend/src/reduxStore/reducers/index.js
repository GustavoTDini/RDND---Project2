import { combineReducers } from 'redux'
import categories from './categories'
import comments from './comments'
import posts from './posts'
import sorting from './sorting'
import selectedItem from './selectedItem'
import loading from './loading'
import search from './search'

export default combineReducers({
    search,
    loading,
    posts,
    selectedItem,
    categories,
    comments,
    sorting,
});
