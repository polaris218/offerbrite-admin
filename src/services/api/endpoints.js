import API_URL from 'services/config';

export default {
  CREATE_NEW_ADMIN: `${API_URL}/users/admin`,
  LOGIN: `${API_URL}/auth/login`,

  CHECK_REFRESH: `${API_URL}/auth/check-refresh`,
  CHECK_ACCESS: `${API_URL}/auth/check-access`,
  GET_ACCESS_TOKEN: `${API_URL}/auth/token`,

  GET_ADMINS: `${API_URL}/users/admin/all`,

  CHECK_HEALTH: `${API_URL}/health-check`,
};
