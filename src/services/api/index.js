import axios from 'axios';

import endpoints from './endpoints';

export const login = ({ username, password }) => axios({
  method: 'POST',
  url: endpoints.LOGIN,
  auth: { username, password }
});

export const getAdmins = () => axios({
  method: 'GET',
  url: endpoints.GET_ADMINS,
});
