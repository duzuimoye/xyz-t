import { memo } from 'react'
import shortuuid from 'short-uuid'
import { connect } from 'react-redux'
import Frame, { FrameContextConsumer } from 'react-frame-component'
import store from '../../../../redux/store'
import { isValidKey } from '../../../../utils/index'
import { AntdRender } from '../../../../control/renderComponent/index'
import { InitialDrawingBoard } from '../../../../utils/constant'
import { ACTIVE_COMPONENT_ACTION, PUSH_COMPONENT_ACTION } from '../../../../redux/actions/index'

export enum PROGRESSMAPENUM {
  InitBaseEnv = 5,
  DrawingBoardIframeLoadStatus = 30,
  CoreAxiosValue = 30
}

const DrawingBoardContainer = () => {
  const {
    DrawingBoardReducer: {
      drawingboardList
    }
  } = store.getState()

  function allowDrop(event: React.DragEvent) {
    event.preventDefault()
  }

  function drop(event: React.DragEvent) {
    event.preventDefault()

    const dropText = event.dataTransfer.getData("dropData")

    if (dropText) {
      const compData = JSON.parse(dropText)

      store.dispatch({
        type: ACTIVE_COMPONENT_ACTION,
        payload: {
          activeComponent: compData
        }
      })

      const stashDrawingList = JSON.parse(JSON.stringify(drawingboardList))

      // todo push is only the last position.
      stashDrawingList.push(compData)

      store.dispatch({
        type: PUSH_COMPONENT_ACTION,
        payload: compData
      })
    }
  }

  const InnerComponent = () => (
    <div
      onDrop={evt => drop(evt)}
      onDragOver={allowDrop}
      style={{ width: '100%', height: '100%' }}>
      {
        drawingboardList.map((item: { tag: string }) => {
          let RenderCompItem: any

          if (isValidKey(item.tag, AntdRender)) {
            RenderCompItem = AntdRender[item.tag]

            return <RenderCompItem key={shortuuid.generate()} comp={item} />
          }

          return <span key={shortuuid.generate()} style={{ display: 'none' }} />
        })
      }
    </div>
  )

  return (
    <Frame
      initialContent={InitialDrawingBoard}
      mountTarget='#DrawingBoard'>
      <FrameContextConsumer>
        {/* {({ document, window }) => InnerComponent(document, window)} */}
        {() => InnerComponent()}
      </FrameContextConsumer>
    </Frame>
  )
}

export default connect((state: any) => ({
  drawingboardList: state.DrawingBoardReducer.drawingboardList
}))(memo(DrawingBoardContainer))
