const drawingboard: State.Drawingboard = {
  drawingboardList: [], // 画板json数据
  activeFile: null, // 当前打开的文件
  activeComponent: null, // 当前选中的组件
  eventGolbal: [], // 事件列表
  styleGlobal: [], // 样式列表
  fileResource: [
    {
      title: 'HarmonyOS设置',
      key: 'nJ3faY3PSmEeIePXIs',
      type: 'mobile',
      children: [
        { title: '首页', key: '0DCti8jSN9t8Alzix1' },
        { title: 'WLAN', key: '4k6Vgs9cEl2ZPgiyzm' },
        { title: '蓝牙', key: 'GaNZwPCGgwS2hGIWAk' },
        { title: '移动网络', key: 'yiCYvdwT5DC9ISD8bc' },
        { title: '超级终端', key: 'AhFPNpu7sIFwRJIPOf' },
        { title: '更多连接', key: 'UqXowluZXhmd5LXD3w' },
        { title: '桌面壁纸', key: 'xHTS2GZjdDWRaVIElB' },
        { title: '显示和亮度', key: 'S8AiMBfkKSim5LM7Ap' },
        { title: '声音和振动', key: 'j0MtfWK3ZwjoonAXhc' },
        { title: '通知', key: 'QBvKRj10sBYWDXNvLD' },
        { title: '生物识别和密码', key: 'A6MTyxHg5aZaXhLvX9' },
        { title: '应用和服务', key: 'MsJ208tTtQpL6LxRK3' },
        { title: '电池', key: 'ERxVrn82aZp1BpeSrk' },
        { title: '存储', key: 'VWSDnjBOlrmCmTp2Fj' },
        { title: '安全', key: 'kYxPV3yrENtjkFnvX9' },
        { title: '隐私', key: 'ByhOOt4BI6x3SRrUTP' },
        { title: '健康使用手机', key: 'VRm1CubqsHHMecK1ON' },
        { title: '智慧助手', key: 'AL5j6VZbrgDcJZNFbO' },
        { title: '辅助功能', key: 'hQs0imHk2SAsPGJv5P' },
        { title: '用户和账号', key: '3HuDDB6vX8Pl9yLi3i' },
        { title: 'HMS Core', key: '1HmdyU9r3c3OFl29SO' },
        { title: '系统和更新', key: 'P7Y0ujK7hSo4QCvAVe' },
        { title: '关于手机', key: 'lQgBSArE8333NquYDn' }
      ]
    },
    {
      title: "微信APP",
      type: 'mobile',
      key: 'wxd9HzGU45FWqfqBsg',
      children: [
        { title: '首页', key: 'L5OnVKUnPQ7rTtvF9Y' },
        { title: '通讯录', key: '5HacOK40KcMfsCjXIJ' },
        { title: '发现', key: 'XNPtvwxjwspyObhISN' },
        { title: '我', key: 'wfCdWzSPqrByrxi2SH' }
      ]
    },
    {
      title: "微信PC",
      type: 'pc',
      key: 'nt5UfsPo1cqOb4zdHM',
      children: [
        { title: '首页', key: 'tcqJXTu7a4yBqaRm9k' },
        { title: 'HMS Core', key: 'xbwZUdx37zwCDAccOH' }
      ]
    },
    {
      title: "Ant Design",
      type: 'pc',
      key: 'g5tVdhyZYAI2eyQusj',
      children: [
        { title: 'Home', key: 'cA2V7TEHWYmv4a35rB' },
        { title: 'Design', key: 'RlwrRb5PTYEXE2zbd5' },
        { title: 'Docs', key: 'YdOnPXt6SUWTGNKwvR' },
        { title: 'Components', key: 'mPGUP5kkWnN8Alz7Xt' },
        { title: 'Resources', key: 'wTDueL9On7KNI7SCSv' }
      ]
    },
    {
      title: "钉钉APP",
      type: 'mobile',
      key: 'tmbdpDBGwGk2rYOAli',
      children: [
        { title: '首页', key: 'YoRXvwul2s59FaCqAy' },
        { title: 'HMS Core', key: 'ARyaHchr5vLJDXVJ2c' }
      ]
    },
    {
      title: "钉钉桌面",
      type: 'pc',
      key: 'hHvDme1IIxCig1orGf',
      children: []
    }
  ],
  unlockProjectId: '', // 已经解锁的项目id
  stackFileOpened: [] // 已打开的文件列表
}

export default drawingboard
