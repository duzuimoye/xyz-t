import { useState } from 'react'
import { Input, Radio } from 'antd'
import BaseStructureBox from '../common/baseStructure'
import { LineBlockLabel, LineBlock } from '../common/styled'
import { baseTextProps } from './_type'

const SizeOptions = [
  { label: '大型', value: 'large' },
  { label: '中型', value: 'middle' },
  { label: '小型', value: 'small' }
]

// eslint-disable-next-line @typescript-eslint/no-empty-function
const changeSize = (): void => { }

export default ({ activeComponent }: { activeComponent: baseTextProps }) => {
  const [baseTextConfig, setBaseTextConfig] = useState({ ...activeComponent })

  return (
    <BaseStructureBox title="基础配置">
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
      <LineBlock>
        <LineBlockLabel>尺寸</LineBlockLabel>
        <Radio.Group
          options={SizeOptions}
          onChange={changeSize}
          value="small"
          size="small"
          optionType="button"
          buttonStyle="solid"
        />
      </LineBlock>
    </BaseStructureBox>
  )
}
