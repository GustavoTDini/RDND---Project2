import { headers, api } from "../api/readerApi";
import { formatPost } from "../Utilities/APIHelpers";


export const getAllPosts = () => {
    return fetch(`${api}/posts`, { headers })
      .then(res => res.json())
  }

  export const addNewPost = ( title, body, author, category) => {
    fetch(`${api}/posts`, {
      method: 'POST',
      headers,
      body: JSON.stringify(formatPost({
        title,
        body,
        author,
        category,
      }))
    }).then(res => res.json())
  }

  export const getPostsById = (postId) => {
    fetch(`${api}/posts/${postId}`, { headers })
      .then(res => res.json())
  }

  export const  votePost = (postId, vote) => {
    fetch(`${api}/posts/${postId}`, {
      method: 'POST',
      headers,
      body: JSON.stringify({option: vote})
    })
      .then(res => res.json())
  }

  export const editPost = ({postId, title, body}) => {
    fetch(`${api}/posts/${postId}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(
        title,
        body,
      )
      .then(res => res.json())
    })
  }

  export const deletePost = ({postId}) => {
    fetch(`${api}/posts/${postId}`, {
      method: 'DELETE',
      headers,
    })
    .then(res => res.json())
  }
