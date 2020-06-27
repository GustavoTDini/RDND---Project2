import { headers, api } from "../api/readerApi";

export const _getAllCategories = () => 
    fetch(`${api}/categories`, { method: 'GET', headers })
      .then(res => res.json())
      .then(data => data.categories)

