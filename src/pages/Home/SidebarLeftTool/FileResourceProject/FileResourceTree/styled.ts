import styled from "styled-components"

export const SketchpadComponentTreeContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  overflow-y: auto;
  ::-webkit-scrollbar {
    position: relative;
    width: 0;
    height: 0;
    border-radius: 0;
    background-color: transparent;
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