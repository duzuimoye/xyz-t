import { connect } from 'react-redux'
import store from '../../redux/store'
import HomeHeaderComp from './HomeHeaderComp/index'
import SidebarleftIconList from './SidebarLeftIconsList/index'
import SideBarLeftToolComp from './SidebarLeftTool/index'
import WorkbenchComp from './WorkbenchComp/index'
import ComponentConfig from './ComponentConfig/index'
import { HomePageContainer, HomeMain } from './styled'
import AuxliaryComp from './AuxliaryComp'
// import ImageGridLoader from '../../components/Loader/index'

const MainContentContainer = connect((state: State.ReduxConnectProps) => ({
  visibleSidebarRightConfigBox: state.metaViewReducer.visibleSidebarRightConfigBox,
  areaModuleValue: state.metaViewReducer.areaModuleValue
}))(() => {
  const {
    metaViewReducer: {
      visibleSidebarRightConfigBox,
      areaModuleValue
    }
  } = store.getState()

  switch (areaModuleValue) {
    case 'drawingboard':
      return (
        <>
          <WorkbenchComp />
          {visibleSidebarRightConfigBox && <ComponentConfig />}
        </>
      )
    case 'fullContent':
      return <AuxliaryComp.OperationGuide />
    case 'metaView':
      return <div>none</div>
    default:
      return <div>none</div>
  }
})

const HomePage = () => {
  const {
    metaViewReducer: {
      visibleHeaderBox,
      visibleFullPage,
      visibleSidebarIconsList
    }
  } = store.getState()

  return (
    <HomePageContainer>
      {/* {visible && <ImageGridLoader progress={progress} loadInfo={messageInfo.slice(-1)} />} */}
      {visibleHeaderBox && !visibleFullPage && <HomeHeaderComp />}
      <HomeMain>
        {visibleSidebarIconsList && <SidebarleftIconList />}
        <SideBarLeftToolComp />
        <MainContentContainer />
      </HomeMain>
    </HomePageContainer>
  )
}

export default connect((state: State.ReduxConnectProps) => {
  return {
    visibleHeaderBox: state.metaViewReducer.visibleHeaderBox,
    visibleFullPage: state.metaViewReducer.visibleFullPage,
    visibleSidebarIconsList: state.metaViewReducer.visibleSidebarIconsList
  }
})(HomePage)
