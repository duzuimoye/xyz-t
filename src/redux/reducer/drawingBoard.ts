import drawingBoardState from '../state/drawingBoard'

import {
  ACTIVE_COMPONENT_ACTION,
  PUSH_COMPONENT_ACTION,
  UPDATE_ACTIVE_COMPONENT_ACTION,
  SELECT_COMPONENT_ACTION,
  ACTIVE_PAGE_ACTION,
  UPDATE_LOCK_ACTION,
  CLOSE_FILE_ACTION,
  CLOSE_STACK_OPEN_FILE_ACTION
} from '../actions/index'
import {
  defaultState,
  catchIframeAction,
  closeFileAction,
  closeStackOpenFileAction,
  activePageAction,
  selectComponent,
  updateComponent,
  pushComponent
} from './reducerAction'

const withReduceProcessor = new Map([
  [ACTIVE_COMPONENT_ACTION, defaultState],
  [CLOSE_FILE_ACTION, closeFileAction],
  [CLOSE_STACK_OPEN_FILE_ACTION, closeStackOpenFileAction],
  [UPDATE_LOCK_ACTION, defaultState],
  [ACTIVE_PAGE_ACTION, activePageAction],
  [SELECT_COMPONENT_ACTION, selectComponent],
  [UPDATE_ACTIVE_COMPONENT_ACTION, updateComponent],
  [PUSH_COMPONENT_ACTION, pushComponent]
])

function reducer(state: State.Drawingboard = drawingBoardState, action: any): State.Drawingboard {
  catchIframeAction(action)

  if (withReduceProcessor.has(action.type)) {
    return withReduceProcessor.get(action.type)?.(state, action.payload)
  }

  return state
}

export default reducer