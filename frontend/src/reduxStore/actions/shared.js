import { receivePosts } from './posts'
import { receiveCategories } from './categories'
import { getAllCategories } from '../../api/categories'
import { getAllPosts } from '../../api/posts'

  export function handleInitialData () {
    return async (dispatch) => {
      const [categories, posts] = await Promise.all([
        getAllCategories(),
        getAllPosts()
      ]);
      dispatch(receiveCategories(categories));
      dispatch(receivePosts(posts));
    }
  }
