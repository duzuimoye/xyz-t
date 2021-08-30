declare namespace State {
  export type IconType = 'antdIcon' | 'thirdPartyIcon' | 'img' | 'svg'
  export type areaModuleValueType = 'drawingboard' | 'fullContent' | 'metaView'

  type DrawingboardSize = 'pc-1920*1080' | 'pc-1440*1050' | 'pc-1024*768' | 'mobile-320*480' | 'mobile-480*800'

  interface App {
    token: string
    id: string
    username: string
    avatar: string
    lastLoginTime: number | null
  }

  interface staticResource {
    id: string

  }
  interface ActiveFile {
    id: string
    title: string
    codeStr: string
    routerPath: string
  }

  interface FileResourceManage {
    visiblePageConfig: boolean
    visibleStaticResource: boolean
  }

  interface InitMetaViewProp {
    drawingboardSize: DrawingboardSize
    selectedSideBarLeftIconLabel: string | undefined
    auxliaryCompName: string
    configCompEnterName: string
    resizeDrawingBoard: number
    visibleFullPage: boolean
    visibleSideBarLeftTool: boolean
    visibleSidebarIconsList: boolean
    visibleSidebarRightConfigBox: boolean
    visibleHeaderBox: boolean
    areaModuleValue: areaModuleValueType
    initFullLoader: {
      visible: boolean
      progress: number
      messageInfo: string[]
      addProgressMaxStep: number
    }
    fileResourceManage: {
      visiblePageConfig: true
      visibleStaticResource: true
    }
  }

  interface MetaView {
    selectedSideBarLeftIconLabel: string
    visibleSideBarLeftTool: boolean
    visibleSidebarIconsList: boolean
    visibleSidebarRightConfigBox: boolean
    visibleHeaderBox: boolean
    auxliaryCompName: string
    visibleInitPropsModal: boolean
    configCompEnterName: string
    visibleinitFullLoading: boolean
    fullLoaderProgress: number
    fullLoaderInfo: string
    addProgress: number
    visibleFullLoading: boolean
    fileResourceManage: FileResourceManage
  }

  interface WorkbenchLoad {
    rightBarRouteName: string
    resizeDrawingBoard: number
    drawingboardList: array
    activeComponent: { DragComponent } | null
    activeFile: ActiveFile | null
    openFileList: array<ActiveFile>
    fileResourceManage: Record<{ pageListData: Array<ActiveFile>, staticResourceData: [] }>
  }

  interface DragComponent {
    groupName: string
    label: string
    tag: string
    configCompEnterName: string
  }

  interface PageState {
    metaView: MetaView
    workbench: WorkbenchLoad
  }

  export interface AppState extends PageState {
    app: App
  }

  export interface PagePayload extends MetaView, ActiveFile, App {

  }
}

// redux-devtools 
declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any
}

declare namespace CustomRouter {
  interface Route {
    path: string
    redirectd?: string
    name?: string
    params?: string
    exact?: boolean
    component: React.FunctionComponent<any>
  }
}

declare namespace DrawingBoard {
  interface Component {
    label?: string
    componentId: string
    [prop: string]: any,
    childrenNode?: array<Component>
  }
}

declare namespace Meta {
  export interface FileDir {
    label: string
    value: string
    disabled: boolean
    icon?: string
    keymaster?: string
    divider?: boolean
    notify: boolean
    onClick?: function | null
    Comp?: React.FunctionComponent<any>
    children?: Array<FileDir>
  }
  interface HeaderDir {
    label: string
    value: string
    notify: boolean
    disabled: boolean
    visible: false,
    children?: Array<FileDir>
  }
  interface SidebarIcons {
    icon: string
    title: string
    link: string
  }
}
