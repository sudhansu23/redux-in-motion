import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as freezer } from './ducks/freezer'
import logger from './middleware/logger'
import logger2 from './middleware/logger2'

const rootReducer = combineReducers({
  freezer,
})

export default createStore(rootReducer, applyMiddleware(logger, logger2))
