import React, { useState, useEffect } from 'react'
import { Button, Col, Form, Input, notification, Row } from 'antd'
import { FormLoginWrapper, LoginDescription, LoginPageWrapper, LoginTitle } from './LoginPageStyled'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import ConditionDisplay from '../../components/ConditionDisplay'
import { ColorLink, RowCenterDiv } from '../../components/CommonStyled/CommonStyled'

const APP_THEME = require('../../theme')
import ReCAPTCHA from 'react-google-recaptcha'
import config from '../../config'
import { useLocation, useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { appLoadingState } from '../../recoil/commonState'
import { APP_CLIENT_ID, RESPONSE_CODE, PAGES } from '../../constant'
import OtpModal from '../../components/OtpModal'
import authenticationStore from '../../stores/authenticationStore'


const LoginPage = props => {
  // region props, hook, state =================
  const [formLogin] = Form.useForm()
  const navigate = useNavigate()
  const location = useLocation()
  const [visibleOtp, setVisibleOtp] = useState(false)
  const [currPayload, setCurrPayload] = useState({})
  const [extendData, setExtendData] = useState('')
  const [numberLoginFail, setNumberLoginFail] = useState(0)
  const [capChaValue, setCapChaValue] = useState(null)

  const appLoading = useRecoilValue(appLoadingState)
  // endregion
  // region destructuring ======================

  // endregion
  // region variable ===========================

  // endregion
  // region function handle logic ==============
  const onFinish = (formCollection) => {
    console.log(formCollection)
    if (appLoading) return
    if (numberLoginFail >= 2 && !capChaValue) {
      notification.error({
        message: <ColorText fontSize={'20px'} color={APP_THEME.ERROR_COLOR}>{'Thông báo'}</ColorText>,
        description: 'Bạn chưa tích capcha',
      })
      return
    }

    let payload = {
      // ExtendData: '',
      // ActiveCode: '',
      UserName: formCollection.userName,
      Password: formCollection.password,
      ClientId: APP_CLIENT_ID,
    }

    authenticationStore.userLogin(payload)
      .then(res => {
        switch (res?.responseCode) {
          case RESPONSE_CODE.SUCCESS:
            navigate((location?.state?.from && location?.state?.from !== PAGES.LOGIN.PATH) ? location?.state?.from : PAGES.HOME.PATH)
            break
          case -10021:
            payload.Description = res?.description
            setCurrPayload(payload)
            setVisibleOtp(true)
            setExtendData(res?.extendData)
            break
          case -53:
            setNumberLoginFail(numberLoginFail + 1)
            break
          default:
            setNumberLoginFail(numberLoginFail + 1)
            break
        }
      })
  }
  const onChange = (value) => {
    setCapChaValue(value)
  }
  const handleSubmitOtp = (otp) => {
    let payload = {
      ExtendData: extendData,
      OTP: otp,
      UserName: currPayload.UserName,
      Password: currPayload.Password,
      ClientId: APP_CLIENT_ID,
    }
    authenticationStore.activeDevice(payload)
      .then(res => {
        switch (res?.responseCode) {
          case RESPONSE_CODE.SUCCESS:
            setCurrPayload({})
            setExtendData('')
            history.push((location?.state?.from && location?.state?.from !== PAGES.LOGIN.PATH) ? location?.state?.from : PAGES.HOME.PATH)
            break
          case -53:
            setNumberLoginFail(numberLoginFail + 1)
            setVisibleOtp(false)
            setCurrPayload({})
            setExtendData('')
            formLogin.resetFields()
            break
          case -10105:
          case -1:
          case -10015:
            setNumberLoginFail(numberLoginFail + 1)
            setVisibleOtp(false)
            setCurrPayload({})
            setExtendData('')
            formLogin.resetFields()
            break
          default:
            setNumberLoginFail(numberLoginFail + 1)
            break
        }
      })
  }
  const handleCancelOtp = () => {
    setVisibleOtp(false)
    setCurrPayload({})
    setExtendData('')
  }
  // endregion
  // region function render ====================

  // endregion
  // region side effect ========================

  // endregion
  return (
    <>
      <LoginPageWrapper>
        <LoginTitle color={APP_THEME.PRIMARY_COLOR}>CMS MobiFone Money</LoginTitle>
        <LoginDescription>Đăng nhập hệ thống quản lý MobiFone Money</LoginDescription>
        <FormLoginWrapper>
          <Form form={formLogin}
                onFinish={onFinish}
                size={'large'}
                colon={false}
                labelAlign={'left'}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}>
            <Form.Item
              label={'Tên đăng nhập'}
              name={'userName'}
              rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập' }]}
            >
              <Input maxLength={30} showCount prefix={<UserOutlined />} placeholder={'Tên đăng nhập'} />
            </Form.Item>
            <Form.Item
              label={'Mật khẩu'}
              name={'password'}
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder={'Mật khẩu'} />
            </Form.Item>
            <ConditionDisplay visible={numberLoginFail >= 2}>
              <RowCenterDiv margin={'0 0 16px 0'}>
                <ReCAPTCHA
                  sitekey={config.recapchaSitekey}
                  onChange={onChange}
                />
              </RowCenterDiv>
            </ConditionDisplay>

            <Row gutter={[16, 16]} justify='center'>
              <Col span={12}>
                <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                  <ColorLink
                    color={APP_THEME.PRIMARY_COLOR}
                    to={'#'}>
                    Quên mật khẩu ?
                  </ColorLink>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Button block type={'primary'} htmlType={'submit'}>Đăng nhập</Button>
              </Col>
            </Row>
          </Form>
        </FormLoginWrapper>
        <OtpModal
          phoneNumber={''}
          description={currPayload.Description}
          visible={visibleOtp}
          onCancel={handleCancelOtp}
          callbackOtp={handleSubmitOtp} />
      </LoginPageWrapper>
    </>
  )
}

LoginPage.propTypes = {}

export default LoginPage