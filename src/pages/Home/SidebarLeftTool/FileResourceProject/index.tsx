import { Popover, Empty } from 'antd'
import { useState } from 'react'
import { EllipsisOutlined, CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons'
import {
  FileResourceProjectContainer,
  HeaderFileTitleBox,
  ResourceManagePopoverContainer,
  ResourceManageList,
  VisibleModelIconBox,
  SplitView,
  SplitViewHeader,
  SplitViewPane
} from './styled'
import i18n from '../../../../utils/i18n'
import FileResourceTree from './FileResourceTree/index'
import emptyPage from '../../../../assets/images/emptyStatus2.svg'

const FileResourceProject = () => {
  const [visiblePopover, setVisiblePopover] = useState(false)
  const [resource, setResource] = useState({
    visiblePageResource: true,
    visibleStaticResouce: false,
    visibleComponentTree: false
  })

  const ResourceManagePopover = () => {
    return (
      <ResourceManagePopoverContainer>
        <ResourceManageList onClick={() => {
          setVisiblePopover(false)
        }}>
          <VisibleModelIconBox><i className="xyz xyz-enable" /></VisibleModelIconBox>
          <div className="label">{i18n.t('common.Projectbar')}</div>
        </ResourceManageList>
        <ResourceManageList onClick={() => {
          setVisiblePopover(false)
        }}>
          <VisibleModelIconBox><i className="xyz xyz-enable" /></VisibleModelIconBox>
          <div className="label">{i18n.t('common.staticResource')}</div>
        </ResourceManageList>
        <ResourceManageList onClick={() => {
          setVisiblePopover(false)
        }}>
          <VisibleModelIconBox><i className="xyz xyz-enable" /></VisibleModelIconBox>
          <div className="label">{i18n.t('common.componentTree')}</div>
        </ResourceManageList>
      </ResourceManagePopoverContainer>
    )
  }

  return (
    <FileResourceProjectContainer>
      <HeaderFileTitleBox className="header-file-title-box__popoverMountedNode">
        <div className="title">{i18n.t('common.resourceManage')}</div>
        <Popover
          placement="bottomLeft"
          content={ResourceManagePopover}
          trigger="click"
          visible={visiblePopover}
          onVisibleChange={visible => { setVisiblePopover(visible) }}
          overlayClassName="resource-manage-popover"
          overlayStyle={{
            padding: 0
          }}
          getPopupContainer={() => document.querySelector('.header-file-title-box__popoverMountedNode') as HTMLElement}
        >
          <EllipsisOutlined />
        </Popover>
      </HeaderFileTitleBox>
      <SplitView>
        <SplitViewHeader onClick={() => {
          setResource({
            ...resource,
            visiblePageResource: !resource.visiblePageResource
          })
        }}>
          <div className="resource-item-title">{i18n.t('common.Projectbar')}</div>
          {resource.visiblePageResource ? <CaretDownOutlined /> : <CaretRightOutlined />}
        </SplitViewHeader>
        <SplitViewPane visible={resource.visiblePageResource}>
          <FileResourceTree />
        </SplitViewPane>
        <SplitViewHeader onClick={() => {
          setResource({
            ...resource,
            visibleStaticResouce: !resource.visibleStaticResouce
          })
        }}>
          <div className="resource-item-title">{i18n.t('common.staticResource')}</div>
          {resource.visibleStaticResouce ? <CaretDownOutlined /> : <CaretRightOutlined />}
        </SplitViewHeader>
        <SplitViewPane visible={resource.visibleStaticResouce}>
          <Empty className="empty-box" image={emptyPage} description={i18n.t('baseMateiral.baseText.busingDating')} />
        </SplitViewPane>
        <SplitViewHeader onClick={() => {
          setResource({
            ...resource,
            visibleComponentTree: !resource.visibleComponentTree
          })
        }}>
          <div className="resource-item-title">{i18n.t('common.componentTree')}</div>
          {resource.visibleComponentTree ? <CaretDownOutlined /> : <CaretRightOutlined />}
        </SplitViewHeader>
        <SplitViewPane visible={resource.visibleComponentTree}>
          <Empty className="empty-box" image={emptyPage} description={i18n.t('baseMateiral.baseText.busingDating')} />
        </SplitViewPane>
      </SplitView>
    </FileResourceProjectContainer>
  )
}

export default FileResourceProject
