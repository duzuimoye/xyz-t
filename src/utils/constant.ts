import i18n from './i18n'
import FileResourceProject from '../pages/Home/SidebarLeftTool/FileResourceProject'
import ComponentContainer from '../pages/Home/SidebarLeftTool/ComponentContainer'
import SearchModel from '../pages/Home/SidebarLeftTool/SearchModel'
import TemplateContainer from '../pages/Home/SidebarLeftTool/TemplateContainer'
import DebugModel from '../pages/Home/SidebarLeftTool/DebugModel'
import ExtendTool from '../pages/Home/SidebarLeftTool/ExtendTool'

export const SIDEBAR_ICONS_LIST = {
  header: [
    {
      title: i18n.t('common.resourceManage'),
      value: 'resourceManager',
      icon: ' xyz xyz-Artboard',
      Comp: FileResourceProject,
      size: 26
    },
    {
      title: i18n.t('common.holdAll'),
      value: 'tools',
      icon: 'xyz xyz-duixiangxuanzhong',
      Comp: ComponentContainer,
      size: 24
    },
    {
      title: i18n.t('common.template'),
      value: 'template',
      icon: 'xyz xyz-hebingxingzhuang',
      Comp: TemplateContainer,
      size: 24
    },
    {
      title: i18n.t('common.search'),
      value: 'search',
      icon: 'xyz-search xyz',
      Comp: SearchModel,
      size: 24
    },
    {
      title: i18n.t('common.debug'),
      value: 'debugAndRun',
      icon: 'xyz-run1 xyz',
      Comp: DebugModel,
      size: 26
    },
    {
      title: i18n.t('common.extend'),
      value: 'extend',
      icon: 'xyz-kuaixuanzhong xyz',
      Comp: ExtendTool,
      size: 26
    }
  ],
  footer: [
    {
      title: i18n.t('common.counter'),
      value: 'counter',
      icon: 'xyz-user-filling xyz',
      size: 26
    },
    {
      title: i18n.t('common.setting'),
      value: 'manage',
      icon: 'xyz-setting xyz',
      size: 24
    }
  ]
}

export const ModalDefaultAttrs = {
  maskClosable: false,
  closable: false,
  wrapClassName: 'custom-wrap-classname__modal',
  width: 800,
  style: {
    top: 35
  },
  footer: null
}

