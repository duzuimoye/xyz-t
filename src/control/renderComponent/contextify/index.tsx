import { Menu, Item, Separator, Submenu } from 'react-contexify'
import { CopyOutlined } from '@ant-design/icons'
import i18n from '../../../utils/i18n'

const Contextify = ({ componentId }: { componentId: string }) => {
  function handleItemClick() {
    // todo something...
  }

  return (
    <>
      <Menu id={componentId}>
        <Item onClick={handleItemClick}>
          <CopyOutlined />
          {i18n.t('baseMateiral.contextify.copy')}
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
