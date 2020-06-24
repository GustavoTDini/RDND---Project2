export const api = process.env.REACT_APP_READABLE_API || 'http://localhost:3001';

export let token = localStorage.token

console.log(api);



if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

export const headers = {
  'Authorization': token,
  'Content-type': 'application/json'
}
