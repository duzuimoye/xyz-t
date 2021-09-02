import { Affix, Button } from 'antd'
import { buttonTypes } from '../../baseMaterial/antdesign/Button/_type'
import store from "../../../redux/store"
import { SELECT_COMPONENT_ACTION } from '../../../redux/actions'

export default ({ comp }: { comp: buttonTypes }) => {
  const { componentId } = comp

  return (
    <Affix
      offsetTop={10}
    >
      <Button
        type="primary"
        onClick={evt => {
          store.dispatch({
            type: SELECT_COMPONENT_ACTION,
            payload: componentId,
            iframePropagationClick: true
          })

          evt.stopPropagation()
          evt.preventDefault()
        }}>
        Fixed at the top of container
      </Button>
    </Affix>
  )
}
