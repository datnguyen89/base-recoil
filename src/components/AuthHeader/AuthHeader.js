import React from 'react'
import PropTypes from 'prop-types'
import { AuthHeaderWrapper, SubTitleLogo } from './AuthHeaderStyled'
import IMAGES from '../../images'
const APP_THEME = require('../../theme')

const AuthHeader = props => {
  // region props, hook, state
  const { commonStore } = props

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
    <AuthHeaderWrapper>
      <img src={IMAGES.AUTH_LOGO} alt={''} height={60} />
      <SubTitleLogo color={APP_THEME.PRIMARY_COLOR}>CMS</SubTitleLogo>
    </AuthHeaderWrapper>
  )
}

AuthHeader.propTypes = {}

export default AuthHeader