import { Input, Radio } from 'antd'
import BaseStructureBox from '../common/baseStructure'
import { LineBlockLabel, LineBlock } from '../common/styled'
import i18n from '../../../../utils/i18n'

const SizeOptions = [
  { label: '大型', value: 'large' },
  { label: '中型', value: 'middle' },
  { label: '小型', value: 'small' }
]

// eslint-disable-next-line @typescript-eslint/no-empty-function
const changeSize = (): void => { }

export default () => {
  return (
    <BaseStructureBox title="基础配置">
      <LineBlock>
        <LineBlockLabel>{i18n.t('common.workbar')}</LineBlockLabel>
        <Input allowClear size="small" placeholder="请输入标题" />
      </LineBlock>
      <LineBlock>
        <LineBlockLabel>类型</LineBlockLabel>
        <Input allowClear size="small" placeholder="请输入标题" />
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
