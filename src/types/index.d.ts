declare namespace State {
  export type IconType = 'antdIcon' | 'thirdPartyIcon' | 'img' | 'svg'
  export type areaModuleValueType = 'drawingboard' | 'fullContent' | 'metaView' | ""

  type DrawingboardSize = 'pc-1920*1080' | 'pc-1440*1050' | 'pc-1024*768' | 'mobile-320*480' | 'mobile-480*800'

  interface FileProps {
    label: string
    pageId: string
  }

  interface FileResourceManage {
    visiblePageConfig: boolean
    visibleStaticResource: boolean
  }

  interface FileProps {
    label: string
    pageId: string
    [props: string]: any
  }

  interface FileResourcePageProps {
    title: string,
    key: string
  }

  interface FileResourceProps {
    title: string,
    key: string,
    type: 'mobile' | 'pc'
    children: FileResourcePageProps[]
  }

  interface Drawingboard {
    unlockProjectId: string
    drawingboardList: Array
    activeFile: FileProps | null
    activeComponent: any
    eventGolbal: Array
    styleGlobal: Array
    stackFileOpened: FileProps[]
    fileResource: FileResourceProps[]
  }

  interface MetaView {
    initFullLoader: {
      visible: boolean
      progress: number
      messageInfo: string[]
      addProgressMaxStep: number
    }
    selectedRightBarConfigPage: string
    visibleFullPage: boolean
    areaModuleValue: areaModuleValueType
    resizeDrawingBoardIframe: number
    drawingboardSize: DrawingboardSize
    selectedSideBarLeftIconLabel: string
    visibleSideBarLeftTool: boolean
    visibleSidebarIconsList: boolean
    visibleSidebarRightConfigBox: boolean
    visibleHeaderBox: boolean
    configCompEnterName: string
    fileResourceManage: FileResourceManage
  }

  interface ReduxConnectProps {
    DrawingBoardReducer: Drawingboard
    metaViewReducer: MetaView
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
