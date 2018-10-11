let api = 'https://sandbox-reporting.rpdpymnt.com/api/v3';
if (
  process.env &&
  process.env.REACT_APP_DEVELOPMENT_API &&
  process.env.NODE_ENV === 'development'
) {
  api = process.env.REACT_APP_DEVELOPMENT_API;
}

export const API = api;
export const LOGIN = `${API}/merchant/user/login`;
export const TRANSACTIONS_REPORT = `${API}/transactions/report`;
export const TRANSACTIONS_LIST = `${API}/transaction/list`;
export const INFORMATION_OR_TRANSACTION = `${API}/transaction`;
export const CLIENT = `${API}/client`;
