import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { ProtectedLayoutWrapper } from './ProtectedLayoutStyled'
import { useLocation } from 'react-router-dom'
import { PAGES } from '../../utils/constant'
import MainHeader from '../../components/MainHeader'
import MainContent from '../../components/MainContent/MainContent'
import MainSideBar from '../../components/MainSideBar'
import MainBody from '../../components/MainBody'
import MainFooter from '../../components/MainFooter'
import { useSetRecoilState } from 'recoil'
import { pageNameState } from '../../recoil/commonState'

const APP_THEME = require('../../theme')

const ProtectedLayout = props => {
  // region props, hook, state
  const { children } = props
  const location = useLocation()
  const setPageName = useSetRecoilState(pageNameState)

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
  useEffect(() => {
    console.log('location.pathname', location.pathname)
    const segment = location.pathname.split(PAGES.HOME.PATH).filter(item => item !== '')
    if (segment.length === 0) {
      setPageName('home')
    } else {
      setPageName(segment[0])
    }
  }, [location.pathname])
  // endregion

  return (
    <ProtectedLayoutWrapper color={APP_THEME.PRIMARY_COLOR}>
      <MainHeader />
      <MainContent>
        <MainSideBar />
        <MainBody>
          {children}
          <MainFooter />
        </MainBody>
      </MainContent>
    </ProtectedLayoutWrapper>
  )
}

ProtectedLayout.propTypes = {}

export default ProtectedLayout