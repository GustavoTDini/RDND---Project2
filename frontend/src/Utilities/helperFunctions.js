export function createPostList (postList) {
  let arrayList = []
  for ( let index in postList){
    arrayList = arrayList.concat(postList[index])
  }
  console.log(arrayList)
  return arrayList
}