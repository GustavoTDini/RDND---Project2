import React from 'react'

export default function EmptyList(props) {

  let message1 = ''
  let message2 = ''
  //Set Various messages for the emptylist depending on the conditions
  switch (props.type){
    case 'posts':
      message1 = 'There are no posts with those conditions.'
      message2 = 'Please Try Again!!'
      break
    case 'comments':
      message1 = 'There are no comments with those conditions.'
      message2 = 'Please Try Again!!'
      break
    case 'emptyComments':
      message1 = 'There are no comments for this post.'
      message2 = 'Be the first one to comment!!'
      break
    case 'emptyPosts':
      message1 = 'This list is empty'
      message2 = 'Start posting!!'
      break
    default:
  }

  return (
    <div style={{ display: 'flex column', marginTop: 20, textAlign: 'center'}}>
        <h2>
          {message1}
        </h2>
        <h3>
          {message2}
        </h3>
    </div>
  )
}
