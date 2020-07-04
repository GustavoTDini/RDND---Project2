
export function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }
  
export function formatPost ( title, body, author, category ) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    title: title,
    body: body,
    author: author,
    category: category,
    }
}


export function formatComment ( body, author, parentId ) {
  return {
      id: generateUID(),
      timestamp: Date.now(),
      body: body,
      author: author,
      parentId: parentId,
      }
  }