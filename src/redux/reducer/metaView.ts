import {
  VISIBLE_SIZEBARLEFT_TOOL_ACTION,
  VISIBLE_SIDEBAR_RIGHT_CONFIG_BOX,
  RESIZE_DRAWINGBOARD_ACTION,
  RESIZE_AUTO_DRAWINGBOARD_ACTION,
  UPDATE_DRAWINGBOARD_SIZE_ACTION,
  FULL_SCREEN_ACTION,
  VISIBLE_SIDEBAR_LEFT_ICONS_ACTION
} from '../actions/index'
import metaViewState from '../state/metaView'

function reducer(state: State.MetaView = metaViewState, action: any): State.MetaView {
  if (action.type) {
    switch (action.type) {
      case VISIBLE_SIDEBAR_LEFT_ICONS_ACTION:
        return {
          ...state,
          ...action.payload
        }
      case FULL_SCREEN_ACTION:
        return {
          ...state,
          ...action.payload
        }
      case VISIBLE_SIZEBARLEFT_TOOL_ACTION:
        return {
          ...state,
          ...action.payload
        }
      case RESIZE_AUTO_DRAWINGBOARD_ACTION:
        return {
          ...state,
          ...action.payload
        }
      case UPDATE_DRAWINGBOARD_SIZE_ACTION:
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

  return state
}

export default reducer