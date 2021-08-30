import { tuple } from '../../../../utils/_tyle'
import { defaultCompProps } from '../_type'

const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'link', 'text')
export type ButtonType = typeof ButtonTypes[number]

const ButtonSizes = tuple('large', 'middle', 'small')
export type ButtonSize = typeof ButtonSizes[number]


type SizeType = 'small' | 'large' | 'middle'


export interface buttonTypes extends defaultCompProps {
  tag: string
  type?: ButtonType
  icon?: string
  iconDirection: 'left' | 'right'
  iconType?: State.IconType
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
