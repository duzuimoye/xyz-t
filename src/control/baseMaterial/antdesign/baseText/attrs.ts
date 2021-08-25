import { baseTextProps } from './_type'

const baseText: baseTextProps = {
  // 工具栏配置
  groupName: '按钮组件',
  label: '文本按钮',

  // 组件属性
  tag: 'uxo2-base-text',
  disabled: false,
  size: 'middle',
  buttonText: '提交',
  type: 'default',
  icon: 'AccountBookFilled',
  iconType: 'antdIcon',
  shape: undefined,
  ghost: false,
  danger: false,
  block: false,

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