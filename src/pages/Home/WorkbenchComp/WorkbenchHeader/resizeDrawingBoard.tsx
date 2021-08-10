import { memo } from 'react'
import { connect } from 'react-redux'
import { Slider } from 'antd'
import store from '../../../../redux/store'
import { RESIZE_DRAWINGBOARD_ACTION } from '../../../../redux/actions'

const mapResizeDrawingboardStateToProps = (state: any) => {
  return {
    resizeDrawingBoard: state.DrawingBoardReducer.resizeDrawingBoard
  }
}

export default connect(mapResizeDrawingboardStateToProps)(memo(() => {
  const {
    DrawingBoardReducer: {
      resizeDrawingBoard
    }
  } = store.getState()

  function changeResize(resizeNumber: number) {
    store.dispatch({
      type: RESIZE_DRAWINGBOARD_ACTION,
      payload: {
        resizeDrawingBoard: resizeNumber
      }
    })
  }

  return (
    <Slider
      defaultValue={resizeDrawingBoard}
      className="slider-box"
      onChange={val => changeResize(val)}
      min={20}
      max={200}
      tipFormatter={value => `${value} %`}
    />
  )
}))