// region Website config
export const APP_CLIENT_ID = 5
export const LONG_DATE = 'DD-MM-YYYY HH:mm'
export const PAGES = {
  LOGIN: '/login',
  HOME: '/',
}
export const METHOD_CODE = {
  WALLET: 'MBFWALLET',
  DOMESTIC: 'MBFBANK',
  INTERNATIONAL: 'INTCARD',
}
export const RESPONSE_CODE = {
  SUCCESS: 1, // Thành công
  PENDING: 0, // Giao dịch treo
  BILL_INVALID: -2,
  CREATE_ORDER_FAIL: -5, // tạo đơn hàng thất bại
  MERCHANT_INACTIVE: -7, // merchant không hoạt động
  REQUIRE_CONFIRM_BANK: -100303, // yêu cầu otp bank
  INVALID_OTP: -10015, // sai otp được nhập lại
}
export const OS_NAME = {
  IOS: 'iOS',
  ANDROID: 'Android',
}
export const BUSINESS_NAME = 'Tổng công ty Viễn Thông MobiFone'
export const BUSINESS_ADDRESS = 'Số 01 phố Phạm Văn Bạch, Yên Hòa, Cầu Giấy, Hà Nội'
export const PHONE1 = '(+84-24) 3783 1800'
export const PHONE2 = '(+84-24) 3783 1734'
// endregion
