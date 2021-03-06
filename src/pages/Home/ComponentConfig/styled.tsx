import styled from 'styled-components'

export const ComponentConfigContainer = styled.div`
  width: 250px;
  height: 100%;
  color: #fff;
  background-color: #0a101b;
  border-left: 1px solid #333f57;
  position: relative;
  overflow-y: auto;
  display: ${({ visible }: { visible: boolean }) => `${visible ? 'block' : 'none'}`};
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`
