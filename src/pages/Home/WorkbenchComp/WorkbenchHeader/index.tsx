import { memo, useState } from 'react'
import { message } from 'antd'
import {
  YoutubeOutlined,
  LeftOutlined,
  RightOutlined,
  ClearOutlined,
  CompressOutlined,
  EyeOutlined,
  ExpandOutlined
} from '@ant-design/icons'
import { ToolBtnComp, WorkbenchHeaderContainer, ToolBtnRightComp, Button } from './styled'
import OpenResourceList from './OpenResourceList'
import i18n from '../../../../utils/i18n'
import ResizeDrawingBoard from './resizeDrawingBoard'
import VisibleCompConfigBox from './VisibleCompConfigBtn'


function requestFullScreen(element: any) {
  const requestMethod = element.requestFullScreen || // W3C
    element.webkitRequestFullScreen || // Chrome等
    element.mozRequestFullScreen || // FireFox
    element.msRequestFullScreen // IE11

  if (requestMethod) {
    requestMethod.call(element)
  }
}

const WorkbenchHeader = () => {
  const [fullScreen, setfullScreen] = useState<boolean>(false)
  return (
    <WorkbenchHeaderContainer>
      <ToolBtnComp>
        <Button onClick={() => {
          message.warning(i18n.t('baseMateiral.baseText.busingDating'))
        }}>
          <LeftOutlined />
        </Button>
        <Button onClick={() => {
          message.warning(i18n.t('baseMateiral.baseText.busingDating'))
        }}>
          <RightOutlined />
        </Button>
        <Button onClick={() => {
          message.warning(i18n.t('baseMateiral.baseText.busingDating'))
        }}>
          <ClearOutlined />
        </Button>
        <Button onClick={() => {
          requestFullScreen(document.documentElement)
          setfullScreen(!fullScreen)
        }}>
          {fullScreen ? <CompressOutlined /> : <ExpandOutlined />}
        </Button>
        <Button onClick={() => {
          message.warning(i18n.t('baseMateiral.baseText.busingDating'))
        }}>
          <YoutubeOutlined />
        </Button>
      </ToolBtnComp>
      <OpenResourceList />
      <ToolBtnRightComp>
        <Button>
          <EyeOutlined />
        </Button>
        <ResizeDrawingBoard />
        <VisibleCompConfigBox />
      </ToolBtnRightComp>
    </WorkbenchHeaderContainer>
  )
}
export default memo(WorkbenchHeader)
