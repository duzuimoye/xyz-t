import { affixTypes } from './_type'

const baseText: affixTypes = {
  // 右键配置

  // 工具栏配置
  groupName: '导航',
  label: 'Affix 固钉',

  // 组件属性
  tag: 'uxo2-Affix',
  offsetBottom: 0,
  offsetTop: 0,
  target: () => window,
  onChange() { return undefined },
  sourceCodeStr: '<Affix />',


  // 自定义样式
  styleConfig: null,
  customClassName: [],
  customRef: "",

  // 事件绑定
  eventConfig: {
    defaultEvent: ['click', 'dbclick']
  }
}

export default baseText