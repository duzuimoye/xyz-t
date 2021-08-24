import { Button } from 'antd'
import { baseTextProps } from '../../baseMaterial/antdesign/baseText/_type'

export default ({ comp }: { comp: baseTextProps }) => {
  const attrs = [
    comp.size === 'default' ? '' : `size="${comp.size}"`
  ].join(' ')

  console.log(attrs, comp.size)

  return (
    <Button>{comp.buttonText}</Button>
  )
}