import { memo } from 'react'
import { connect } from 'react-redux'
import { SidebarleftIconList, SidebarContainer, SidebarFooterList, SideBarIconLi } from './styled'
import { SIDEBAR_ICONS_LIST } from '../../../utils/constant'
import store from '../../../redux/store'
import { VISIBLE_SIZEBARLEFT_TOOL_ACTION, TEST_AXIOS_AXIOS } from '../../../redux/actions'
import { coreAxios } from '../../../axios'

const SidebarLeft = () => {
  const { DrawingBoardReducer: { selectedSideBarLeftIconLabel, visibleSideBarLeftTool } } = store.getState()

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

                store.dispatch(async (dispatch: any) => {
                  const res = await coreAxios.testAxios()

                  dispatch({
                    type: TEST_AXIOS_AXIOS,
                    payload: {
                      testAxios: res.data
                    }
                  })
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

const mapStateToProps = (state: any) => {
  return {
    selectedSideBarLeftIconLabel: state.DrawingBoardReducer.selectedSideBarLeftIconLabel,
    visibleSideBarLeftTool: state.DrawingBoardReducer.visibleSideBarLeftTool
  }
}

export default connect(mapStateToProps)(memo(SidebarLeft))
