import { headers, api } from "../api/readerApi";
import { formatComment } from "../Utilities/APIHelpers";


export const getCommentsByPost = (postId) => {
    return fetch(`${api}/posts/:${postId}/comments`, {  headers })
      .then(res => res.json())
  }

  export const addNewComment = ( body, author, postId) => {
    fetch(`${api}/comments`, {
      method: 'POST',
      headers,
      body: JSON.stringify(formatComment({
        body,
        author,
        postId,
      }))
    }).then(res => res.json())
  }

  export const getCommentById = (commentId) => {
    fetch(`${api}/comments/${commentId}`, { headers })
      .then(res => res.json())
  }

  export const  voteComment = (commentId, vote) => {
    fetch(`${api}/comments/${commentId}`, {
      method: 'POST',
      headers,
      body: JSON.stringify({option: vote})
    })
      .then(res => res.json())
  }

  export const editComment = ({commentId, body}) => {
    fetch(`${api}/comments/${commentId}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(
        Date.now(),
        body,
      )
      .then(res => res.json())
    })
  }

  export const deleteComment = ({commentId}) => {
    fetch(`${api}/comments/${commentId}`, {
      method: 'DELETE',
      headers,
    })
    .then(res => res.json())
  }
