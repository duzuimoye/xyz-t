import { Button } from 'antd'
import { IconList } from "../../baseMaterial/antdesign/assets/constant"
import { baseTextProps } from '../../baseMaterial/antdesign/baseText/_type'

export default ({ comp }: { comp: baseTextProps }) => {
  const { size, type, icon, buttonText, shape, ghost, disabled, danger, block } = comp
  const index = IconList.findIndex(item => item.label === icon)
  const Icon: any = index >= 0 ? IconList[index].Icon : <></>

  return (
    <Button
      size={size}
      type={type}
      shape={shape}
      disabled={disabled}
      danger={danger}
      ghost={ghost}
      block={block}
      icon={<Icon />}
    >{buttonText}</Button>
  )
}