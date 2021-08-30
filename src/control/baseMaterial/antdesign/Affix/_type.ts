import { defaultCompProps } from '../_type'

export interface affixTypes extends defaultCompProps {
  offsetBottom: number
  offsetTop: number
  target: () => HTMLElement | Window
  onChange: () => any | undefined
  [prop: string]: any
}
