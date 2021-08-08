import metaView from '../state/metaView'
import { VISIBLE_SIZEBARLEFT_TOOL_ACTION, TEST_AXIOS_AXIOS } from '../actions/index'

function reducer(state = metaView, action: any) {
  switch (action.type) {
    case VISIBLE_SIZEBARLEFT_TOOL_ACTION:
      console.log(action.payload)
      return {
        ...state,
        ...action.payload
      }
    case TEST_AXIOS_AXIOS:
      return {
        ...state,
        testAxios: action.payload.testAxios
      }
    default:
      return state
  }
}

export default reducer