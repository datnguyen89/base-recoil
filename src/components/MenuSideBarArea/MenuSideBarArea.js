import React from 'react'
import { inject, observer } from 'mobx-react'
import { MenuSidebarAreaWrapper } from './MenuSideBarAreaStyled'
import { GroupMenuTitle, MenuSidebarItem, MenuSideBarTitle } from '../CommonStyled/CommonStyled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faStamp, faUserTie, faAddressBook, faStore, faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { PAGES, ROLES } from '../../utils/constant'
import { BankOutlined, ExceptionOutlined, InsertRowLeftOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

const MenuSideBarArea = props => {
  // region props, hook, state
  const { commonStore, authenticationStore } = props
  const history = useHistory()

  // endregion
  // region destructuring
  const { appTheme, pageName } = commonStore

  // endregion
  // region variable

  // endregion
  // region function handle logic
  const handleClickMenu = (path) => {
    history.push(path)
  }
  // endregion
  // region function render

  // endregion
  // region side effect

  // endregion


  return (
    <MenuSidebarAreaWrapper>
      <GroupMenuTitle textAlign={commonStore.isCollapse ? 'center' : 'left'}>
        {commonStore.isCollapse
          ? <FontAwesomeIcon size={'lg'} color={'#6634E0'} icon={faBuilding} />
          : 'Quản lý doanh nghiệp'}
      </GroupMenuTitle>
      <MenuSidebarItem
        onClick={() => handleClickMenu(PAGES.BUSINESS_MANAGER.PATH)}
        className={pageName === PAGES.BUSINESS_MANAGER.NAME ? 'active' : ''}
        color={appTheme.solidColor}>
        <InsertRowLeftOutlined />
        <MenuSideBarTitle isCollapse={commonStore.isCollapse}>Tra cứu DN</MenuSideBarTitle>
      </MenuSidebarItem>
      {
        authenticationStore.checkRole(ROLES.INITORG) &&
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.BUSINESS_PROFILE_MANAGER.PATH)}
          className={pageName === PAGES.BUSINESS_PROFILE_MANAGER.NAME ? 'active' : ''}
          color={appTheme.solidColor}>
          <FontAwesomeIcon icon={faUserTie} />
          <MenuSideBarTitle isCollapse={commonStore.isCollapse}>Hồ sơ doanh nghiệp</MenuSideBarTitle>
        </MenuSidebarItem>
      }
      {
        authenticationStore.checkMultipleRole([
          ROLES.INITORGUSER,
          ROLES.APPROVEORGUSER,
        ]) &&
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.BUSINESS_USER_MANAGER.PATH)}
          className={pageName === PAGES.BUSINESS_USER_MANAGER.NAME ? 'active' : ''}
          color={appTheme.solidColor}>
          <UsergroupAddOutlined />
          <MenuSideBarTitle isCollapse={commonStore.isCollapse}>User doanh nghiệp</MenuSideBarTitle>
        </MenuSidebarItem>
      }

      {
        authenticationStore.checkRole(ROLES.DEPARTMENTMGMT) &&
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.BUSINESS_DEPARTMENT_MANAGER.PATH)}
          className={pageName === PAGES.BUSINESS_DEPARTMENT_MANAGER.NAME ? 'active' : ''}
          color={appTheme.solidColor}>
          <BankOutlined />
          <MenuSideBarTitle isCollapse={commonStore.isCollapse}>Phòng ban DN</MenuSideBarTitle>
        </MenuSidebarItem>
      }
      {
        authenticationStore.checkMultipleRole([
          ROLES.APPROVEORG,
          ROLES.APPROVEORGUSER,
        ]) &&
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.BUSINESS_APPROVE_MANAGER.PATH)}
          className={pageName === PAGES.BUSINESS_APPROVE_MANAGER.NAME ? 'active' : ''}
          color={appTheme.solidColor}>
          <FontAwesomeIcon icon={faStamp} />
          <MenuSideBarTitle isCollapse={commonStore.isCollapse}>Duyệt thông tin DN</MenuSideBarTitle>
        </MenuSidebarItem>
      }
      {
        authenticationStore.checkRole(ROLES.STATEMENTREPORT) &&
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.REPORT_STATEMENT.PATH)}
          className={pageName === PAGES.REPORT_STATEMENT.NAME ? 'active' : ''}
          color={appTheme.solidColor}>
          <ExceptionOutlined />
          <MenuSideBarTitle isCollapse={commonStore.isCollapse}>Báo cáo sao kê</MenuSideBarTitle>
        </MenuSidebarItem>
      }
      {
        authenticationStore.checkMultipleRole([
          ROLES.INITMERCHANT,
          ROLES.INITMERCHANTUSER,
          ROLES.APPROVEMERCHANT,
          ROLES.APPROVEMERCHANTUSER,
        ]) &&
        <GroupMenuTitle textAlign={commonStore.isCollapse ? 'center' : 'left'}>
          {commonStore.isCollapse
            ? <FontAwesomeIcon size={'lg'} color={'#6634E0'} icon={faStore} />
            : 'Quản lý merchant'}
        </GroupMenuTitle>
      }
      {
        authenticationStore.checkMultipleRole([
          ROLES.INITMERCHANT,
          ROLES.INITMERCHANTUSER,
        ]) &&
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.MERCHANT_PROFILE.PATH)}
          className={pageName === PAGES.MERCHANT_PROFILE.NAME ? 'active' : ''}
          color={appTheme.solidColor}>
          <FontAwesomeIcon icon={faAddressBook} />
          <MenuSideBarTitle isCollapse={commonStore.isCollapse}>Hồ sơ merchant</MenuSideBarTitle>
        </MenuSidebarItem>
      }
      {
        authenticationStore.checkMultipleRole([
          ROLES.APPROVEMERCHANT,
          ROLES.APPROVEMERCHANTUSER,
        ]) &&
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.APPROVE_MERCHANT.PATH)}
          className={pageName === PAGES.APPROVE_MERCHANT.NAME ? 'active' : ''}
          color={appTheme.solidColor}>
          <FontAwesomeIcon icon={faStamp} />
          <MenuSideBarTitle isCollapse={commonStore.isCollapse}>Duyệt thông tin merchant</MenuSideBarTitle>
        </MenuSidebarItem>
      }

      {
        authenticationStore.checkMultipleRole([ROLES.INTEGRATEMERCHANT, ROLES.VIEWINTEMERCHANT]) &&
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.MANAGER_MERCHANT.PATH)}
          className={pageName === PAGES.MANAGER_MERCHANT.NAME ? 'active' : ''}
          color={appTheme.solidColor}>
          <FontAwesomeIcon icon={faSlidersH} />
          <MenuSideBarTitle isCollapse={commonStore.isCollapse}>Quản lý tích hợp</MenuSideBarTitle>
        </MenuSidebarItem>
      }


    </MenuSidebarAreaWrapper>
  )
}

MenuSideBarArea.propTypes = {}

export default inject('commonStore', 'authenticationStore')(observer(MenuSideBarArea))