import shortUuid from 'short-uuid'

export function newComponent(comp: string) {
  try {
    const newComp = JSON.parse(comp)

    newComp.id = shortUuid.generate()

    return JSON.stringify(newComp)

  } catch {
    throw new Error('drawing board ad component maybe some error.')
  }
}

/**
 * @description 根据组件id在整个组件树中查找对应的组件对象
 * @param componentId 当前组件Id
 * @param targetDrawingBoardList 查询的组件tree
 * @returns 当前组件对象
 */
export function getComponentByComponentId(
  componentId: string,
  targetDrawingBoardList: DrawingBoard.Component[]
): undefined | DrawingBoard.Component {
  let targetComponent: DrawingBoard.Component | undefined

  if (!Array.isArray(targetDrawingBoardList) || targetDrawingBoardList.length === 0) {
    return undefined
  }

  for (let i = 0; i < targetDrawingBoardList.length; i++) {
    if (targetDrawingBoardList[i].componentId === componentId) {
      targetComponent = targetDrawingBoardList[i]
    } else if (targetDrawingBoardList[i].childrenNode && targetDrawingBoardList[i].childrenNode.length) {
      targetComponent = getComponentByComponentId(componentId, targetDrawingBoardList[i].childrenNode)
    }
  }

  return targetComponent
}

/**
 * @description 根据组件id在整个组件树中查找对应的组件的父节点对象
 * @param componentId 当前组件Id
 * @param targetDrawingBoardList 查询的组件tree
 * @returns 当前组件对象
 */
export function getParentComponentByComponentId(
  componentId: string,
  targetDrawingBoardList: DrawingBoard.Component[]
): string | DrawingBoard.Component | undefined {
  let targetComponent

  if (!Array.isArray(targetDrawingBoardList) || targetDrawingBoardList.length === 0) {
    return undefined
  }

  for (let i = 0; i < targetDrawingBoardList.length; i++) {
    if (targetDrawingBoardList[i].componentId === componentId) {
      targetComponent = 'topNode'
    }
  }
  // 初始挂载节点单独查询
  if (targetComponent) {
    return targetComponent
  }

  for (let i = 0; i < targetDrawingBoardList.length; i++) {
    if (targetDrawingBoardList[i].childrenNode && targetDrawingBoardList[i].childrenNode.length) {
      targetComponent = getParentComponentByComponentId(componentId, targetDrawingBoardList[i].childrenNode)
    }
  }

  return targetComponent
}