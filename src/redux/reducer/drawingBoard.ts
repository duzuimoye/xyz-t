import drawingBoardState from '../state/drawingBoard'
import { getComponentByComponentId } from '../../utils/component'
import {
  ACTIVE_COMPONENT_ACTION,
  PUSH_COMPONENT_ACTION
} from '../actions/index'

export const activeComponentFn = (
  state = drawingBoardState,
  obj: {
    activeComponent: DrawingBoard.Component,
    componentId: string
  }) => {
  const activeComp = getComponentByComponentId(obj.componentId, state.drawingboardList)

  if (activeComp) {
    return {
      ...state,
      activeComponent: activeComp
    }
  }

  return state
}

function reducer(state = drawingBoardState, action: any) {
  switch (action.type) {
    case ACTIVE_COMPONENT_ACTION:
      return {
        ...state,
        ...action.payload
      }
    case PUSH_COMPONENT_ACTION:
      return {
        ...state,
        drawingboardList: action.payload
      }
    default:
      return state
  }
}

export default reducer