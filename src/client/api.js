let _API = 'https://sandbox-reporting.rpdpymnt.com/api/v3/';
if (process.env && process.env.REACT_APP_DEV_API_URL && process.env.NODE_ENV === 'development') {
  _API = process.env.REACT_APP_DEV_API_URL
}

export const API                        = _API;
export const LOGIN                      = `${ API }merchant/user/login`;
export const TRANSACTIONS_REPORT        = `${ API }transactions/report`;
export const TRANSACTIONS_LIST          = `${ API }transactions/list`;
export const INFORMATION_OR_TRANSACTION = `${ API }transaction`;
export const CLIENT                     = `${ API }client`;