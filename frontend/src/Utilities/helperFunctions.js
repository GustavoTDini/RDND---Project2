export function createPostList (postList) {
  let arrayList = []
  for ( let index in postList){
    arrayList = arrayList.concat(postList[index])
  }
  return arrayList
}

export function formatTime(timestamp){
  const date = new Date(timestamp)
  var options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'}
  const dateString = date.toLocaleString( 'en-US' , options)
  return dateString
}

export function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}