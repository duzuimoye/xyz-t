import { memo } from 'react'
import { connect } from 'react-redux'
import { Slider } from 'antd'
import { EyeOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { Button } from './styled'
import store from '../../../../redux/store'
import { RESIZE_DRAWINGBOARD_ACTION } from '../../../../redux/actions'

const mapResizeDrawingboardStateToProps = (state: any) => {
  return {
    resizeDrawingBoardIframe: state.metaViewReducer.resizeDrawingBoardIframe
  }
}

export default connect(mapResizeDrawingboardStateToProps)(memo(() => {
  const {
    metaViewReducer: {
      resizeDrawingBoardIframe
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
      <Button>
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
        step={5}
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
}))