export const HEADER_DIR: Array<Meta.HeaderDir> = [
  {
    label: i18n.t('header.homePage'),
    value: 'homePage',
    disabled: false,
    notify: false,
    visible: false,
    children: [
      {
        label: i18n.t('header.new'),
        value: 'newProject',
        disabled: false,
        divider: true,
        notify: false
      },
      {
        label: i18n.t('header.autoSave'),
        value: 'autoSave',
        disabled: false,
        notify: false
      },
      {
        label: i18n.t('header.exit'),
        value: 'exit',
        disabled: false,
        notify: false
      }
    ]
  },
  {
    label: i18n.t('header.view'),
    value: 'view',
    disabled: false,
    notify: false,
    visible: false,
    children: [
      {
        label: i18n.t('header.commandPanel'),
        value: 'commandPanel',
        disabled: false,
        notify: false
      },
      {
        label: i18n.t('header.animation'),
        value: 'animation',
        disabled: true,
        notify: false
      },
      {
        label: i18n.t('header.openView'),
        value: 'openView',
        disabled: false,
        divider: true,
        notify: false
      },
      {
        label: i18n.t('header.appearance'),
        value: 'appearance',
        disabled: false,
        notify: false,
        children: [
          {
            label: i18n.t('header.sidebarLeft'),
            value: 'sidebarLeft',
            disabled: false,
            notify: false
          },
          {
            label: i18n.t('header.footerBar'),
            value: 'footerbar',
            disabled: false,
            notify: false
          },
          {
            label: i18n.t('header.sidebarToRight'),
            value: 'sidebarToRight',
            disabled: false,
            notify: false
          }
        ]
      },
      {
        label: i18n.t('header.drawingboard'),
        value: 'drawingboard',
        disabled: false,
        notify: false,
        children: [
          {
            label: i18n.t('header.pc'),
            value: 'pc',
            disabled: false,
            notify: false,
            children: [
              {
                label: i18n.t('header.pc-1920*1080'),
                value: 'pc-1920*1080',
                disabled: false,
                notify: false
              },
              {
                label: i18n.t('header.pc-1440*1050'),
                value: 'pc-1440*1050',
                disabled: false,
                notify: false
              },
              {
                label: i18n.t('header.pc-1024*768'),
                value: 'pc-1024*768',
                disabled: false,
                notify: false
              }
            ]
          },
          {
            label: i18n.t('header.mobile'),
            value: 'mobile',
            disabled: false,
            notify: false,
            children: [
              {
                label: i18n.t('header.mobile-320*480'),
                value: 'mobile-320*480',
                disabled: false,
                notify: false
              },
              {
                label: i18n.t('header.mobile-480*800'),
                value: 'mobile-480*800',
                disabled: false,
                notify: false
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: i18n.t('header.help'),
    value: 'help',
    disabled: false,
    notify: false,
    visible: false,
    children: [
      {
        label: i18n.t('header.driver'),
        value: 'driver',
        disabled: false,
        notify: false
      },
      {
        label: i18n.t('header.feedback'),
        value: 'feedback',
        disabled: false,
        notify: false
      },
      {
        label: i18n.t('header.checkUpdate'),
        value: 'checkUpdate',
        disabled: false,
        notify: false
      }
    ]
  }
]

export const InitialDrawingBoard = `
<!DOCTYPE html>
  <html>
  <head>
    <script crossorigin src="./iframeResource/react.development.js"></script>
    <script crossorigin src="./iframeResource/react-dom.development.js"></script>
    <link href="./iframeResource/reactContexify.css" rel="stylesheet">
    <link href="./iframeResource/antd.css" rel="stylesheet">
    <script src="./iframeResource/moment-with-locales.js"></script>
    <script src="./iframeResource/antd-with-locales.js"></script>
    <script src="./iframeResource/react-input-mask.min.js"></script>
    <script src="./iframeResource/antd.min.js"></script>
  </head>
  <body>
    <div id="DrawingBoard" style="width: 100%; height: 100%"></div>
  </body>
</html>
<style>
body, html, #DrawingBoard {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: #fff;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
}
.frame-content {
  width: 100%;
  height: 100%;
}
</style>
`

export const featureListDefaultEmptyPage = [
  {
    label: '????????????',
    value: 'feature',
    children: [
      { label: '???????????????', value: 'dragRender' },
      { label: '???????????????', value: 'WYSIWYG' },
      { label: '???UI?????????', value: 'ui-component' },
      { label: 'VS Code??????', value: 'vscode-style' },
      { label: '????????????', value: 'template' },
      { label: '????????????', value: 'themes' },
      { label: '3D????????????', value: '3DPage' },
      { label: '?????????', value: 'workflow' },
      { label: '????????????', value: 'autoChecked' },
      { label: '??????????????????', value: 'capabilitySynchronization' },
      { label: '????????????', value: 'eventModel' },
      { label: '????????????', value: 'permissioModel' },
      { label: '???????????????', value: 'thirdPartyPlug-ins' },
      { label: 'Code-IDE', value: 'Code-IDE' },
      { label: '??????????????????', value: 'SyncCode' },
      { label: '???????????????', value: 'SeamlessTransfer' },
      { label: '????????????', value: 'oneClickDeployment' },
      { label: 'UI????????????', value: 'UI-code' },
      { label: '???????????????', value: 'LowCoding' },
      { label: '???????????????????????????', value: 'oneCodeMoreEnv' },
      { label: '???????????????', value: 'plugInAssembly' },
      { label: '???????????????', value: 'publicCloudService' },
      { label: '????????????', value: 'permanentlyFree' },
      { label: '????????????', value: 'offlineMode' },
      { label: 'SSR', value: 'ssr' }
    ]
  },
  {
    label: '????????????',
    value: 'customizedService',
    children: [
      { label: '????????????', value: 'frontDev' },
      { label: '????????????', value: 'privateCloudDeployment' }
    ]
  },
  {
    label: '????????????',
    value: 'surroundingEcology',
    children: [
      { label: '????????????', value: 'componentMarket' },
      { label: '????????????', value: 'tempalteMarket' },
      { label: '????????????', value: 'applicationMarket' },
      { label: '????????????', value: 'pluginMarket' }
    ]
  },
  {
    label: '???????????????',
    value: 'sponsorPartner',
    children: [
      { label: '????????????', value: 'Alibaba' },
      { label: '??????', value: 'tenxun' },
      { label: '??????', value: 'wangyi' },
      { label: '??????', value: 'jd' },
      { label: '????????????', value: 'chinaMerchantsBank' },
      { label: '????????????', value: 'shenzhenConstructionBank' },
      { label: '??????', value: 'SoftBank' },
      { label: 'Apple', value: 'apple' },
      { label: '????????????', value: 'chinaStateGrid' },
      { label: '?????????', value: 'Sinopec' },
      { label: '?????????', value: 'PetroChina' },
      { label: '????????????', value: 'generalMotors' },
      { label: '?????????', value: 'Chevron' },
      { label: '??????HP', value: 'HP' },
      { label: '??????', value: 'Boeing' },
      { label: '?????????', value: 'Siemens' },
      { label: '??????', value: 'Johnson' },
      { label: '??????', value: 'Huawei' },
      { label: '????????????', value: 'SAMSUNG ELECTRONICS' },
      { label: '????????????', value: 'TRAFIGURA GROUP' },
      { label: '??????????????????', value: 'AGRICULTURAL BANK OF CHINA' }
    ]
  }
]
