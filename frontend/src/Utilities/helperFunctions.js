export function createPostList(postList) {
  let arrayList = []
  for (let index in postList) {
    arrayList = arrayList.concat(postList[index])
  }
  return arrayList
}

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

export function capitalizeString(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export function loadingArray(isLoading, currentState) {
  let newArray = currentState
  if (Array.isArray(currentState)) {  
    if (isLoading){
      let falseIndex = currentState.findIndex((index) => index === false)
      newArray[falseIndex] = isLoading
    } else {
      let trueIndex = currentState.lastIndexOf(true)
    	newArray[trueIndex] = isLoading
    }
  } else{
    newArray = [isLoading, false, false, false, false]
  }
  return newArray
}

export function getLoadingStatusFromArray(isLoading) {
  if (Array.isArray(isLoading)) {
    let loading = isLoading.includes(true)
    return loading
  }
}

export function returnSearchedArray(searchArray, searchString) {
  let titleSearch = []
  if (searchArray[0].title){
    titleSearch = searchArray.filter((item) => item.title.includes(searchString))
  }
  const bodySearch = searchArray.filter((item) => item.body.includes(searchString))
  const authorSearch = searchArray.filter((item) => item.author.includes(searchString))

  const newArray = [...authorSearch, ...bodySearch, ...titleSearch]

  return [...new Set(newArray)]

}

