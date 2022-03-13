import { OrderRepository } from '@/api';
import { UPDATE_ORDER_LIST, UPDATE_AMOUNT_DUE, CLEAR_ORDER } from './mutation-type';

export default {
  namespaced: true,
  state: () => ({
    orderList: [],
    amountDue: 0,
  }),
  mutations: {
    [UPDATE_ORDER_LIST](state, orderList) {
      state.orderList = orderList;
    },
    [UPDATE_AMOUNT_DUE](state, amountDue) {
      state.amountDue = amountDue;
    },
    [CLEAR_ORDER](state) {
      state.orderList = [];
      state.amountDue = 0;
    },
  },
  actions: {
    async order({ commit }) {
      await OrderRepository.order();
      commit(CLEAR_ORDER);
    },
  },
};
