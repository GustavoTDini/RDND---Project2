import { headers, api } from "../api/readerApi";
import { formatComment } from "../Utilities/APIHelpers";


export const _getCommentsByPost = (postId) =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())

export const _addNewComment = (body, author, postId) => {
  return fetch(`${api}/comments`, {
    method: 'POST',
    headers,
    body: JSON.stringify(formatComment(
      body,
      author,
      postId,
    ))
  }).then(res => res.json())
}



export const _getCommentById = (commentId) =>
  fetch(`${api}/comments/${commentId}`, { headers })
    .then(res => res.json())


export const _voteComment = (commentId, vote) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option: vote })
  })
    .then(res => res.json())


export const _editComment = ({ commentId, body }) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(
      Date.now(),
      body,
    )
      .then(res => res.json())
  })


export const _deleteComment = ({ commentId }) => 
  fetch(`${api}/comments/${commentId}`, {
    method: 'DELETE',
    headers,
  })
    .then(res => res.json())

