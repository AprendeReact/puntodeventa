import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducerProducts from './productsDuck'

const rootReducer = combineReducers({
  dataProducts: reducerProducts
})

export default function generateStore() {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
  return store;
}