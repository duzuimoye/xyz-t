import drawingBoardState from '../state/drawingBoard'
import { getComponentByComponentId } from '../../utils/component'
import {
  ACTIVE_COMPONENT_ACTION,
  PUSH_COMPONENT_ACTION,
  UPDATE_ACTIVE_COMPONENT_ACTION,
  SELECT_COMPONENT_ACTION
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

function pushComponent(state = drawingBoardState, activeComponent: DrawingBoard.Component) {
  const stashDrawingboard = JSON.parse(JSON.stringify(state.drawingboardList))

  stashDrawingboard.push(activeComponent)

  return {
    ...state,
    drawingboardList: stashDrawingboard,
    activeComponent
  }
}

function selectComponent(state = drawingBoardState, selectComponentId: string) {
  const activeComponent = state.drawingboardList.find((item: any) => item.componentId === selectComponentId)

  return {
    ...state,
    activeComponent
  }
}

function updateComponent(state = drawingBoardState, activeComponent: DrawingBoard.Component) {
  const stashDrawingboard = JSON.parse(JSON.stringify(state.drawingboardList))
  const index = stashDrawingboard.findIndex((item: DrawingBoard.Component) => item.componentId === activeComponent.componentId)

  if (index >= 0) {
    stashDrawingboard[index] = activeComponent
  }

  const frams = window.frames

  for (let i = 0; i < frams.length; i++) {
    const els = frams[0].document.querySelectorAll('.drawingboard-customclassname')

    els.forEach(item => {
      if (item.getAttribute('data-component-id') === activeComponent.componentId) {

        item.scrollIntoView({
          block: 'center',
          behavior: 'smooth',
          inline: 'center'
        })
      }
    })
  }

  return {
    ...state,
    drawingboardList: stashDrawingboard,
    activeComponent
  }
}

function catchIframeAction({ iframePropagationClick }: { iframePropagationClick: boolean }) {
  if (iframePropagationClick) {
    // useless
    document.body.click()
  }
}

function reducer(state = drawingBoardState, action: any) {
  catchIframeAction(action)
  switch (action.type) {
    case ACTIVE_COMPONENT_ACTION:
      return {
        ...state,
        ...action.payload
      }
    case SELECT_COMPONENT_ACTION:
      return selectComponent(state, action.payload)
    case UPDATE_ACTIVE_COMPONENT_ACTION:
      return updateComponent(state, action.payload)
    case PUSH_COMPONENT_ACTION:
      return pushComponent(state, action.payload)
    default:
      return state
  }
}

export default reducer