import { memo } from 'react'
import shortuuid from 'short-uuid'
import { connect } from 'react-redux'
import Frame, { FrameContextConsumer } from 'react-frame-component'
import store from '../../../../redux/store'
import { isValidKey } from '../../../../utils/index'
import { AntdRender } from '../../../../control/renderComponent/index'
import { InitialDrawingBoard } from '../../../../utils/constant'
import { ACTIVE_COMPONENT_ACTION, PUSH_COMPONENT_ACTION } from '../../../../redux/actions/index'
import Contextify from '../../../../control/renderComponent/contextify/index'

const DrawingBoardContainer = () => {
  const {
    metaViewReducer: {
      drawingboardSize,
      resizeDrawingBoardIframe
    },
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
      <Contextify componentId="12" />
    </div>
  )

  const viewSize = drawingboardSize.split('-')[1].split('*')
  const iframeStyleSize = {
    width: `${viewSize[0]}px`,
    height: `${viewSize[1]}px`,
    transformOrigin: drawingboardSize.split('-')[0] === 'pc' ? "0 0" : "top",
    transform: `scale(${+parseFloat(resizeDrawingBoardIframe).toFixed(5) / 100})`
  }

  return (
    <Frame
      initialContent={InitialDrawingBoard}
      mountTarget='#DrawingBoard'
      style={iframeStyleSize}>
      <FrameContextConsumer>
        {/* {({ document, window }) => InnerComponent(document, window)} */}
        {() => InnerComponent()}
      </FrameContextConsumer>
    </Frame>
  )
}

export default connect((state: any) => ({
  resizeDrawingBoardIframe: state.metaViewReducer.resizeDrawingBoardIframe,
  drawingboardSize: state.metaViewReducer.drawingboardSize,
  drawingboardList: state.DrawingBoardReducer.drawingboardList
}))(memo(DrawingBoardContainer))
