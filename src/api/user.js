import { instance } from './instance';

export default {
  createUser(joinForm) {
    return instance.post('/join', joinForm);
  },
  userLogin(loginForm) {
    const urlencoded = new URLSearchParams();
    urlencoded.append('grant_type', 'password');
    Object.entries(loginForm).forEach(([key, value]) => urlencoded.append(key, value));

    return instance.post('/login', urlencoded, {
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    });
  },
  fetchUserInfo() {
    return instance.get('/info');
  },
};
