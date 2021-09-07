import { memo } from 'react'
import { Image, Popover } from 'antd'
import { connect } from 'react-redux'
import {
  RightOutlined
} from '@ant-design/icons'

import { HEADER_DIR } from '../../../utils/constant'
import logo from '../../../assets/images/logo.svg'
import store from '../../../redux/store'
import i18n from '../../../utils/i18n'
import {
  UPDATE_DRAWINGBOARD_SIZE_ACTION,
  SELECT_RIGHTBAR_CONFIG_PAGE_ACTION,
  VISIBLE_SIDEBAR_LEFT_ICONS_ACTION
} from '../../../redux/actions/index'
import {
  RightBarBtns,
  LeftBarBox,
  HomeHeaderBox,
  Button,
  RightBth,
  PopoverContentItem,
  PopoverDivider,
  PopoverContentBox,
  NotityLabel
} from './styled'

const HomeHeaderComp = () => {
  const {
    metaViewReducer: {
      drawingboardSize,
      visibleSidebarIconsList,
      selectedRightBarConfigPage,
      visibleHeaderBox,
      visibleFullPage
    },
    DrawingBoardReducer: {
      activeComponent
    }
  } = store.getState()

  const RightBarContainer = () => {
    const headerIcons = [
      { title: i18n.t('common.preview'), value: 'body', icon: 'xyz-html' },
      { title: i18n.t('common.preview'), value: 'html', icon: 'xyz-html' },
      { title: i18n.t('common.lock'), value: 'js', icon: 'xyz-js' },
      { title: i18n.t('common.Projectbar'), value: 'css', icon: 'xyz-style' }
    ]

    const IconButtonAttr = headerIcons.map(item => (
      <RightBth
        title={item.title}
        key={item.value}
        select={selectedRightBarConfigPage === item.value}
        onClick={() => {
          store.dispatch({
            type: SELECT_RIGHTBAR_CONFIG_PAGE_ACTION,
            payload: {
              selectedRightBarConfigPage: item.value
            }
          })
        }}
      >
        <i className={`xyz ${item.icon}`} />
      </RightBth>
    ))

    return (
      <RightBarBtns>
        {IconButtonAttr}
      </RightBarBtns>
    )
  }

  const handleClickPopoverLabel = (value: string) => {
    if (['pc', 'mobile'].includes(value.split('-')[0])) {
      store.dispatch({
        type: UPDATE_DRAWINGBOARD_SIZE_ACTION,
        payload: {
          drawingboardSize: value
        }
      })
    }

    if (value === 'sidebarLeft') {
      store.dispatch({
        type: VISIBLE_SIDEBAR_LEFT_ICONS_ACTION,
        payload: {
          visibleSidebarIconsList: !visibleSidebarIconsList
        }
      })
    }
  }

  const CodeContentDOM = (file: Array<Meta.FileDir>): React.ReactElement => {
    const [...codeContent] = file

    // init notify status.
    codeContent.forEach(item => {
      // checked drawingboardsize notify.
      if (['pc', 'mobile'].includes(item.value.split('-')[0])) {
        // eslint-disable-next-line no-param-reassign
        item.notify = [drawingboardSize.split('-')[0], drawingboardSize].includes(item.value)
      }

      if (item.value === 'sidebarLeft' && visibleSidebarIconsList) {
        // eslint-disable-next-line no-param-reassign
        item.notify = true
      }
    })

    return (
      <PopoverContentBox>
        {
          codeContent.map(item => {
            return (
              <main key={item.value}>
                <PopoverContentItem>
                  {
                    item.children ?
                      <Popover
                        content={(CodeContentDOM(item.children || []))}
                        placement="rightTop"
                        trigger="click"
                        color="#f2f4f5"
                        getPopupContainer={() => document.querySelector('.header-menu-item') || document.body}
                      >
                        <div className={item.notify ? 'notify' : ''}>{item.label}</div>
                        <RightOutlined />
                      </Popover>
                      : <NotityLabel
                        className={item.notify ? 'notify' : ''}
                        onClick={() => {
                          handleClickPopoverLabel(item.value)
                        }}
                      >
                        {item.label}
                      </NotityLabel>
                  }
                </PopoverContentItem>
                {item.divider ? <PopoverDivider /> : ''}
              </main>
            )
          })
        }
      </PopoverContentBox>
    )
  }

  return (
    <HomeHeaderBox id="headerRef" visible={visibleHeaderBox && !visibleFullPage}>
      <LeftBarBox>
        <Image
          className="logo-box"
          width={45}
          height={35}
          preview={false}
          src={logo}
        />
        {
          HEADER_DIR.map(file => {
            let Children: React.FC

            if (file.children && !file.disabled) {
              Children = () => (
                <Popover
                  content={(CodeContentDOM(file.children || []))}
                  placement="bottomLeft"
                  color="#f2f4f5"
                  overlayClassName="uxo-popover"
                  getPopupContainer={() => document.querySelector('.header-menu-item') || document.body}
                  trigger="click"
                >
                  <Button disabled={file.disabled} className={file.notify ? 'notify' : ''}>{file.label}</Button>
                </Popover>
              )
            } else {
              Children = () => <Button disabled className="header-menu-item">{file.label}</Button>
            }

            return <Children key={file.value} />
          })
        }
      </LeftBarBox>
      {activeComponent && <RightBarContainer />}
    </HomeHeaderBox >
  )
}

export default connect((state: State.ReduxConnectProps) => ({
  drawingboardSize: state.metaViewReducer.drawingboardSize,
  activeComponent: state.DrawingBoardReducer.activeComponent,
  selectedRightBarConfigPage: state.metaViewReducer.selectedRightBarConfigPage,
  visibleSidebarIconsList: state.metaViewReducer.visibleSidebarIconsList,
  visibleHeaderBox: state.metaViewReducer.visibleHeaderBox,
  visibleFullPage: state.metaViewReducer.visibleFullPage
}))(memo(HomeHeaderComp))