import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.VUE_APP_TALING_API,
  headers: {
    authorization: `Basic ${process.env.VUE_APP_TALING_BASIC_AUTH_TOKEN}`,
  },
});

const createAuthInstance = () => {
  return instance;
};

export const authInstance = createAuthInstance();
