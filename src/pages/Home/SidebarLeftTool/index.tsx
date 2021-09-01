import { memo } from 'react'
import { connect } from 'react-redux'
import store from '../../../redux/store'
import { SIDEBAR_ICONS_LIST } from '../../../utils/constant'
import {
  SidebarLeftTool
} from './styled'

const SideBarLeftToolComp = () => {
  const {
    metaViewReducer: {
      selectedSideBarLeftIconLabel,
      visibleSideBarLeftTool
    }
  } = store.getState()
  const ComponentMap = SIDEBAR_ICONS_LIST.header.find(item => item.value === selectedSideBarLeftIconLabel)

  return (
    <SidebarLeftTool className="scroll-small" visible={visibleSideBarLeftTool}>
      {ComponentMap ? <ComponentMap.Comp /> : ""}
    </SidebarLeftTool>
  )
}

const mapStateToProps = (state: State.ReduxConnectProps) => {
  return {
    selectedSideBarLeftIconLabel: state.metaViewReducer.selectedSideBarLeftIconLabel,
    visibleSideBarLeftTool: state.metaViewReducer.visibleSideBarLeftTool
  }
}

export default connect(mapStateToProps)(memo(SideBarLeftToolComp))
