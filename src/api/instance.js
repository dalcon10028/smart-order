import axios from 'axios';
import store from '@/store';

function setInterceptors(instance) {
  instance.interceptors.request.use(oldConfig => {
    const newConfig = oldConfig;
    newConfig.headers.Authorization = `Bearer ${store.state.user.accessToken}`;
    return newConfig;
  });

  return instance;
}

const createInstance = () =>
  axios.create({
    baseURL: process.env.VUE_APP_TALING_API,
    auth: {
      username: process.env.VUE_APP_TALING_CLIENT_ID,
      password: process.env.VUE_APP_TALING_CLIENT_SECRET,
    },
  });

const createAuthInstance = () => {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_TALING_API,
  });
  return setInterceptors(instance);
};

export const instance = createInstance();
export const authInstance = createAuthInstance();
