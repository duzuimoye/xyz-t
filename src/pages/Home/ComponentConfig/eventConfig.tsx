import { Empty } from 'antd'
import i18n from '../../../utils/i18n'
import emptyPage from '../../../assets/images/emptyStatus2.svg'

const EventConfigComponent = () => {
  return <Empty className="empty-box full-page" image={emptyPage} description={i18n.t('baseMateiral.baseText.busingDating')} />
}

export default EventConfigComponent