import styled from "styled-components"

export const SketchpadComponentTreeContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  .ant-tree {
    color: #fff;
    background-color: transparent;
    .ant-tree-switcher {
      background-color: transparent;
    }
    .ant-tree-node-content-wrapper {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .ant-tree-title {
        display: inline-block;
        flex: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
`

export const EmptyFile = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 100px;
  box-sizing: border-box;
  text-align: center;
`

export const CatagoryNodeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 5px;
`

export const NodeTitle = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 115px;
`