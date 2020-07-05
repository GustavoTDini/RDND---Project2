import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createPostList, sortPostList, capitalizeString, returnSearchedArray} from '../Utilities/helperFunctions'
import { PostListItem } from './PostListItem'
import { receivePosts, receivePostsByCategories } from '../reduxStore/actions/posts'
import EmptyList from './EmptyList'

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
  const searchString = useSelector(state => state.search)

  const posts = useSelector(state => returnSearchedArray(sortPostList(createPostList(state.posts), sortingType, descending), searchString))


  if (posts.length === 0){
    return(
      <EmptyList 
        type="posts"/>
    )
  }
  
  return (
    <div>
      {props.category?
      <h2>{`${capitalizeString(props.category)} posts`}</h2>:null
    }
      {posts.map((post) => (
        <PostListItem key={post.id} postId={post.id}/>
      ))}
    </div>
  )
}
