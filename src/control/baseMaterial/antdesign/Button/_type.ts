import { tuple } from '../../../../utils/_tyle'
import { defaultCompProps } from '../_type'

const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'link', 'text')
export type ButtonType = typeof ButtonTypes[number]

const ButtonSizes = tuple('large', 'middle', 'small')
export type ButtonSize = typeof ButtonSizes[number]

// 第三方图标或者官方图标或者图片svg
export type IconType = 'antdIcon' | 'thirdPartyIcon' | 'img' | 'svg'

type SizeType = 'small' | 'large' | 'middle'


export interface baseTextProps extends defaultCompProps {
  tag: string
  type?: ButtonType
  icon?: string
  iconDirection: 'left' | 'right'
  iconType?: IconType
  disabled: boolean
  size: SizeType
  buttonText: string
  shape: 'circle' | 'round' | undefined
  ghost: boolean
  danger: boolean
  block: boolean,
  sourceCodeStr: string,
  [prop: string]: any
}
