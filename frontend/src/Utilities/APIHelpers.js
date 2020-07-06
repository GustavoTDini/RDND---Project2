
export function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

// format post for the add API
export function formatPost(title, body, author, category) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    title: title,
    body: body,
    author: author,
    category: category,
  }
}

// format post for the edit API
export function formatEditPost(title, body) {
  return {
    title: title,
    body: body
  }
}

// format comment for the add API
export function formatComment(body, author, parentId) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    body: body,
    author: author,
    parentId: parentId,
  }
}

// format comment for the edit API
export function formatEditComment(body) {
  return {
    timestamp: Date.now(),
    body: body
  }
}