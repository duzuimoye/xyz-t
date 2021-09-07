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
          <ComponentConfig />
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
      <HomeHeaderComp />
      <HomeMain>
        <SidebarleftIconList />
        <SideBarLeftToolComp />
        <MainContentContainer />
      </HomeMain>
    </HomePageContainer>
  )
}

export default connect((state: State.ReduxConnectProps) => {
  return {
    areaModuleValue: state.metaViewReducer.areaModuleValue,
    activeFile: !!state.DrawingBoardReducer.activeFile
  }
})(HomePage)
