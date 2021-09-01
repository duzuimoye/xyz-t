import { connect } from 'react-redux'
import store from '../../../../redux/store'
import { OpenResourceListContainer, FileList } from './styled'

const OpenResourceList = () => {
  const {
    DrawingBoardReducer: {
      stackFileOpened,
      activeFile
    }
  } = store.getState()

  return (
    <OpenResourceListContainer>
      {
        stackFileOpened.map(file => (
          <FileList
            key={file.id}
            selected={activeFile?.id === file.id}>
            {file.label}
          </FileList>
        ))
      }
    </OpenResourceListContainer>
  )
}

export default connect((state: State.ReduxConnectProps) => ({
  stackFileOpened: state.DrawingBoardReducer.stackFileOpened,
  activeFile: state.DrawingBoardReducer.activeFile
}))(OpenResourceList)
