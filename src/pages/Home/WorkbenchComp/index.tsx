import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import WorkbenchHeader from './WorkbenchHeader'
import DrawingBoard from './DrawingBoard/index'
import DividerWorkbench from './DividerWorkbench'
import store from '../../../redux/store'
import { resizeAutoDrawingbordAction } from '../../../utils/dom'

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

  const [width, setwidth] = useState<string | number>(0)
  const [height, setheight] = useState<string | number>(0)

  useEffect(() => {
    const domStyle = resizeAutoDrawingbordAction({ resizeNumber: resizeDrawingBoardIframe, drawingboardSize }) as { width: string, height: string }

    setwidth(domStyle.width)
    setheight(domStyle.height)
  }, [resizeDrawingBoardIframe, drawingboardSize])

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

export default connect((state: { metaViewReducer: State.MetaView }) => ({
  resizeDrawingBoardIframe: state.metaViewReducer.resizeDrawingBoardIframe,
  drawingboardSize: state.metaViewReducer.drawingboardSize
}))(WorkbenchComp)