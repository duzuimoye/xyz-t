import { memo } from 'react'
import { connect } from 'react-redux'
import store from '../../../redux/store'
import { SIDEBAR_ICONS_LIST } from '../../../utils/constant'
import { VISIBLE_SIZEBARLEFT_TOOL_ACTION } from '../../../redux/actions'
import { SidebarleftIconList, SidebarContainer, SidebarFooterList, SideBarIconLi } from './styled'

const SidebarLeft = () => {
  const {
    metaViewReducer: {
      selectedSideBarLeftIconLabel,
      visibleSideBarLeftTool
    }
  } = store.getState()

  return (
    <SidebarContainer>
      <SidebarleftIconList>
        {
          SIDEBAR_ICONS_LIST.header.map(item => (
            <SideBarIconLi
              title={item.title}
              key={item.value}
              selected={item.value === selectedSideBarLeftIconLabel && visibleSideBarLeftTool}
              onClick={() => {
                store.dispatch({
                  type: VISIBLE_SIZEBARLEFT_TOOL_ACTION,
                  payload: {
                    selectedSideBarLeftIconLabel: item.value,
                    visibleSideBarLeftTool: item.value === selectedSideBarLeftIconLabel ? !visibleSideBarLeftTool : true
                  }
                })
              }}
            >
              <i className={item.icon} />
            </SideBarIconLi>
          ))
        }
      </SidebarleftIconList>
      <SidebarFooterList>
        {
          SIDEBAR_ICONS_LIST.footer.map(item => (
            <li
              title={item.title}
              key={item.value}
            >
              <i className={item.icon} />
            </li>
          ))
        }
      </SidebarFooterList>
    </SidebarContainer>
  )
}

const mapStateToProps = (state: State.ReduxConnectProps) => {
  return {
    selectedSideBarLeftIconLabel: state.metaViewReducer.selectedSideBarLeftIconLabel,
    visibleSideBarLeftTool: state.metaViewReducer.visibleSideBarLeftTool
  }
}

export default connect(mapStateToProps)(memo(SidebarLeft))
