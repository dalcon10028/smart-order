import { UserRepository } from '@/api';
import { FETCH_ACCESS_TOKEN, FETCH_USER_INFO } from './mutation-type';

export default {
  namespaced: true,
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
    [FETCH_USER_INFO](state, userInfo) {
      state.username = userInfo.username;
      state.nickname = userInfo.nickname;
      state.email = userInfo.email;
      state.phone = userInfo.phone;
    },
  },
  actions: {
    async fetchUserInfo({ commit }) {
      const { data } = await UserRepository.fetchUserInfo();
      commit(FETCH_USER_INFO, data);
    },
    async userLogin({ commit, dispatch }, loginForm) {
      const { data } = await UserRepository.userLogin(loginForm);
      commit(FETCH_ACCESS_TOKEN, data.access_token);
      await dispatch('fetchUserInfo');
    },
  },
};
