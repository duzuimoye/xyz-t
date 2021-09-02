import { Tree } from 'antd'
import { SketchpadComponentTreeContainer, CatagoryNodeContainer, NodeTitle } from './styled'

export const FileResourceTree = () => {
  const TreerootNodeIcon = () => (
    <i className="xyz xyz-Journal" style={{ color: '#01aaaa' }} />
  )

  const CatagoryNode = ({ title, type }: { title: string, type: 'mobile' | 'pc' }) => (
    <CatagoryNodeContainer>
      <NodeTitle title={title}>{title}</NodeTitle>
      <i className={type === 'pc' ? 'xyz-small-pc xyz' : 'xyz-mobile xyz'} />
    </CatagoryNodeContainer>
  )

  const treeData = [
    {
      title: <CatagoryNode title="华为手机配置页" type="mobile" />,
      key: '0-0',
      children: [
        { title: '首页', key: '0DCti8jSN9t8Alzix1', icon: <TreerootNodeIcon /> },
        { title: 'WLAN', key: '4k6Vgs9cEl2ZPgiyzm', icon: <TreerootNodeIcon /> },
        { title: '蓝牙', key: 'GaNZwPCGgwS2hGIWAk', icon: <TreerootNodeIcon /> },
        { title: '移动网络', key: 'yiCYvdwT5DC9ISD8bc', icon: <TreerootNodeIcon /> },
        { title: '超级终端', key: 'AhFPNpu7sIFwRJIPOf', icon: <TreerootNodeIcon /> },
        { title: '更多连接', key: 'UqXowluZXhmd5LXD3w', icon: <TreerootNodeIcon /> },
        { title: '桌面壁纸', key: 'xHTS2GZjdDWRaVIElB', icon: <TreerootNodeIcon /> },
        { title: '显示和亮度', key: 'S8AiMBfkKSim5LM7Ap', icon: <TreerootNodeIcon /> },
        { title: '声音和振动', key: 'j0MtfWK3ZwjoonAXhc', icon: <TreerootNodeIcon /> },
        { title: '通知', key: 'QBvKRj10sBYWDXNvLD', icon: <TreerootNodeIcon /> },
        { title: '生物识别和密码', key: 'A6MTyxHg5aZaXhLvX9', icon: <TreerootNodeIcon /> },
        { title: '应用和服务', key: 'MsJ208tTtQpL6LxRK3', icon: <TreerootNodeIcon /> },
        { title: '电池', key: 'ERxVrn82aZp1BpeSrk', icon: <TreerootNodeIcon /> },
        { title: '存储', key: 'VWSDnjBOlrmCmTp2Fj', icon: <TreerootNodeIcon /> },
        { title: '安全', key: 'kYxPV3yrENtjkFnvX9', icon: <TreerootNodeIcon /> },
        { title: '隐私', key: 'ByhOOt4BI6x3SRrUTP', icon: <TreerootNodeIcon /> },
        { title: '健康使用手机', key: 'VRm1CubqsHHMecK1ON', icon: <TreerootNodeIcon /> },
        { title: '智慧助手', key: 'AL5j6VZbrgDcJZNFbO', icon: <TreerootNodeIcon /> },
        { title: '辅助功能', key: 'hQs0imHk2SAsPGJv5P', icon: <TreerootNodeIcon /> },
        { title: '用户和账号', key: '3HuDDB6vX8Pl9yLi3i', icon: <TreerootNodeIcon /> },
        { title: 'HMS Core', key: '1HmdyU9r3c3OFl29SO', icon: <TreerootNodeIcon /> },
        { title: '系统和更新', key: 'P7Y0ujK7hSo4QCvAVe', icon: <TreerootNodeIcon /> },
        { title: '关于手机', key: 'lQgBSArE8333NquYDn', icon: <TreerootNodeIcon /> }
      ]
    },
    {
      title: <CatagoryNode title="微信APP" type="mobile" />,
      key: 'wxd9HzGU45FWqfqBsg',
      children: [
        { title: '首页', key: 'L5OnVKUnPQ7rTtvF9Y', icon: <TreerootNodeIcon /> },
        { title: '通讯录', key: '5HacOK40KcMfsCjXIJ', icon: <TreerootNodeIcon /> },
        { title: '发现', key: 'XNPtvwxjwspyObhISN', icon: <TreerootNodeIcon /> },
        { title: '我', key: 'wfCdWzSPqrByrxi2SH', icon: <TreerootNodeIcon /> }
      ]
    },
    {
      title: <CatagoryNode title="微信PC" type="pc" />,
      key: 'nt5UfsPo1cqOb4zdHM',
      children: [
        { title: '首页', key: 'tcqJXTu7a4yBqaRm9k', icon: <TreerootNodeIcon /> },
        { title: 'HMS Core', key: 'xbwZUdx37zwCDAccOH', icon: <TreerootNodeIcon /> }
      ]
    },
    {
      title: <CatagoryNode title="Ant Design" type="pc" />,
      key: 'g5tVdhyZYAI2eyQusj',
      children: [
        { title: 'Home', key: 'cA2V7TEHWYmv4a35rB', icon: <TreerootNodeIcon /> },
        { title: 'Design', key: 'RlwrRb5PTYEXE2zbd5', icon: <TreerootNodeIcon /> },
        { title: 'Docs', key: 'YdOnPXt6SUWTGNKwvR', icon: <TreerootNodeIcon /> },
        { title: 'Components', key: 'mPGUP5kkWnN8Alz7Xt', icon: <TreerootNodeIcon /> },
        { title: 'Resources', key: 'wTDueL9On7KNI7SCSv', icon: <TreerootNodeIcon /> }
      ]
    },
    {
      title: <CatagoryNode title="钉钉APP" type="mobile" />,
      key: 'tmbdpDBGwGk2rYOAli',
      children: [
        { title: '首页', key: 'YoRXvwul2s59FaCqAy', icon: <TreerootNodeIcon /> },
        { title: 'HMS Core', key: 'ARyaHchr5vLJDXVJ2c', icon: <TreerootNodeIcon /> }
      ]
    },
    {
      title: <CatagoryNode title="钉钉PC" type="pc" />,
      key: 'hHvDme1IIxCig1orGf',
      children: [
        { title: '首页', key: 'xWgpUfKn4sJjn0p1Xb', icon: <TreerootNodeIcon /> },
        { title: '登录', key: '7vF58PIccyZbHhM51T', icon: <TreerootNodeIcon /> }
      ]
    }
  ]

  return (
    <Tree.DirectoryTree
      treeData={treeData}
    />
  )
}

const FileResourceTreeContainer = () => {
  return (
    <SketchpadComponentTreeContainer>
      <FileResourceTree />
    </SketchpadComponentTreeContainer>
  )
}

export default FileResourceTreeContainer
