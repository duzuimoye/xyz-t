import { baseTextProps } from './_type'

const baseText: baseTextProps = {
  // 工具栏配置
  groupName: '文本组件',
  label: '基础文本',

  // 组件属性
  tag: 'uxo2-base-text',
  disabled: false,
  size: 'small',
  buttonText: '提交',
  type: 'default',
  icon: '',
  iconType: 'antdIcon',

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