import { memo } from 'react'
import { connect } from 'react-redux'
import { ComponentConfigContainer } from './styled'
import store from '../../../redux/store'
import { antdComp } from '../../../control/baseMaterial/antdesign/index'

const ComponentConfig = () => {
  const { DrawingBoardReducer: { activeComponent } } = store.getState()
  const SelectComp = antdComp.find(item => item.tag === activeComponent?.tag)?.config

  return (
    <ComponentConfigContainer>
      
      {SelectComp && <SelectComp activeComponent={activeComponent} />}
    </ComponentConfigContainer>
  )
}

export default connect((state: any) => ({
  activeComponent: state.DrawingBoardReducer.activeComponent
}))(memo(ComponentConfig))
