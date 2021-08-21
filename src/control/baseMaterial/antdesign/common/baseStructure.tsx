import { useState } from 'react'
import { CaretRightOutlined, CaretDownOutlined } from '@ant-design/icons'
import {
  RightBarConfigContainer,
  HeaderContent,
  HeaderTitle,
  HeaderTitleRightConfig,
  CollapseContent
} from './styled'

const BaseStructureBox = ({ children, title, initVisible }: { children: React.ReactNode, title: string, initVisible?: boolean }) => {
  const [visible, setVisible] = useState(initVisible || false)

  return (
    <RightBarConfigContainer>
      <HeaderContent onClick={() => setVisible(!visible)}>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderTitleRightConfig>
          {visible ? <CaretDownOutlined /> : <CaretRightOutlined />}
        </HeaderTitleRightConfig>
      </HeaderContent>
      <CollapseContent visible={visible}>
        {children}
      </CollapseContent>
    </RightBarConfigContainer>
  )
}

export default BaseStructureBox
