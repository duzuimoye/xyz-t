import metaViewState from '../state/metaView'
import {
  VISIBLE_SIZEBARLEFT_TOOL_ACTION,
  VISIBLE_SIDEBAR_RIGHT_CONFIG_BOX,
  RESIZE_DRAWINGBOARD_ACTION
} from '../actions/index'

function reducer(state = metaViewState, action: any) {
  switch (action.type) {
    case VISIBLE_SIZEBARLEFT_TOOL_ACTION:
      return {
        ...state,
        ...action.payload
      }
    case VISIBLE_SIDEBAR_RIGHT_CONFIG_BOX:
      return {
        ...state,
        ...action.payload
      }
    case RESIZE_DRAWINGBOARD_ACTION:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default reducer