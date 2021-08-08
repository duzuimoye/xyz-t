import { DRAWINGBOARDLIST_PUSH_ACTION } from '../actions/index'
import projectState from '../state/project'

function reducer(state = projectState, action: any) {
  switch (action.type) {
    case DRAWINGBOARDLIST_PUSH_ACTION:
      return {
        ...state,
        drawingBoard: action.payload.drawingBoard
      }
    default:
      return state
  }
}

export default reducer