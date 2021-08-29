import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import appReducer from './reducer/app'
import DrawingBoardReducer from './reducer/drawingBoard'
import metaViewReducer from './reducer/metaView'

export default createStore(
  combineReducers({
    appReducer,
    metaViewReducer,
    DrawingBoardReducer
  }),
  compose(
    applyMiddleware(...[reduxThunk]),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
