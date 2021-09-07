import { connect } from 'react-redux'
import { Tooltip } from 'antd'
import store from '../../../redux/store'
import { SIDEBAR_ICONS_LIST } from '../../../utils/constant'
import { VISIBLE_SIZEBARLEFT_TOOL_ACTION } from '../../../redux/actions'
import { SidebarleftIconList, SidebarContainer, SidebarFooterList, SideBarIconLi } from './styled'

const SidebarLeft = () => {
  const {
    metaViewReducer: {
      selectedSideBarLeftIconLabel,
      visibleSideBarLeftTool,
      visibleSidebarIconsList
    }
  } = store.getState()

  return (
    <SidebarContainer visible={visibleSidebarIconsList}>
      <SidebarleftIconList>
        {
          SIDEBAR_ICONS_LIST.header.map(item => (
            <Tooltip
              placement="right"
              title={item.title}
              key={item.value}
            >
              <SideBarIconLi
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
            </Tooltip>
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
    visibleSideBarLeftTool: state.metaViewReducer.visibleSideBarLeftTool,
    visibleSidebarIconsList: state.metaViewReducer.visibleSidebarIconsList
  }
}

export default connect(mapStateToProps)(SidebarLeft)
