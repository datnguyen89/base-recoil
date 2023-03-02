import React from 'react'
import PropTypes from 'prop-types'
import { MainBodyWrapper } from './MainBodyStyled'
import { DEVICE, SIDEBAR_WIDTH_COLLAPSE, SIDEBAR_WIDTH_EXPAND } from '../../utils/constant'
import { useRecoilValue } from 'recoil'
import { collapsedState } from '../../recoil/commonState'

const MainBody = props => {
  // region props, hook, state
  const { children } = props
  const isCollapse = useRecoilValue(collapsedState)

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

  const renderContentMargin = () => {
    if (isCollapse) {
      return SIDEBAR_WIDTH_COLLAPSE
    } else {
      return SIDEBAR_WIDTH_EXPAND
    }
  }

  return (
    <MainBodyWrapper marginLeft={renderContentMargin}>
      {children}
    </MainBodyWrapper>

  )
}

MainBody.propTypes = {}
export default MainBody
