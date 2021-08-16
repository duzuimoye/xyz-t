import { useState } from 'react'
import { Drawer, Input, Radio } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import { LineBlockLabel, LineBlock, IconBlock, IconTypeContainer, IconBox } from './styled'
import { IconList } from '../assets/constant'
import { IconType } from '../baseText/_type'

export default ({
  selectIcon,
  icon,
  iconType
}: {
  selectIcon: ({ iconType, icon }: { icon?: string, iconType?: IconType }) => void,
  icon: string,
  iconType: IconType
}) => {
  const [customIcon, setCustomIcon] = useState(icon)
  const [customIconType, setCustomIconType] = useState(iconType)
  const [visible, setVisible] = useState(false)

  console.log(customIcon, selectIcon)

  const DrawerIconSelect = () => {
    const drawerHeaderStyle = {
      padding: '10px',
      height: '40px',
      backgroundColor: '#3c3c3c',
      borderBottom: '1px solid 333f57',
      borderRadius: 0
    }
    const drawerBodyStyle = {
      padding: '0 5px 5px'
    }
    return (
      <Drawer
        placement="right"
        width={350}
        visible={visible}
        closable={false}
        title={<div style={{ color: '#fff' }}>图标选择</div>}
        headerStyle={drawerHeaderStyle}
        bodyStyle={drawerBodyStyle}
        onClose={() => {
          setVisible(false)
          setCustomIcon(icon)
        }}
      >
        <LineBlock style={{
          position: 'sticky',
          top: 0,
          background: '#fff',
          borderBottom: '1px solid var(--border-color)',
          paddingBottom: '10px',
          marginBottom: '10px'
        }}>
          <LineBlockLabel>图标:</LineBlockLabel>
          <Radio.Group
            size="small"
            value={iconType}
            onChange={evt => {
              console.log(evt)
              setCustomIconType(evt.target.value)
            }}
          >
            <Radio.Button value="antdIcon">antd 图标</Radio.Button>
            <Radio.Button value="thirdPartyIcon">第三方图标</Radio.Button>
            <Radio.Button value="img">图片</Radio.Button>
            <Radio.Button value="svg">svg</Radio.Button>
          </Radio.Group>
        </LineBlock>
        <IconBox>
          <IconTypeContainer>
            {IconList.map(Item => <IconBlock key={Item.label}><Item.Icon /></IconBlock>)}
          </IconTypeContainer>
        </IconBox>
      </Drawer>
    )
  }

  return (
    <>
      <LineBlock>
        <LineBlockLabel>图标</LineBlockLabel>
        <Input
          allowClear
          size="small"
          placeholder="请输入标题"
          defaultValue={icon}
          disabled={customIconType === 'antdIcon'}
          addonAfter={<SettingOutlined onClick={() => { setVisible(true) }} />}
        />
      </LineBlock>
      <DrawerIconSelect />
    </>
  )
}
