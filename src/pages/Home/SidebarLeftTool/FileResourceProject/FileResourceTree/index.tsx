import { useEffect, useState } from 'react'
import { Menu, Item, Separator, useContextMenu } from "react-contexify"

import { connect } from 'react-redux'
import { Tree } from 'antd'
import "react-contexify/dist/ReactContexify.css"
import { SketchpadComponentTreeContainer, CatagoryNodeContainer, NodeTitle } from './styled'
import {
  ACTIVE_PAGE_ACTION,
  UPDATE_LOCK_ACTION
} from '../../../../../redux/actions/index'
import store from '../../../../../redux/store'

const MENU_ID = "SketchpadComponent"
const mapStateToProps = (state: State.ReduxConnectProps) => {
  return {
    activeFile: state.DrawingBoardReducer.activeFile,
    FileResource: state.DrawingBoardReducer.FileResource,
    unlockProjectId: state.DrawingBoardReducer.unlockProjectId
  }
}

const FileResourceTree = () => {
  const [selectedKeys, setSelectedKeys] = useState<string>('')
  const [contextCatagoryId, setcontextCatagoryId] = useState('')
  const { show } = useContextMenu({
    id: MENU_ID
  })

  const {
    DrawingBoardReducer: {
      activeFile,
      unlockProjectId,
      FileResource
    }
  } = store.getState()

  const CatagoryNode = (
    { title, type, isunlock, id }: { title: string, type: 'mobile' | 'pc', isunlock?: boolean, id: string }
  ) => {
    return (
      <CatagoryNodeContainer
        id={id}
        onContextMenu={e => {
          setcontextCatagoryId(id)
          show(e)
        }}>
        <NodeTitle title={title}>{title}</NodeTitle>
        <i
          className={type === 'pc' ? 'xyz-small-pc xyz' : 'xyz-mobile xyz'}
          style={{ color: isunlock ? 'rgb(1, 170, 170)' : 'default' }}
        />
      </CatagoryNodeContainer>
    )
  }

  const treeData = FileResource.map(item => {
    return {
      ...item,
      title: <CatagoryNode title={item.title} type={item.type} id={item.key} isunlock={unlockProjectId === item.key} />,
      children: item.children.map(child => {
        return {
          ...child,
          icon: <i className="xyz xyz-Journal" style={{ color: '#01aaaa' }} />
        }
      })
    }
  })

  useEffect(() => {
    if (activeFile) {
      setSelectedKeys(activeFile.pageId)
    }
  }, [activeFile])

  return (
    <>
      <Menu id={MENU_ID}>
        {
          unlockProjectId ? (
            <Item
              disabled={contextCatagoryId !== unlockProjectId}
              onClick={() => {
                store.dispatch({
                  type: UPDATE_LOCK_ACTION,
                  payload: {
                    unlockProjectId: ''
                  }
                })
              }}
            >
              {contextCatagoryId === unlockProjectId ? '释放锁资源' : '获取锁资源'}
            </Item>
          ) : (
            <Item onClick={() => {
              store.dispatch({
                type: UPDATE_LOCK_ACTION,
                payload: {
                  unlockProjectId: contextCatagoryId
                }
              })
            }}>
              获取锁资源
            </Item>
          )
        }
        <Item onClick={() => {
          // preview
        }}>
          预览
        </Item>
        <Separator />
        <Item>删除</Item>
        <Item disabled>配置</Item>
      </Menu>
      <Tree.DirectoryTree
        blockNode
        treeData={treeData}
        selectedKeys={[selectedKeys]}
        onSelect={(_, { node }) => {
          if (!node.children) {
            store.dispatch({
              type: ACTIVE_PAGE_ACTION,
              payload: {
                pageId: node.key,
                label: node.title
              }
            })
          }
        }}
      />
    </>
  )
}

const FileResourceTreeContainer = () => {
  return (
    <SketchpadComponentTreeContainer id={MENU_ID}>
      <FileResourceTree />
    </SketchpadComponentTreeContainer>
  )
}

export default connect(mapStateToProps)(FileResourceTreeContainer)
