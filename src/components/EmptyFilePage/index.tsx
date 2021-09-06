import { Empty } from 'antd'
import { EmptyFileContainer, BlockLine, TitleBox, ContentList } from './styled'
import emptyPage from '../../assets/images/emptyStatus2.svg'
// import i18n from '../../utils/i18n'

const EmptyFilePage = () => {

  return (
    <EmptyFileContainer>
      <Empty className="driver-page" style={{ height: '300px' }} image={emptyPage} description="" />
      <BlockLine>
        <TitleBox>功能列表</TitleBox>
        <ContentList>
          <span>拖拉拽渲染</span>
          <span>所见即所得</span>
          <span>多UI库选择</span>
          <span>模板封装</span>
          <span>主题切换</span>
          <span>同步更新源码</span>
          <span>一键部署</span>
          <span>UI源码分析</span>
          <span>低门槛研发</span>
          <span>一套代码，多端运行</span>
          <span>拔插式组件</span>
          <span>公有云服务</span>
          <span>永久免费</span>
          <span>离线使用</span>
        </ContentList>
      </BlockLine>
      <BlockLine>
        <TitleBox>定制化</TitleBox>
        <ContentList>
          <span>定制组件库</span>
          <span>私有云嵌入</span>
        </ContentList>
      </BlockLine>
    </EmptyFileContainer>
  )
}

export default EmptyFilePage
