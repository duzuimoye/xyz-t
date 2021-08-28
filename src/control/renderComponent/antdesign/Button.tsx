import { Button } from 'antd'
import { IconList } from "../../baseMaterial/antdesign/assets/constant"
import { baseTextProps } from '../../baseMaterial/antdesign/Button/_type'
import store from "../../../redux/store"
import { SELECT_COMPONENT_ACTION } from '../../../redux/actions'

export default ({ comp }: { comp: baseTextProps }) => {
  const { size, type, icon, componentId, buttonText, shape, ghost, disabled, danger, block, iconDirection } = comp
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
      onClick={evt => {
        store.dispatch({
          type: SELECT_COMPONENT_ACTION,
          payload: componentId,
          iframePropagationClick: true
        })

        evt.stopPropagation()
        evt.preventDefault()
      }}
      className="drawingboard-customclassname"
      data-component-id={componentId}
    >{buttonNode}</Button>
  )
}