import metaViewState from '../state/metaView'
import {
  VISIBLE_SIZEBARLEFT_TOOL_ACTION,
  TEST_AXIOS_AXIOS,
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
    case TEST_AXIOS_AXIOS:
      return {
        ...state,
        testAxios: action.payload.testAxios
      }
    default:
      return state
  }
}

export default reducer