import React from 'react'
import { MenuSidebarAreaWrapper } from './MenuSideBarAreaStyled'
import { GroupMenuTitle, MenuSidebarItem, MenuSideBarTitle } from '../CommonStyled/CommonStyled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faStamp, faUserTie, faAddressBook, faStore, faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { PAGES, ROLES } from '../../utils/constant'
import { BankOutlined, ExceptionOutlined, InsertRowLeftOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { collapsedState, pageNameState } from '../../recoil/commonState'
const APP_THEME = require('../../theme')

const MenuSideBarArea = props => {
  // region props, hook, state
  const history = useNavigate()
  const isCollapse = useRecoilValue(collapsedState)
  const pageName = useRecoilValue(pageNameState)

  // endregion
  // region destructuring

  // endregion
  // region variable

  // endregion
  // region function handle logic
  const handleClickMenu = (path) => {
    history(path)
  }
  // endregion
  // region function render

  // endregion
  // region side effect

  // endregion


  return (
    <MenuSidebarAreaWrapper>
      <GroupMenuTitle textAlign={isCollapse ? 'center' : 'left'}>
        {isCollapse
          ? <FontAwesomeIcon size={'lg'} color={'#6634E0'} icon={faBuilding} />
          : 'Quản lý doanh nghiệp'}
      </GroupMenuTitle>
      <MenuSidebarItem
        onClick={() => handleClickMenu(PAGES.BUSINESS_MANAGER.PATH)}
        className={pageName === PAGES.BUSINESS_MANAGER.NAME ? 'active' : ''}
        color={APP_THEME.PRIMARY_COLOR}>
        <InsertRowLeftOutlined />
        <MenuSideBarTitle isCollapse={isCollapse}>Tra cứu DN</MenuSideBarTitle>
      </MenuSidebarItem>
      <MenuSidebarItem
        onClick={() => handleClickMenu(PAGES.BUSINESS_PROFILE_MANAGER.PATH)}
        className={pageName === PAGES.BUSINESS_PROFILE_MANAGER.NAME ? 'active' : ''}
        color={APP_THEME.PRIMARY_COLOR}>
        <FontAwesomeIcon icon={faUserTie} />
        <MenuSideBarTitle isCollapse={isCollapse}>Hồ sơ doanh nghiệp</MenuSideBarTitle>
      </MenuSidebarItem>
      <MenuSidebarItem
        onClick={() => handleClickMenu(PAGES.BUSINESS_USER_MANAGER.PATH)}
        className={pageName === PAGES.BUSINESS_USER_MANAGER.NAME ? 'active' : ''}
        color={APP_THEME.PRIMARY_COLOR}>
        <UsergroupAddOutlined />
        <MenuSideBarTitle isCollapse={isCollapse}>User doanh nghiệp</MenuSideBarTitle>
      </MenuSidebarItem>

      <MenuSidebarItem
        onClick={() => handleClickMenu(PAGES.BUSINESS_DEPARTMENT_MANAGER.PATH)}
        className={pageName === PAGES.BUSINESS_DEPARTMENT_MANAGER.NAME ? 'active' : ''}
        color={APP_THEME.PRIMARY_COLOR}>
        <BankOutlined />
        <MenuSideBarTitle isCollapse={isCollapse}>Phòng ban DN</MenuSideBarTitle>
      </MenuSidebarItem>
      <MenuSidebarItem
        onClick={() => handleClickMenu(PAGES.BUSINESS_APPROVE_MANAGER.PATH)}
        className={pageName === PAGES.BUSINESS_APPROVE_MANAGER.NAME ? 'active' : ''}
        color={APP_THEME.PRIMARY_COLOR}>
        <FontAwesomeIcon icon={faStamp} />
        <MenuSideBarTitle isCollapse={isCollapse}>Duyệt thông tin DN</MenuSideBarTitle>
      </MenuSidebarItem>
      <MenuSidebarItem
        onClick={() => handleClickMenu(PAGES.REPORT_STATEMENT.PATH)}
        className={pageName === PAGES.REPORT_STATEMENT.NAME ? 'active' : ''}
        color={APP_THEME.PRIMARY_COLOR}>
        <ExceptionOutlined />
        <MenuSideBarTitle isCollapse={isCollapse}>Báo cáo sao kê</MenuSideBarTitle>
      </MenuSidebarItem>
      <GroupMenuTitle textAlign={isCollapse ? 'center' : 'left'}>
        {isCollapse
          ? <FontAwesomeIcon size={'lg'} color={'#6634E0'} icon={faStore} />
          : 'Quản lý merchant'}
      </GroupMenuTitle>
      <MenuSidebarItem
        onClick={() => handleClickMenu(PAGES.MERCHANT_PROFILE.PATH)}
        className={pageName === PAGES.MERCHANT_PROFILE.NAME ? 'active' : ''}
        color={APP_THEME.PRIMARY_COLOR}>
        <FontAwesomeIcon icon={faAddressBook} />
        <MenuSideBarTitle isCollapse={isCollapse}>Hồ sơ merchant</MenuSideBarTitle>
      </MenuSidebarItem>
      <MenuSidebarItem
        onClick={() => handleClickMenu(PAGES.APPROVE_MERCHANT.PATH)}
        className={pageName === PAGES.APPROVE_MERCHANT.NAME ? 'active' : ''}
        color={APP_THEME.PRIMARY_COLOR}>
        <FontAwesomeIcon icon={faStamp} />
        <MenuSideBarTitle isCollapse={isCollapse}>Duyệt thông tin merchant</MenuSideBarTitle>
      </MenuSidebarItem>

      <MenuSidebarItem
        onClick={() => handleClickMenu(PAGES.MANAGER_MERCHANT.PATH)}
        className={pageName === PAGES.MANAGER_MERCHANT.NAME ? 'active' : ''}
        color={APP_THEME.PRIMARY_COLOR}>
        <FontAwesomeIcon icon={faSlidersH} />
        <MenuSideBarTitle isCollapse={isCollapse}>Quản lý tích hợp</MenuSideBarTitle>
      </MenuSidebarItem>


    </MenuSidebarAreaWrapper>
  )
}

MenuSideBarArea.propTypes = {}

export default MenuSideBarArea