import { connect } from 'react-redux'
import store from '../../redux/store'
import HomeHeaderComp from './HomeHeaderComp/index'
import SidebarleftIconList from './SidebarLeftIconsList/index'
import SideBarLeftToolComp from './SidebarLeftTool/index'
import WorkbenchComp from './WorkbenchComp/index'
import ComponentConfig from './ComponentConfig/index'
import { HomePageContainer, HomeMain } from './styled'
import AuxliaryComp from './AuxliaryComp'
import EmptyFilePage from '../../components/EmptyFilePage'

const HomePage = () => {
  const {
    metaViewReducer: {
      visibleHeaderBox,
      visibleFullPage,
      visibleSidebarIconsList,
      visibleSidebarRightConfigBox,
      areaModuleValue
    },
    DrawingBoardReducer: {
      activeFile
    }
  } = store.getState()

  const MainContentContainer = () => {

    if (!!activeFile && areaModuleValue === 'drawingboard') {
      return (
        <>
          <WorkbenchComp />
          {visibleSidebarRightConfigBox && <ComponentConfig />}
        </>
      )
    }

    if (areaModuleValue === 'fullContent') {
      return <AuxliaryComp.OperationGuide />
    }

    return <EmptyFilePage />
  }

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
    areaModuleValue: state.metaViewReducer.areaModuleValue,
    activeFile: !!state.DrawingBoardReducer.activeFile,
    visibleSidebarRightConfigBox: state.metaViewReducer.visibleSidebarRightConfigBox,
    visibleSidebarIconsList: state.metaViewReducer.visibleSidebarIconsList
  }
})(HomePage)
