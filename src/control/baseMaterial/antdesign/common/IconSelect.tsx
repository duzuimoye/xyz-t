import { useState, memo } from 'react'
import { Drawer, Input, Select, Pagination } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import { LineBlockLabel, LineBlock, IconBlock, IconTypeContainer, IconBox } from './styled'
import { IconList } from '../assets/constant'
import { IconType } from '../baseText/_type'

const { Search } = Input

export default ({
  icon,
  iconType,
  selectIcon
}: {
  icon?: string | undefined,
  iconType?: IconType,
  selectIcon: (iconType?: IconType, icon?: string | undefined) => void
}) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [customIcon, setCustomIcon] = useState<string | undefined>(icon)
  const [customIconType, setCustomIconType] = useState<IconType | undefined>(iconType)

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
    const IconContainer = memo(() => {
      const total = IconList.length
      const [pageSize, setPageSize] = useState(100)
      const [current, setCurrent] = useState(1)

      const RenderIconList = ({ current, pageSize }: { current: number, pageSize: number }) => (
        <IconTypeContainer>
          {
            IconList.slice((current - 1) * pageSize, current * pageSize).map(Item => (
              <IconBlock
                key={Item.label}
                onClick={() => {
                  setVisible(false)
                  setCustomIcon(Item.label)
                  selectIcon(customIconType, Item.label)
                }}
                selected={customIcon === Item.label}>
                <Item.Icon />
              </IconBlock>
            ))
          }
        </IconTypeContainer>
      )

      return (
        <>
          {customIconType && <RenderIconList current={current} pageSize={pageSize} />}
          <Pagination
            total={total}
            current={current}
            size="default"
            showTitle={false}
            showLessItems
            showSizeChanger={false}
            hideOnSinglePage
            style={{ textAlign: 'center' }}
            defaultPageSize={pageSize}
            onShowSizeChange={(current, pageSize) => {
              setPageSize(pageSize)
              setCurrent(current)
            }}
            onChange={current => {
              setCurrent(current)
            }}
          />
        </>
      )
    })

    return (
      <Drawer
        placement="right"
        width={380}
        visible={visible}
        closable={false}
        title={<div style={{ color: '#fff' }}>图标选择</div>}
        headerStyle={drawerHeaderStyle}
        bodyStyle={drawerBodyStyle}>
        <LineBlock className="sticky">
          <LineBlockLabel>图标:</LineBlockLabel>
          <Select
            disabled
            defaultValue={iconType}
            onChange={value => {
              setCustomIconType(value)
            }}>
            <Select.Option value="antdIcon">antd 图标</Select.Option>
            <Select.Option value="thirdPartyIcon">第三方图标</Select.Option>
            <Select.Option value="img">图片</Select.Option>
            <Select.Option value="svg">svg</Select.Option>
          </Select>
          <Search
            placeholder="搜索图标"
            allowClear
            disabled
            style={{ width: 200 }} />
        </LineBlock>
        <IconBox>
          <IconContainer />
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
