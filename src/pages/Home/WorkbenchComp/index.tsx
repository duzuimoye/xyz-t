import { memo } from 'react'
import WorkbenchHeader from './WorkbenchHeader'
import DrawingBoard from './DrawingBoard/index'
import DividerWorkbench from './DividerWorkbench'
import { WorkbenchBox, IframeContainer, IframeBox, IframeContent } from './styled'

export const WorkbenchComp = () => {
  return (
    <WorkbenchBox>
      <WorkbenchHeader />
      <IframeContainer>
        <IframeBox>
          <IframeContent id="iframeMount">
            <DrawingBoard />
          </IframeContent>
        </IframeBox>
        <DividerWorkbench />
      </IframeContainer>
    </WorkbenchBox>
  )
}

export default memo(WorkbenchComp)
