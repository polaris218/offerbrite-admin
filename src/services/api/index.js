import axios from 'axios';

import endpoints from './endpoints';



export const createNewAdmin = data => axios({
  method: 'POST',
  url: endpoints.CREATE_NEW_ADMIN,
  data,
});

export const login = ({ email, password }) => axios({
  method: 'POST',
  url: endpoints.LOGIN,
  auth: { username: email, password }
});

export const getAdmins = () => axios({
  method: 'GET',
  url: endpoints.GET_ADMINS,
});
