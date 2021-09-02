import { memo } from 'react'
import { connect } from 'react-redux'
import { Empty } from 'antd'
import { antdComp } from '../../../control/baseMaterial/antdesign/index'
import emptyPage from '../../../assets/images/emptyStatus2.svg'
import { ComponentConfigContainer } from './styled'
import EventConfigComponent from './eventConfig'
import StyleConfigComponent from './styleConfig'
import store from '../../../redux/store'
import i18n from '../../../utils/i18n'

const ComponentConfig = () => {
  const {
    DrawingBoardReducer: {
      activeComponent
    },
    metaViewReducer: {
      selectedRightBarConfigPage
    }
  } = store.getState()

  let SelectComp: React.FC<any> | undefined

  if (activeComponent && activeComponent.tag) {
    SelectComp = antdComp.find(item => item.tag === activeComponent?.tag)?.config
  }

  const RenderChild = () => {
    if (SelectComp) {
      switch (selectedRightBarConfigPage) {
        case 'html':
          return <SelectComp activeComponent={activeComponent} />
        case 'js':
          return <EventConfigComponent />
        case 'css':
          return <StyleConfigComponent />
        default:
          return <Empty className="empty-box" image={emptyPage} description={i18n.t('baseMateiral.baseText.busingDating')} />
      }
    }
    else {
      return <Empty className="empty-box full-page" image={emptyPage} description={i18n.t('baseMateiral.baseText.busingDating')} />
    }
  }
  return (
    <ComponentConfigContainer>
      <RenderChild />
    </ComponentConfigContainer>
  )
}

export default connect((state: State.ReduxConnectProps) => ({
  activeComponent: state.DrawingBoardReducer.activeComponent,
  selectedRightBarConfigPage: state.metaViewReducer.selectedRightBarConfigPage
}))(memo(ComponentConfig))
