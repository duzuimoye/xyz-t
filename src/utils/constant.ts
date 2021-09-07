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
    label: '功能列表',
    value: 'feature',
    children: [
      { label: '拖拉拽渲染', value: 'dragRender' },
      { label: '所见即所得', value: 'WYSIWYG' },
      { label: '多UI库选择', value: 'ui-component' },
      { label: 'VS Code风格', value: 'vscode-style' },
      { label: '模板封装', value: 'template' },
      { label: '主题切换', value: 'themes' },
      { label: '3D解析页面', value: '3DPage' },
      { label: '工作流', value: 'workflow' },
      { label: '智能检测', value: 'autoChecked' },
      { label: '能力同步指南', value: 'capabilitySynchronization' },
      { label: '事件模型', value: 'eventModel' },
      { label: '权限模型', value: 'permissioModel' },
      { label: '第三方插件', value: 'thirdPartyPlug-ins' },
      { label: 'Code-IDE', value: 'Code-IDE' },
      { label: '同步更新源码', value: 'SyncCode' },
      { label: '无缝化迁移', value: 'SeamlessTransfer' },
      { label: '一键部署', value: 'oneClickDeployment' },
      { label: 'UI源码分析', value: 'UI-code' },
      { label: '低门槛研发', value: 'LowCoding' },
      { label: '一套代码，多端运行', value: 'oneCodeMoreEnv' },
      { label: '拔插式组件', value: 'plugInAssembly' },
      { label: '公有云服务', value: 'publicCloudService' },
      { label: '永久免费', value: 'permanentlyFree' },
      { label: '离线模式', value: 'offlineMode' },
      { label: 'SSR', value: 'ssr' }
    ]
  },
  {
    label: '面向群体',
    value: 'customizedService',
    children: [
      { label: '前端开发', value: 'frontDev' },
      { label: '运维实施', value: 'privateCloudDeployment' }
    ]
  },
  {
    label: '周边生态',
    value: 'surroundingEcology',
    children: [
      { label: '组件市场', value: 'componentMarket' },
      { label: '模板市场', value: 'tempalteMarket' },
      { label: '应用市场', value: 'applicationMarket' },
      { label: '插件市场', value: 'pluginMarket' }
    ]
  },
  {
    label: '赞助合作商',
    value: 'sponsorPartner',
    children: [
      { label: '阿里巴巴', value: 'Alibaba' },
      { label: '腾讯', value: 'tenxun' },
      { label: '网易', value: 'wangyi' },
      { label: '京东', value: 'jd' },
      { label: '招商银行', value: 'chinaMerchantsBank' },
      { label: '深圳建行', value: 'shenzhenConstructionBank' },
      { label: '软银', value: 'SoftBank' },
      { label: 'Apple', value: 'apple' },
      { label: '国家电网', value: 'chinaStateGrid' },
      { label: '中石化', value: 'Sinopec' },
      { label: '中石油', value: 'PetroChina' },
      { label: '通用汽车', value: 'generalMotors' },
      { label: '雪佛龙', value: 'Chevron' },
      { label: '惠普HP', value: 'HP' },
      { label: '波音', value: 'Boeing' },
      { label: '西门子', value: 'Siemens' },
      { label: '强生', value: 'Johnson' },
      { label: '华为', value: 'Huawei' },
      { label: '三星电子', value: 'SAMSUNG ELECTRONICS' },
      { label: '托克集团', value: 'TRAFIGURA GROUP' },
      { label: '中国农业银行', value: 'AGRICULTURAL BANK OF CHINA' }
    ]
  }
]
