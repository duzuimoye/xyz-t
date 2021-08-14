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
  user-select: none;
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
`

export const LineBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4px;
  margin-bottom: 10px;
`

export const LineBlockLabel = styled.label`
  min-width: 45px;
  text-indent: 0px;
  user-select: none;
`

export const LineBlockContent = styled.div`
  flex: 1;
`
