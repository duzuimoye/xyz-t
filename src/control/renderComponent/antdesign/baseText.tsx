import { Button } from 'antd'
import { IconList } from "../../baseMaterial/antdesign/assets/constant"
import { baseTextProps } from '../../baseMaterial/antdesign/baseText/_type'

export default ({ comp }: { comp: baseTextProps }) => {
  const { size, type, icon, buttonText, shape, ghost, disabled, danger, block, iconDirection } = comp
  const index = IconList.findIndex(item => item.label === icon)

  let buttonNode: React.ReactNode

  // add button icon direction render.
  if (index >= 0) {
    const { Icon } = IconList[index]
    if (iconDirection === 'left') {
      buttonNode = <><Icon />{buttonText}</>
    } else {
      buttonNode = <>{buttonText}<Icon /></>
    }
  } else {
    buttonNode = buttonText
  }

  return (
    <Button
      size={size}
      type={type}
      shape={shape}
      disabled={disabled}
      danger={danger}
      ghost={ghost}
      block={block}
    >{buttonNode}</Button>
  )
}