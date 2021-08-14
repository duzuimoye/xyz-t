import { tuple } from '../../../../utils/_tyle'
import { defaultCompProps } from '../_type'

const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'link', 'text')
export type ButtonType = typeof ButtonTypes[number]


export interface baseTextProps extends defaultCompProps {
  tag: string;
  type?: ButtonType;
  disabled: boolean
  size: string
  buttonText: string
}
