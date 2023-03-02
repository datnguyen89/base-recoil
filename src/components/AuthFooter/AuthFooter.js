import React from 'react'
import { AuthFooterLeft, AuthFooterRight, AuthFooterRightBusiness, AuthFooterWrapper } from './AuthFooterStyled'
import { BUSINESS_ADDRESS, BUSINESS_NAME, PHONE1, PHONE2 } from '../../constant'
const APP_THEME = require('../../theme')

const AuthFooter = props => {
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
    <AuthFooterWrapper>
      <AuthFooterLeft color={APP_THEME.PRIMARY_COLOR}>
        <span>CMS MobiFone Money</span>
      </AuthFooterLeft>
      <AuthFooterRight color={APP_THEME.PRIMARY_COLOR}>
        <AuthFooterRightBusiness color={APP_THEME.PRIMARY_COLOR}>
          {BUSINESS_NAME}
        </AuthFooterRightBusiness>
        <a href={'#'}>{BUSINESS_ADDRESS}</a>
        <br />
        <a href={'tel:842437831800'}>{PHONE1}</a>
        <br />
        <a href={'tel:842437831734'}>{PHONE2}</a>
      </AuthFooterRight>
    </AuthFooterWrapper>
  )
}

AuthFooter.propTypes = {}

export default AuthFooter