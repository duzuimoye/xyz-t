import styled from 'styled-components'

export const EmptyFileContainer = styled.div`
  flex: 1;
  height: 100%;
  color: #fff;
  font-size: 14px;
  box-sizing: border-box;
  padding: 30px;
  overflow: hidden auto;
  .driver-page {
    .ant-empty-image  img {
      height: 250px;
      -webkit-user-drag: none;
    }
  }
`

export const BlockLine = styled.div`
  width: 100%;
  display:flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 20px;
`

export const TitleBox = styled.div`
  text-indent: 10px;
  width: 100px;
  line-height: 35px;
  padding-right: 20px;
`
export const MainBox = styled.div`
  flex: 1;
  max-height: 250px;
`

export const ContentList = styled.div`
  flex: 1;
  span {
    display: inline-block;
    padding: 3px;
    margin: 3px;
    color: #96a5b3;
    text-decoration: underline;
    text-align: center;
    &:hover {
      color: #1e80ffa3;
    }
  }
`