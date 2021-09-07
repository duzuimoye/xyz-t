import { Empty } from 'antd'
import { EmptyFileContainer, BlockLine, TitleBox, ContentList, MainBox } from './styled'
import emptyPage from '../../assets/images/emptyStatus2.svg'
// import i18n from '../../utils/i18n'
import { featureListDefaultEmptyPage } from '../../utils/constant'

const EmptyFilePage = () => {
  return (
    <EmptyFileContainer>
      <Empty className="driver-page" style={{ height: '260px' }} image={emptyPage} description="" />
      <MainBox>
        {
          featureListDefaultEmptyPage.map(item => {
            return (
              <BlockLine key={item.value}>
                <TitleBox>{item.label}</TitleBox>
                <ContentList>
                  {
                    item.children.map(child => <span key={child.value}>{child.label}</span>)
                  }
                </ContentList>
              </BlockLine>
            )
          })
        }
      </MainBox>
    </EmptyFileContainer>
  )
}

export default EmptyFilePage
