import React from 'react'
import { HomePageWrapper } from './HomePageStyled'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '../../hooks/useQuery'

const HomePage = props => {
  // region props, hook, state =================
  const query = useQuery()
  const navigate = useNavigate()
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
    <HomePageWrapper>
      Home
    </HomePageWrapper>
  )
}

HomePage.propTypes = {}

export default HomePage
