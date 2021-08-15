import { tuple } from '../../../../utils/_tyle'
import { defaultCompProps } from '../_type'

const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'link', 'text')
export type ButtonType = typeof ButtonTypes[number]

const ButtonSizes = tuple('large', 'middle', 'small')
export type ButtonSize = typeof ButtonSizes[number]

// 第三方图标或者官方图标或者图片svg
const IconTypes = tuple('antdIcon', 'thirdPartyIcon', 'img', 'svg')
export type IconType = typeof IconTypes[number]

export interface baseTextProps extends defaultCompProps {
  tag: string
  type?: ButtonType
  icon: string
  iconType: IconType
  disabled: boolean
  size: string
  buttonText: string
}
