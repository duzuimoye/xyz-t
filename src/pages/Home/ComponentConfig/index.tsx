import { memo } from 'react'
import { ComponentConfigContainer } from './styled'
import { antdComp } from '../../../control/baseMaterial/antdesign/index'

const ComponentConfig = ({ activeName }: { activeName: string }) => {
  const SelectComp = antdComp.find(item => item.tag === activeName)?.config

  return (
    <ComponentConfigContainer>
      {SelectComp && <SelectComp />}
    </ComponentConfigContainer>
  )
}

export default memo(ComponentConfig)
