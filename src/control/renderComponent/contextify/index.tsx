import { Menu, Item, Separator, Submenu } from 'react-contexify'
import { CopyOutlined } from '@ant-design/icons'

const Contextify = ({ componentId }: { componentId: string }) => {
  function handleItemClick() {
    console.log('you click it')
  }

  return (
    <>
      <Menu id={componentId}>
        <Item onClick={handleItemClick}>
          <CopyOutlined />
          Copy
        </Item>
        <Item onClick={handleItemClick}>
          Item 2
        </Item>
        <Separator />
        <Item disabled>Disabled</Item>
        <Separator />
        <Submenu label="Submenu">
          <Item onClick={handleItemClick}>
            Sub Item 1
          </Item>
          <Item onClick={handleItemClick}>Sub Item 2</Item>
        </Submenu>
      </Menu>
    </>
  )
}

export default Contextify

