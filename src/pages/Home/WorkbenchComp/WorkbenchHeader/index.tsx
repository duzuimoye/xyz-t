import { message } from 'antd'
import {
  YoutubeOutlined,
  LeftOutlined,
  RightOutlined,
  ClearOutlined,
  CompressOutlined,
  ExpandOutlined
} from '@ant-design/icons'
import { connect } from 'react-redux'
import { ToolBtnComp, WorkbenchHeaderContainer, ToolBtnRightComp, Button } from './styled'
import { FULL_SCREEN_ACTION } from '../../../../redux/actions/index'
import VisibleCompConfigBox from './VisibleCompConfigBtn'
import ResizeDrawingBoard from './resizeDrawingBoard'
import store from '../../../../redux/store'
import i18n from '../../../../utils/i18n'

const WorkbenchHeader = () => {
  const {
    metaViewReducer: {
      visibleFullPage
    }
  } = store.getState()

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
          store.dispatch({
            type: FULL_SCREEN_ACTION,
            payload: {
              visibleFullPage: !visibleFullPage
            }
          })
        }}>
          {visibleFullPage ? <CompressOutlined /> : <ExpandOutlined />}
        </Button>
        <Button onClick={() => {
          message.warning(i18n.t('baseMateiral.baseText.busingDating'))
        }}>
          <YoutubeOutlined />
        </Button>
      </ToolBtnComp>
      {/* <OpenResourceList /> */}
      <ToolBtnRightComp>
        <ResizeDrawingBoard />
        <VisibleCompConfigBox />
      </ToolBtnRightComp>
    </WorkbenchHeaderContainer>
  )
}

export default connect((state: any) => ({
  visibleFullPage: state.metaViewReducer.visibleFullPage
}))(WorkbenchHeader)