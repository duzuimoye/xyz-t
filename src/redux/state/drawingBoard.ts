const drawingboard: State.Drawingboard = {
  drawingboardList: [], // 画板json数据
  activeFile: null, // 当前打开的文件
  activeComponent: null, // 当前选中的组件
  eventGolbal: [], // 事件列表
  styleGlobal: [], // 样式列表
  FileResource: [],
  stackFileOpened: [
    { label: 'test1', id: 'test1' },
    { label: 'test2', id: 'test2' },
    { label: 'test3', id: 'test3' },
    { label: 'test4', id: 'test4' },
    { label: 'test5', id: 'test5' },
    { label: 'test6', id: 'test6' },
    { label: 'test7', id: 'test7' },
    { label: 'test8', id: 'test8' },
    { label: 'test9', id: 'test9' },
    { label: 'test101', id: 'test101' },
    { label: 'test102', id: 'test102' },
    { label: 'test103', id: 'test103' },
    { label: 'test104', id: 'test104' },
    { label: 'test105', id: 'test105' }
  ] // 已打开的文件列表
}

export default drawingboard
