import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.VUE_APP_TALING_API,
  auth: {
    username: process.env.VUE_APP_TALING_CLIENT_ID,
    password: process.env.VUE_APP_TALING_CLIENT_SECRET,
  },
});

const createAuthInstance = () => {
  return instance;
};

export const authInstance = createAuthInstance();
