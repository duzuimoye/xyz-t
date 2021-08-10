import { memo } from 'react'
import { message } from 'antd'
import {
  YoutubeOutlined,
  LeftOutlined,
  RightOutlined,
  ClearOutlined,
  CompressOutlined,
  EyeOutlined
} from '@ant-design/icons'
import { ToolBtnComp, WorkbenchHeaderContainer, ToolBtnRightComp, Button } from './styled'
import OpenResourceList from './OpenResourceList'
import i18n from '../../../../utils/i18n'
import ResizeDrawingBoard from './resizeDrawingBoard'
import VisibleCompConfigBox from './VisibleCompConfigBtn'

const WorkbenchHeader = () => (
  <WorkbenchHeaderContainer>
    <ToolBtnComp>
      <Button onClick={() => {
        message.warning(i18n.t('toast.unfinish'))
      }}>
        <LeftOutlined />
      </Button>
      <Button onClick={() => {
        message.warning(i18n.t('toast.unfinish'))
      }}>
        <RightOutlined />
      </Button>
      <Button onClick={() => {
        message.warning(i18n.t('toast.unfinish'))
      }}>
        <ClearOutlined />
      </Button>
      <Button onClick={() => {
        message.warning(i18n.t('toast.unfinish'))
      }}>
        <CompressOutlined />
      </Button>
      <Button onClick={() => {
        message.warning(i18n.t('toast.unfinish'))
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

export default memo(WorkbenchHeader)
