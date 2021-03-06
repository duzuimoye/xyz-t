import { Input, Radio, Select, Empty, Switch } from 'antd'
import { sizeOptions, iconDirectionOptions, typeOptions, shapeOptinos } from './const'
import { UPDATE_ACTIVE_COMPONENT_ACTION } from '../../../../redux/actions/index'
import emptyPage from '../../../../assets/images/emptyStatus2.svg'
import { LineBlockLabel, LineBlock } from '../common/styled'
import BaseStructureBox from '../common/baseStructure'
import MonacoEditIDE from '../common/monacoEditIDE'
import IconSelect from '../common/IconSelect'
import store from '../../../../redux/store'
import i18n from '../../../../utils/i18n'
import { buttonTypes } from './_type'

const ButtonTextConfigContainer = (
  { activeComponent }: { activeComponent: buttonTypes }
) => {

  function updateActiveComponent(updateParams: any) {
    store.dispatch({
      type: UPDATE_ACTIVE_COMPONENT_ACTION,
      payload: {
        ...activeComponent,
        ...updateParams
      }
    })
  }

  const ShapeType = () => {
    const defaultShape = activeComponent.shape
    return (
      <LineBlock>
        <LineBlockLabel>{i18n.t('baseMateiral.baseText.text')}</LineBlockLabel>
        <Radio.Group
          defaultValue={defaultShape === undefined ? 'default' : defaultShape}
          size="small"
          optionType="button"
          buttonStyle="solid"
          options={shapeOptinos}
          onChange={evt => {
            const { value } = evt.target

            updateActiveComponent({ shape: value === 'default' ? undefined : value })
          }}
        />
      </LineBlock>
    )
  }

  const BlockButon = () => (
    <LineBlock>
      <LineBlockLabel>{i18n.t('baseMateiral.baseText.block')}</LineBlockLabel>
      <Switch
        defaultChecked={activeComponent.block}
        onChange={(checked: boolean) => {
          updateActiveComponent({ block: checked })
        }} />
    </LineBlock>
  )

  const DisabledButon = () => (
    <LineBlock>
      <LineBlockLabel>{i18n.t('baseMateiral.baseText.disabled')}</LineBlockLabel>
      <Switch
        defaultChecked={activeComponent.disabled}
        onChange={(checked: boolean) => {
          updateActiveComponent({ disabled: checked })
        }} />
    </LineBlock>
  )

  const DangerButton = () => (
    <LineBlock>
      <LineBlockLabel>{i18n.t('baseMateiral.baseText.danger')}</LineBlockLabel>
      <Switch
        defaultChecked={activeComponent.danger}
        onChange={(checked: boolean) => {
          updateActiveComponent({ danger: checked })
        }} />
    </LineBlock>
  )

  const TextInput = () => (
    <LineBlock>
      <LineBlockLabel>{i18n.t('baseMateiral.baseText.text')}</LineBlockLabel>
      <Input
        size="small"
        placeholder={i18n.t('baseMateiral.baseText.textplaceholder')}
        defaultValue={activeComponent.buttonText}
        onBlur={evt => {
          updateActiveComponent({ buttonText: evt.target.value })
        }}
      />
    </LineBlock>
  )

  const GhostButton = () => (
    <LineBlock>
      <LineBlockLabel>{i18n.t('baseMateiral.baseText.ghost')}</LineBlockLabel>
      <Switch
        defaultChecked={activeComponent.ghost}
        onChange={(checked: boolean) => {
          updateActiveComponent({ ghost: checked })
        }} />
    </LineBlock>
  )
  const TypeSelect = () => {
    return (
      <LineBlock>
        <LineBlockLabel>{i18n.t('baseMateiral.baseText.type')}</LineBlockLabel>
        <Select
          style={{ width: '100%' }}
          size="small"
          allowClear
          placeholder={i18n.t('baseMateiral.baseText.typeplaceholder')}
          defaultValue={activeComponent.type}
          onChange={type => {
            updateActiveComponent({ type })
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
        options={sizeOptions}
        onChange={evt => {
          updateActiveComponent({ size: evt.target.value })
        }}
      />
    </LineBlock>
  )

  const IconDirection = () => (
    <LineBlock>
      <LineBlockLabel>{i18n.t('baseMateiral.baseText.iconDirection')}</LineBlockLabel>
      <Radio.Group
        defaultValue={activeComponent.iconDirection}
        size="small"
        optionType="button"
        buttonStyle="solid"
        options={iconDirectionOptions}
        onChange={evt => {
          updateActiveComponent({ iconDirection: evt.target.value })
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
        <ShapeType />
        <DangerButton />
        <GhostButton />
        <BlockButon />
        <DisabledButon />
        <IconSelect
          iconType={activeComponent.iconType}
          icon={activeComponent.icon}
          selectIcon={(iconType?: State.IconType, icon?: string) => {
            updateActiveComponent({ icon, iconType })
          }} />
        {activeComponent.icon && <IconDirection />}
      </BaseStructureBox>
      <BaseStructureBox title={i18n.t('baseMateiral.baseText.componentCodeView')}>
        <MonacoEditIDE codeStr={activeComponent.sourceCodeStr} />
      </BaseStructureBox>
      <BaseStructureBox title={i18n.t('baseMateiral.baseText.moduleCaseSelect')}>
        <Empty className="empty-box" image={emptyPage} description={i18n.t('baseMateiral.baseText.busingDating')} />
      </BaseStructureBox>
      <BaseStructureBox title={i18n.t('baseMateiral.baseText.sourceAnalysis')}>
        <Empty className="empty-box" image={emptyPage} description={i18n.t('baseMateiral.baseText.busingDating')} />
      </BaseStructureBox>
    </>
  )
}

export default ButtonTextConfigContainer
