import { userLogin } from '@/api';
import { FETCH_ACCESS_TOKEN } from './mutation-type';

export default {
  state: () => ({
    username: '',
    nickname: '',
    email: '',
    phone: '',
    accessToken: '',
  }),
  getters: {
    isLogin(state) {
      return !!state.accessToken;
    },
  },
  mutations: {
    [FETCH_ACCESS_TOKEN](state, accessToken) {
      state.accessToken = accessToken;
    },
  },
  actions: {
    async userLogin({ commit }, loginForm) {
      const { access_token: accessToken } = await userLogin(loginForm);
      commit(FETCH_ACCESS_TOKEN, accessToken);
    },
  },
};
