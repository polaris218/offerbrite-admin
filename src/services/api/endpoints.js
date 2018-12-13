import API_URL from 'services/config';

export default {
  CREATE_NEW_ADMIN: `${API_URL}/users/admin`,
  LOGIN: `${API_URL}/auth/login`,

  CHECK_REFRESH: `${API_URL}/auth/check-refresh`,
  CHECK_ACCESS: `${API_URL}/auth/check-access`,
  GET_ACCESS_TOKEN: `${API_URL}/auth/token`,

  GET_USERS: `${API_URL}/users/admin/allUsers`,
  DELETE_USER: userId => `${API_URL}/users/admin/users/${userId}`,
  UPDATE_USER: userId => `${API_URL}/users/admin/users/${userId}`,

  GET_COMPANIES: `${API_URL}/users/admin/allBusinessUsers`,
  GET_BUSINESS_BY_ID: businessId => `${API_URL}/users/admin/business/${businessId}`,
  DELETE_COMPANY: businessUserId => `${API_URL}/users/admin/businessUsers/${businessUserId}`,
  UPDATE_COMPANY: businessUserId => `${API_URL}/users/admin/businessUsers/${businessUserId}`,

  GET_ADMINS: `${API_URL}/users/admin/all`,
  DELETE_ADMIN: `${API_URL}/users/admin`,
  UPDATE_ADMIN: `${API_URL}/users/admin`,

  GET_OFFERS: `${API_URL}/users/admin/allOffers`,
  DELETE_OFFER: offerId => `${API_URL}/users/admin/offer/${offerId}`,
  GET_OFFER_BY_ID: offerId => `${API_URL}/users/admin/offer/${offerId}`,
  UPDATE_OFFER: offerId => `${API_URL}/users/admin/offer/${offerId}`,

  GET_REPORTS: (limit, skip) => `${API_URL}/reports?limit=${limit}&skip=${skip}`,
  DELETE_REPORT: reportId => `${API_URL}/users/admin/reports/${reportId}`,

  GET_CATEGORIES: `${API_URL}/categories?all=true`,

  CHECK_HEALTH: `${API_URL}/health-check`,

  ANALYTICS_GET_SESSIONS: (startDate, endDate) => `${API_URL}/ga-report/sessionsGraph/${startDate}/${endDate}`,
};
