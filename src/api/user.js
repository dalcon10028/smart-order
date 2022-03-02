import { instance } from './instance';

export const createUser = joinForm => instance.post('/join', joinForm);

export const userLogin = loginForm => {
  const urlencoded = new URLSearchParams();
  urlencoded.append('grant_type', 'password');
  Object.entries(loginForm).forEach(([key, value]) => urlencoded.append(key, value));

  return instance.post('/login', urlencoded, {
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
  });
};

export const fetchUserInfo = () => instance.get('/info');
