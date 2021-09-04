import { useEffect } from 'react'
import { connect } from 'react-redux'
import { OpenResourceListContainer, FileList, EmptyText } from './styled'
import { ACTIVE_PAGE_ACTION } from '../../../../redux/actions/index'
import store from '../../../../redux/store'
import i18n from '../../../../utils/i18n'

const OpenResourceList = () => {
  const {
    DrawingBoardReducer: {
      stackFileOpened,
      activeFile
    }
  } = store.getState()

  useEffect(() => {
    if (activeFile) {
      document.getElementById(activeFile?.pageId)?.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'center'
      })
    }
  }, [activeFile])

  return (
    <OpenResourceListContainer onWheel={e => {
      e.currentTarget.scrollBy(e.deltaY > 0 ? 50 : -50, 0)
    }}>
      {
        stackFileOpened.length ? stackFileOpened.map(file => (
          <FileList
            key={file.pageId}
            id={file.pageId}
            onClick={() => {
              store.dispatch({
                type: ACTIVE_PAGE_ACTION,
                payload: file
              })
            }}
            className={activeFile?.pageId === file.pageId ? 'select' : ''}>
            {file.label}
          </FileList>
        )) : <EmptyText>{i18n.t('common.emptyFile')}</EmptyText>
      }
    </OpenResourceListContainer>
  )
}

export default connect((state: State.ReduxConnectProps) => ({
  stackFileOpened: state.DrawingBoardReducer.stackFileOpened,
  activeFile: state.DrawingBoardReducer.activeFile
}))(OpenResourceList)
