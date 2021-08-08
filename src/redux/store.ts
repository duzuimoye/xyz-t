import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import appReducer from './reducer/app'
import DrawingBoardReducer from './reducer/drawingBoard'

export default createStore(
  combineReducers({
    appReducer,
    DrawingBoardReducer
  }),
  compose(
    applyMiddleware(...[reduxThunk]),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
