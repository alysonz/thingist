import { makeDuck } from 'cooldux';
import config from '../config';

const auth = makeDuck({
  login: body => fetch(`${config.API_URL}/auth/login`, { method: 'GET', body }),
  logout: body => fetch(`${config.API_URL}/auth/logout`, { method: 'GET', body }),
});

export const {
  login,
  logout,
} = auth;

export default auth.reducerCombined;
