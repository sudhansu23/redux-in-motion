import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { reducer as freezer } from './ducks/freezer'
import logger from './middleware/logger'

const rootReducer = combineReducers({
  freezer,
})

export default createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
