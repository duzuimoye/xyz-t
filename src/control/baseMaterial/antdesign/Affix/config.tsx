import { InputNumber, Empty } from 'antd'
import { UPDATE_ACTIVE_COMPONENT_ACTION } from '../../../../redux/actions/index'
import emptyPage from '../../../../assets/images/emptyPage.svg'
import { LineBlockLabel, LineBlock } from '../common/styled'
import BaseStructureBox from '../common/baseStructure'
import MonacoEditIDE from '../common/monacoEditIDE'
import { affixTypes } from './_type'
import store from '../../../../redux/store'
import i18n from '../../../../utils/i18n'

const AffixConfigContainer = (
  { activeComponent }: { activeComponent: affixTypes }
) => {
  const OffsetBottom = () => (
    <LineBlock>
      <LineBlockLabel>{i18n.t('baseMateiral.affix.offsetBottom')}</LineBlockLabel>
      <InputNumber
        size="small"
        style={{ flex: 1 }}
        min={0}
        defaultValue={activeComponent.offsetBottom}
        onChange={num => {
          store.dispatch({
            type: UPDATE_ACTIVE_COMPONENT_ACTION,
            payload: {
              ...activeComponent,
              offsetBottom: num
            }
          })
        }} />
    </LineBlock>
  )

  const OffsetTop = () => (
    <LineBlock>
      <LineBlockLabel>{i18n.t('baseMateiral.affix.offsetTop')}</LineBlockLabel>
      <InputNumber
        size="small"
        style={{ flex: 1 }}
        min={0}
        defaultValue={activeComponent.offsetTop}
        onChange={num => {
          store.dispatch({
            type: UPDATE_ACTIVE_COMPONENT_ACTION,
            payload: {
              ...activeComponent,
              offsetTop: num
            }
          })
        }}
      />
    </LineBlock>
  )

  return (
    <>
      <BaseStructureBox title={i18n.t('baseMateiral.baseText.baseConfig')} initVisible>
        <OffsetBottom />
        <OffsetTop />
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

export default AffixConfigContainer
