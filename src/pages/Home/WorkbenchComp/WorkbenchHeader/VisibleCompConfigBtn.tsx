import { memo } from 'react'
import { connect } from 'react-redux'
import {
  DoubleRightOutlined,
  DoubleLeftOutlined
} from '@ant-design/icons'
import { Button } from './styled'
import store from '../../../../redux/store'
import { VISIBLE_SIDEBAR_RIGHT_CONFIG_BOX } from '../../../../redux/actions'

const mapVisibleCompConfigStateToProps = (state: State.ReduxConnectProps) => {
  return {
    visibleSidebarRightConfigBox: state.metaViewReducer.visibleSidebarRightConfigBox
  }
}

export default connect(mapVisibleCompConfigStateToProps)(memo(() => {
  const {
    metaViewReducer: {
      visibleSidebarRightConfigBox
    }
  } = store.getState()

  const triggerRightConfig = () => {
    store.dispatch({
      type: VISIBLE_SIDEBAR_RIGHT_CONFIG_BOX,
      payload: {
        visibleSidebarRightConfigBox: !visibleSidebarRightConfigBox
      }
    })
  }

  return (
    <Button onClick={triggerRightConfig}>
      {visibleSidebarRightConfigBox ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
    </Button>
  )
}))