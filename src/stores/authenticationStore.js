import request from '../requests/request'
import { setRecoil } from 'recoil-nexus'
import { RESPONSE_CODE } from '../constant'
import { accessTokenState, extendDataState, refreshTokenState, tokenKeyState } from '../recoil/authenticationState'

const authenticationStore = {
  userLogin: (payload) => {
    return new Promise((resolve, reject) => {
      const url = '/TransferExtendDataForLoginCMSWebsite'
      request.post(url, payload, false, false,false)
        .then(res => {
          if (res.data?.responseCode === RESPONSE_CODE.SUCCESS) {
            let param = res.data?.param
            setRecoil(accessTokenState,param?.token)
            setRecoil(refreshTokenState,param?.refreshToken)
            setRecoil(tokenKeyState,param?.tokenKey)
            setRecoil(extendDataState,res.data?.extendData)
          }
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  activeDevice: (payload) => {
    return new Promise((resolve, reject) => {
      const url = '/LoginForCMSWebsite'
      request.post(url, payload, false, false)
        .then(res => {
          if (res.data?.responseCode === RESPONSE_CODE.SUCCESS) {
            let param = res.data?.param
            setRecoil(accessTokenState,param?.token)
            setRecoil(refreshTokenState,param?.refreshToken)
            setRecoil(tokenKeyState,param?.tokenKey)
            setRecoil(extendDataState,res.data?.extendData)
          }
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

}
export default authenticationStore