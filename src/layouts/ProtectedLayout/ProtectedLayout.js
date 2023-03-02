import React from 'react'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { ProtectedLayoutContent, ProtectedLayoutWrapper } from './ProtectedLayoutStyled'

const ProtectedLayout = props => {
  // region props, hook, state =================

  const location = useLocation()
  const params = useParams()
  const { state } = location
  const navigate = useNavigate()
  // endregion
  // region destructuring ======================

  // endregion
  // region variable ===========================

  // endregion
  // region function handle logic ==============

  // endregion

  return (
    <ProtectedLayoutWrapper>
      <ProtectedLayoutContent>
        <Outlet/>
      </ProtectedLayoutContent>
    </ProtectedLayoutWrapper>

  )
}

ProtectedLayout.propTypes = {}

export default ProtectedLayout
