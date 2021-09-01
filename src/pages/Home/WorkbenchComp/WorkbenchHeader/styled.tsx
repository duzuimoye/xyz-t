import styled from "styled-components"

export const WorkbenchHeaderContainer = styled.div`
  width: 100%;
  height: 30px;
  background-color: #0a101b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .slider-box {
    width: 150px;
  }
`

export const ToolBtnComp = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const ToolBtnRightComp = styled.div`
  display: flex;
  width: 250px;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  user-select: none;
`

export const Button = styled.div`
  width: 45px;
  line-height: 30px;
  height: 30px;
  text-align: center;
  cursor: default;
  &:hover {
    background: #85b1d65c;
  }
`

export const OpenResourceListContainer = styled.div`
  /* flex: 1; */
  height: 100%;
  width: 100%;
  line-height: 30px;
  background: #494a4c5e;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  &:hover {
    overflow-x: auto;
  }
`

export const FileList = styled.div`
  /* flex-shrink: 0; */
  /* left: auto; */
  /* min-width: fit-content; */
  padding: 0 3px;
  text-align: center;
  font-size: 14px;
  border-right: 1px solid rgb(37, 37, 38);
  background-color: rgb(45, 45, 45);
  color: rgba(255, 255, 255, 0.5);
  display: inline-block;
  position: relative;
  width: 100px;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  box-sizing: border-box;
  background-color: ${({ selected }: { selected: boolean }) => `${selected ? '#6d6d6d' : 'rgb(45, 45, 45)'}`};
  &:hover {
    background-color: #6d6d6d;
    color: #fff;
  }
`