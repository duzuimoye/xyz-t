import { memo } from 'react'
import { connect } from 'react-redux'
import store from '../../redux/store'
import HomeHeaderComp from './HomeHeaderComp/index'
import SidebarleftIconList from './SidebarLeftIconsList/index'
import SideBarLeftToolComp from './SidebarLeftTool/index'
import WorkbenchComp from './WorkbenchComp/index'
import ComponentConfig from './ComponentConfig/index'
import { HomePageContainer, HomeMain } from './styled'
import AuxliaryComp from './AuxliaryComp'
import ImageGridLoader from '../../components/Loader/index'

const MainContentContainer = connect((state: any) => ({
  visibleSidebarRightConfigBox: state.metaViewReducer.visibleSidebarRightConfigBox,
  areaModuleValue: state.metaViewReducer.areaModuleValue
}))(memo(() => {
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
}))

const HomePage = () => {
  const {
    metaViewReducer: {
      visibleHeaderBox,
      initFullLoader: {
        visible,
        progress,
        messageInfo
      }
    }
  } = store.getState()

  return (
    <HomePageContainer>
      {visible && <ImageGridLoader progress={progress} loadInfo={messageInfo.slice(-1)} />}
      {visibleHeaderBox && <HomeHeaderComp />}
      <HomeMain>
        <SidebarleftIconList />
        <SideBarLeftToolComp />
        <MainContentContainer />
      </HomeMain>
    </HomePageContainer>
  )
}

export default connect((state: any) => {
  return {
    visibleHeaderBox: state.metaViewReducer.visibleHeaderBox,
    visible: state.metaViewReducer.initFullLoader.visible,
    progress: state.metaViewReducer.initFullLoader.progress,
    activeComponent: state.DrawingBoardReducer.activeComponent,
    messageInfo: state.metaViewReducer.initFullLoader.messageInfo
  }
})(memo(HomePage))
