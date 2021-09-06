import styled from 'styled-components'
import divider1 from '../../../assets/images/divider1.png'
import divider2 from '../../../assets/images/divider2.png'
import iframeBg from '../../../assets/images/drawingboardsvg.svg'

export const WorkbenchBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  color: #fff;
  position: relative;
  box-sizing: border-box;
  // todo ??? must set width, but the value is arbitrarily.
  width: 1px;
`

export const WorkbenchFooter = styled.div`
  width: 100%;
  height: 28px;
`
export const IframeContainer = styled.div`
  flex: 1;
  position: relative;
  padding: 20px 20px;
  width: 100%;
  box-sizing: border-box;
  background-color: #24222e;
  position: relative;
`

export const IframeBox = styled.div`
  position: absolute;
  left: 20px;
  right: 0;
  top: 20px;
  bottom: 0;
  overflow: hidden;
  background-image: url(${iframeBg});
  background-size: 15px 15px;
  background-color: #24222e;
  flex: 1;
  box-sizing: border-box;
  .frame-drawboard-content {
    width: 100%;
    height: 100%;
  }
`
export const IframeResizeBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const IframeContent = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
  ::-webkit-scrollbar {
    width: 15px;
    height: 15px;
    border-radius: 0;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    position: relative;
    width: 0;
    height: 0;
    padding: 0;
    margin: 0 auto;
    background-color: #0a101b;
    border-radius: 0;
  }
  ::-webkit-resizer {
    background-color: transparent;
    border-radius: 0;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: transparent;
    border-radius: 0;
  }
  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  iframe {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: none;
    padding: 0;
    margin: 20px 20px 17px;
    box-shadow: rgb(0 0 0 / 50%) 0 0 30px 0;
    .frame-drawboard-content {
      width: 100%;
      height: 100%;
    }
  }
`

export const DividerWorkbenchVerticalLeftContainer = styled.div`
  position: absolute;
  top: 40px;
  bottom:0;
  width: 20px;
  left: 0;
  overflow: hidden;
`
export const DividerWorkbenchVerticalRightContainer = styled.div`
  position: absolute;
  top: 40px;
  bottom:0;
  width: 20px;
  right: 0;
  overflow: hidden;
`

export const DividerWorkbenchVertical = styled.div`
  position: relative;
  width: 20px;
  background-image: url(${divider2});
  background-repeat: repeat-y;
  background-position-y: 0;
  border-right: solid 1px #333f57;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .number {
    writing-mode: tb-rl;
    position: relative;
    font-size: 12px;
    height: 50px;
    width: 100%;
    top: 0;
    text-align: left;
    text-indent: 3px;
    user-select: none;
  }
  &.left-divider {
    left: 0;
  }
  &.right-divider {
    right: 20px;
  }
`

export const DividerWorkbenchHorizontalContainer = styled.div`
  position: absolute;
  left: 20px;
  right: 0;
  height: 20px;
  top: 0;
  overflow: hidden;
`
export const DividerWorkbenchHorizontal = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 5000px;
  background-position-x: 0;
  background-image: url(${divider1});
  background-repeat: repeat-x;
  height: 20px;
  box-sizing: border-box;
  overflow: hidden;
  margin-left: 20px;
  &.top-divider {
    top: 0;
  }
  &.bottom-divider {
    bottom: 20px;
  }
  .number {
    position: relative;
    font-size: 12px;
    height: 100%;
    width: 50px;
    left: 0;
    text-align: left;
    text-indent: 3px;
    display: inline-block;
    user-select: none;
  }
`
