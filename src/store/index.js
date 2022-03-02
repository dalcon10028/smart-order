import { createStore } from 'vuex';
import userModule from './user';

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user: userModule,
  },
});
