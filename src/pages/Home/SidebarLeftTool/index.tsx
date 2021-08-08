import { memo } from 'react'
import { connect } from 'react-redux'
import store from '../../../redux/store'
import { SIDEBAR_ICONS_LIST } from '../../../utils/constant'
import {
  SidebarLeftTool
} from './styled'

const SideBarLeftToolComp = () => {
  const { DrawingBoardReducer: { selectedSideBarLeftIconLabel, visibleSideBarLeftTool } } = store.getState()
  const ComponentMap = SIDEBAR_ICONS_LIST.header.find(item => item.value === selectedSideBarLeftIconLabel)

  return (
    <SidebarLeftTool className="scroll-small" visible={visibleSideBarLeftTool}>
      {ComponentMap ? <ComponentMap.Comp /> : ""}
    </SidebarLeftTool>
  )
}

const mapStateToProps = (state: any) => {
  return {
    selectedSideBarLeftIconLabel: state.DrawingBoardReducer.selectedSideBarLeftIconLabel,
    visibleSideBarLeftTool: state.DrawingBoardReducer.visibleSideBarLeftTool
  }
}

export default connect(mapStateToProps)(memo(SideBarLeftToolComp))
