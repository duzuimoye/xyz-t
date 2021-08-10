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

const mapStateMainContentContainerToProps = (state: any) => {
  return {
    visibleSidebarRightConfigBox: state.DrawingBoardReducer.visibleSidebarRightConfigBox,
    areaModuleValue: state.DrawingBoardReducer.areaModuleValue,
    activeConfigCompEnterName: state.DrawingBoardReducer.activeConfigCompEnterName
  }
}

const MainContentContainer = connect(mapStateMainContentContainerToProps)(memo(() => {
  const {
    DrawingBoardReducer: {
      visibleSidebarRightConfigBox,
      areaModuleValue,
      activeConfigCompEnterName
    }
  } = store.getState()

  switch (areaModuleValue) {
    case 'drawingboard':
      return (
        <>
          <WorkbenchComp />
          {visibleSidebarRightConfigBox && <ComponentConfig activeName={activeConfigCompEnterName} />}
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
    DrawingBoardReducer: {
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

const mapStateToProps = (state: any) => {
  return {
    visibleHeaderBox: state.DrawingBoardReducer.visibleHeaderBox,
    visible: state.DrawingBoardReducer.initFullLoader.visible,
    progress: state.DrawingBoardReducer.initFullLoader.progress,
    messageInfo: state.DrawingBoardReducer.initFullLoader.messageInfo
  }
}


export default connect(mapStateToProps)(memo(HomePage))
