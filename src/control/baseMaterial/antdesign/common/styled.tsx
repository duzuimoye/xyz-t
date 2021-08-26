import styled from 'styled-components'

export const RightBarConfigContainer = styled.div`
  width: 100%;
  overflow: hidden;
  font-size: 14px;
  color: #fff;
  display: flex;
  flex-direction: column;
`

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-right: 4px;
  background-color: #272f3b;
  color: #e8e8e9;
  box-sizing: border-box;
  border-bottom: 1px solid #171b21;
`

export const HeaderTitle = styled.div`
  font-weight: 600;
  width: 100%;
  height: 30px;
  background-color: rgba(0, 0, 0, 0);
  text-indent: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
`

export const HeaderTitleRightConfig = styled.div`
  color: #fff;
`

interface visibleProps {
  visible: boolean
}

export const CollapseContent = styled.div`
  overflow: hidden;
  height: 0;
  flex: ${(props: visibleProps) => props.visible ? 1 : 'none'};
  .empty-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-items: center;
    min-height: 200px;
    user-select: none;
    img {
      -webkit-user-drag: none;
    }
  }
  .ant-switch {
    background-color: #e0e0e0;
    &.ant-switch-checked {
      background-color: #1890ff;
    }
  }
`

export const LineBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4px;
  margin-bottom: 10px;
  &.sticky {
    position: sticky;
    top: 0;
    background: #fff;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
`

export const LineBlockLabel = styled.label`
  min-width: 45px;
  text-indent: 0px;
  user-select: none;
  margin-right: 8px;
`

export const LineBlockContent = styled.div`
  flex: 1;
`

export const IconBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 4px;
  margin: 10px;
  font-size: 22px;
  text-align: center;
  border: ${({ selected }: { selected: boolean }) => `${selected ? '2px solid #1890ff' : '1px solid #00000073'}`};
  box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16) 0 3px 6px 0 rgba(0, 0, 0, 0.12) 0 5px 12px 4px rgba(0, 0, 0, 0.09);
  &:hover {
    border: 2px solid #1890ff;
  }
`

export const IconBox = styled.div`
  width: 100%;
  font-size: 14px;
  margin-bottom: 20px;
  padding: 3px;
  border: 1px dashed #71779040;
`

export const IconTypeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`