import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import WorkbenchHeader from './WorkbenchHeader'
import DrawingBoard from './DrawingBoard/index'
import DividerWorkbench from './DividerWorkbench'
import store from '../../../redux/store'

import {
  WorkbenchBox,
  IframeResizeBox,
  IframeContainer,
  IframeBox,
  IframeContent
} from './styled'

export const WorkbenchComp = () => {
  const {
    metaViewReducer: {
      drawingboardSize,
      resizeDrawingBoardIframe
    }
  } = store.getState()

  const viewSize = drawingboardSize.split('-')[1].split('*')
  const transFormSize = resizeDrawingBoardIframe / 100
  const iframeBoxStyleSizeWidth = +(viewSize[0] * transFormSize).toFixed(0) + 40
  const iframeBoxStyleSizeHeight = +(+viewSize[1] * transFormSize).toFixed(0) + 40

  const [width, setwidth] = useState<string | number>(0)
  const [height, setheight] = useState<string | number>(0)

  useEffect(() => {
    const dom = document.getElementById('iframeMount') as HTMLElement
    const iframeWrapperStyle = {
      height: dom.offsetHeight,
      width: dom.offsetWidth
    }

    setwidth(iframeBoxStyleSizeWidth >= iframeWrapperStyle.width ? `${iframeBoxStyleSizeWidth}px` : '100%')
    setheight(iframeBoxStyleSizeHeight >= iframeWrapperStyle.height ? `${iframeBoxStyleSizeHeight}px` : iframeWrapperStyle.height)

  }, [iframeBoxStyleSizeWidth, iframeBoxStyleSizeHeight])

  return (
    <WorkbenchBox>
      <WorkbenchHeader />
      <IframeContainer>
        <IframeBox>
          <IframeContent id="iframeMount">
            <IframeResizeBox style={{
              width,
              height,
              textAlign: drawingboardSize.split('-')[0] === 'pc' ? 'left' : 'center'
            }}>
              <DrawingBoard />
            </IframeResizeBox>
          </IframeContent>

        </IframeBox>
        <DividerWorkbench />
      </IframeContainer>
    </WorkbenchBox>
  )
}

export default connect((state: any) => ({
  resizeDrawingBoardIframe: state.metaViewReducer.resizeDrawingBoardIframe,
  drawingboardSize: state.metaViewReducer.drawingboardSize
}))(WorkbenchComp)