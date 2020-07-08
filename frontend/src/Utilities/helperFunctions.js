// function to create a array for the posts to iterate in the view
export function createPostList(postList) {
  let arrayList = []
  for (let index in postList) {
    arrayList = arrayList.concat(postList[index])
  }
  return arrayList
}

// function to sort the listarray depending on the options
export function sortPostList(postList, sort, direction) {
  if (direction) {
    switch (sort) {
      case 'author':
        return postList.sort((a, b) => a[sort].localeCompare(b[sort]));
      case 'timestamp':
        return postList.sort((a, b) => a[sort] - b[sort])
      case 'voteScore':
        return postList.sort((a, b) => a[sort] - b[sort])
      default:
        return postList
    }
  } else {
    switch (sort) {
      case 'author':
        return postList.sort((a, b) => b[sort].localeCompare(a[sort]));
      case 'timestamp':
        return postList.sort((a, b) => b[sort] - a[sort])
      case 'voteScore':
        return postList.sort((a, b) => b[sort] - a[sort])
      default:
        return postList
    }
  }
}

// format the time for human readability - set to en-US (tried to use locale, but it became strange to mix languages)
export function formatTime(timestamp) {
  const date = new Date(timestamp)
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }
  const dateString = date.toLocaleString('en-US', options)
  return dateString
}

// function to capitalize the first letter to use on some UI
export function capitalizeString(string) {
  return string[0].toUpperCase() + string.slice(1);
}

// function to filter the array to return only those that contain the search string in the title, body and author
export function returnSearchedArray(searchArray, searchString) {
  let newArray = searchArray
  if (searchString !== '') {
    let titleSearch = []
    if (searchArray[0].title) {
      titleSearch = searchArray.filter((item) => item.title.includes(searchString))
    }
    const bodySearch = searchArray.filter((item) => item.body.includes(searchString))
    const authorSearch = searchArray.filter((item) => item.author.includes(searchString))

    newArray = [...authorSearch, ...bodySearch, ...titleSearch]

    newArray = [...new Set(newArray)]
  }
  return newArray
}

