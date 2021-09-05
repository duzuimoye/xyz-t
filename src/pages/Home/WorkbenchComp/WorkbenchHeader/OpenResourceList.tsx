import { useEffect, useState } from 'react'
import { Menu, Item, Separator, useContextMenu } from "react-contexify"
import { connect } from 'react-redux'
import {
  OpenResourceListContainer,
  FileList,
  EmptyText,
  CloseIconBox,
  FileLabel
} from './styled'
import {
  ACTIVE_PAGE_ACTION,
  CLOSE_FILE_ACTION,
  CLOSE_OTHER_SAVED_FILE_ACTION
} from '../../../../redux/actions/index'
import store from '../../../../redux/store'
import i18n from '../../../../utils/i18n'

const MENU_ID = "OpenResourceListContainerRef"

const OpenResourceList = () => {
  const [contextFileId, setcontextFileId] = useState('')
  const { show } = useContextMenu({
    id: MENU_ID
  })
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
    <>
      <OpenResourceListContainer
        id={MENU_ID}
        onWheel={e => {
          e.currentTarget.scrollBy(e.deltaY > 0 ? 30 : -30, 0)
        }}>
        {
          stackFileOpened.length ? stackFileOpened.map(file => (
            <FileList
              key={file.pageId}
              id={file.pageId}
              onContextMenu={e => {
                setcontextFileId(file.pageId)

                show(e, {
                  props: {
                    key: "foobar"
                  }
                })
              }}
              onClick={() => {
                store.dispatch({
                  type: ACTIVE_PAGE_ACTION,
                  payload: file
                })
              }}
              className={activeFile?.pageId === file.pageId ? 'select' : ''}>
              <FileLabel highlight={activeFile?.pageId === file.pageId}>{file.label}</FileLabel>
              <CloseIconBox
                className="close-btn"
                highlight={activeFile?.pageId === file.pageId}
                onClick={e => {
                  e.stopPropagation()
                  store.dispatch({
                    type: CLOSE_FILE_ACTION,
                    payload: file.pageId
                  })
                }}
              ><i className="xyz xyz-close" /></CloseIconBox>
            </FileList>
          )) : <EmptyText>{i18n.t('common.emptyFile')}</EmptyText>
        }
        <Menu id={MENU_ID}>
          <Item
            onClick={() => {
              store.dispatch({
                type: CLOSE_OTHER_SAVED_FILE_ACTION,
                payload: contextFileId
              })
            }}>关闭其他</Item>
          <Item disabled>全部关闭</Item>
          <Separator />
          <Item disabled>固定</Item>
          <Item disabled>预览</Item>
          <Separator />
          <Item disabled>配置</Item>
        </Menu>
      </OpenResourceListContainer>
    </>
  )
}

export default connect((state: State.ReduxConnectProps) => ({
  stackFileOpened: state.DrawingBoardReducer.stackFileOpened,
  activeFile: state.DrawingBoardReducer.activeFile
}))(OpenResourceList)
