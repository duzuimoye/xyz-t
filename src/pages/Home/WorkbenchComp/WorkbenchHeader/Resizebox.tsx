import { connect } from 'react-redux'
import { Slider } from 'antd'
import { EyeOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { Button } from './styled'
import store from '../../../../redux/store'
import { resizeAutoDrawingbordAction } from '../../../../utils/dom'
import { RESIZE_DRAWINGBOARD_ACTION, RESIZE_AUTO_DRAWINGBOARD_ACTION } from '../../../../redux/actions'

const mapResizeDrawingboardStateToProps = (state: State.ReduxConnectProps) => {
  return {
    drawingboardSize: state.metaViewReducer.drawingboardSize,
    resizeDrawingBoardIframe: state.metaViewReducer.resizeDrawingBoardIframe
  }
}

export default connect(mapResizeDrawingboardStateToProps)(() => {
  const {
    metaViewReducer: {
      resizeDrawingBoardIframe,
      drawingboardSize
    }
  } = store.getState()

  function changeResize(resizeNumber: number) {
    store.dispatch({
      type: RESIZE_DRAWINGBOARD_ACTION,
      payload: {
        resizeDrawingBoardIframe: resizeNumber
      }
    })
  }

  return (
    <>
      <Button onClick={() => {
        store.dispatch({
          type: RESIZE_AUTO_DRAWINGBOARD_ACTION,
          payload: {
            resizeDrawingBoardIframe: resizeAutoDrawingbordAction({ resizeNumber: 100, drawingboardSize, autoSize: true })
          }
        })
      }}>
        <EyeOutlined />
      </Button>
      <Button onClick={() => {
        store.dispatch({
          type: RESIZE_DRAWINGBOARD_ACTION,
          payload: {
            resizeDrawingBoardIframe: resizeDrawingBoardIframe - 5
          }
        })
      }}>
        <MinusOutlined />
      </Button>
      <Slider
        defaultValue={resizeDrawingBoardIframe}
        value={resizeDrawingBoardIframe}
        style={{ width: '150px' }}
        onChange={val => changeResize(val)}
        min={20}
        step={2}
        max={200}
        tipFormatter={value => `${value} %`}
      />
      <Button onClick={() => {
        store.dispatch({
          type: RESIZE_DRAWINGBOARD_ACTION,
          payload: {
            resizeDrawingBoardIframe: resizeDrawingBoardIframe + 5
          }
        })
      }}>
        <PlusOutlined />
      </Button>
    </>
  )
})