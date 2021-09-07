import { getComponentByComponentId } from '../../utils/component'
import drawingBoardState from '../state/drawingBoard'

export function activeComponentFn(
  state = drawingBoardState,
  obj: { activeComponent: DrawingBoard.Component, componentId: string }
) {
  const activeComp = getComponentByComponentId(obj.componentId, state.drawingboardList)

  if (activeComp) {
    return {
      ...state,
      activeComponent: activeComp
    }
  }

  return state
}

export function pushComponent(state = drawingBoardState, activeComponent: DrawingBoard.Component) {
  const stashDrawingboard = JSON.parse(JSON.stringify(state.drawingboardList))

  stashDrawingboard.push(activeComponent)

  return {
    ...state,
    drawingboardList: stashDrawingboard,
    activeComponent
  }
}

export function selectComponent(state = drawingBoardState, selectComponentId: string) {
  const activeComponent = state.drawingboardList.find((item: any) => item.componentId === selectComponentId)

  return {
    ...state,
    activeComponent
  }
}

type closeStackOpenFileType = 'closeRight' | 'closeLeft' | 'closeOther' | 'closeSaved'

export function closeStackOpenFileAction(
  state = drawingBoardState,
  { type, pageId }: { type: closeStackOpenFileType, pageId: string }
) {
  const index = state.stackFileOpened.findIndex((item: any) => item.pageId === pageId)
  let { activeFile } = state

  if (index < 0) {
    return state
  }

  if (type === 'closeOther') {
    activeFile = state.stackFileOpened[index]

    return {
      ...state,
      activeFile,
      stackFileOpened: [activeFile]
    }
  }

  if (type === 'closeRight') {
    activeFile = state.stackFileOpened[index]

    return {
      ...state,
      activeFile,
      stackFileOpened: state.stackFileOpened.slice(0, index + 1)
    }
  }

  if (type === 'closeLeft') {
    activeFile = state.stackFileOpened[index]

    return {
      ...state,
      activeFile,
      stackFileOpened: state.stackFileOpened.slice(index)
    }
  }

  return state
}

export function closeFileAction(state = drawingBoardState, closePageId: string) {
  const index = state.stackFileOpened.findIndex((item: any) => item.pageId === closePageId)
  const len = state.stackFileOpened.length
  const stackFileOpened = JSON.parse(JSON.stringify(state.stackFileOpened))
  let { activeFile } = state

  if (index < 0) {
    return state
  }

  stackFileOpened.splice(index, 1)

  if (activeFile?.pageId === closePageId) {
    activeFile = len >= 2 ? stackFileOpened.slice(-1)[0] : null
  }

  return {
    ...state,
    stackFileOpened,
    activeFile
  }
}

export function updateComponent(state = drawingBoardState, activeComponent: DrawingBoard.Component) {
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

export function catchIframeAction({ iframePropagationClick }: { iframePropagationClick: boolean }) {
  if (iframePropagationClick) {
    // todo: useless
    document.body.click()
  }
}

export function activePageAction(state = drawingBoardState, { pageId, label }: { pageId: string, label: string }) {
  const index = state.stackFileOpened.findIndex(item => item.pageId === pageId)
  const newStackFileOpen = JSON.parse(JSON.stringify(state.stackFileOpened))
  const activeFile = { label, pageId }

  if (index < 0) {
    newStackFileOpen.push(activeFile)

    return {
      ...state,
      activeFile,
      areaModuleValue: 'drawingboard',
      stackFileOpened: newStackFileOpen
    }
  }

  return {
    ...state,
    areaModuleValue: 'drawingboard',
    activeFile
  }
}

export function defaultState(state: State.Drawingboard, payload: any) {
  return {
    ...state,
    ...payload
  }
}