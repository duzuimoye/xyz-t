import { Button } from 'antd'

export default ({ activeComponent }: { activeComponent: any }) => {
  console.log(activeComponent)
  return (
    <Button>{activeComponent?.buttonText || '---'}</Button>
  )
}