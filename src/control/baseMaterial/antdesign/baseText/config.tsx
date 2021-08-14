import { useState } from 'react'
import { Input, Radio } from 'antd'
import BaseStructureBox from '../common/baseStructure'
import { LineBlockLabel, LineBlock } from '../common/styled'
import { baseTextProps } from './_type'

const SizeOptions = [
  { label: '大型', value: 'large' },
  { label: '默认', value: 'middle' },
  { label: '小型', value: 'small' }
]

export default ({ activeComponent }: { activeComponent: baseTextProps }) => {
  const [baseTextConfig, setBaseTextConfig] = useState({ ...activeComponent })

  const TextInput = () => (<LineBlock>
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
  </LineBlock>)

  const SizeRadio = () => (<LineBlock>
    <LineBlockLabel>尺寸</LineBlockLabel>
    <Radio.Group
      options={SizeOptions}
      onChange={evt => {
        setBaseTextConfig({
          ...activeComponent,
          size: evt.target.value
        })
      }}
      defaultValue={baseTextConfig.size}
      size="small"
      optionType="button"
      buttonStyle="solid"
    />
  </LineBlock>)

  return (
    <>
      <BaseStructureBox title="基础配置">
        <TextInput />
        <SizeRadio />
      </BaseStructureBox>
      <BaseStructureBox title="模板选择">
        <TextInput />
        <SizeRadio />
      </BaseStructureBox>
    </>
  )
}
