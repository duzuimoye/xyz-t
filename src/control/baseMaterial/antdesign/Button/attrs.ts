import { buttonTypes } from './_type'

const baseText: buttonTypes = {
  // 工具栏配置
  groupName: '通用',
  label: 'Button 按钮',

  // 组件属性
  tag: 'uxo2-Button',
  disabled: false,
  size: 'middle',
  buttonText: '提交',
  type: 'default',
  icon: 'AccountBookFilled',
  iconDirection: 'left',
  iconType: 'antdIcon',
  shape: undefined,
  ghost: false,
  danger: false,
  block: false,
  sourceCodeStr: '<Button />',

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