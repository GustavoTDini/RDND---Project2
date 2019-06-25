import { headers, api } from "../api/readerApi";


export const getAllCategories = () => {
    return fetch(`${api}/categories`, { method: 'GET', headers })
      .then(res => res.json())
  }

  export const getPostsByCategories = (categoryName) => {
    return fetch(`${api}/${categoryName}/posts/`, { headers })
      .then(res => res.json())
  }
