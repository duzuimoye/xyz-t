import { tuple } from '../../../../utils/_tyle'
import { defaultCompProps } from '../_type'

const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'link', 'text')
export type ButtonType = typeof ButtonTypes[number]

const ButtonSizes = tuple('large', 'middle', 'small')
export type ButtonSize = typeof ButtonSizes[number]

export interface baseTextProps extends defaultCompProps {
  tag: string;
  type?: ButtonType;
  disabled: boolean
  size: string
  buttonText: string
}
