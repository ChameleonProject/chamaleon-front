import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import Home from './components/Home'
import Groups from './components/Groups'

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
        <Route path="/" component={Home}>
        <Route path="/groups" component={Groups}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)