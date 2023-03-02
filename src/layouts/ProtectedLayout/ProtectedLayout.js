import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { ProtectedLayoutWrapper } from './ProtectedLayoutStyled'
import { useLocation } from 'react-router-dom'
import { PAGES } from '../../utils/constant'
import MainHeader from '../../components/MainHeader'
import MainContent from '../../components/MainContent/MainContent'
import MainSideBar from '../../components/MainSideBar'
import MainBody from '../../components/MainBody'
import MainFooter from '../../components/MainFooter'

const ProtectedLayout = props => {
    // region props, hook, state
    const { children, commonStore } = props
    const location = useLocation()

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
        console.log('location.pathname',location.pathname)
        const segment = location.pathname.split(PAGES.HOME.PATH).filter(item => item !== '')
        if (segment.length === 0) {
            commonStore.setPageName('home')
        } else {
            commonStore.setPageName(segment[0])
        }
    }, [location.pathname])
    // endregion

    return (
        <ProtectedLayoutWrapper color={commonStore.appTheme.solidColor}>
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

export default inject('commonStore')(observer(ProtectedLayout))