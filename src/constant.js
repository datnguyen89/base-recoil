// region Website config
export const APP_CLIENT_ID = 5
export const LONG_DATE = 'DD-MM-YYYY HH:mm'
export const PAGES = {
  LOGIN: '/login',
  HOME: '/',
  REPORTSUMCALLBYPROVIDER: '/report-sum-call-provider'
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

export const PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAskgPKBcNpz71mi4NSYa5
    mazJrO0WZim7T2yy7qPxk2NqQE7OmWWakLJcaeUYnI0kO3yC57vck66RPCjKxWuW
    SGZ7dHXe0bWb5IXjcT4mNdnUIalR+lV8czsoH/wDUvkQdG1SJ+IxzW64WvoaCRZ+
    /4wBF2cSUh9oLwGEXiodUJ9oJXFZVPKGCEjPcBI0vC2ADBRmVQ1sKsZg8zbHN+gu
    U9rPLFzN4YNrCnEsSezVw/W1FKVS8J/Xx4HSSg7AyVwniz8eHi0e3a8VzFg+H09I
    5wK+w39sjDYfAdnJUkr6PjtSbN4/Sg/NMkKB2Ngn8oj7LCfe/7RNqIdiS+dQuSFg
    eQIDAQAB
    -----END PUBLIC KEY-----`
// endregion
