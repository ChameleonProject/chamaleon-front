import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import HomeContainer from './components/Home/home.container.js'
import Groups from './components/Groups'
import About from './components/About'

import profile from './reducers'

import './index.css'
const store = createStore(
  combineReducers({
    ...profile,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={HomeContainer}>
        <Route path="/about" component={About}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)