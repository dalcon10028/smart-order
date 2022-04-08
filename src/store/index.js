import { createStore } from 'vuex';
import userModule from './user';
import cartModule from './cart';

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user: userModule,
    cart: cartModule,
  },
});
