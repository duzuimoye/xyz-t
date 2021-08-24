import { useState } from 'react'
import { Input, Radio, Select } from 'antd'
import BaseStructureBox from '../common/baseStructure'
import { LineBlockLabel, LineBlock } from '../common/styled'
import { baseTextProps, IconType } from './_type'
import IconSelect from '../common/IconSelect'

const SizeOptions = [
  { label: '大型', value: 'large' },
  { label: '默认', value: 'middle' },
  { label: '小型', value: 'small' }
]

export default ({ activeComponent }: { activeComponent: baseTextProps }) => {
  const [baseTextConfig, setBaseTextConfig] = useState({ ...activeComponent })

  const TextInput = () => (
    <LineBlock>
      <LineBlockLabel>文本</LineBlockLabel>
      <Input
        allowClear
        size="small"
        placeholder="请输入标题"
        defaultValue={baseTextConfig.buttonText}
        onBlur={evt => {
          setBaseTextConfig({
            ...activeComponent,
            buttonText: evt.target.value
          })

        }}
      />
    </LineBlock>
  )

  const TypeSelect = () => {
    const typeOptions = [
      { label: '默认', value: 'default' },
      { label: '主要', value: 'primary' },
      { label: '幽灵', value: 'ghost' },
      { label: '虚线', value: 'dashed' },
      { label: '链接', value: 'link' },
      { label: '文本', value: 'text' }
    ]

    return (
      <LineBlock>
        <LineBlockLabel>类型</LineBlockLabel>
        <Select
          style={{ width: '100%' }}
          size="small"
          allowClear
          placeholder="请选择类型"
          defaultValue={baseTextConfig.type}
          onChange={value => {
            setBaseTextConfig({
              ...activeComponent,
              type: value
            })
          }}>
          {
            typeOptions.map(item => (
              <Select.Option key={item.value} value={item.value} label={item.label}>{item.label}</Select.Option>
            ))
          }
        </Select>
      </LineBlock>
    )
  }

  const SizeRadio = () => (
    <LineBlock>
      <LineBlockLabel>尺寸</LineBlockLabel>
      <Radio.Group
        defaultValue={baseTextConfig.size}
        size="small"
        optionType="button"
        buttonStyle="solid"
        options={SizeOptions}
        onChange={evt => {
          setBaseTextConfig({
            ...activeComponent,
            size: evt.target.value
          })
        }}
      />
    </LineBlock>
  )

  return (
    <>
      <BaseStructureBox title="基础配置" initVisible>
        <TextInput />
        <TypeSelect />
        <SizeRadio />
        <IconSelect
          iconType={activeComponent.iconType}
          icon={activeComponent.icon}
          selectIcon={(iconType?: IconType, icon?: string) => {
            setBaseTextConfig({
              ...activeComponent,
              icon,
              iconType
            })
          }} />
      </BaseStructureBox>
      <BaseStructureBox title="模板选择">
        <TextInput />
        <SizeRadio />
      </BaseStructureBox>
    </>
  )
}
