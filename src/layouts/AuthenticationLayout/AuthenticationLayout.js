import React from 'react'
import { Outlet } from 'react-router-dom'
import { AuthenticationLayoutWrapper } from './AuthenticationLayoutStyled'
import AuthHeader from '../../components/AuthHeader'
import AuthBody from '../../components/AuthBody'
import AuthFooter from '../../components/AuthFooter'

const AuthenticationLayout = props => {
  // region props, hook, state =================

  // endregion
  // region destructuring ======================

  // endregion
  // region variable ===========================

  // endregion
  // region function handle logic ==============

  // endregion
  // region function render ====================

  // endregion
  // region side effect ========================

  // endregion

  return (
    <AuthenticationLayoutWrapper>
      <AuthHeader />
      <AuthBody>
        <Outlet />
      </AuthBody>
      <AuthFooter />
    </AuthenticationLayoutWrapper>
  )
}

AuthenticationLayout.propTypes = {}

export default AuthenticationLayout