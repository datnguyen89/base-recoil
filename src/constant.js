// region Website config

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
export const PAYMENT_RESULT_STATUS = {
  SUCCESS: 'SUCCESS',
  PENDING: 'PENDING',
  ERROR: 'ERROR',
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
export const BANK_TYPE = {
  DOMESTIC: 1,
  INTERNATIONAL: 2,
}
export const REQUIRE_FIELD = {
  BANK_ACCOUNT_NAME: 'bankAccountName', // Tên chủ thẻ
  BANK_ACCOUNT: 'bankAccount', // Số thẻ hoặc số tài khoản
  ISSUE_DATE: 'issueDate', // Ngày hiệu lực
  CUST_LEGAL_ID: 'custLegalID'
}
export const REQUIRE_FIELD_TYPES = {
  REQUIRE_FIELD: 'requireField', // ATM
  REQUIRE_FIELD_BANK_ACCOUNT: 'requireFieldBankAccount', // Internet banking
}
export const OS_NAME = {
  IOS: 'iOS',
  ANDROID:'Android'
}
// endregion
