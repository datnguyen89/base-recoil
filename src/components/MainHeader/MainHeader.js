import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { HeaderLogoArea, MainHeaderRight, MainHeaderRightMobile, MainHeaderWrapper } from './MainHeaderStyled'
import IMAGES from '../../images'
import { Drawer } from 'antd'
import HeaderUserArea from '../HeaderUserArea'
import { Link, useNavigate } from 'react-router-dom'
import { DEVICE, PAGES } from '../../utils/constant'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import MenuSideBarArea from '../MenuSideBarArea'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { collapsedState, deviceState } from '../../recoil/commonState'

const APP_THEME = require('../../theme')

const MainHeader = props => {
  // region props, hook, state
  const [isCollapse, setIsCollapse] = useRecoilState(collapsedState)
  const device = useRecoilValue(deviceState)

  const history = useNavigate()
  const [visibleMobileDrawerRight, setVisibleMobileDrawerRight] = useState(false)

  // endregion
  // region destructuring


  // endregion
  // region variable

  // endregion
  // region function handle logic
  const handleToggleSideBar = () => {
    setIsCollapse(!isCollapse)
  }
  // endregion
  // region function render

  // endregion
  // region side effect

  // endregion

  return (
    <MainHeaderWrapper gradientColor={APP_THEME.GRADIENT_COLOR}>
      <HeaderLogoArea width={device === DEVICE.DESKTOP ? isCollapse ? 'auto' : '220px' : 'auto'}>
        <img src={IMAGES.AUTH_LOGO} alt={''} style={{ cursor: 'pointer' }} height={48}
             onClick={() => history(PAGES.HOME.PATH)} />
        {
          device === DEVICE.DESKTOP
            ?
            isCollapse
              ?
              <MenuUnfoldOutlined onClick={handleToggleSideBar} />
              :
              <MenuFoldOutlined onClick={handleToggleSideBar} />
            : null
        }
      </HeaderLogoArea>
      <MainHeaderRight>
        {/*<HeaderNotifyArea>*/}
        {/*  <NotifyBell />*/}
        {/*</HeaderNotifyArea>*/}
        <HeaderUserArea />
      </MainHeaderRight>

      <MainHeaderRightMobile>
        <FontAwesomeIcon
          onClick={() => setVisibleMobileDrawerRight(true)}
          icon={faBars}
          size={'2x'}
          color={'#fff'}
          style={{ cursor: 'pointer' }} />
        <Drawer
          title={<Link style={{ color: APP_THEME.PRIMARY_COLOR }} to={'/'}>CMS Ví doanh nghiệp</Link>}
          placement='right'
          style={{ padding: 0 }}
          onClose={() => setVisibleMobileDrawerRight(false)}
          open={visibleMobileDrawerRight}>
          <MenuSideBarArea />
        </Drawer>
      </MainHeaderRightMobile>
    </MainHeaderWrapper>

  )
}

MainHeader.propTypes = {}

export default MainHeader