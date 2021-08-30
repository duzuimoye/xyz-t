const metaView: State.InitMetaViewProp = {
  selectedSideBarLeftIconLabel: 'resourceManager', // 左侧图标默认选中值
  auxliaryCompName: '',
  configCompEnterName: '',

  drawingboardSize: 'pc-1920*1080',
  resizeDrawingBoard: 100, // 画板缩放比例(range: 20~250)

  // view-component 配置显示
  visibleFullPage: false, // 是否全屏
  visibleSideBarLeftTool: true, // 是否显示左侧工具栏
  visibleSidebarIconsList: true, // 是否显示左侧图标栏
  visibleSidebarRightConfigBox: true, // 是否显示右侧配置栏
  visibleHeaderBox: true, // 是否显示顶部栏
  areaModuleValue: 'drawingboard', // main区域显示内容

  // 初始化全屏loader
  initFullLoader: {
    visible: false, // 是否显示
    progress: 5, // 进度条数据max: 100
    messageInfo: ['正在初始化中...'], // 显示数据信息
    addProgressMaxStep: 5 // 最小增长条
  },

  fileResourceManage: {
    visiblePageConfig: true,
    visibleStaticResource: true
  }
}

export default metaView
