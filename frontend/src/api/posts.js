import { headers, api } from "../api/readerApi";
import { formatPost } from "../Utilities/APIHelpers";

export const _getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

export const _getPostsByCategories = (categoryName) =>
  fetch(`${api}/${categoryName}/posts/`, { headers })
    .then(res => res.json())

export const _addNewPost = (title, body, author, category) => {
  return fetch(`${api}/posts`, {
    method: 'POST',
    headers,
    body: JSON.stringify(formatPost(
      title,
      body,
      author,
      category,
    ))
  }).then(res => res.json())
}



export const _getPostsById = (postId) => 
  fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())

export const _votePost = (postId, vote) => {
  fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option: vote })
  })
    .then(res => res.json())
}

export const _editPost = ({ postId, title, body }) => 
  fetch(`${api}/posts/${postId}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(
      title,
      body,
    )
      .then(res => res.json())
  })

export const _deletePost = ({ postId }) => 
  fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers,
  })
    .then(res => res.json())
