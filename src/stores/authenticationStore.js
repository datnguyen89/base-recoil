import request from '../requests/request'
import { setRecoil } from 'recoil-nexus'

const authenticationStore = {
  userLogin: (payload) => {
    return new Promise((resolve, reject) => {
      const url = '/TransferExtendDataForLoginCMSWebsite'
      request.post(url, payload, false, false)
        .then(res => {
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
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

}
export default authenticationStore