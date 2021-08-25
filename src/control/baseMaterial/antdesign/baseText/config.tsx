import { Input, Radio, Select } from 'antd'
import BaseStructureBox from '../common/baseStructure'
import { LineBlockLabel, LineBlock } from '../common/styled'
import { baseTextProps, IconType } from './_type'
import IconSelect from '../common/IconSelect'
import { UPDATE_ACTIVE_COMPONENT_ACTION } from '../../../../redux/actions/index'
import store from '../../../../redux/store'
import i18n from '../../../../utils/i18n'

const SizeOptions = [
  { label: i18n.t('baseMateiral.baseText.sizeOptions.large'), value: 'large' },
  { label: i18n.t('baseMateiral.baseText.sizeOptions.middle'), value: 'middle' },
  { label: i18n.t('baseMateiral.baseText.sizeOptions.small'), value: 'small' }
]

export default ({ activeComponent }: { activeComponent: baseTextProps }) => {
  const TextInput = () => (
    <LineBlock>
      <LineBlockLabel>{i18n.t('baseMateiral.baseText.text')}</LineBlockLabel>
      <Input
        allowClear
        size="small"
        placeholder={i18n.t('baseMateiral.baseText.textplaceholder')}
        defaultValue={activeComponent.buttonText}
        onBlur={evt => {
          store.dispatch({
            type: UPDATE_ACTIVE_COMPONENT_ACTION,
            payload: {
              ...activeComponent,
              buttonText: evt.target.value
            }
          })
        }}
      />
    </LineBlock>
  )

  const TypeSelect = () => {
    const typeOptions = [
      { label: i18n.t('baseMateiral.baseText.typeOptions.default'), value: 'default' },
      { label: i18n.t('baseMateiral.baseText.typeOptions.primary'), value: 'primary' },
      { label: i18n.t('baseMateiral.baseText.typeOptions.ghost'), value: 'ghost' },
      { label: i18n.t('baseMateiral.baseText.typeOptions.dashed'), value: 'dashed' },
      { label: i18n.t('baseMateiral.baseText.typeOptions.link'), value: 'link' },
      { label: i18n.t('baseMateiral.baseText.typeOptions.text'), value: 'text' }
    ]

    return (
      <LineBlock>
        <LineBlockLabel>{i18n.t('baseMateiral.baseText.type')}</LineBlockLabel>
        <Select
          style={{ width: '100%' }}
          size="small"
          allowClear
          placeholder={i18n.t('baseMateiral.baseText.typeplaceholder')}
          defaultValue={activeComponent.type}
          onChange={value => {
            store.dispatch({
              type: UPDATE_ACTIVE_COMPONENT_ACTION,
              payload: {
                ...activeComponent,
                type: value
              }
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
      <LineBlockLabel>{i18n.t('baseMateiral.baseText.size')}</LineBlockLabel>
      <Radio.Group
        defaultValue={activeComponent.size}
        size="small"
        optionType="button"
        buttonStyle="solid"
        options={SizeOptions}
        onChange={evt => {
          store.dispatch({
            type: UPDATE_ACTIVE_COMPONENT_ACTION,
            payload: {
              ...activeComponent,
              size: evt.target.value
            }
          })
        }}
      />
    </LineBlock>
  )

  return (
    <>
      <BaseStructureBox title={i18n.t('baseMateiral.baseText.baseConfig')} initVisible>
        <TextInput />
        <TypeSelect />
        <SizeRadio />
        <IconSelect
          iconType={activeComponent.iconType}
          icon={activeComponent.icon}
          selectIcon={(iconType?: IconType, icon?: string) => {
            store.dispatch({
              type: UPDATE_ACTIVE_COMPONENT_ACTION,
              payload: {
                ...activeComponent,
                icon,
                iconType
              }
            })

          }} />
      </BaseStructureBox>
      <BaseStructureBox title={i18n.t('baseMateiral.baseText.baseConfig')}>
        <TextInput />
        <SizeRadio />
      </BaseStructureBox>
    </>
  )
}
