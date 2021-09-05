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
  padding: 0 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-right: 1px solid rgb(37, 37, 38);
  background-color: rgb(45, 45, 45);
  &.select {
    color: #fff;
    background: #6d6d6d;
  }
  &:hover {
    .close-btn {
      visibility: visible;
    }
  }
`

export const FileLabel = styled.div`
  width: 80px;
  display: inline-block;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  text-indent: 10px;
  color: ${({ highlight }: { highlight: boolean }) => highlight ? '#fff' : 'rgba(255, 255, 255, 0.5)'};
`

export const CloseIconBox = styled.span`
  width: 18px;
  height: 18px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  visibility: ${({ highlight }: { highlight: boolean }) => highlight ? 'visible' : 'hidden'};
  &:hover {
    background: #86909c45;
  }
`

export const EmptyText = styled.div`
  width: 100%;
  text-align: center;
  color: #fff;
`