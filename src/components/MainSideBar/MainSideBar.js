import React from 'react'
import { DEVICE, SIDEBAR_WIDTH_COLLAPSE, SIDEBAR_WIDTH_EXPAND } from '../../utils/constant'
import { MainSideBarWrapper } from './MainSideBarStyled'
import MenuSideBarArea from '../MenuSideBarArea'
import { useRecoilValue } from 'recoil'
import { collapsedState, deviceState } from '../../recoil/commonState'

const MainSideBar = props => {
  // region props, hook, state
  const isCollapse = useRecoilValue(collapsedState)
  const device = useRecoilValue(deviceState)
  // endregion
  // region destructuring

  // endregion
  // region variable

  // endregion
  // region function handle logic

  // endregion
  // region function render

  // endregion
  // region side effect

  // endregion

  return (
    <MainSideBarWrapper
      display={device === DEVICE.MOBILE ? 'none' : 'flex'}
      width={isCollapse ? SIDEBAR_WIDTH_COLLAPSE : SIDEBAR_WIDTH_EXPAND}>
      <MenuSideBarArea />
    </MainSideBarWrapper>
  )
}

MainSideBar.propTypes = {}

export default MainSideBar