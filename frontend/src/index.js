import React from 'react'
import ReactDOM from 'react-dom'
import { App }  from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import middleware from './reduxStore/middleware'
import reducers from './reduxStore/reducers'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css';

const store = createStore(reducers, middleware)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
