import { atom, selector } from 'recoil'
import { localStorageEffect } from './recoilHelper'
import stringUtils from '../utils/stringUtils'

export const accessTokenState = atom({
  key: 'accessTokenState',
  default: null,
  effects: [
    localStorageEffect('accessTokenState'),
  ],
})
export const refreshTokenState = atom({
  key: 'refreshTokenState',
  default: null,
  effects: [
    localStorageEffect('refreshTokenState'),
  ],
})
export const tokenKeyState = atom({
  key: 'tokenKeyState',
  default: null,
  effects: [
    localStorageEffect('tokenKeyState'),
  ],
})
export const extendDataState = atom({
  key: 'extendDataState',
  default: null,
  effects: [
    localStorageEffect('extendDataState'),
  ],
})
export const jwtDecodeState = selector({
  key: 'jwtDecodeState',
  get: ({ get }) => {
    const accessToken = get(accessTokenState)
    return stringUtils.jwtDecode(accessToken)
  },
})