import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { receivePosts, receivePostsByCategories } from '../reduxStore/actions/posts'
import PostListItem from './PostListItem'
import EmptyList from './EmptyList'
import { createPostList, sortPostList, capitalizeString, returnSearchedArray } from '../Utilities/helperFunctions'

export default function PostList(props) {

  const dispatch = useDispatch()

  // receive all posts if is in home - or a single category if that one is selected
  useEffect(() => {
    if (props.category) {
      dispatch(receivePostsByCategories(props.category))
    } else {
      dispatch(receivePosts())
    }
  }, [dispatch, props.category])

  // Sorting and Search variables to order the posts list
  const sortingType = useSelector(state => state.sorting.sortBy)
  const descending = useSelector(state => state.sorting.direction)
  const searchString = useSelector(state => state.search)

  // get the list acording to the sorting and selector - once it is already in the store
  const posts = useSelector(state => returnSearchedArray(sortPostList(createPostList(state.posts), sortingType, descending), searchString))

<<<<<<< HEAD

  if (posts.length === 0){
    
    return(
      <EmptyList 
        type="posts"/>
    )
=======
  // Check if the List is empty to show the empty list warning
  if (posts.length === 0) {
    if (searchString !== '') {
      return (
        <EmptyList
          type="posts" />
      )
    } else {
      return (
        <EmptyList
          type="emptyPosts" />
      )
    }
>>>>>>> d97b23d5c96c6ce7271286fc551cb31f8428e6a6
  }

  return (
    <div>
      {props.category ?
        <h2>{`${capitalizeString(props.category)} posts`}</h2> : null
      }
      {posts.map((post) => (
        <PostListItem key={post.id} postId={post.id} />
      ))}
    </div>
  )
}
