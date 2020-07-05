import React from 'react'

export default function EmptyList(props) {

  let message = ''
  switch (props.type){
    case 'posts':
      message = 'There are no posts with those conditions.\nPlease Try Again!!'
      break
    case 'comments':
      message = 'There are no comments with those conditions.\nPlease Try Again!!'
      break
    case 'emptyComments':
      message = 'There are no comments for this post.\nBe the first one to comment!!'
      break
    default:

  }




  return (
    <div style={{ display: 'flex', marginTop: 20 }}>
        <h3>
          {message}
        </h3>
    </div>
  )
}
