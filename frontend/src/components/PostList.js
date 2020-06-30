import React, {useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createPostList, sortPostList} from '../Utilities/helperFunctions'
import { PostListItem } from './PostListItem'
import { receivePosts, receivePostsByCategories } from '../reduxStore/actions/posts'

export function PostList(props) {

  const dispatch = useDispatch()
  useEffect(() => {
    if (props.category){
      dispatch(receivePostsByCategories(props.category))
    } else{
      dispatch(receivePosts())
    }
  }, [dispatch, props.category])

  const sortingType = useSelector(state => state.sorting.sortBy)
  const descending = useSelector(state => state.sorting.direction)

  const posts = useSelector(state => sortPostList(createPostList(state.posts), sortingType, descending))
  console.log(posts)

  return (
    <div>
      {posts.map((post) => (
        <PostListItem key={post.id} postId={post.id}/>
      ))}
    </div>
  )
}
