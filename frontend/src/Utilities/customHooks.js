import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { showLoading, hideLoading } from '../reduxStore/actions/loading'

export function useDispatchWithLoading(dispatchedAction, data){
  const dispatch = useDispatch()

  const loading = useSelector(state => state.loading)
  

  dispatch(showLoading)
  console.log('custon hooks')

  useEffect(() => {
    dispatch(showLoading())
    async function dispatch(){
      await dispatch(dispatchedAction())

    }
    dispatch(hideLoading())
  }, [])

  

  
  const fetchedData = useSelector(state => state[data])

  return {
    data: fetchedData,
    loading: loading
  }
}

// It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

// useEffect(() => {
//   async function fetchData() {
//     // You can await here
//     const response = await MyAPI.getData(someId);
//     // ...
//   }
//   fetchData();
// }, [someId]); // Or [] if effect doesn't need props or state