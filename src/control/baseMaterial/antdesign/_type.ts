export interface defaultCompProps {
  groupName: string
  tag: string
  label: string
  styleConfig: null,
  customClassName: string[]
  customRef: string

  // 事件绑定
  eventConfig: {
    defaultEvent: string[]
  }
}