import { useEffect, useState } from 'react'
import { Menu, Item, Separator, Submenu, useContextMenu } from 'react-contexify'
import { connect } from 'react-redux'
import { Tree } from 'antd'
import "react-contexify/dist/ReactContexify.css"
import { SketchpadComponentTreeContainer, CatagoryNodeContainer, NodeTitle } from './styled'
import { ACTIVE_PAGE_ACTION } from '../../../../../redux/actions/index'
import store from '../../../../../redux/store'

const TreerootNodeIcon = () => (
  <i className="xyz xyz-Journal" style={{ color: '#01aaaa' }} />
)

const CatagoryNode = ({ title, type, isunlock, id, show }: { show: any, title: string, type: 'mobile' | 'pc', isunlock?: boolean, id: string }) => {
  return (
    <CatagoryNodeContainer
      id={id}
      onContextMenu={e => {
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


const FileResourceTree = () => {
  const [selectedKeys, setSelectedKeys] = useState<string>('')
  const [contextMenuTargetId, setcontextMenuTargetId] = useState('--')
  const { show } = useContextMenu({
    id: contextMenuTargetId
  })

  const {
    DrawingBoardReducer: {
      activeFile,
      unlockProjectId,
      FileResource
    }
  } = store.getState()

  const treeData = FileResource.map(item => {
    return {
      ...item,
      title: <CatagoryNode title={item.title} type={item.type} show={show} id={item.key} isunlock={unlockProjectId === item.key} />,
      children: item.children.map(child => {
        return {
          ...child,
          icon: <TreerootNodeIcon />
        }
      })
    }
  })

  useEffect(() => {
    if (activeFile) {
      setSelectedKeys(activeFile.pageId)
    }
  }, [activeFile, contextMenuTargetId])

  function handleItemClick() {
    console.log('handleItemClick')
  }

  return (
    <>
      <Menu id={contextMenuTargetId}>
        <Item onClick={handleItemClick} disabled={!unlockProjectId || contextMenuTargetId !== unlockProjectId}>
          {contextMenuTargetId === unlockProjectId ? '释放锁资源' : '获取锁资源'}
        </Item>
        <Item onClick={handleItemClick}>
          预览
        </Item>
        <Separator />
        <Item>删除</Item>
        <Item disabled>配置</Item>
        <Separator />
        <Submenu label="配置">
          <Item onClick={handleItemClick}>
            删除
          </Item>
          <Item onClick={handleItemClick}>另存</Item>
        </Submenu>
      </Menu>
      <Tree.DirectoryTree
        blockNode
        treeData={treeData}
        selectedKeys={[selectedKeys]}
        onRightClick={({ node }) => {
          if (node.children) {
            setcontextMenuTargetId(node.key as string)
          }
        }}
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
    <SketchpadComponentTreeContainer>
      <FileResourceTree />
    </SketchpadComponentTreeContainer>
  )
}

const mapStateToProps = (state: State.ReduxConnectProps) => {
  return {
    activeFile: state.DrawingBoardReducer.activeFile,
    FileResource: state.DrawingBoardReducer.FileResource,
    unlockProjectId: state.DrawingBoardReducer.unlockProjectId
  }
}

export default connect(mapStateToProps)(FileResourceTreeContainer)
