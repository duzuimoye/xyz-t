import { memo } from 'react'
import Frame, { FrameContextConsumer } from 'react-frame-component'
import shortuuid from 'short-uuid'
import { useDispatch } from '../../../../contexts/providers'
import { InitialDrawingBoard, PROGRESSMAPENUM } from '../../../../utils/constant'
import { isValidKey } from '../../../../utils/index'
import { DrawingBoardActions, PageActions } from '../../../../contexts/actions'
import { AntdRender } from '../../../../control/renderComponent/index'

function areEqual(prevProps: any, nextProps: any) {
  return JSON.stringify(prevProps.drawingboardList) === JSON.stringify(nextProps.drawingboardList)
}

const DrawingBoard = memo(({ drawingboardList }: { drawingboardList: any }) => {
  const dispatch = useDispatch()

  function allowDrop(event: React.DragEvent) {
    event.preventDefault()
  }

  function drop(event: React.DragEvent) {
    event.preventDefault()

    const dropText = event.dataTransfer.getData("dropData")

    if (dropText) {
      const compData = JSON.parse(dropText)

      dispatch({
        type: DrawingBoardActions.PushDrawingBoard,
        payload: {
          activeComponent: compData
        }
      })
      dispatch({
        type: PageActions.ActiveRightBarConfigRouteName,
        payload: {
          componentfield: compData.componentfield
        }
      })
    }
  }

  const InnerComponent = (document: Document, window: Window) => {
    // setTimeout(() => {
    //   dispatch({
    //     type: PageActions.FullLoaderProgressAction,
    //     payload: {
    //       fullLoaderProgress: PROGRESSMAPENUM.DrawingBoardIframeLoadStatus
    //     }
    //   })
    // }, 3000)
    console.log(document, window, PROGRESSMAPENUM)
    return (<div
      onDrop={evt => drop(evt)}
      onDragOver={allowDrop}
      style={{ width: '100%', height: '100%' }}>
      {
        drawingboardList.map((item: { componentfield: string }) => {
          let RenderCompItem: any

          if (isValidKey(item.componentfield, AntdRender)) {
            RenderCompItem = AntdRender[item.componentfield]

            return <RenderCompItem key={shortuuid.generate()} />
          }

          return <div key={shortuuid.generate()}>123</div>
        })
      }
    </div>
    )
  }

  return (
    <Frame
      initialContent={InitialDrawingBoard}
      mountTarget='#DrawingBoard'>
      <FrameContextConsumer>
        {({ document, window }) => InnerComponent(document, window)}
      </FrameContextConsumer>
    </Frame>
  )
}, areEqual)


export default DrawingBoard
