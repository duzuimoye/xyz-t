import { memo } from 'react'
import { Image, Popover } from 'antd'
import { connect } from 'react-redux'
import { RightOutlined } from '@ant-design/icons'
import { UPDATE_DRAWINGBOARD_SIZE_ACTION } from '../../../redux/actions/index'
import { HEADER_DIR } from '../../../utils/constant'
import logo from '../../../assets/images/logo.svg'
import store from '../../../redux/store'

import {
  HomeHeaderBox,
  Button,
  PopoverContentItem,
  PopoverDivider,
  PopoverContentBox,
  NotityLabel
} from './styled'

const HomeHeaderComp = () => {
  const {
    metaViewReducer: {
      drawingboardSize
    }
  } = store.getState()

  const handleClickPopoverLabel = (value: string) => {
    if (['pc', 'mobile'].includes(value.split('-')[0])) {
      store.dispatch({
        type: UPDATE_DRAWINGBOARD_SIZE_ACTION,
        payload: {
          drawingboardSize: value
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
    <HomeHeaderBox id="headerRef">
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
    </HomeHeaderBox>
  )
}

export default connect((state: any) => ({
  drawingboardSize: state.metaViewReducer.drawingboardSize
}))(memo(HomeHeaderComp))