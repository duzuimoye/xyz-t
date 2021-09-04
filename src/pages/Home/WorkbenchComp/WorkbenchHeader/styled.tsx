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
  height: 100%;
  line-height: 30px;
  background: #494a4c5e;

  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  &:hover {
    overflow: auto hidden;
  }
  &::-webkit-scrollbar {
    height: 0;
  }
`

export const FileList = styled.div`
  padding: 0 3px;
  text-align: center;
  flex-shrink: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  border-right: 1px solid rgb(37, 37, 38);
  background-color: rgb(45, 45, 45);
  color: rgba(255, 255, 255, 0.5);
  display: inline-block;
  width: 100px;
  user-select: none;
  box-sizing: border-box;
  &.select {
    color: #fff;
    background: #6d6d6d;
  }
  &:hover {
    color: #fff;
  }
`

export const EmptyText = styled.div`
  width: 100%;
  text-align: center;
  color: #fff;
`